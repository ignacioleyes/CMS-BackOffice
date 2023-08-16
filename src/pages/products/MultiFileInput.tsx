import { Avatar, HStack, IconButton, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { IoMdTrash } from "react-icons/io";
import LabeledComponent from "../../components/LabeledComponent";
interface Props {
    values: string[];
    setter: (values: string[]) => void;
}

const MultiFileInput = ({ values, setter }: Props) => {
    const refs = useRef<HTMLInputElement[]>(Array.from({ length: 3 }, () => null as unknown as HTMLInputElement));
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const newValues = [...values];
                newValues[index] = e.target?.result as string;
                setter(newValues);
            };
            reader.readAsDataURL(file);
        }
    };

    const clearImage = (index: number) => {
        const newValues = [...values];
        newValues[index] = "";
        setter(newValues);
        if (refs.current[index]) {
            refs.current[index].value = "";
        }
    };

    return (
        <LabeledComponent
            label="Imagenes"
            name="pictures"
            component={
                <HStack w="full">
                    {values && values.map((value, index) => (
                        <HStack key={index}>
                            {value && (
                                <>
                                    <IconButton
                                        icon={<IoMdTrash size={20} />}
                                        aria-label={`Eliminar imagen ${index}`}
                                        colorScheme="red"
                                        variant="ghost"
                                        size="xs"
                                        onClick={() => clearImage(index)}
                                    />
                                    <Avatar src={value} />
                                </>
                            )}
                            <Input
                                type="file"
                                variant="unstyled"
                                onChange={(e) => onChange(e, index)}
                                accept="image/*"
                                ref={(el) => (refs.current[index] = el as HTMLInputElement)}
                            />
                        </HStack>
                    ))}
                </HStack>
            }
        />
    );
};

export default MultiFileInput;