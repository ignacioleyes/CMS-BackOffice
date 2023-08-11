import { Box, VStack } from "@chakra-ui/react";
import { useState } from "react";
import TabsSelector from "./TabsSelector";
import TabsContent from "./TabsContent";

const HomeTabsView = () => {
    const [tabIndex, setTabIndex] = useState(
        +localStorage.getItem("tabIndexHR")!
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

export default HomeTabsView;
