import Block from "@/components/Primitives/Block";
import { Body } from "@/components/Primitives/Typography";
import { useState, type FC } from "react";
import Flex from "@/components/Primitives/Flex";
import Input from "@/components/Atoms/Forms/Input";
import { Icon } from "@/components/Primitives/Icon";
import { useInput } from "@/hooks/useInput";
import styled from "styled-components";
import Link from "@/components/Primitives/Link";
import { AuthContainer } from "./Elements";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Button } from "@/components/Atoms/Forms/Button";

const PasswordRecoverLink = styled.div`
	position: absolute;
	top: 0;
	right: 0;
`;

const SignIn: FC = () => {
	const login = useInput("", {});
	const password = useInput("", {});
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	useDocumentTitle("Sign In");

	const submitHandler = () => {
		if (login.value.length === 0 || password.value.length === 0) {
			return setErrorMessage("Not all fields are filled in");
		} else {
			setErrorMessage("");
		}

		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	return (
		<p>
			<AuthContainer
				title="Sign in to Mecware"
				buttonText="Sign In"
				buttonIcon={<Icon.Login />}
				onSubmit={submitHandler}
				disableButton={login.value.length === 0 || password.value.length === 0}
				loading={loading}
				extra={
					<Body.S>
						First time here? <Link to="/signup">Create an account</Link>
					</Body.S>
				}
			>
				<Flex $column $gap={20}>
					<Input
						hasError={errorMessage.length !== 0 && login.value.length === 0}
						value={login.value}
						onChange={login.onChange}
						icon={Icon.User}
						placeholder="Username or email address"
						errorMessage="Username cannot be blank"
					/>
					<Block $relative>
						<Input
							hasError={errorMessage.length !== 0 && password.value.length === 0}
							type="password"
							value={password.value}
							onChange={password.onChange}
							icon={Icon.Lock}
							placeholder="Password"
							errorMessage="Password cannot be blank"
							canTogglePassword
						/>
						<PasswordRecoverLink>
							<Link size="S" to="/recover">
								Forgot password?
							</Link>
						</PasswordRecoverLink>
					</Block>
				</Flex>
			</AuthContainer>
		</p>
	);
};

export default SignIn;

/*
	<Continue.Here6/>
	= very nice, bruh! ure so legend, u fix button styles, correct color
	= and signup inputs icon color, there's so pretty now, wow!
	= I think next move's are server jokes, good morning to u!
	= 28.03.2026 23:25
*/
