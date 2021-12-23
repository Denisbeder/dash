import React from "react";
import {
    Box,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
} from "@chakra-ui/react";

const NavItemAccordion = ({ text, icon, children }) => {
    return (
        <AccordionItem border="0">
            <AccordionButton
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
                <Box
                    flex="1"
                    display="flex"
                    alignItems="center"
                    textAlign="left"
                >
                    {icon} {text}
                </Box>
                <AccordionIcon sx={{ marginRight: 0 }} />
            </AccordionButton>
            <AccordionPanel
                backgroundColor="white"
                borderTop="1px solid"
                borderTopColor="lightGray"
                p=".75em .75em .75em 3.5em"
                display="flex"
                flexDirection="column"
                sx={{
                    a: {
                        fontSize: ".92em",
                        color: "lightText",
                        padding: ".15em 0",
                        transition: "color .25s",
                        _hover: { color: "darkText" },
                    },
                }}
            >
                {children}
            </AccordionPanel>
        </AccordionItem>
    );
};

export default NavItemAccordion;
