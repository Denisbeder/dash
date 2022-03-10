import React, { useEffect } from "react";
import { InertiaHead, useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import {
    Box,
    Button,
    ButtonGroup,
    IconButton,
    Input,
    FormControl,
    FormLabel,
    FormHelperText,
    Stack,
    VStack,
    SimpleGrid,
    Textarea,
    Checkbox,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useToast,
    useDisclosure,
} from "@chakra-ui/react";
import {
    HiOutlineArrowLeft,
    HiOutlineEye,
    HiOutlineCheckCircle,
    HiOutlineStar,
    HiOutlineCollection,
} from "react-icons/hi";
import { FiSave } from "react-icons/fi";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Header from "../../components/Header";
import TopBar from "../../components/TopBar";
import ImgPreviewInput from "../../components/ImgPreviewInput";
import SchedullerInput from "../../components/SchedullerInput";
import AuthorInput from "../../components/AuthorInput";
import { isEmpty, values } from "lodash";
import CategoryInput from "../../components/CategoryInput";
import SEOInput from "../../components/SEOInput";

const Form = () => {
    const toast = useToast();
    const {
        isOpen: isOpenModalHighlights,
        onOpen: onOpenModalHighlights,
        onClose: onCloseModalHighlights,
    } = useDisclosure();
    const {
        isOpen: isOpenModalRelated,
        onOpen: onOpenModalRelated,
        onClose: onCloseModalRelated,
    } = useDisclosure();

    const { data, setData, post, processing, errors, clearErrors } = useForm({
        title: null,
        description: null,
        hat: null,
        short_title: null,
        blocks: null,
        commentable: true,
        published_at: new Date(),
        unpublished_at: null,
        author: null,
        source: null,
        categories: [],
        seo_title: null,
        seo_description: null,
        seo_keywords: null,
        cover_image: null,
        use_cover_image: true,
        status: "publish",
    });

    useEffect(() => {
        if (!isEmpty(errors)) {
            let description = values(errors).map((v, i) => (
                <Box key={i}>{v}</Box>
            ));

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
        console.log("<<<DATA>>>");
        console.log(data);
        console.log("<<<DATA>>>");
        post("/post/create");
        clearErrors();
    };

    return (
        <>
            <InertiaHead title="Criar postagem" />
            <form onSubmit={(e) => handleSubmit(e)}>
                <Header>
                    <TopBar title="Criar postagem">
                        <ButtonGroup>
                            <IconButton
                                display={{ base: "inline-flex", md: "none" }}
                                rounded="md"
                                variant="outline"
                                icon={<HiOutlineArrowLeft />}
                                onClick={() => Inertia.get("/post")}
                            />

                            <Button
                                disabled={processing}
                                display={{ base: "none", md: "inline-flex" }}
                                variant="outline"
                                leftIcon={<HiOutlineArrowLeft />}
                                onClick={() => Inertia.get("/post")}
                            >
                                Cancelar
                            </Button>

                            <Button
                                disabled={processing}
                                display={{ base: "none", md: "inline-flex" }}
                                variant="outline"
                                leftIcon={<HiOutlineEye />}
                            >
                                Prévia
                            </Button>

                            <Button
                                disabled={processing}
                                display={{ base: "none", md: "inline-flex" }}
                                variant="outline"
                                leftIcon={<FiSave />}
                            >
                                Salvar rascunho
                            </Button>

                            <Button
                                disabled={processing}
                                variant="primary"
                                leftIcon={<HiOutlineCheckCircle />}
                                type="submit"
                            >
                                Publicar
                            </Button>
                        </ButtonGroup>
                    </TopBar>
                </Header>

                <Container maxW="container.xl" variant="has-header-top-bar">
                    <Stack
                        direction={["column", "row"]}
                        align="flex-start"
                        spacing="2.5em"
                    >
                        <Box w={{ base: "100%", md: "65%" }}>
                            <Card>
                                <Card.Body>
                                    <FormControl
                                        id="title"
                                        isInvalid={errors.title}
                                    >
                                        <FormLabel>Título</FormLabel>
                                        <Input
                                            type="text"
                                            placeholder="Comece com um título"
                                            defaultValue={data.title}
                                            onChange={({ target }) =>
                                                setData("title", target.value)
                                            }
                                        />
                                    </FormControl>
                                </Card.Body>
                                <Card.FooterCollapse
                                    isOpen={true}
                                    title="Descrição &bull; Chapéu &bull; Título curto"
                                >
                                    <VStack spacing="1.25em">
                                        <SimpleGrid
                                            templateColumns="auto 33%"
                                            spacing="1.25em"
                                            w="100%"
                                        >
                                            <FormControl
                                                id="description"
                                                isInvalid={errors.description}
                                            >
                                                <FormLabel variant="small">
                                                    Descrição
                                                </FormLabel>
                                                <Input
                                                    type="text"
                                                    defaultValue={
                                                        data.description
                                                    }
                                                    onChange={({ target }) =>
                                                        setData(
                                                            "description",
                                                            target.value
                                                        )
                                                    }
                                                />
                                            </FormControl>

                                            <FormControl id="hat">
                                                <FormLabel variant="small">
                                                    Chapéu
                                                </FormLabel>
                                                <Input
                                                    type="text"
                                                    defaultValue={data.hat}
                                                    onChange={({ target }) =>
                                                        setData(
                                                            "hat",
                                                            target.value
                                                        )
                                                    }
                                                />
                                            </FormControl>
                                        </SimpleGrid>

                                        <FormControl id="title_short">
                                            <FormLabel variant="small">
                                                Título curto
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                defaultValue={data.title_short}
                                                onChange={({ target }) =>
                                                    setData(
                                                        "title_short",
                                                        target.value
                                                    )
                                                }
                                            />
                                            <FormHelperText color="muted">
                                                Aqui você pode alterar o título
                                                que irá aparecer na capa quando
                                                esse post for destacado na home
                                                afim de manter o layout da
                                                página ajustado.
                                            </FormHelperText>
                                        </FormControl>
                                    </VStack>
                                </Card.FooterCollapse>
                            </Card>

                            <Card mt="2.5em">
                                <Card.Body>
                                    <FormControl id="blocks">
                                        <FormLabel>Texto</FormLabel>
                                        <Textarea
                                            defaultValue={data.blocks}
                                            onChange={({ target }) =>
                                                setData("blocks", target.value)
                                            }
                                        />
                                    </FormControl>
                                </Card.Body>
                                <Card.FooterCollapse title="Adicionar Resumo">
                                    <VStack spacing="1.25em">
                                        <FormControl id="summary">
                                            <FormLabel variant="small">
                                                Resumo
                                            </FormLabel>
                                            <Textarea
                                                defaultValue={data.summary}
                                                onChange={({ target }) =>
                                                    setData(
                                                        "summary",
                                                        target.value
                                                    )
                                                }
                                            />
                                        </FormControl>
                                    </VStack>
                                </Card.FooterCollapse>
                            </Card>

                            <Card mt="2.5em">
                                <Card.Body>
                                    <SEOInput
                                        valueTitle={data.seo_title}
                                        valueDescription={data.seo_description}
                                        valueKeywords={data.seo_keywords}
                                        handleOnChange={(fieldName, value) =>
                                            setData(fieldName, value)
                                        }
                                    />
                                </Card.Body>
                            </Card>
                        </Box>

                        <Box w={{ base: "100%", md: "35%" }}>
                            <Card>
                                <Card.Body>
                                    <VStack spacing="1.25em">
                                        <Button
                                            isFullWidth={true}
                                            variant="outline"
                                            leftIcon={<HiOutlineStar />}
                                            onClick={() => Inertia.visitInModal('/modal')}
                                        >
                                            Modal URL
                                        </Button>

                                        <Button
                                            isFullWidth={true}
                                            variant="outline"
                                            leftIcon={<HiOutlineStar />}
                                            onClick={() => Inertia.visitInModal('/modal')}
                                        >
                                            Destacar na página inicial
                                        </Button>

                                        <Button
                                            isFullWidth={true}
                                            variant="outline"
                                            leftIcon={<HiOutlineCollection />}
                                            onClick={onOpenModalRelated}
                                        >
                                            Adicionar relacionados
                                        </Button>
                                    </VStack>
                                </Card.Body>
                            </Card>

                            <Card mt="2.5em">
                                <Card.Body>
                                    <FormControl id="title">
                                        <FormLabel>Imagem de capa</FormLabel>
                                        <ImgPreviewInput
                                            handleOnChange={(file) =>
                                                setData("cover_image", file)
                                            }
                                        />
                                    </FormControl>
                                </Card.Body>
                                <Card.Footer title="Adicionar Resumo">
                                    <VStack spacing="1.25em">
                                        <FormControl>
                                            <Checkbox
                                                colorScheme="primary"
                                                value="1"
                                                size="sm"
                                                defaultChecked={
                                                    data.use_cover_image
                                                }
                                                onChange={({ target }) =>
                                                    setData(
                                                        "use_cover_image",
                                                        target.checked
                                                    )
                                                }
                                            >
                                                Mostrar imagem de capa dentro da
                                                postagem
                                            </Checkbox>
                                        </FormControl>

                                        <FormControl>
                                            <Checkbox
                                                colorScheme="primary"
                                                value="1"
                                                size="sm"
                                                defaultChecked={
                                                    data.sensitive_cover_image
                                                }
                                                onChange={({ target }) =>
                                                    setData(
                                                        "sensitive_cover_image",
                                                        target.checked
                                                    )
                                                }
                                            >
                                                Imagem com conteúdo sensível
                                            </Checkbox>
                                        </FormControl>
                                    </VStack>
                                </Card.Footer>
                            </Card>

                            <Card mt="2.5em">
                                <Card.Body>
                                    <VStack spacing="1.25em">
                                        <FormControl id="author">
                                            <FormLabel variant="small">
                                                Autor
                                            </FormLabel>
                                            <AuthorInput
                                                value={data.author}
                                                handleOnChange={(dataItem) =>
                                                    setData("author", dataItem)
                                                }
                                            />
                                        </FormControl>

                                        <FormControl id="source">
                                            <FormLabel variant="small">
                                                Fonte
                                            </FormLabel>
                                            <Input
                                                name="source"
                                                type="text"
                                                placeholder="Digite ou cole uma URL"
                                                defaultValue={data.source}
                                                onChange={({ target }) =>
                                                    setData(
                                                        target.name,
                                                        target.value
                                                    )
                                                }
                                            />
                                        </FormControl>

                                        <FormControl id="category_id">
                                            <FormLabel variant="small">
                                                Categorias
                                            </FormLabel>
                                            <CategoryInput
                                                value={data.categories}
                                                handleOnChange={(value) =>
                                                    setData("categories", value)
                                                }
                                            />
                                        </FormControl>
                                    </VStack>
                                </Card.Body>
                            </Card>

                            <Card mt="2.5em">
                                <Card.Body>
                                    <VStack spacing="1.25em">
                                        <FormControl>
                                            <Checkbox
                                                colorScheme="primary"
                                                value="1"
                                                size="sm"
                                                defaultChecked
                                                onChange={({ target }) =>
                                                    setData(
                                                        "commentable",
                                                        target.value
                                                    )
                                                }
                                            >
                                                Permitir comentários
                                            </Checkbox>
                                        </FormControl>

                                        <FormControl id="published_at">
                                            <FormLabel variant="small">
                                                Data e hora da postagem
                                            </FormLabel>
                                            <SchedullerInput
                                                publishedAtValue={
                                                    data.published_at
                                                }
                                                unpublishedAtValue={
                                                    data.unpublished_at
                                                }
                                                handleOnChange={(
                                                    fieldName,
                                                    value
                                                ) => setData(fieldName, value)}
                                            />
                                        </FormControl>
                                    </VStack>
                                </Card.Body>
                            </Card>
                        </Box>
                    </Stack>
                </Container>
            </form>

            <Modal
                isOpen={isOpenModalHighlights}
                onClose={onCloseModalHighlights}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Selecione uma posição</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                        rwe ewrw erw rw r<br />
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="primary"
                            onClick={onCloseModalHighlights}
                        >
                            Selecionar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Modal
                size="6xl"
                isOpen={isOpenModalRelated}
                onClose={onCloseModalRelated}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Relacionados</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>rwe ewrw erw rw r</ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="primary"
                            onClick={onCloseModalRelated}
                        >
                            Finalizar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Form;
