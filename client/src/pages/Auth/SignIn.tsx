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

const PasswordRecoverLink = styled.div`
	position: absolute;
	top: 0;
	right: 0;
`;

const SignIn: FC = () => {
	const login = useInput("", {});
	const password = useInput("", {});
	const [errorMessage, setErrorMessage] = useState<string>("");

	const submitHandler = () => {
		if (login.value.length === 0 || password.value.length === 0) {
			return setErrorMessage("Not all fields are filled in");
		} else {
			setErrorMessage("");
		}
	};

	return (
		<AuthContainer
			title="Sign in to Mecware"
			buttonText="Sign In"
			buttonIcon={<Icon.Login />}
			onSubmit={submitHandler}
			errorMessage={errorMessage}
			extra={
				<Body.S>
					First time here? <Link to="/signup">Create an account</Link>
				</Body.S>
			}
		>
			<Flex $column $gap={16}>
				<Input
					hasError={errorMessage.length !== 0 && login.value.length === 0}
					value={login.value}
					onChange={login.onChange}
					icon={Icon.User}
					placeholder="Username or email address"
				/>
				<Block $relative>
					<Input
						hasError={errorMessage.length !== 0 && password.value.length === 0}
						type="password"
						value={password.value}
						onChange={password.onChange}
						icon={Icon.Lock}
						placeholder="Password"
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
	);
};

export default SignIn;
