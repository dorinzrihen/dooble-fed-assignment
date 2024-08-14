import { capitalize } from "lodash";
import { GenderEnum, StatusEnum } from "../../RickAndMortyCharacterPage.types";

const getSelectOptions = (arrOptions: string[]) => {
    return arrOptions.map((option) => ({
        name: capitalize(option),
        value: option,
    }));
};

export const genderOptions = getSelectOptions(Object.values(GenderEnum));
export const statusOptions = getSelectOptions(Object.values(StatusEnum));