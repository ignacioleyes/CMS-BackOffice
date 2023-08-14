import { Box, VStack } from "@chakra-ui/react";
import { useState } from "react";
import TabsContent from "./TabsContent";
import TabsSelector from "../home/TabsSelector";

const ProductsTabsView = () => {
    const [tabIndex, setTabIndex] = useState(
        +localStorage.getItem("productsTabIndex")!
    );

    return (
        <VStack
            w={"100%"}
            h={"90vh"}
            spacing={0}
            p={5}
            py={10}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Box alignSelf={"flex-start"}>
            <TabsSelector tabIndex={tabIndex} setTabIndex={setTabIndex} />
            </Box>
            <TabsContent tabIndex={tabIndex} setTabIndex={setTabIndex} />
        </VStack>
    );
};

export default ProductsTabsView;
