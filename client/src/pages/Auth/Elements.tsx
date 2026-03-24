import Block from "@/components/Primitives/Block";
import Flex from "@/components/Primitives/Flex";
import { palette } from "@/style/colorPalette";
import type { FC } from "react";
import { Heading, Label } from "@/components/Primitives/Typography";
import styled from "styled-components";
import { Button } from "@/components/Atoms/Forms/Button";
import Logo from "@assets/logo.svg?react";
import { AnimatePresence as AP, motion as m } from "framer-motion";

const transitions = {
	initial: { opacity: 0, height: 0 },
	animate: { opacity: 1, height: "auto" },
	exit: { opacity: 0, height: 0 },
};

interface AuthContainerProps {
	title: string;
	buttonText: string;
	buttonIcon?: React.ReactNode;
	onSubmit: () => void;
	extra?: React.ReactNode;
	errorMessage?: string;
	children: React.ReactNode;
}

const Form = styled(Flex).attrs({ as: "form" })``;

export const AuthContainer: FC<AuthContainerProps> = ({
	title,
	buttonText,
	buttonIcon,
	onSubmit,
	extra,
	errorMessage,
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
				<Form onSubmit={submitHandler} $column $gap={24}>
					{children}
					{errorMessage && (
						<AP>
							{errorMessage.length !== 0 && (
								<m.div {...transitions}>
									<Label.S $color={palette.error[500]}>{errorMessage}</Label.S>
								</m.div>
							)}
						</AP>
					)}
					<Button.Primary $icon={buttonIcon}>{buttonText}</Button.Primary>
				</Form>
			</Block>
			{extra}
		</Flex>
	);
};
