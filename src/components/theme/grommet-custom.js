import { rgba } from "polished";
import { base } from "grommet/themes";
import { deepMerge } from "grommet/utils";

import {
  themeRamp,
  dangerRamp,
  warningRamp,
  successRamp,
  grayRamp,
  brandColor,
  focusColor,
  statusColors,
  designColors
} from "./colors";

const colors = {
  active: rgba(221, 221, 221, 0.5),
  black: "design-black",
  white: "desgin-white",
  border: {
    dark: rgba(255, 255, 255, 0.33),
    light: rgba(0, 0, 0, 0.33)
  },
  brand: brandColor,
  control: {
    dark: "accent-1",
    light: "brand"
  },
  // focus: focusColor,
  placeholder: "design-silver",
  selected: "brand",
  text: {
    dark: "design-smoke",
    light: "design-nightRider"
  },
  icon: {
    dark: "design-smoke",
    light: "design-nightRider"
  }
};

/**
 * @description map the color ramps to grommet color theme props.
 * @param {Object} ramp color ramp
 * @param {*} prefix prefix to be added before each ramp key
 */
const mapRampToTheme = (ramp, prefix) =>
  Object.keys(ramp).forEach(key => (colors[`${prefix}-${key}`] = ramp[key]));

mapRampToTheme(themeRamp, "theme");
mapRampToTheme(dangerRamp, "danger");
mapRampToTheme(warningRamp, "warning");
mapRampToTheme(successRamp, "success");
mapRampToTheme(grayRamp, "gray");
mapRampToTheme(statusColors, "status");
mapRampToTheme(designColors, "design");

// merge grommet `base` theme with our custom styles
const theme = deepMerge(base, {
  global: {
    colors,
    focus: {
      border: {
        color: "success"
      }
    }
  },
  anchor: {
    color: {
      dark: "theme-20"
    }
  }
});

export default theme;


// global.focus.border.color
