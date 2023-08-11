import {
    Box,
    Button,
    CloseButton,
    FormLabel,
    HStack,
    Text,
    Input,
    VStack,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    values: string[];
    setter: (values: string[]) => void;
}

const DescriptionsField = ({ values, setter }: Props) => {
    const [newDescription, setNewDescription] = useState("");

    return (
        <VStack w="full" spacing={3} alignItems="flex-start">
            <FormLabel>Textos descriptivos</FormLabel>
            <VStack spacing={3} w="full">
                {!values.length && (
                    <Box width={"full"} minH={"5rem"}>
                        Agregar descripciones...
                    </Box>
                )}
                {values.map((value, idx) => (
                    <Box w="full" position={"relative"} key={idx}>
                        <Text w="100%" h="3rem">
                            {value}
                        </Text>
                        <CloseButton
                            pos={"absolute"}
                            top={0}
                            right={0}
                            bgColor="red"
                            rounded="full"
                            color="white"
                            transform={"translate(-50%, -25%)"}
                            size={"sm"}
                            onClick={() =>
                                setter(values.filter((v) => v !== value))
                            }
                        />
                    </Box>
                ))}
            </VStack>
            <HStack w="full" justifyContent={"space-between"} spacing={5}>
                <Input
                    type={"text"}
                    value={newDescription}
                    onChange={(e) => {
                        setNewDescription(e.target.value);
                    }}
                    size="sm"
                    placeholder="Ingresar descripción"
                />
                <Button
                    colorScheme={"green"}
                    size="sm"
                    type="button"
                    onClick={() => {
                        setter([...values, newDescription]);
                        setNewDescription("");
                    }}
                    isDisabled={newDescription === ""}
                >
                    Agregar
                </Button>
            </HStack>
        </VStack>
    );
};

export default DescriptionsField;
