/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrandEnum, Product } from "../../api/types";
import { DynamicTableCellFormat } from "../../components/dynamicTable/DynamicTable";
import MainLayout from "../../components/MainLayout";
import DeleteProductCell from "./DeleteProductCell";

interface Props {
    tabIndex: number;
}

const Products = ({ tabIndex }:Props) => {

    let format: DynamicTableCellFormat<Product>[] = [];

    if (tabIndex === 0) {
        format = [
            {
                header: "Imagen",
                accessor: "productImage",
                isSortable: false,
            },
            {
                header: "Nombre",
                accessor: "name",
                isSortable: true,
            },
            {
                header: "Descripción",
                accessor: "description",
                isSortable: false,
            },
            {
                header: "Marca",
                accessor: "brand",
                accessorFn: (brand: any) => BrandEnum[brand],
                isSortable: true,
            },
            {
                header: "Precio",
                accessor: "price",
                isSortable: false,
            },
            {
                header: "Caraterísticas",
                accessor: "characteristics",
                isSortable: false,
            },
            {
                header: "Alternativas",
                accessor: "alternatives",
                isSortable: false,
            },
            {
                header: "",
                accessor: "",
                accessorFn: (cell) => <DeleteProductCell id={cell.row.id} />,
            },
        ]
    }
    else if (tabIndex === 1) {
        format = [
            {
                header: "Imagen",
                accessor: "productImage",
                isSortable: false,
            },
            {
                header: "Nombre",
                accessor: "englishName",
                isSortable: true,
            },
            {
                header: "Descripción",
                accessor: "englishDescription",
                isSortable: false,
            },
            {
                header: "Marca",
                accessor: "brand",
                accessorFn: (brand: any) => BrandEnum[brand],
                isSortable: true,
            },
            {
                header: "Precio",
                accessor: "price",
                isSortable: false,
            },
            {
                header: "Caraterísticas",
                accessor: "englishCharacteristics",
                isSortable: false,
            },
            {
                header: "Alternativas",
                accessor: "englishAlternatives",
                isSortable: false,
            },
            {
                header: "",
                accessor: "",
                accessorFn: (cell) => <DeleteProductCell id={cell.row.id} />,
            },
        ]
    }
    
    return (
        <MainLayout
            resource={"products"}
            format={format}
            filters={<></>}
            queryFilters={[]}
            perPage={7}
        />
    );
};

export default Products;
