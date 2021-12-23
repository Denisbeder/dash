import React from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { Stack, Button, IconButton } from "@chakra-ui/react";
import { Inertia } from "@inertiajs/inertia";

const Pagination = () => {
    const currentPage = new URL(window.location).searchParams.get("page");

    const handlePageCurerent = (page) => Inertia.visit(`?page=${page}`);

    const getStyle = (page) =>
        currentPage == page ? styles.pageCurrent : styles.default;

    const styles = {
        default: {
            bg: "white",
            borderColor: "borderColor",
            variant: "outline",
            size: "sm",
            borderRadius: 1000,
        },
        pageCurrent: {
            variant: "primary",
            size: "sm",
            borderRadius: 1000,
        },
    };

    return (
        <Stack direction="row" spacing={2} align="center" mx="auto">
            <Button {...getStyle(1)} onClick={() => handlePageCurerent(1)}>
                1
            </Button>
            <Button {...getStyle(2)} onClick={() => handlePageCurerent(2)}>
                2
            </Button>
            <Button {...getStyle(3)} onClick={() => handlePageCurerent(3)}>
                3
            </Button>
            <Button {...getStyle(4)} onClick={() => handlePageCurerent(4)}>
                4
            </Button>

            <IconButton
                bg="white"
                borderColor="borderColor"
                variant="outline"
                size="lg"
                borderRadius={1000}
                icon={<FiArrowLeft />}
                onClick={() => handlePageCurerent(currentPage != 1 ? parseInt(currentPage) - 1 : 1)}
            />

            <IconButton
                bg="white"
                borderColor="borderColor"
                variant="outline"
                size="lg"
                borderRadius={1000}
                icon={<FiArrowRight />}
                onClick={() => handlePageCurerent(parseInt(currentPage) + 1)}
            />
        </Stack>
    );
};

export default Pagination;
