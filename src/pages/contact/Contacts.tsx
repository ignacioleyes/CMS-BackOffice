import { Contact } from "../../api/types";
import { DynamicTableCellFormat } from "../../components/dynamicTable/DynamicTable";
import MainLayout from "../../components/MainLayout";
import DeleteContactCell from "./DeleteContactCell";

const format: DynamicTableCellFormat<Contact>[] = [
    {
        header: "Nombre",
        accessor: "name",
        isSortable: true,
    },
    {
        header: "Empresa",
        accessor: "company",
        isSortable: true,
    },
    {
        header: "Email",
        accessor: "email",
        isSortable: true,
    },
    {
        header: "Mensaje",
        accessor: "message",
        isSortable: true,
    },
    {
        header: "",
        accessor: "",
        accessorFn: (cell) => <DeleteContactCell id={cell.row.id} />,
    },
];

const Contacts = () => {
    return (
        <MainLayout
            resource={"contacts"}
            format={format}
            filters={<></>}
            queryFilters={[]}
            perPage={7}
        />
    );
};

export default Contacts;
