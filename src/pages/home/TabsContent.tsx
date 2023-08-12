import { Tabs, TabPanels, TabPanel } from "@chakra-ui/react";
import HomeView from "./HomeView";

interface Props {
    tabIndex: number;
    setTabIndex: (tabIndex: number) => void;
}

const TabsContent = ({ tabIndex, setTabIndex }: Props) => {
    return (
        <Tabs index={tabIndex} onChange={setTabIndex} w={"full"}>
            <TabPanels
                bgColor={"lightgray"}
                borderTopLeftRadius={tabIndex !== 0 ? "0.5rem" : "0rem"}
                borderTopRightRadius={"1rem"}
                borderBottomLeftRadius={"1rem"}
                borderBottomRightRadius={"1rem"}
                borderWidth={1}
                borderColor={"lightgray"}
                borderStyle={"solid"}
            >
                <TabPanel w={"full"}>
                    <HomeView tabIndex={tabIndex} />
                </TabPanel>
                <TabPanel w={"full"}>
                    <HomeView tabIndex={tabIndex}/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default TabsContent;
