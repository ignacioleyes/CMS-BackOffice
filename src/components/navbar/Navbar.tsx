import {
    Box,
    Center,
    Divider,
    HStack,
    Img,
    Link,
    Text,
} from "@chakra-ui/react";
import Logo from "../../assets/isotipo-color.png";
import NavbarUser from "./NavbarUser";

const Navbar = () => {
    return (
        <Box
            w={"full"}
            h={"8vh"}
            ms={8}
            p={4}
            mt={5}
            // boxShadow="1px 1px 10px rgba(211, 211, 211, 0.3)"
        >
            <HStack w={"full"} h={"full"}>
                <HStack
                    w="full"
                    alignItems={"flex-end"}
                    spacing={"3rem"}
                    zIndex={1}
                    bgColor="transparent"
                >
                    <HStack>
                        <Link href={"/"} h={"full"}>
                            <Img src={Logo} w="5rem" />
                        </Link>
                        <Center height="3.6rem">
                            <Divider
                                orientation="vertical"
                                variant={"solid"}
                                borderColor={"#454546"}
                                opacity={"0.5"}
                                borderWidth={"0.1rem"}
                                ml={"1rem"}
                                mr={"1rem"}
                            />
                        </Center>
                        <Text color="#454546" opacity="0.5">
                          Conduflex - CMS
                        </Text>
                    </HStack>
                </HStack>
                <NavbarUser />
            </HStack>
        </Box>
    );
};

export default Navbar;