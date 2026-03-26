import { useEffect, useState, type FC } from "react";
import { AuthContainer } from "./Elements";
import { Icon } from "@/components/Primitives/Icon";
import { Body } from "@/components/Primitives/Typography";
import { Link } from "react-router-dom";
import Flex from "@/components/Primitives/Flex";
import Input from "@/components/Atoms/Forms/Input";
import Block from "@/components/Primitives/Block";
import { useInput } from "@/hooks/useInput";

const SignUp: FC = () => {
	const email = useInput("", { isEmail: true });
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
			extra={
				<Body.S>
					Already have an account? <Link to="/signin">Sign in</Link>
				</Body.S>
			}
		>
			<Flex $column $gap={16}>
				<Input
					hasError={email.isDirty && !email.isEmailCorrect}
					errorMessage="Email address is incorrect"
					value={email.value}
					onChange={email.onChange}
					onBlur={email.onBlur}
					icon={Icon.At}
					placeholder="Email address"
					tooltipMessage="Hmm, that doesn't look like a valid email. Try something like hello@example.com"
				/>
				<Input
					hasError={errorMessage.length !== 0 && email.value.length === 0}
					value={login.value}
					onChange={login.onChange}
					icon={Icon.User}
					placeholder="Username"
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
