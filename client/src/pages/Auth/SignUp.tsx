import { useEffect, useState, type FC } from "react";
import { AuthContainer } from "./Elements";
import { Icon } from "@/components/Primitives/Icon";
import { Body } from "@/components/Primitives/Typography";
import { Link } from "react-router-dom";
import Flex from "@/components/Primitives/Flex";
import Input from "@/components/Atoms/Forms/Input";
import Block from "@/components/Primitives/Block";
import { useInput } from "@/hooks/useInput";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const SignUp: FC = () => {
	const email = useInput("", { isEmail: true });
	const login = useInput("", {});
	const password = useInput("", {});
	const passwordConfirm = useInput("", {});
	const [errorMessage, setErrorMessage] = useState<string>("");
	useDocumentTitle("Sign Up");

	const submitHandler = () => {
		if (login.value.length === 0 || password.value.length === 0) {
			return setErrorMessage("Not all fields are filled in");
		} else {
			setErrorMessage("");
		}
	};

	useEffect(() => {
		console.log(email);
	}, [email]);

	return (
		<AuthContainer
			title="Sign up for Mecware"
			buttonText="Create account"
			buttonIcon={<Icon.CreateAccount />}
			onSubmit={submitHandler}
			errorMessage={errorMessage}
			disableButton={
				email.value.length === 0 || login.value.length === 0 || password.value.length === 0 || passwordConfirm.value.length === 0
			}
			extra={
				<Body.S>
					Already have an account? <Link to="/signin">Sign in</Link>
				</Body.S>
			}
		>
			<Flex $column $gap={20}>
				<Input
					required
					placeholder="Email address"
					value={email.value}
					icon={Icon.At}
					onChange={email.onChange}
					onBlur={email.onBlur}
					hasError={email.isDirty && !email.isEmailCorrect}
					errorMessage="Email address is incorrect"
					tooltipMessage="Hmm, that doesn't look like a valid email. Try something like hello@example.com"
				/>
				<Input
					required
					placeholder="Username"
					value={login.value}
					icon={Icon.User}
					onChange={login.onChange}
					onBlur={login.onBlur}
					hasError={login.isDirty && !login.isInputValid}
					errorMessage="Login is incorrect"
					tooltipMessage=""
					info="Username can contain only letters, numbers, dot and hyphens (but it cannot begin or end with them)."
				/>
				<Input
					hasError={errorMessage.length !== 0 && password.value.length === 0}
					type="password"
					value={password.value}
					onChange={password.onChange}
					icon={Icon.Lock}
					placeholder="Password"
					canTogglePassword
				/>
				<Input
					hasError={errorMessage.length !== 0 && password.value.length === 0}
					type="password"
					value={password.value}
					onChange={password.onChange}
					icon={Icon.RepeatPassword}
					placeholder="Confirm password"
					canTogglePassword
				/>
			</Flex>
		</AuthContainer>
	);
};

export default SignUp;
