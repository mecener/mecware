import { palette } from "@/style/colorPalette";
import styled, { css, keyframes } from "styled-components";

const shimmer = keyframes`
	0% {
		background-position: -200% 0;
	}
	100% {
		background-position: -100% 0;
	}
`;

interface ShimmerTextProps {
	$isShimmering?: boolean;
	$duration?: number;
}

export const ShimmerText = styled.span<ShimmerTextProps>`
	display: inline-block;
	position: relative;

	${({ $isShimmering, $duration = 5 }) =>
		$isShimmering &&
		css`
			color: transparent !important;
			background: linear-gradient(135deg, ${palette.neutral[200]} 0%, ${palette.neutral[100]} 50%, ${palette.neutral[200]} 100%);
			background-size: 200% 100%;
			border-radius: 4px;
			animation: ${shimmer} ${$duration}s ease-in-out infinite;
		`}
`;
