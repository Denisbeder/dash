import React from "react";
import { Image } from "@chakra-ui/react";
import LazyPLaceholder from "../../assets/lazy_placeholder.gif";

const Img = ({ ...rest }) => {
    return (
        <Image
            fallbackSrc={LazyPLaceholder}
            rounded="md"
            objectFit="cover"
            minW="75px"
            border="1px"
            borderColor="fadeGray"
            {...rest}
        />
    );
};

export default Img;
