import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import { useAuthHeader } from "react-auth-kit";
import { AiOutlinePlus } from "react-icons/ai";
import { useSuccessToast, useErrorToast } from "../../hooks/toasts";
import ProductForm from "./ProductForm";
import { ProductCreation } from "../../api/types";
import { useMutation, useQueryClient } from "react-query";
import { client } from "../../api/config";

const ProductCreationModal = () => {
    const queryClient = useQueryClient();
    const successToast = useSuccessToast();
    const errorToast = useErrorToast();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const getAuthHeader = useAuthHeader();

    const { mutateAsync: createProduct, isLoading } = useMutation(
        (values: ProductCreation) =>
            client.post("/products", values, {
                headers: {
                    Authorization: getAuthHeader(),
                },
            }),
        {
            onSuccess: () => {
                queryClient.resetQueries("products");
                successToast("Producto creado correctamente");
                onClose();
            },
            onError: (err: string) => {
                console.log(err);
                errorToast(
                    "Error al crear producto",
                    "Intente de nuevo más tarde"
                );
            },
        }
    );

    return (
        <>
            <Button
                colorScheme="green"
                onClick={onOpen}
                leftIcon={<AiOutlinePlus />}
            >
                AÑADIR
            </Button>

            <Modal
                trapFocus={false}
                isOpen={isOpen}
                onClose={onClose}
                size="6xl"
            >
                <ModalOverlay />
                <ModalContent minW={{md: "fit-content",lg: "65rem", xl: "80rem"}}>
                    <ModalHeader>Crear producto</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <ProductForm
                            runMutation={createProduct}
                            isLoading={isLoading}
                            type="create"
                            initialValues={{
                                name: "",
                                englishName: "",
                                description: "",
                                englishDescription: "",
                                brand: 0,
                                characteristics: "",
                                englishCharacteristics: "",
                                price: 0,
                                productImage: "",
                                certificationsImage: "",
                                characteristicsImages: [],
                                tablesImage: "",
                                alternatives: "",
                                englishAlternatives: "",
                            }}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ProductCreationModal;
