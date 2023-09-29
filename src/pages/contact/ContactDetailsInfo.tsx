import { VStack, Text, HStack, Divider } from "@chakra-ui/react";
import { Contact } from "../../api/types";

interface Props {
    contact: Contact;
}

const ContactDetailsInfo = ({ contact }: Props) => {
    return (
        <VStack>
            <HStack alignItems={"flex-start"} width={"full"} padding={"0.5rem"}>
                <Text fontWeight={"medium"}>Nombre:</Text>
                <Text>{contact.name}</Text>
            </HStack>
            <HStack alignItems={"flex-start"} width={"full"} padding={"0.5rem"}>
                <Text fontWeight={"medium"}>Email:</Text>
                <Text>{contact.email}</Text>
            </HStack>
            <Divider orientation='horizontal' borderWidth={"0.1rem"} borderColor={"black"} width={"98%"}/>
            <HStack padding={"0.5rem"} w={"full"} alignItems={"flex-start"}>
                <Text>{contact.message}</Text>
            </HStack>
        </VStack>
    );
};

export default ContactDetailsInfo;
