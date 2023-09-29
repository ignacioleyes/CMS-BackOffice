import moment from "moment";
import { Contact } from "../../api/types";
import { DynamicTableCellFormat } from "../../components/dynamicTable/DynamicTable";
import MainLayout from "../../components/MainLayout";
import DeleteContactCell from "./DeleteContactCell";
import SeeContactDetails from "./SeeContactDetails";

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
        accessorFn: (cell) => cell.row.message.length > 50 ? cell.row.message.substring(0, 50) + '...' : cell.row.message,
        isSortable: true,
    },
    {
        header: "Fecha de creación",
        accessor: "creationDate",
        accessorFn: (cell) => moment.utc(cell.row.creationDate).format("DD-MM-yyyy"),
        isSortable: true,
    },
    {
        header: "",
        accessor: "",
        accessorFn: (cell) => <DeleteContactCell id={cell.row.id} />,
    },
    {
        header: "",
        accessor: "",
        accessorFn: (cell) => <SeeContactDetails contact={cell.row} />,
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
