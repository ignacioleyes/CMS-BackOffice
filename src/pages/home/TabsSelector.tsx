import { Tabs, TabList, Tab } from "@chakra-ui/react";

const commonTabProps = {
    fontWeight: "bold",
    minWidth: "10vw",
    _selected: {
        color: "secondary",
        bgColor: "lightgray",
    },
    boxShadow: "none !important",
};

interface Props {
    tabIndex: number;
    setTabIndex: (tabIndex: number) => void;
}

const TabsSelector = ({ tabIndex, setTabIndex }: Props) => {
    return (
        <Tabs onChange={setTabIndex} index={tabIndex} variant="enclosed">
            <TabList>
                <Tab {...commonTabProps}>Español</Tab>
                <Tab {...commonTabProps}>Inglés</Tab>
            </TabList>
        </Tabs>
    );
};

export default TabsSelector;
