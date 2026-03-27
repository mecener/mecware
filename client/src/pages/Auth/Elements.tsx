import Block from "@/components/Primitives/Block";
import Flex from "@/components/Primitives/Flex";
import { palette } from "@/style/colorPalette";
import type { FC } from "react";
import { Heading, Label } from "@/components/Primitives/Typography";
import styled from "styled-components";
import { Button } from "@/components/Atoms/Forms/Button";
import Logo from "@assets/logo.svg?react";
import { AnimatePresence as AP, motion as m } from "framer-motion";
import { Icon } from "@/components/Primitives/Icon";

const transitions = {
	initial: { opacity: 0, height: 0 },
	animate: { opacity: 1, height: "auto" },
	exit: { opacity: 0, height: 0 },
};

const Form = styled(Flex).attrs({ as: "form" })``;

const StyledErrorMessage = styled(Block)`
	margin: 4px 0 0 0;
	background-color: rgba(252, 61, 61, 0.075);
	border-radius: 8px;
	padding: 8px 12px 6px;
	transition: 199ms;
	box-shadow:
		inset 0 1px 0 0 rgba(255, 153, 153, 0.1),
		0 2px 0 0 rgba(221, 13, 13, 0.05);

	&,
	${Label.S} {
		color: ${palette.error[500]};
	}

	svg {
		width: 12px;
		translate: 0 -1px;
	}

	@media (hover: hover) and (pointer: fine) {
		&:hover {
			box-shadow:
				inset 0 0px 0 0 rgba(255, 153, 153, 0.1),
				0 1px 0 0 rgba(221, 13, 13, 0.05);
		}
	}
`;

interface ErrorMessageProps {
	relative?: boolean;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
	message: string;
	children?: React.ReactNode;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ message, children, ...props }) => {
	return (
		<StyledErrorMessage $relative $alignItems="center" $gap={4} {...props}>
			<Icon.Error />
			<Label.S>{message}</Label.S>
			{children}
		</StyledErrorMessage>
	);
};

interface AuthContainerProps {
	title: string;
	buttonText: string;
	buttonIcon?: React.ReactNode;
	onSubmit: () => void;
	extra?: React.ReactNode;
	errorMessage?: string;
	disableButton?: boolean;
	children: React.ReactNode;
}

export const AuthContainer: FC<AuthContainerProps> = ({
	title,
	buttonText,
	buttonIcon,
	onSubmit,
	extra,
	errorMessage,
	disableButton,
	children,
}) => {
	const submitHandler = (event: React.SubmitEvent<HTMLFormElement>): void => {
		event.preventDefault();

		onSubmit();
	};

	return (
		<Flex $gap={32} $column $alignItems="center">
			<Block $column $gap={32} $padding={32} $bgc={palette.black[700]} $borderRadius={16}>
				<Flex $gap={4} $column $alignItems="center">
					<Logo width={60} height={60} />
					<Heading.H3>{title}</Heading.H3>
				</Flex>
				<Form onSubmit={submitHandler} $column $gap={32}>
					{children}
					<Flex $column $gap={12}>
						{errorMessage && (
							<AP>
								{errorMessage.length !== 0 && (
									<m.div {...transitions}>
										<ErrorMessage message={errorMessage || ""} />
									</m.div>
								)}
							</AP>
						)}
						<Button.Primary disabled={disableButton} $icon={buttonIcon}>
							{buttonText}
						</Button.Primary>
					</Flex>
				</Form>
			</Block>
			{extra}
		</Flex>
	);
};
