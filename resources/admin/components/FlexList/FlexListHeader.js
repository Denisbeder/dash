import React from "react";
import { Flex } from "@chakra-ui/react";

const FlexListHeader = ({ children }) => {
    return (
        <Flex
            padding=".25em 1em"
            display={{ base: "none", md: "flex" }}
            textTransform="uppercase"
            fontWeight="bold"
            fontSize=".75em"
            color="muted"
        >
            {children}
        </Flex>
    );
};

export default FlexListHeader;
