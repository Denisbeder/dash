const styles = {
    global: (props) => ({
        "html, body": {
            color: "darkText",
        },
        "html.sidebar-is-open, html.sidebar-is-open body": {
            overflow: "hidden",
        },
        "::-webkit-scrollbar": {
            width: "6px",
            backgroundColor: "inherit",
        },
        "::-webkit-scrollbar-track": {
            borderRadius: "100px",
        },
        "::-webkit-scrollbar-thumb": {
            borderRadius: "100px",
            backgroundColor: "rgba(0,0,0,.3)",
        },
    }),
};

export default styles;
