import { darken } from "@chakra-ui/theme-tools";

const Button = {
    variants: {
        primary: {
            bg: "primary.500",
            color: "white",
            _hover: {
                bg: darken("primary.500", 3.5),
            },
        },
        success: {
            bg: "success",
            color: "white",
            _hover: {
                bg: darken("success", 3.5),
            },
        },
        info: {
            bg: "info.500",
            color: "white",
            _hover: {
                bg: darken("info.500", 3.5),
            },
        },
        danger: {
            bg: "danger.500",
            color: "white",
            _hover: {
                bg: darken("danger.500", 3.5),
            },
        },
        warning: {
            bg: "warning.500",
            color: "white",
            _hover: {
                bg: darken("warning.500", 3.5),
            },
        },
        white: {
            bg: "white",
            _hover: {
                bg: "primary.500",
                color: "white",
                borderColor: "primary.500",
            },
            _hover: {
                bg: "primary.500",
                color: "white",
                borderColor: "primary.500",
            },
            _expanded: {
                bg: "primary.500",
                color: "white",
                borderColor: "primary.500",
            },
            _active: {
                bg: "primary.500",
                color: "white",
                borderColor: "primary.500",
            },
        },
    },
};

export default Button;
