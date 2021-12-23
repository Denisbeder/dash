import React, { useLayoutEffect } from "react";
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

const configs = (loadImage, theme) => {
    return {
        includeUI: {
            locale: locale,
            loadImage: loadImage,
            theme: {
                "header.backgroundColor":
                    `white; padding: 0 ${theme.space[5]};`,
                "common.backgroundColor": "white",
                "downloadButton.backgroundColor": theme.colors.primary[500],
                "downloadButton.border": `none; border-radius: ${theme.radii.md};`,
                "loadButton.border": `1px solid ${theme.colors.borderColor}; border-radius: ${theme.radii.md};`,
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
            cornerSize: 50,
            cornerStrokeColor: "blue",
            rotatingPointOffset: 70,
            borderColor: "red",
            lineWidth: 2,
        },
        usageStatistics: false,
    };
};

const EditorImage = (props) => {
    useLayoutEffect(() => {
        // Remove logo
        document
            .getElementsByClassName("tui-image-editor-header-logo")[0]
            .remove();

        // Remove button load image
        document
            .getElementsByClassName("tui-image-editor-header-buttons")[0]
            .childNodes[1].remove();
    }, []);

    return (
        <ImageEditor
            {...configs(
                {
                    path: "http://localhost:9000/dash/photo-1609753897383-bf9d71a1138d.jpg",
                    name: "SampleImage",
                },
                useTheme()
            )}
        />
    );
};

export default EditorImage;
