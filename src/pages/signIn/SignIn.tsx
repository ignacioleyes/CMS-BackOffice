import { Box, Image, VStack } from "@chakra-ui/react";
import Logo from "../../assets/isotipo-color.png";
import SignInForm from "./SignInForm";

const SignIn = () => {
    return (
        <VStack
            alignItems={"center"}
            spacing={8}
            w="full"
            h="100vh"
            pt={"5rem"}
            bgColor="white"
        >
            <Image src={Logo} w={"10rem"} />
            <Box p={5} bgColor="whitesmoke" boxShadow= "5px 4px 10px rgba(0, 0, 0, 0.3)" borderRadius="1.25rem">
                <SignInForm />
            </Box>
        </VStack>
    );
};

export default SignIn;