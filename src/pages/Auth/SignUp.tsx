import { useState, type FC } from "react";
import { AuthContainer } from "./Elements";
import { Icon } from "@/components/Primitives/Icon";
import { Body } from "@/components/Primitives/Typography";
import { Link } from "react-router-dom";
import Flex from "@/components/Primitives/Flex";
import Input from "@/components/Atoms/Forms/Input";
import { useInput } from "@/hooks/useInput";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const SignUp: FC = () => {
	const email = useInput("", { isEmail: true });
	const login = useInput("", { minLength: 5 });
	const password = useInput("", { minLength: 8 });
	const passwordConfirm = useInput("", { minLength: 8 });
	const [errorMessage, setErrorMessage] = useState<string>("");

	useDocumentTitle("Sign Up");

	const submitHandler = () => {
		if (login.value.length === 0 || password.value.length === 0) {
			return setErrorMessage("Not all fields are filled in");
		} else {
			setErrorMessage("");
		}
	};

	return (
		<AuthContainer
			title="Sign up for Mecware"
			buttonText="Create account"
			buttonIcon={<Icon.CreateAccount />}
			onSubmit={submitHandler}
			errorMessage={errorMessage}
			disableButton={
				!email.isEmailCorrect ||
				!login.isLengthCorrect ||
				!/^[a-zA-Z0-9](?:[a-zA-Z0-9.-]*[a-zA-Z0-9])?$/g.test(login.value) ||
				!password.isInputValid ||
				password.value !== passwordConfirm.value
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
					value={email.value}
					placeholder="Email address"
					icon={Icon.At}
					onChange={email.onChange}
					onBlur={email.onBlur}
					hasError={email.isDirty && !email.isEmailCorrect}
					errorMessage={email.value.length === 0 ? "Email address cannot be blank" : "Email address is incorrect"}
					tooltipMessage="Hmm, that doesn't look like a valid email. Try something like hello@example.com"
					isDirty={email.isDirty}
				/>
				<Input
					required
					value={login.value}
					placeholder="Username"
					icon={Icon.User}
					onChange={login.onChange}
					onBlur={login.onBlur}
					hasError={
						login.isDirty && (!login.isLengthCorrect || !/^[a-zA-Z0-9](?:[a-zA-Z0-9.-]*[a-zA-Z0-9])?$/g.test(login.value))
					}
					errorMessage={
						login.value.length === 0
							? "Username cannot be blank"
							: !login.isLengthCorrect
								? "Username is too short."
								: !/^[a-zA-Z0-9](?:[a-zA-Z0-9.-]*[a-zA-Z0-9])?$/g.test(login.value)
									? "Username is incorrect"
									: "Unknown error"
					}
					info="Username can contain only letters, numbers, dot and hyphens (but it cannot begin or end with them). "
					isDirty={login.isDirty}
				/>
				<Input
					required
					type="password"
					strengthMeter
					canTogglePassword
					value={password.value}
					placeholder="Password"
					icon={Icon.Lock}
					onChange={password.onChange}
					onBlur={password.onBlur}
					hasError={password.isDirty && !password.isInputValid}
					errorMessage={password.value.length === 0 ? "Password cannot be blank" : "Password is too short"}
					info="The password must be at least 8 characters long."
					isDirty={password.isDirty}
				/>
				<Input
					required
					type="password"
					canTogglePassword
					value={passwordConfirm.value}
					placeholder="Confirm password"
					icon={Icon.RepeatPassword}
					onChange={passwordConfirm.onChange}
					onBlur={passwordConfirm.onBlur}
					hasError={passwordConfirm.isDirty && password.value !== passwordConfirm.value}
					errorMessage="Passwords must match"
					isDirty={passwordConfirm.isDirty}
				/>
			</Flex>
		</AuthContainer>
	);
};

export default SignUp;
