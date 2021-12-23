import React from "react";
import MultiSelect from "../../components/MultiSelect";

const CategoryInput = ({ handleOnChange, value = [], ...rest }) => {
    const options = [
        { id: 1, name: "Brasil" },
        { id: 2, name: "Capital" },
        { id: 3, name: "Cidade" },
        { id: 4, name: "Economia" },
        { id: 5, name: "Educação" },
        { id: 6, name: "Esportes" },
        { id: 7, name: "Estado" },
        { id: 8, name: "Geral" },
        { id: 9, name: "Mundo" },
        { id: 10, name: "Policial" },
        { id: 11, name: "Política" },
        { id: 12, name: "Saúde" },
        { id: 13, name: "Região" },
    ];

    const handleCategory = (dataItem, action) => {
        const categories = value;
        const id = dataItem.id;
        const index = categories.indexOf(id);
        if (action === "remove") {
            categories.splice(index, 1);
            handleOnChange(categories);
        } else {
            handleOnChange([...categories, id]);
        }        
    };

    return (
        <MultiSelect
            name="category"
            placeholder="Sem categoria (Selecione uma ou mais)"
            dataKey="id"
            textField="name"
            value={value}
            onChange={(_, { dataItem, action }) =>
                handleCategory(dataItem, action)
            }
            data={options}
            {...rest}
        />
    );
};

export default CategoryInput;
