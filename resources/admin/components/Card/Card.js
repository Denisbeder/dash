import React from "react";
import { Flex } from "@chakra-ui/react";

const Card = ({ children, ...rest }) => {
    return (
        <Flex
            bg="white"
            rounded="md"
            border="1px solid"
            borderColor="borderColor"
            flexDirection="column"
            marginLeft="auto"
            marginRight="auto"
            w="100%"
            {...rest}
        >
            {children}
        </Flex>
    );
};

export default Card;
