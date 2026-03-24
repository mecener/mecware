import Block from "@/components/Primitives/Block";
import { Icon } from "@/components/Primitives/Icon";
import { Label } from "@/components/Primitives/Typography";
import { palette } from "@/style/colorPalette";
import type { FC } from "react";
import React, { useState } from "react";
import styled, { css } from "styled-components";

type InputTypes = "text" | "password" | "number";

interface InputProps {
	value: string;
	onChange: (value: string) => void;
	type?: InputTypes;
	hasError?: boolean;
	canTogglePassword?: boolean;
	placeholder?: string;
	icon?: React.FC;
}

const StyledInput = styled.input<{ $hasIcon: boolean }>`
	border-radius: 8px;
	height: 44px;
	background-color: ${palette.black[600]};
	box-shadow:
		inset 0 1px 0 0 ${palette.black[400]},
		0 2px 0 0 ${palette.black[800]};
	width: 320px;
	padding: 0 16px 1px ${({ $hasIcon }) => ($hasIcon ? "46px" : "16px")};
	color: ${palette.white[500]};
	font-weight: 500;
	font-size: 14px;
	transition: 199ms;
	font-family: "Inter";
	outline: 2px solid transparent;
	outline-offset: 2px;
`;

const IconContainer = styled.div<{ $right?: boolean; onClick?: () => void }>`
	pointer-events: none;
	position: absolute;
	width: 32px;
	height: 32px;
	text-align: center;
	line-height: 32px;
	${({ $right }) => ($right ? "right: 6px" : "left: 6px")};
	top: 50%;
	translate: 0 -50%;
	color: ${palette.gray[900]};
	background-color: ${palette.black[500]};
	border-radius: 8px;
	box-shadow:
		inset 0 1px 0 0 ${palette.black[300]},
		0 2px 0 0 ${palette.black[700]};
	transition: 199ms;

	svg {
		translate: 0 -1px;
		width: 16px;
		height: 16px;
	}

	${({ onClick }) =>
		!!onClick &&
		css`
			@media (hover: hover) and (pointer: fine) {
				&:hover {
					cursor: pointer;
					color: ${palette.white[100]};
					box-shadow:
						inset 0 0px 0 0 ${palette.black[300]},
						0 2px 0 0 ${palette.black[700]};
				}
			}

			&:active {
				translate: 0 calc(-50% + 1px);
				box-shadow:
					inset 0 0px 0 0 ${palette.black[300]},
					0 0px 0 0 ${palette.black[700]};
			}
		`}
`;

const InputContainer = styled(Block)<{ $hasFocus: boolean; $hasError?: boolean }>`
	@media (hover: hover) and (pointer: fine) {
		&:hover {
			${StyledInput} {
				box-shadow:
					inset 0 0px 0 0 ${palette.black[400]},
					0 1px 0 0 ${palette.black[800]};
			}
			${IconContainer} {
				&:first-of-type {
					box-shadow:
						inset 0 0px 0 0 ${palette.black[300]},
						0 1px 0 0 ${palette.black[700]};
				}
			}
		}
	}

	${({ $hasFocus }) =>
		$hasFocus &&
		css`
			${StyledInput} {
				box-shadow:
					inset 0 0px 0 0 ${palette.black[400]},
					0 0px 0 0 ${palette.black[800]};
				outline-color: ${palette.black[600]};
			}
			${IconContainer} {
				&:first-of-type {
					color: ${palette.primary[500]};
				}
			}
			&:hover {
				${StyledInput} {
					border-color: ${palette.primary[500]};
					box-shadow:
						inset 0 0px 0 0 ${palette.black[400]},
						0 0px 0 0 ${palette.black[800]};
				}
				${IconContainer} {
					&:first-of-type {
						color: ${palette.primary[500]};
						box-shadow:
							inset 0 0px 0 0 ${palette.black[300]},
							0 1px 0 0 ${palette.black[700]};
					}
				}
			}
		`}

	${({ $hasError }) =>
		$hasError &&
		css`
			${StyledInput} {
				outline-color: ${palette.error[500]};
			}
			${IconContainer} {
				&:first-of-type {
					color: ${palette.error[500]};
				}
			}
			@media (hover: hover) and (pointer: fine) {
				&:hover {
					${IconContainer} {
						&:first-of-type {
							color: ${palette.error[500]};
						}
					}
				}
			}
		`}
`;

const Input: FC<InputProps> = ({ value, onChange, type = "text", hasError, canTogglePassword, placeholder, icon }) => {
	const [hasFocus, setFocus] = useState<boolean>(false);
	const [inputType, setInputType] = useState<InputTypes>(type);

	return (
		<Block $column $gap={8}>
			{placeholder && <Label.S $color={palette.gray[900]}>{placeholder}</Label.S>}
			<InputContainer $hasError={hasError} $hasFocus={hasFocus} $relative>
				<StyledInput
					type={inputType}
					value={value}
					onChange={(event) => onChange(event.target.value)}
					onBlur={() => setFocus(false)}
					onFocus={() => setFocus(true)}
					$hasIcon={!!icon}
				/>
				{icon && <IconContainer>{React.createElement(icon)}</IconContainer>}
				{type === "password" && canTogglePassword && (
					<IconContainer onClick={() => setInputType(inputType === "text" ? "password" : "text")} $right>
						{inputType === "password" ? <Icon.Visibility /> : <Icon.VisibilityOff />}
					</IconContainer>
				)}
			</InputContainer>
		</Block>
	);
};

export default Input;
