import {
    Box,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Tooltip,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
    modalBody: React.ReactNode;
    onOpen: () => void;
    onClose: () => void;
    isOpen: boolean;
}

const DetailsButton = ({ modalBody, onOpen, onClose, isOpen }: Props) => {
    return (
        <Box>
            <Tooltip hasArrow label={"Ver Detalles"} bg={"orange.400"}>
                <Button
                    colorScheme={"orange"}
                    variant={"ghost"}
                    leftIcon={<BsSearch size={"1.2rem"} />}
                    onClick={onOpen}
                ></Button>
            </Tooltip>
            <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Detalles del Contacto</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody w={"auto"}>{modalBody}</ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};
export default DetailsButton;
