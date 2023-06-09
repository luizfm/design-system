var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFF",
  black: "#000",
  gray100: "#E1E1E6",
  gray200: "#A9A9B2",
  gray400: "#7C7C8A",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292E",
  gray800: "#202024",
  gray900: "#121214",
  ignite300: "#00B37E",
  ignite500: "#00875F",
  ignite700: "#015F43",
  ignite900: "#00291D"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};

// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  themeMap: __spreadProps(__spreadValues({}, defaultThemeMap), {
    height: "space",
    width: "space"
  }),
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  }
});

// src/components/Box.ts
var Box = styled("div", {
  padding: "$6",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray600"
});
Box.displayName = "Box";

// src/components/Text.ts
var Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Text.displayName = "Text";

// src/components/Heading.ts
var Heading = styled("h2", {
  fontFamily: "$default",
  lineHeight: "$shorter",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$4xl" },
      "2xl": { fontSize: "$5xl" },
      "3xl": { fontSize: "$6xl" },
      "4xl": { fontSize: "$7xl" },
      "5xl": { fontSize: "$8xl" },
      "6xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Heading.displayName = "Heading";

// src/components/Avatar/index.tsx
import { User } from "phosphor-react";

// src/components/Avatar/styles.ts
import * as Avatar from "@radix-ui/react-avatar";
var AvatarContainer = styled(Avatar.Root, {
  borderRadius: "$full",
  display: "inline-block",
  width: "$16",
  height: "$16",
  overflow: "hidden"
});
var AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  border: "inherit"
});
var AvatarFallback = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$gray600",
  color: "$gray800",
  svg: {
    width: "$6",
    height: "$6"
  }
});

// src/components/Avatar/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Avatar2(props) {
  return /* @__PURE__ */ jsxs(AvatarContainer, { children: [
    /* @__PURE__ */ jsx(AvatarImage, __spreadValues({}, props)),
    /* @__PURE__ */ jsx(AvatarFallback, { delayMs: 600, children: /* @__PURE__ */ jsx(User, {}) })
  ] });
}
Avatar2.displayName = "Avatar";

// src/components/Button.ts
var Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  padding: "0 $4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  cursor: "pointer",
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&:focus": {
    boxShadow: "0 0 0 2px $colors$gray100"
  },
  svg: {
    height: "$4",
    width: "$4"
  },
  variants: {
    variant: {
      primary: {
        color: "$white",
        backgroundColor: "$ignite500",
        "&:not(disabled):hover": {
          backgroundColor: "$ignite300"
        },
        "&:disabled": {
          backgroundColor: "$gray200"
        }
      },
      secondary: {
        color: "$ignite300",
        border: "2px solid $ignite500",
        "&:not(disabled):hover": {
          backgroundColor: "$ignite500",
          color: "$white"
        },
        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200"
        }
      },
      tertiary: {
        color: "$gray100",
        "&:not(disabled):hover": {
          color: "$white"
        },
        "&:disabled": {
          color: "$gray600"
        }
      }
    },
    size: {
      sm: {
        height: 38
      },
      md: {
        height: 46
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
Button.displayName = "Button";

// src/components/TextInput/index.tsx
import { forwardRef } from "react";

// src/components/TextInput/styles.ts
var TextInputContainer = styled("div", {
  backgroundColor: "$gray900",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  display: "flex",
  alignItems: "center",
  variants: {
    size: {
      sm: {
        padding: "$2 $3"
      },
      md: {
        padding: "$3 $4"
      }
    }
  },
  "&:has(input:focus)": {
    borderColor: "$ignite300"
  },
  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  defaultVariants: {
    size: "md"
  }
});
var Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray400",
  fontWeight: "$regular"
});
var Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  background: "transparent",
  border: 0,
  width: "100%",
  "&:focus": {
    outline: 0
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&::placeholder": {
    color: "$gray400"
  }
});

// src/components/TextInput/index.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var TextInput = forwardRef(
  (_a, ref) => {
    var _b = _a, { prefix } = _b, inputProps = __objRest(_b, ["prefix"]);
    return /* @__PURE__ */ jsxs2(TextInputContainer, { children: [
      Boolean(prefix) && /* @__PURE__ */ jsx2(Prefix, { children: prefix }),
      /* @__PURE__ */ jsx2(Input, __spreadValues({ ref }, inputProps))
    ] });
  }
);
TextInput.displayName = "TextInput";

// src/components/Textarea.ts
var Textarea = styled("textarea", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  resize: "vertical",
  minHeight: 80,
  "&:focus": {
    outline: 0,
    borderColor: "$ignite300"
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});
Textarea.displayName = "Textarea";

// src/components/Checkbox/index.tsx
import { Check } from "phosphor-react";

// src/components/Checkbox/styles.ts
import * as Checkbox from "@radix-ui/react-checkbox";
var CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  width: "$6",
  height: "$6",
  backgroundColor: "$gray900",
  borderRadius: "$xs",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid $gray900",
  '&[data-state="checked"]': {
    backgroundColor: "$ignite300"
  },
  '&:focus, &[data-state="checked"]': {
    border: "2px solid $ignite300"
  }
});
var slideIn = keyframes({
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
});
var slideOut = keyframes({
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
});
var CheckboxIndicator = styled(Checkbox.Indicator, {
  color: "$white",
  height: "$4",
  width: "$4",
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`
  }
});

// src/components/Checkbox/index.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function Checkbox2(props) {
  return /* @__PURE__ */ jsx3(CheckboxContainer, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ jsx3(CheckboxIndicator, { asChild: true, children: /* @__PURE__ */ jsx3(Check, { weight: "bold" }) }) }));
}
Checkbox2.displayName = "Checkbox";

// src/components/MultiStep/styles.ts
var MultiStepContainer = styled("div", {});
var Label = styled(Text, {
  color: "$gray200",
  defaultVariants: {
    size: "xs"
  }
});
var Steps = styled("div", {
  display: "grid",
  gap: "$2",
  marginTop: "$1",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)"
});
var Step = styled("div", {
  height: "$1",
  borderRadius: "$px",
  backgroundColor: "$gray600",
  variants: {
    active: {
      true: {
        backgroundColor: "$gray100"
      }
    }
  }
});

// src/components/MultiStep/index.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function MultiStep({ size, currentStep = 1 }) {
  return /* @__PURE__ */ jsxs3(MultiStepContainer, { children: [
    /* @__PURE__ */ jsxs3(Label, { children: [
      "Passo ",
      currentStep,
      " de ",
      size
    ] }),
    /* @__PURE__ */ jsx4(Steps, { css: { "--steps-size": size }, children: Array.from({ length: size }, (_, index) => index + 1).map((step) => {
      return /* @__PURE__ */ jsx4(Step, { active: step <= currentStep }, step);
    }) })
  ] });
}
MultiStep.displayName = "MultiStep";

// src/components/Toast/index.tsx
import { ToastProvider } from "@radix-ui/react-toast";

// src/components/Toast/styles.ts
import * as Toast from "@radix-ui/react-toast";
var slideIn2 = keyframes({
  from: {
    transform: "translateX(calc(100% + 25px))"
  },
  to: {
    transform: "translateX(0)"
  }
});
var hide = keyframes({
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  }
});
var ToastContainer = styled(Toast.Root, {
  backgroundColor: "$gray800",
  padding: "$3 $12 $3 $5",
  display: "flex",
  flexDirection: "column",
  rowGap: "$1",
  position: "relative",
  borderRadius: "$sm",
  border: "1px solid $gray600",
  '&[data-state="open"]': {
    animation: `${slideIn2} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`
  }
});
var ToastTitle = styled(Toast.Title, {
  color: "$white",
  fontWeight: "$bold",
  fontFamily: "$default"
});
var ToastDescription = styled(Toast.Description, {
  color: "$gray200",
  fontFamily: "$default",
  fontSize: "$sm"
});
var ToastClose = styled(Toast.Close, {
  position: "absolute",
  right: "$5",
  top: "$3",
  cursor: "pointer"
});
var ToastViewport = styled(Toast.Viewport, {
  position: "fixed",
  bottom: 0,
  right: 0,
  display: "flex",
  flexDirection: "column",
  gap: "$3",
  maxWidth: "100vw",
  margin: 0,
  listStyle: "none",
  zIndex: 2,
  outline: "none",
  minWidth: "360px",
  padding: "$5"
});

// src/components/Toast/index.tsx
import {
  forwardRef as forwardRef2,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import { X } from "phosphor-react";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var Toast2 = forwardRef2(
  (_a, ref) => {
    var _b = _a, {
      title,
      description,
      swipeDirection = "right",
      openLabel,
      onClick
    } = _b, restProps = __objRest(_b, [
      "title",
      "description",
      "swipeDirection",
      "openLabel",
      "onClick"
    ]);
    const [open, setOpen] = useState(false);
    const timeOutRef = useRef(0);
    const handleOpen = useCallback(() => {
      setOpen(false);
      window.clearTimeout(timeOutRef.current);
      timeOutRef.current = window.setTimeout(() => {
        setOpen(true);
        onClick == null ? void 0 : onClick();
      }, 100);
    }, [onClick]);
    useEffect(() => {
      return () => clearTimeout(timeOutRef.current);
    }, []);
    return /* @__PURE__ */ jsxs4(ToastProvider, { swipeDirection, children: [
      /* @__PURE__ */ jsx5(
        Button,
        __spreadProps(__spreadValues({
          onClick: handleOpen,
          variant: "tertiary",
          ref
        }, restProps), {
          children: openLabel
        })
      ),
      /* @__PURE__ */ jsxs4(ToastContainer, { open, onOpenChange: setOpen, children: [
        /* @__PURE__ */ jsx5(ToastTitle, { children: title }),
        /* @__PURE__ */ jsx5(ToastDescription, { children: description }),
        /* @__PURE__ */ jsx5(ToastClose, { asChild: true, children: /* @__PURE__ */ jsx5(X, { size: 20, weight: "bold", color: colors.gray200 }) })
      ] }),
      /* @__PURE__ */ jsx5(ToastViewport, {})
    ] });
  }
);
Toast2.displayName = "Toast";

// src/components/Tooltip/styles.ts
import * as RadixTooltip from "@radix-ui/react-tooltip";
var slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(2px)"
  },
  to: {
    opacity: 1,
    transform: "translate(0)"
  }
});
var TooltipContainer = styled(RadixTooltip.Provider, {});
var TooltipRoot = styled(RadixTooltip.Root, {});
var TooltipPortal = styled(RadixTooltip.Portal, {});
var TooltipContent = styled(RadixTooltip.Content, {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  color: "$gray100",
  fontWeight: "$medium",
  fontSize: "$sm",
  borderRadius: "$sm",
  '&[data-state="delayed-open"][data-side="bottom]': {
    animation: `${slideUpAndFade} 400ms ease-in`
  }
});
var TooltipTrigger = styled(RadixTooltip.Trigger, {});
var TooltipArrow = styled(RadixTooltip.Arrow, {
  fill: "$gray900"
});

// src/components/Tooltip/index.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function Tooltip(_a) {
  var _b = _a, { trigger, children } = _b, props = __objRest(_b, ["trigger", "children"]);
  return /* @__PURE__ */ jsx6(TooltipContainer, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ jsxs5(TooltipRoot, { children: [
    /* @__PURE__ */ jsx6(TooltipTrigger, { asChild: true, children: trigger }),
    /* @__PURE__ */ jsx6(TooltipPortal, { children: /* @__PURE__ */ jsxs5(TooltipContent, { children: [
      children,
      /* @__PURE__ */ jsx6(TooltipArrow, {})
    ] }) })
  ] }) }));
}
export {
  Avatar2 as Avatar,
  Box,
  Button,
  Checkbox2 as Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
  Textarea,
  Toast2 as Toast,
  Tooltip,
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme
};
