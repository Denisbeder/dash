import React from "react";
import { Flex } from "@chakra-ui/react";

const CardFooter = ({ children }) => {
    return (
        <Flex
            bg="lightGray"
            borderBottom="none"
            position="relative"
            p={{ base: "1.5em 1.25em", md: "1.5em 2.5em 1.25em" }}
            borderBottomRadius="md"
            borderTop="1px"
            borderTopColor="gray.200"
        >
            {children}
        </Flex>
    );
};

export default CardFooter;
