import React from "react";
import { Box } from "@chakra-ui/react";

const CardBody = ({ children, ...rest }) => {
    return (
        <Box padding={{ base: "1.5em", md: "2.5em" }} {...rest}>
            {children}
        </Box>
    );
};

export default CardBody;
