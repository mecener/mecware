
// Auto-generated file - DO NOT EDIT MANUALLY
// Generated at: 2026-03-25T20:24:08.206Z

import type { SVGProps } from "react";

import AtIcon from "@icons/at.svg?react";
import CreateAccountIcon from "@icons/create-account.svg?react";
import ErrorIcon from "@icons/error.svg?react";
import LockIcon from "@icons/lock.svg?react";
import LoginIcon from "@icons/login.svg?react";
import RepeatPasswordIcon from "@icons/repeat-password.svg?react";
import RepeatIcon from "@icons/repeat.svg?react";
import TooltipArrowIcon from "@icons/tooltip-arrow.svg?react";
import UserIcon from "@icons/user.svg?react";
import VisibilityOffIcon from "@icons/visibility-off.svg?react";
import VisibilityIcon from "@icons/visibility.svg?react";

interface IconProps extends SVGProps<SVGSVGElement> {
	size?: number | string;
	color?: string;
}

const icons = {
	At: AtIcon,
	CreateAccount: CreateAccountIcon,
	Error: ErrorIcon,
	Lock: LockIcon,
	Login: LoginIcon,
	RepeatPassword: RepeatPasswordIcon,
	Repeat: RepeatIcon,
	TooltipArrow: TooltipArrowIcon,
	User: UserIcon,
	VisibilityOff: VisibilityOffIcon,
	Visibility: VisibilityIcon,
};

export const Icon = Object.keys(icons).reduce(
	(acc, key) => {
		const SvgComponent = icons[key as keyof typeof icons];

		const IconComponent = ({ size = 24, color = "currentColor", style, ...props }: IconProps) => (
			<SvgComponent 
				width={size} 
				height={size} 
				className="icon" 
				fill={color} 
				style={{ color, ...style }} 
				{...props} 
			/>
		);

		IconComponent.displayName = `Icon.${key}`;

		return {
			...acc,
			[key]: IconComponent,
		};
	},
	{} as Record<keyof typeof icons, React.FC<IconProps>>,
);
