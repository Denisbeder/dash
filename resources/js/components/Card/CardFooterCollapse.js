import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from "@chakra-ui/react";

const CardFooterCollapse = ({ children, title, isOpen = false }) => {
    return (
        <Accordion defaultIndex={[isOpen ? 0 : false]} allowMultiple>
            <AccordionItem
                bg="lightGray"
                borderBottom="none"
                position="relative"
                pt="1.5em"
                borderBottomRadius="md"
            >
                <AccordionButton
                    color="muted"
                    fontSize="14px"
                    py=".25em"
                    _hover={{ bg: "lightGray" }}
                    bg="white"
                    position="absolute"
                    rounded="lg"
                    w="auto"
                    top="-14px"
                    border="1px"
                    borderColor="fadeGray"
                    left="50%"
                    transform="translateX(-50%)"
                    maxW="60%"
                >
                    <Box
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        lineHeight="1"
                    >
                        {title}
                    </Box>
                    <AccordionIcon mb="-1px" />
                </AccordionButton>

                <AccordionPanel
                    p={{ base: "0 1.5em 1.25em", md: "0 2.5em 1.25em" }}
                >
                    {children}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default CardFooterCollapse;
