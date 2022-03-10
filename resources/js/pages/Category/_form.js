import React, { useEffect, forwardRef } from "react";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Select,
    FormHelperText,
    useToast,
    Flex,
} from "@chakra-ui/react";
import ColorPicker from "../../components/ColorPicker";

import { useForm } from "@inertiajs/inertia-react";

import { isEmpty, values } from "lodash";

const _form = forwardRef((props, ref) => {
    const toast = useToast();

    const { data, setData, post, processing, errors, clearErrors } = useForm({
        title: null,
        page: null,
    });

    useEffect(() => {
        if (!isEmpty(errors)) {
            // Format display errors
            let description = values(errors).map((v, i) => (
                <Box key={i}>{v}</Box>
            ));

            // Ensure the close all toast openeds
            toast.closeAll();

            toast({
                //title: "Revise os campos.",
                description: <>{description}</>,
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        }
    }, [errors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.closeAll();
        clearErrors();
        post("/category/create");
        console.table("processing>>>", processing, "DATA>>>", data);
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)} ref={ref}>
            <FormControl id="title" isInvalid={errors.title}>
                <FormLabel htmlFor="title">Título</FormLabel>
                <Input
                    type="text"
                    defaultValue={data.title}
                    onChange={({ target }) => setData("title", target.value)}
                />
            </FormControl>

            <FormControl mt="2.5em" id="page" isInvalid={errors.page}>
                <FormLabel>Página</FormLabel>
                <Select
                    placeholder="Selecione uma página"
                    defaultValue={data.page}
                    onChange={({ target }) => setData("page", target.value)}
                >
                    <option>Notícias</option>
                    <option>Galeria de fotos</option>
                    <option>Vídeos</option>
                    <option>Colunas</option>
                </Select>
                <FormHelperText>
                    Informe a página que essa categoria deve ficar dísponivel
                </FormHelperText>
            </FormControl>

            <FormControl mt="2.5em" id="color" isInvalid={errors.color}>
                <FormLabel>Selecione uma cor</FormLabel>
                <Flex alignItems="center">
                    <ColorPicker />
                    <FormHelperText ml=".75em" mt="0">
                        Essa cor só será usada de acordo com o design do site
                    </FormHelperText>
                </Flex>
            </FormControl>
        </form>
    );
});

export default _form;
