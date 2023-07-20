import { lineHeights } from "@/src/ui-library/typography/lineHeights";
import { fontSizes } from "@/src/ui-library/typography/fontSizes";
import { fontWeights } from "@/src/ui-library/typography/fontWeights";

export const heading = {
  heading100: {
    lineHeights: lineHeights.line800,
    fontWeights: fontWeights.regular,
  },
  heading200: {
    lineHeights: lineHeights.line700,
    fontSizes: fontSizes.size100,
    fontWeights: fontWeights.light,
  },
  heading300: {
    lineHeights: lineHeights.line700,
    fontSizes: fontSizes.size100,
    fontWeights: fontWeights.bold,
  },
};
