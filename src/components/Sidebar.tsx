import { Link } from "react-router-dom";
import { Box, Stack, HStack, Center, Image } from "@chakra-ui/react";
import ProductsIcon from "../assets/images/wire.png";
import HomeIcon from "../assets/images/home.png";
import ContactIcon from "../assets/images/mail.png";

const Sidebar = () => {
    const NAV_ITEMS = [
        {
            label: "Inicio",
            href: "/",
            icon: HomeIcon,
        },
        {
            label: "Productos",
            href: "/products",
            icon: ProductsIcon,
        },
        {
            label: "Contactos",
            href: "/contacts",
            icon: ContactIcon,
        },
    ];

    return (
        <HStack
            bg={"primary"}
            width={"8rem"}
            height="100%"
            position="fixed"
            spacing={8}
            top={0}
            left={0}
            justifyContent="center"
        >
            <Stack width={"100%"} color={"whitesmoke"}>
                {NAV_ITEMS.map((item, idx) => (
                    <Link to={item.href!} key={idx}>
                        <Box mb={3} mt={3}>
                            <Center>
                                <Image src={item.icon} width={"3rem"}></Image>
                            </Center>
                        </Box>
                        <Box>
                            <Center color={"secondary"}>{item.label}</Center>
                        </Box>
                    </Link>
                ))}
            </Stack>
        </HStack>
    );
};

export default Sidebar;
