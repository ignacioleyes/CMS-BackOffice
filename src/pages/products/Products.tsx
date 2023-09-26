/* eslint-disable @typescript-eslint/no-explicit-any */
import { HStack, Img } from "@chakra-ui/react";
import { BrandEnum, Product } from "../../api/types";
import { DynamicTableCellFormat } from "../../components/dynamicTable/DynamicTable";
import MainLayout from "../../components/MainLayout";
import DeleteProductCell from "./DeleteProductCell";
import ProductCreationModal from "./ProductCreationModal";
import EditProductModal from "./EditProductModal";

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
                accessorFn: (cell) =>
                cell.row.productImage && (
                    <Img
                        w="12rem"
                        src={cell.row.productImage}
                        alt={cell.row.name}  
                    />
                ),
                isSortable: false,
            },
            {
                header: "Nombre",
                accessor: "name",
                accessorFn: (cell) => cell.row.name.length > 50 ? cell.row.name.substring(0, 50) + '...' : cell.row.name,
                isSortable: true,
            },
            {
                header: "Descripción",
                accessor: "description",
                accessorFn: (cell) => cell.row.description.length > 50 ? cell.row.description.substring(0, 50) + '...' : cell.row.description,
                isSortable: false,
            },
            {
                header: "Marca",
                accessor: "brand",
                accessorFn: (cell) => `${BrandEnum[cell.row.brand]}`,
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
                accessorFn: (cell) => cell.row.characteristics.length > 50 ? cell.row.characteristics.substring(0, 50) + '...' : cell.row.characteristics,
                isSortable: false,
            },
            {
                header: "Aplicación",
                accessor: "application",
                accessorFn: (cell) => cell.row.application.length > 50 ? cell.row.application.substring(0, 50) + '...' : cell.row.application,
                isSortable: false,
            },
            {
                header: "Editar/Eliminar",
                accessor: "",
                accessorFn: (cell) => (
                    <HStack spacing={2}>
                        <EditProductModal product={cell.row} />
                        <DeleteProductCell id={cell.row.id} />
                    </HStack>
                ),
            },
        ]
    }
    else if (tabIndex === 1) {
        format = [
            {
                header: "Imagen",
                accessor: "productImage",
                accessorFn: (cell) =>
                cell.row.productImage && (
                    <Img
                        w="12rem"
                        src={cell.row.productImage}
                        alt={cell.row.name}
                    />
                ),
                isSortable: false,
            },
            {
                header: "Nombre",
                accessor: "englishName",
                accessorFn: (cell) => cell.row.englishName.length > 50 ? cell.row.englishName.substring(0, 50) + '...' : cell.row.englishName,
                isSortable: true,
            },
            {
                header: "Descripción",
                accessor: "englishDescription",
                accessorFn: (cell) => cell.row.englishDescription.length > 50 ? cell.row.englishDescription.substring(0, 50) + '...' : cell.row.englishDescription,
                isSortable: false,
            },
            {
                header: "Marca",
                accessor: "brand",
                accessorFn: (cell) => `${BrandEnum[cell.row.brand]}`,
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
                accessorFn: (cell) => cell.row.englishCharacteristics.length > 50 ? cell.row.englishCharacteristics.substring(0, 50) + '...' : cell.row.englishCharacteristics,
                isSortable: false,
            },
            {
                header: "Alternativas",
                accessor: "englishAlternatives",
                accessorFn: (cell) => cell.row.englishApplication.length > 50 ? cell.row.englishApplication.substring(0, 50) + '...' : cell.row.englishApplication,
                isSortable: false,
            },
            {
                header: "Editar/Eliminar",
                accessor: "",
                accessorFn: (cell) => (
                    <HStack spacing={2}>
                        <EditProductModal product={cell.row} />
                        <DeleteProductCell id={cell.row.id} />
                    </HStack>
                ),
            },
        ]
    }
    
    return (
        <MainLayout
            resource={"products"}
            format={format}
            filters={<></>}
            queryFilters={[]}
            perPage={4}
            buttons={<ProductCreationModal />}
        />
    );
};

export default Products;
