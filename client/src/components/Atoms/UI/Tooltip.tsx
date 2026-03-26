import type { FC } from "react";
import styled, { css } from "styled-components";
import { motion as m } from "framer-motion";
import { palette } from "@/style/colorPalette";
import { Body } from "@/components/Primitives/Typography";
import { Icon } from "@/components/Primitives/Icon";

interface TooltipProps {
	position?: {
		attach: "right" | "left" | "top" | "bottom";
		content: "right" | "left" | "top" | "bottom";
	};
	children: React.ReactNode;
}

const tooltipTransitions = {
	initial: { opacity: 0, x: 10 },
	animate: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: 10, transition: { delay: 0.15 } },
};

const arrowTransitions = {
	initial: { opacity: 0, x: 5 },
	animate: { opacity: 1, x: 0, transition: { delay: 0.15 } },
	exit: { opacity: 0, x: 5 },
};

const StyledTooltip = styled(m.div)<{ $position?: TooltipProps["position"] }>`
	position: absolute;
	z-index: 1;
	top: -4px;
	left: calc(100% + 12px);
	padding: 16px 20px;
	border-radius: 8px;
	background-color: #211414;
	max-width: 200px;
	width: 100%;
`;

const ArrowContainer = styled(m.div)`
	position: absolute;
	top: 50%;
	translate: 0 -50%;
	z-index: 0;
	left: calc(100% + 4px);
	color: #211414;

	&,
	svg {
		height: 14px;
		width: 9px;
	}
`;

const Tooltip: FC<TooltipProps> = ({ position, children }) => {
	return (
		<>
			<StyledTooltip $position={position} {...tooltipTransitions}>
				<Body.XS $color={palette.error[500]}>{children}</Body.XS>
			</StyledTooltip>
			<ArrowContainer {...arrowTransitions}>
				<Icon.TooltipArrow />
			</ArrowContainer>
		</>
	);
};

export default Tooltip;

/*
	<Continue.Here/>
	= ohh, bruh, I will think that fucking ToOlTiP component will be easy,
	= but that's asshole will be so LARGE, HUGE AND MASSIVE, I want to kill him right now.
	= We need make thing with him fucking PoSiTiOnInG, and him content,
	= I think what that process will be BORED and no interesting,
	= but I believe in you <3 25.03.2026 23:43
	= P.S.: oh, yeah, don't listen AI, he lies, because stupid :D
*/
