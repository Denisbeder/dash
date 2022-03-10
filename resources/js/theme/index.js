import { extendTheme } from "@chakra-ui/react";
import * as Components from "./components";
import colors from "./colors";
import styles from "./styles";
import shadows from "./shadows";

const theme = extendTheme({
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
    colors,
    styles,
    shadows,
    components: {
        ...Components,
    },
});

console.log(theme);

export default theme;
