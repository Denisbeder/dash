import React, { useState, useRef } from "react";
import {
    Box,
    Flex,
    Icon,
    Textarea,
    Button,
    IconButton,
} from "@chakra-ui/react";
import {
    HiOutlinePhotograph,
    HiOutlineTrash,
    HiOutlinePencil,
} from "react-icons/hi";
import { FiCrosshair } from "react-icons/fi";
import Img from "../Img";
import { Inertia } from "@inertiajs/inertia";

const ImgInputPreview = ({ name, label, handleOnChange, ...rest }) => {
    const [srcPreview, setSrcPreview] = useState(null);
    const inputRef = useRef(null);

    const createSrcPreview = (file) => {
        const url = URL.createObjectURL(file);
        setSrcPreview(url);
    };

    const handleChangeFile = (e) => {
        createSrcPreview(e.target.files[0]);
        handleOnChange(e.target.files[0]);
    };

    const handleRemoveFile = () => {
        setSrcPreview(null);
        handleOnChange(null);
    };

    return (
        <>
            {srcPreview !== null ? (
                <Box pos="relative">
                    <Img w="100%" minH="auto" src={srcPreview} />

                    <Flex pos="absolute" left=".35em" top=".35em">
                        <Button
                            title="Cortar, Girar, Espelhar e Desenhar sob a imagem."
                            size="sm"
                            bg="white"
                            rounded="md"
                            border="1px"
                            borderColor="borderColor"
                            leftIcon={<HiOutlinePencil />}
                            onClick={() => Inertia.visitInModal("/dash/editor-image")}
                        >
                            Editar
                        </Button>

                        <IconButton
                            title="Ponto focal (Selecione uma área importante da imagem que não deve ser cortada)."
                            ml=".5em"
                            size="sm"
                            bg="white"
                            rounded="full"
                            border="1px"
                            borderColor="borderColor"
                            icon={<FiCrosshair />}
                            onClick={() => {
                                inputRef.current.click();
                            }}
                        />
                    </Flex>

                    <Flex pos="absolute" right=".35em" top=".35em">
                        <IconButton
                            title="Trocar"
                            mr=".5em"
                            size="sm"
                            bg="white"
                            rounded="full"
                            border="1px"
                            borderColor="borderColor"
                            icon={<HiOutlinePhotograph />}
                            onClick={() => {
                                inputRef.current.click();
                            }}
                        />
                        <IconButton
                            title="Remover"
                            size="sm"
                            bg="white"
                            rounded="full"
                            border="1px"
                            borderColor="borderColor"
                            icon={<HiOutlineTrash />}
                            onClick={() => handleRemoveFile()}
                        />
                    </Flex>

                    <Textarea mt=".5em" resize="none" placeholder="Legenda" />

                    <input
                        ref={inputRef}
                        type="file"
                        name={name}
                        onChange={(e) => handleChangeFile(e)}
                        style={{ display: "none", opacity: 0 }}
                        accept="image/*"
                        {...rest}
                    />
                </Box>
            ) : (
                <Box
                    minH="13em"
                    display="flex"
                    alignItems="stretch"
                    justifyContent="center"
                    flexWrap="wrap"
                    border="1px solid"
                    borderColor="borderColor"
                    rounded="md"
                    position="relative"
                    p={0}
                    sx={{
                        label: {
                            position: "relative",
                            zIndex: 1,
                            cursor: "pointer",
                            rounded: "md",
                            minH: "100%",
                            minW: "100%",
                            p: "1em",
                            textAlign: "center",
                            lineHeight: "1.1",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            color: "gray.400",
                        },
                        'input[type="file"]': {
                            opacity: 0,
                            display: "none",
                        },
                    }}
                >
                    <label>
                        <input
                            type="file"
                            name={name}
                            onChange={(e) => handleChangeFile(e)}
                            accept="image/*"
                            {...rest}
                        />
                        <Icon
                            as={HiOutlinePhotograph}
                            boxSize="30"
                            color="gray.300"
                        />
                        {label || "Clique e selecione um arquivo"}
                    </label>
                </Box>
            )}
        </>
    );
};

export default ImgInputPreview;
