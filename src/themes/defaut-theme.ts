import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      background: "#F5F5F5",
      fontFamily: "'Be Vietnam Pro', sans-serif",
    },
    a: {
      textDecoration: "none",
    },
    button: {
      webkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      cursor: "pointer",
    },
  },
};

const components = {
  Button: {
    baseStyle: {
      lineHeight: "100%",
    },
  },
  Text: {
    baseStyle: (props: {
      color?: string;
      fontFamily?: string;
      bg?: string;
    }) => ({
      fontFamily: props.fontFamily || "Be Vietnam Pro",
      color: props.color || "black",
      webkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "auto",
    }),
  },
  Radio: {
    baseStyle: {
      control: {
        borderColor: "#BABABA",
        boxSize: "26px",
        _checked: {
          //đc chọn
          bg: "white",
          borderColor: "#BABABA",
          _before: {
            boxSize: "16px",
            bg: "#FF5F27",
          },
          _hover: {
            bg: "white",
            border: "1px solid #FF8747",
          },
        },
        _hover: {
          bg: "white",
          borderColor: "#BABABA",
        },
      },
    },
  },
};

export const defaultTheme = extendTheme({
  config,
  styles,
  components,
});
