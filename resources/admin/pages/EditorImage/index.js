import React, { useLayoutEffect, useEffect, useState, useRef } from "react";
import "tui-image-editor/dist/tui-image-editor.css";
import ImageEditor from "@toast-ui/react-image-editor";
import { useTheme } from "@chakra-ui/react";

const locale = {
    Apply: "Aplicar",
    Bold: "Negrito",
    Cancel: "Cancelar",
    Center: "Centro",
    Circle: "Circulo",
    Color: "Cor",
    Crop: "Cortar",
    Delete: "Deletar",
    DeleteAll: "Deletar tudo",
    Download: "Salvar",
    Draw: "Desenhar",
    Fill: "Preenchimento",
    Free: "Livre",
    Flip: "Espelhar",
    "Flip X": "Espelhar X",
    "Flip Y": "Espelhar Y",
    Hand: "Arrastar",
    History: "História",
    Italic: "Itálico",
    Left: "Esquerda",
    Load: "Selecionar",
    Range: "Variação",
    Retangle: "Retângulo",
    Redo: "Resfazer",
    Reset: "Resetar",
    Right: "Direita",
    Rotate: "Girar",
    Square: "Quadrado",
    Straight: "Linha reta",
    Stroke: "Borda",
    Shape: "Forma",
    Text: "Texto",
    "Text size": "Tamanho texto",
    Triangle: "Triângulo",
    Underline: "Sublinhado",
    Undo: "Desfazer",
    ZoomOut: "Reduzir zoom",
    ZoomIn: "Aumentar zoom",
};

const configs = (theme, loadImage) => {
    // Set default image 1x1px transparent.
    loadImage = loadImage || {
        path: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=",
        name: "image_init",
    };
    return {
        includeUI: {
            locale: locale,
            loadImage: loadImage,
            theme: {
                "header.backgroundColor": `white; padding: 0 ${theme.space[5]};`,
                "common.backgroundColor": "white",
                "downloadButton.backgroundColor": theme.colors.primary[500],
                "downloadButton.border": `none; border-radius: ${theme.radii.md};`,
                "loadButton.border": `1px solid ${theme.colors.borderColor}; border-radius: ${theme.radii.md};`,
                "downloadButton.fontSize": "15px",
                "loadButton.fontSize": "15px",
            },
            menu: ["crop", "flip", "rotate", "draw", "shape", "text"],
            initMenu: null,
            uiSize: {
                width: "100%",
                height: "calc(100vh - (62px + 7rem))",
            },
            menuBarPosition: "bottom",
        },
        cssMaxHeight: 400,
        cssMaxWidth: 500,
        selectionStyle: {
            cornerSize: 20,
            cornerColor: "silver",
            cornerStrokeColor: "#333333",
            rotatingPointOffset: 70,
            transparentCorners: false,
            borderColor: "silver",
            lineWidth: 2,
        },
        usageStatistics: false,
    };
};

const EditorImage = (props) => {
    const editorRef = useRef(null);
    const [editorInstance, setEditorInstance] = useState(null);
    const theme = useTheme();

    useLayoutEffect(() => {
        // Add border radius bottom
        document.querySelector(
            ".tui-image-editor-container.bottom"
        ).style.borderRadius = `${theme.radii["md"]}`;

        // Remove logo
        document
            .getElementsByClassName("tui-image-editor-header-logo")[0]
            .remove();

        // Remove button load image
        document
            .getElementsByClassName("tui-image-editor-header-buttons")[0]
            .childNodes[1].remove();
    }, []);

    useLayoutEffect(() => {
        setEditorInstance(editorRef.current.getInstance());
    });

    useLayoutEffect(() => {
        console.log(editorRef.current.getRootElement());
    });

    if (editorInstance !== null) {
        console.log(editorInstance);
        //console.log(editorInstance.toDataURL());

        setTimeout(() => {
            editorInstance
                .loadImageFromURL(
                    "http://localhost:9000/dash/palacio_do_planalto_0.jpg",
                    "palacio_do_planalto_0.jpg"
                )
                .then((result) => {
                    console.log(
                        "old : " + result.oldWidth + ", " + result.oldHeight
                    );
                    console.log(
                        "new : " + result.newWidth + ", " + result.newHeight
                    );
                });
        }, 100);
    }

    return <ImageEditor ref={editorRef} {...configs(theme)} />;
};

export default EditorImage;
