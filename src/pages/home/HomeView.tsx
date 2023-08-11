import { Heading, Flex, Box } from "@chakra-ui/react";
import HomeForm from "./HomeForm";
import { useQuery } from "@tanstack/react-query";
import { getResource } from "../../api/api";
import { Home } from "../../api/types";
import { useAuthHeader } from "react-auth-kit";

const HomeView = () => {
    const getAuthHeader = useAuthHeader();

    const { data: homeInfo, isSuccess } = useQuery(
        ["home"],
        () => getResource<Home>("/home", getAuthHeader()),
        { select: (r) => r.data }
    );
    return (
        <Box>
            <Flex
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
                height={"5rem"}
            >
                <Heading textAlign={"center"} color={"secondary"}>
                    Administrar Contenido de la Página Principal
                </Heading>
            </Flex>
            {isSuccess && <HomeForm data={homeInfo} />}
        </Box>
    );
};

export default HomeView;
