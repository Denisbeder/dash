import React from "react";
import { Flex, Avatar } from "@chakra-ui/react";
import Combobox from "../../components/Combobox";

const AuthorInput = ({ handleOnChange, value }) => {
    const options = [
        {
            id: 1,
            name: "Denisbeder",
            avatar: "https://bit.ly/dan-abramov",
        },
        {
            id: 2,
            name: "Redação",
            avatar: "https://bit.ly/kent-c-dodds",
        },
    ];

    const handleAuthor = (dataItem) => {
        handleOnChange(dataItem || null);
    };

    return (
        <Combobox
            name="author"
            placeholder="Digite ou selecione"
            hideEmptyPopup
            dataKey="id"
            textField="name"
            defaultValue={value || null}
            onChange={(dataItem) => handleAuthor(dataItem)}
            renderListItem={({ item }) => {
                return (
                    <Flex alignItems="center">
                        <Avatar
                            name="Dan Abrahmov"
                            src={item.avatar}
                            size="xs"
                            mr=".75em"
                        />
                        {item.name}
                    </Flex>
                );
            }}
            data={options}
        />
    );
};

export default AuthorInput;
