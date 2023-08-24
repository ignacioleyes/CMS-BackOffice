import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Image,
} from "@chakra-ui/react";
import { useAuthHeader } from "react-auth-kit";
import { useQueryClient, useMutation } from "react-query";
import { Product, ProductCreation } from "../../api/types";
import { useSuccessToast, useErrorToast } from "../../hooks/toasts";
import ProductForm from "./ProductForm";
import { client } from "../../api/config";
import EditIcon from "../../assets/images/edit.png";

interface Props {
    product: Product;
}

const EditProductModal = ({ product }: Props) => {
    const queryClient = useQueryClient();
    const successToast = useSuccessToast();
    const errorToast = useErrorToast();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const getAuthHeader = useAuthHeader();

    const { mutateAsync: editProduct, isLoading } = useMutation(
        (values: ProductCreation) =>
            client.put(`/products/${product.id}`, values, {
                headers: {
                    Authorization: getAuthHeader(),
                },
            }),
        {
            onSuccess: () => {
                queryClient.resetQueries("products");
                successToast("Producto editado correctamente");
                onClose();
            },
            onError: (err: string) => {
                console.log(err);
                errorToast(
                    "Error al editar producto",
                    "Intente de nuevo más tarde"
                );
            },
        }
    );

    return (
        <>
            <Image
                width={"2rem"}
                src={EditIcon}
                cursor={"pointer"}
                onClick={onOpen}
                _hover={{ transform: "scale(1.1)" }}
            />

            <Modal
                trapFocus={false}
                isOpen={isOpen}
                onClose={onClose}
                size="6xl"
            >
                <ModalOverlay />
                <ModalContent
                    minW={{ md: "fit-content", lg: "65rem", xl: "80rem" }}
                    bgColor={"lightgray"}
                >
                    <ModalHeader>Editar producto</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <ProductForm
                            runMutation={editProduct}
                            isLoading={isLoading}
                            type="edit"
                            initialValues={product}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default EditProductModal;
