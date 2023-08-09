import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputProps,
} from "@chakra-ui/react";

interface Props extends InputProps {
    label: string;
    error?: string;
    touched?: boolean;
    readonly?: boolean
}

const FormikField = ({
    label, error, touched, readonly, ...rest
}: Props) => {
    return (
        <FormControl isInvalid={Boolean(error) && touched}>
            <FormLabel htmlFor={rest.name}>{label}</FormLabel>
            <Input
            borderColor={"gray.300"}
                bgColor={readonly ? "gray.100" : "white"}
                color={"black"}
                {...rest}
                readOnly={readonly}
                cursor={readonly ? "not-allowed" : "auto"}
            />
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
};
export default FormikField;