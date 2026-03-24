
// Auto-generated file - DO NOT EDIT MANUALLY
// Generated at: 2026-03-24T19:21:30.610Z

import type { SVGProps } from "react";

import AccountIcon from "@icons/account.svg?react";
import ActivityIcon from "@icons/activity.svg?react";
import AppsIcon from "@icons/apps.svg?react";
import ArrowDownIcon from "@icons/arrow-down.svg?react";
import AtIcon from "@icons/at.svg?react";
import CheckIcon from "@icons/check.svg?react";
import ClickIcon from "@icons/click.svg?react";
import DiscordIcon from "@icons/discord.svg?react";
import GlobeIcon from "@icons/globe.svg?react";
import HistoryIcon from "@icons/history.svg?react";
import LockIcon from "@icons/lock.svg?react";
import LoginIcon from "@icons/login.svg?react";
import ResetIcon from "@icons/reset.svg?react";
import UserIcon from "@icons/user.svg?react";
import VisibilityOffIcon from "@icons/visibility-off.svg?react";
import VisibilityIcon from "@icons/visibility.svg?react";

interface IconProps extends SVGProps<SVGSVGElement> {
	size?: number | string;
	color?: string;
}

const icons = {
	Account: AccountIcon,
	Activity: ActivityIcon,
	Apps: AppsIcon,
	ArrowDown: ArrowDownIcon,
	At: AtIcon,
	Check: CheckIcon,
	Click: ClickIcon,
	Discord: DiscordIcon,
	Globe: GlobeIcon,
	History: HistoryIcon,
	Lock: LockIcon,
	Login: LoginIcon,
	Reset: ResetIcon,
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
