import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import ReactSelect from "react-select";

interface Props {
    value: any;
    options: { value: any; label: string }[];
    setter: (value: any) => void;
    label: string;
    error?: string;
    touched?: boolean;
    name: string;
    placeholder?: string;
    isRequired?: boolean;
    isClearable: boolean;
    labelStyle?: string
}

const LabeledReactSelectInput = ({
    value,
    options,
    setter,
    label,
    error,
    touched,
    name,
    placeholder,
    isRequired,
    isClearable,
    labelStyle
}: Props) => {
    return (
        <FormControl isRequired={isRequired} isInvalid={Boolean(error) && touched}>
            <FormLabel htmlFor={name} paddingBottom={labelStyle}>{label}</FormLabel>
            <ReactSelect
                value={options.find((option) => option.value === value)}
                onChange={(option) => setter(option?.value ?? null)}
                options={options}
                isClearable={isClearable}
                name={name}
                id={name}
                placeholder={placeholder}
                styles={{
                    control: (provided) => ({
                        ...provided,
                        border: "2px solid black",
                        height: "4rem",
                        "&:hover": {
                            border: "2px solid black",
                        },
                    }),
                }}
            />
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
};

export default LabeledReactSelectInput;
