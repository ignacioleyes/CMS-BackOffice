import { useDisclosure } from "@chakra-ui/react";
import DetailsButton from "./DetailsButton";
import { Contact } from "../../api/types";
import ContactDetailsInfo from "./ContactDetailsInfo";

interface Props {
    contact: Contact;
}

const SeeContactDetails = ({ contact }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <DetailsButton
            modalBody={
                <ContactDetailsInfo
                    contact={contact}
                />
            }
            onClose={onClose}
            isOpen={isOpen}
            onOpen={onOpen}
        />
    );
};

export default SeeContactDetails;
