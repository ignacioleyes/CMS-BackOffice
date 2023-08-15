import { Tabs, TabPanels, TabPanel } from "@chakra-ui/react";
import ProductsView from "./ProductsView";

interface Props {
    tabIndex: number;
    setTabIndex: (tabIndex: number) => void;
}

const TabsContent = ({ tabIndex, setTabIndex }: Props) => {
    return (
        <Tabs index={tabIndex} onChange={setTabIndex} w={"full"}>
            <TabPanels
                 bgColor={"#ede7d7"}
                 borderTopLeftRadius={tabIndex !== 0 ? "0.5rem" : "0rem"}
                 borderTopRightRadius={"1rem"}
                 borderBottomLeftRadius={"1rem"}
                 borderBottomRightRadius={"1rem"}
                 borderStyle={"solid"}
            >
                <TabPanel w={"full"}>
                    <ProductsView tabIndex={tabIndex} />
                </TabPanel>
                <TabPanel w={"full"}>
                    <ProductsView tabIndex={tabIndex}/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default TabsContent;
