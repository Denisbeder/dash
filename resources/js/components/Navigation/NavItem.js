import React from "react";
import { Box } from "@chakra-ui/react";
import { InertiaLink } from "@inertiajs/inertia-react";

const NavItem = ({ href, text, icon, ...rest }) => {
    return (
        <InertiaLink href={href} {...rest}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                padding=".75em 1.75em"
                marginTop={0}
                width="100%"
                position="relative"
                color="darkText"
                transition="background .5s, color .25s"
                zIndex={0}
                sx={{
                    svg: {
                        '&:not([class*="accordion__icon"])': {
                            marginRight: ".5em",
                            fontSize: "1.15em",
                        },
                    },
                    _before: {
                        left: "-.4em",
                        top: 0,
                        bottom: 0,
                        content: `""`,
                        position: "absolute",
                        width: "6px",
                        height: "100%",
                        background: "primary",
                        borderTopRightRadius: "1000px",
                        borderBottomRightRadius: "1000px",
                        transition: "left .25s",
                    },
                    _hover: {
                        background: "fadeGray",
                        color: "primary",
                        _before: {
                            left: 0,
                        },
                    },
                    _expanded: {
                        background: "fadeGray",
                        color: "primary",
                        _before: {
                            left: 0,
                        },
                    },
                }}
            >
                {icon} {text}
            </Box>
        </InertiaLink>
    );
};

export default NavItem;
