import {
    Box,
    Button,
    CloseButton,
    FormLabel,
    GridItem,
    HStack,
    Img,
    Input,
    SimpleGrid,
    VStack,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    values: string[];
    setter: (values: string[]) => void;
}

const ImagesField = ({ values, setter }: Props) => {
    const [newImage, setNewImage] = useState("");
    return (
        <VStack w="full" spacing={3} alignItems="flex-start">
            <FormLabel>Imagenes</FormLabel>
            <SimpleGrid spacing={5} columns={3} w="full">
                {!values.length && (
                    <Box minW={"5rem"} minH={"5rem"}>
                        Agregar una imagen...
                    </Box>
                )}
                {values.map((value, idx) => (
                    <GridItem
                        colSpan={1}
                        w="full"
                        justifyContent={"center"}
                        display="flex"
                        position={"relative"}
                        key={idx}
                    >
                        <Img
                            src={value}
                            w="5rem"
                            h="5rem"
                            objectFit={"cover"}
                            rounded="xl"
                        />
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
                    </GridItem>
                ))}
            </SimpleGrid>
            <HStack w="full" justifyContent={"space-between"} spacing={5}>
                <Input
                    type={"text"}
                    value={newImage}
                    onChange={(e) => {
                        setNewImage(e.target.value);
                    }}
                    size="sm"
                    placeholder="Ingresar URL"
                />
                <Button
                    colorScheme={"green"}
                    size="sm"
                    type="button"
                    onClick={() => {
                        setter([...values, newImage]);
                        setNewImage("");
                    }}
                    isDisabled={newImage === ""}
                >
                    Agregar
                </Button>
            </HStack>
        </VStack>
    );
};

export default ImagesField;
