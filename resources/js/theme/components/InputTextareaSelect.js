const variants = (theme) => ({
    border: "1px solid",
    borderColor: "inherit",
    bg: "white",
    _focus: {
        boxShadow: `0 0 0 1px ${theme.colors.primary[500]}`,
        borderColor: `${theme.colors.primary[500]}`,
    },
    _hover: {
        borderColor: `${theme.colors.gray[300]}`,
    },
    _readOnly: {
        boxShadow: "none !important",
        userSelect: "all",
    },
    _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
    },
    _invalid: {
        borderColor: `${theme.colors.red[500]}`,
        boxShadow: `0 0 0 1px ${theme.colors.red[500]}`,
    },
});

// Variants
const variantsInput = {
    primary: (props) => ({
        field: variants(props.theme),
    }),
};

const variantsTextarea = {
    primary: (props) => variants(props.theme),
};

const variantsSelect = {
    primary: (props) => ({
        field: variants(props.theme),
    }),
};

// Components
export const Input = {
    defaultProps: {
        variant: "primary",
    },
    variants: { ...variantsInput },
};

export const Textarea = {
    defaultProps: {
        variant: "primary",
    },
    variants: { ...variantsTextarea },
};

export const Select = {
    defaultProps: {
        variant: "primary",
    },
    variants: { ...variantsSelect },
};
