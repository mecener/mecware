import { palette } from "@/style/colorPalette";

const getLuminance = (hexColor: string): number => {
	const hex = hexColor.slice(1);

	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	const rsRGB = r / 255;
	const gsRGB = g / 255;
	const bsRGB = b / 255;

	const rL = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
	const gL = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
	const bL = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);

	return 0.2126 * rL + 0.7152 * gL + 0.0722 * bL;
};

export function isColorDark(hexColor: string, threshold: number = 0.5): boolean {
	const luminance = getLuminance(hexColor);
	return luminance < threshold;
}

export function getContrastColor(backgroundColor: string, threshold: number = 0.5): string {
	return isColorDark(backgroundColor, threshold) ? palette.neutral[50] : palette.neutral[900];
}

export function getContrastColorCustom(
	backgroundColor: string,
	lightColor: string = palette.neutral[50],
	darkColor: string = palette.neutral[900],
	threshold: number = 0.5,
): string {
	return isColorDark(backgroundColor, threshold) ? lightColor : darkColor;
}
