import React from "react";
import { Flex } from "@chakra-ui/react";

const FlexList = ({ children }) => {
    return (
        <Flex flexDirection="column">
            {children}
        </Flex>
    );
};

export default FlexList;
