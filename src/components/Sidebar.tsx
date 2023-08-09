import { Link } from "react-router-dom";
import { Box, Stack, HStack, Center } from "@chakra-ui/react";

const Sidebar = () => {
    const NAV_ITEMS = [
        {
            label: "Products",
            href: "/products",
        },
        {
            label: "Home",
            href: "/home",
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
