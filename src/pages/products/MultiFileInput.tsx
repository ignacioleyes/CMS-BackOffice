import {
    Avatar,
    FormControl,
    HStack,
    IconButton,
    Input,
    FormLabel,
    FormErrorMessage,
} from "@chakra-ui/react";
import { useRef } from "react";
import { IoMdTrash } from "react-icons/io";
// import LabeledComponent from "../../components/LabeledComponent";
interface Props {
    values: string[];
    setter: (values: string[]) => void;
    error?: string;
    touched?: boolean;
    label: string;
    name: string;
}

const MultiFileInput = ({
    values,
    setter,
    error,
    touched,
    label,
    name,
}: Props) => {
    const refs = useRef<HTMLInputElement | null>(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (values) {
                    const newValues = [...values, reader.result as string];
                    setter(newValues);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const clearImage = (index: number) => {
        if (values) {
            const newValues = values.filter((_, i) => i !== index);
            setter(newValues);
        }
    };

    return (
        <FormControl isInvalid={touched && Boolean(error)}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Input
                type={"file"}
                variant="unstyled"
                onChange={(e) => onChange(e)}
                accept="image/*"
                ref={refs}
            />
            <HStack w="full">
                {values &&
                    values.map((image, index) => (
                        <HStack key={index}>
                            <IconButton
                                icon={<IoMdTrash size={20} />}
                                aria-label={`Eliminar imagen ${index}`}
                                colorScheme="red"
                                variant="ghost"
                                size="xs"
                                onClick={() => clearImage(index)}
                            />
                            <Avatar src={image} />
                        </HStack>
                    ))}
            </HStack>
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
};

export default MultiFileInput;
