import { Heading, Flex, Box } from "@chakra-ui/react";
import Products from "./Products";

interface Props {
    tabIndex: number;
}

const ProductsView = ({tabIndex}: Props) => {
    
    return (
        <Box>
            <Flex
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
                height={"5rem"}
            >
                <Heading textAlign={"center"} color={"secondary"}>
                    Products
                </Heading>
            </Flex>
            <Products tabIndex={tabIndex} />
        </Box>
    );
};

export default ProductsView;
