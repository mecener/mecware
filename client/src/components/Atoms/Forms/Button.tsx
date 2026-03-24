import styled from "styled-components";
import Block from "../../Primitives/Block";
import { Label } from "../../Primitives/Typography";
import { palette } from "@/style/colorPalette";
import { AnimatePresence as AP, motion as m } from "framer-motion";
import Loader from "../../Primitives/Loader";

interface ButtonProps {
	$fit?: boolean;
	$icon?: React.ReactNode;
	$iconPlacement?: "right" | "left";
	$isLoading?: boolean;
	onClick?: () => void;
	disabled?: boolean;
	children?: React.ReactNode;
}

const ButtonBase = styled(Block).attrs({ as: "button" })<ButtonProps>`
	${({ $fit }) => ($fit ? "flex: 1 1 auto" : "")};
	position: relative;
	height: 44px;

	box-shadow:
		inset 0 1px 0 0 ${palette.primary[200]},
		0 2px 0 0 ${palette.primary[900]};

	overflow: hidden;
	user-select: none;

	transition: 100ms;

	> svg {
		width: 14px;
		height: 14px;
	}

	> ${Label.M} {
		color: currentColor;
		display: inline-block;
		margin: ${({ $icon, $iconPlacement }) => {
			return $icon ? ($iconPlacement === "right" ? "0 8px 0 0" : "0 0 0 8px") : "";
		}};
	}

	${({ $isLoading }) => ($isLoading ? "pointer-events: none" : "")};

	&:disabled {
		color: ${palette.gray[300]};
		pointer-events: none;
		scale: 0.9;
	}

	@media (hover: hover) and (pointer: fine) {
		&:hover {
			box-shadow:
				inset 0 0px 0 0 ${palette.primary[200]},
				0 2px 0 0 ${palette.primary[900]};
		}
	}

	&:active {
		translate: 0 2px;
		box-shadow:
			inset 0 0px 0 0 ${palette.primary[200]},
			0 0px 0 0 ${palette.primary[900]};
	}
`;

interface ButtonVariantColor {
	default: {
		background: string;
		color: string;
	};
	hover: {
		background: string;
		color: string;
	};
	active: string;
	disabled: string;
	loader: {
		overlay: string;
		baseColor: string;
	};
}

const createButtonVariant = (colors: ButtonVariantColor) => {
	return styled(ButtonBase)`
		background-color: ${colors.default.background};
		color: ${colors.default.color};

		@media (hover: hover) and (pointer: fine) {
			&:hover {
				background-color: ${colors.hover.background};
				color: ${colors.hover.color};
			}
		}

		&:active {
			background-color: ${colors.active};
		}

		&:disabled {
			background-color: ${colors.disabled};
		}
	`;
};

const variantsConfig = {
	Primary: {
		default: {
			background: palette.primary[500],
			color: palette.black[900],
		},
		hover: {
			background: palette.primary[600],
			color: palette.black[900],
		},
		active: palette.primary[700],
		disabled: palette.primary[100],
		loader: {
			baseColor: palette.primary[500],
			overlay: palette.primary[400],
		},
	},
	/* Default: {
		default: {
			background: palette.neutral[50],
			color: palette.neutral[900],
		},
		hover: {
			background: palette.neutral[100],
			color: palette.neutral[900],
		},
		active: palette.neutral[200],
		focus: palette.neutral[200],
		disabled: palette.neutral[100],
		loader: {
			baseColor: palette.neutral[200],
			overlay: palette.neutral[50],
		},
	},
	Success: {
		default: {
			background: palette.accent.success[300],
			color: palette.neutral[900],
		},
		hover: {
			background: palette.accent.success[400],
			color: palette.neutral[900],
		},
		active: palette.accent.success[500],
		focus: palette.accent.success[200],
		disabled: palette.accent.success[100],
		loader: {
			baseColor: palette.accent.success[500],
			overlay: palette.accent.success[300],
		},
	},
	Error: {
		default: {
			background: palette.accent.error[300],
			color: palette.neutral[900],
		},
		hover: {
			background: palette.accent.error[400],
			color: palette.neutral[900],
		},
		active: palette.accent.error[500],
		focus: palette.accent.error[200],
		disabled: palette.accent.error[100],
		loader: {
			baseColor: palette.accent.error[500],
			overlay: palette.accent.error[300],
		},
	}, */
};

const variants = {
	Primary: createButtonVariant(variantsConfig.Primary),
	/* Default: createButtonVariant(variantsConfig.Default),
	Success: createButtonVariant(variantsConfig.Success),
	Error: createButtonVariant(variantsConfig.Error), */
};

const transitions = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

export const Button = Object.fromEntries(
	Object.entries(variants).map(([key, StyledButton]) => [
		key,
		({ $icon, $iconPlacement = "left", $isLoading, disabled, children, ...props }: ButtonProps) => {
			return (
				<StyledButton
					inert={$isLoading}
					disabled={disabled}
					$icon={$icon}
					$iconPlacement={$iconPlacement}
					$alignItems="center"
					$justifyContent="center"
					$padding={[0, 24]}
					$borderRadius={8}
					$isLoading={$isLoading}
					$reverse={$iconPlacement === "right"}
					{...props}
				>
					{$icon}
					<Label.M>{children}</Label.M>
					<AP>
						{$isLoading && (
							<m.div {...transitions}>
								<Loader
									$overlay={variantsConfig[key as keyof typeof variantsConfig].loader.overlay}
									$baseColor={variantsConfig[key as keyof typeof variantsConfig].loader.baseColor}
								/>
							</m.div>
						)}
					</AP>
				</StyledButton>
			);
		},
	]),
);
