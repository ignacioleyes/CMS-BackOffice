/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    Image,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "react-query";
import { useRef } from "react";
import { useAuthHeader } from "react-auth-kit";
import { deleteResource } from "../../api/api";
import DeleteIcon from "../../assets/images/bin.png";

type Props = {
    id: number;
};

const DeleteProductCell = ({ id }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef<any>();
    const toast = useToast();
    const queryClient = useQueryClient();
    const getAuthHeader = useAuthHeader();

    const { mutateAsync: deleteItem, isLoading } = useMutation(
        () => deleteResource("products", id, getAuthHeader()),
        {
            onSuccess: () => {
                queryClient.resetQueries(["products"]);
                toast({
                    title: "Producto eliminado",
                    status: "success",
                    position: "top",
                    duration: 2000,
                });
                onClose();
            },
            onError: (err: any) => {
                toast({
                    title: `Error al intentar eliminar, pruebe más tarde`,
                    description: err.message || err,
                    status: "error",
                    position: "top",
                    duration: 2000,
                });
            },
        }
    );

    return (
        <>
            <Image
                width={"2rem"}
                src={DeleteIcon}
                cursor={"pointer"}
                onClick={onOpen}
                _hover={{ transform: "scale(1.1)" }}
            />
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Eliminar Producto
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Estás seguro? No podrás deshacer esta acción.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancelar
                            </Button>
                            <Button
                                colorScheme="red"
                                onClick={() => deleteItem()}
                                ml={3}
                                isLoading={isLoading}
                            >
                                Eliminar
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
};

export default DeleteProductCell;
