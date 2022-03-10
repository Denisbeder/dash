import React from "react";
import {
    Input,
    FormControl,
    FormLabel,
    FormHelperText,
    VStack,
} from "@chakra-ui/react";

const SEOInput = ({ handleOnChange, valueTitle, valueDescription, valueKeywords }) => {
    const handleSEO = (fieldName, value) => {
        handleOnChange(fieldName, value);
    };

    return (
        <VStack spacing="1.25em">
            <FormControl>
                <FormLabel mb="0">Otimização SEO</FormLabel>
                <FormHelperText>
                    SEO (Search Egine Optimization) ajuda a melhorar o
                    ranqueamento nos mecanismos de buscas como exemplo, o
                    Google.
                </FormHelperText>
            </FormControl>

            <FormControl id="seo_title">
                <FormLabel variant="small">SEO Título</FormLabel>
                <Input
                    type="text"
                    defaultValue={valueTitle || null}
                    onChange={({ target }) =>
                        handleSEO("seo_title", target.value || null)
                    }
                />
            </FormControl>

            <FormControl id="seo_description">
                <FormLabel variant="small">SEO Descrição</FormLabel>
                <Input
                    type="text"
                    defaultValue={valueDescription || null}
                    onChange={({ target }) =>
                        handleSEO("seo_description", target.value || null)
                    }
                />
            </FormControl>

            <FormControl id="seo_keywords">
                <FormLabel variant="small">SEO Palavras-chaves</FormLabel>
                <Input
                    type="text"
                    defaultValue={valueKeywords || null}
                    onChange={({ target }) =>
                        handleSEO("seo_keywords", target.value || null)
                    }
                />
            </FormControl>
        </VStack>
    );
};

export default SEOInput;
