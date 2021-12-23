import { extendTheme } from "@chakra-ui/react";
import * as Components from "./components";
import colors from "./colors";
import styles from "./styles";

const theme = extendTheme({
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
    colors,
    styles,
    components: {
        ...Components,
    },
});

console.log(theme);

export default theme;
