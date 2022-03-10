import React from "react";
import { Container as ContainerBase, Box } from "@chakra-ui/react";

const Container = ({ children, ...rest }) => (
    <ContainerBase
        padding="0"
        maxW="100%"
        {...rest}
    >
        <Box padding={{ base: "1em", md: "2.5em" }}>{children}</Box>
    </ContainerBase>
);

export default Container;
