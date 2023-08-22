/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrandEnum, ProductCreation } from "../../api/types";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, chakra, VStack } from "@chakra-ui/react";
import FormikField from "../../components/FormikField";
import FileInput from "./FileInput";
import MultiFileInput from "./MultiFileInput";
import { getOptionsFromEnum } from "../../api/utils";
import LabeledReactSelectInput from "../../components/LabeledReactSelectInput";

interface Props {
    runMutation: (values: ProductCreation) => void;
    initialValues: ProductCreation;
    isLoading: boolean;
    type: "create" | "edit";
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nombre requerido"),
    englishName: Yup.string().nullable(),
    description: Yup.string().required("Descripción requerida"),
    englishDescription: Yup.string().nullable(),
    brand: Yup.string().required("Marca requerida"),
    characteristics: Yup.string().required("Caracteristicas requeridas"),
    englishCharacteristics: Yup.string().nullable(),
    price: Yup.number().required("Precio requerido"),
    productImage: Yup.string().required("Imágen de producto requerida"),
    certificationsImage: Yup.string().required(
        "Imágen de certificados requerida"
    ),
    characteristicsImages: Yup.array().required(
        "Imágen de caracteristicas requerida"
    ),
    tablesImage: Yup.string().required("Imágen de tabla requerida"),
    alternatives: Yup.string().nullable(),
    englishAlternatives: Yup.string().nullable(),
});

const ProductForm = ({
    runMutation,
    initialValues,
    isLoading,
    type,
}: Props) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            await runMutation(values);
        },
    });

    return (
        <chakra.form
            onSubmit={formik.handleSubmit}
            w="full"
            pb={5}
            fontSize={"lg"}
        >
            <VStack spacing={5} w="full">
                <FormikField
                    label="Nombre"
                    name="name"
                    error={formik.errors.name}
                    touched={formik.touched.name}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    type="text"
                />
                <FormikField
                    label="Nombre en inglés"
                    name="englishName"
                    error={formik.errors.englishName}
                    touched={formik.touched.englishName}
                    onChange={formik.handleChange}
                    value={formik.values.englishName}
                    type="text"
                />
                <FormikField
                    label="Descripción"
                    name="description"
                    error={formik.errors.description}
                    touched={formik.touched.description}
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    type="text"
                />
                <FormikField
                    label="Descripción en inglés"
                    name="englishDescription"
                    error={formik.errors.englishDescription}
                    touched={formik.touched.englishDescription}
                    onChange={formik.handleChange}
                    value={formik.values.englishDescription}
                    type="text"
                />
                <FormikField
                    label="Caracteristicas"
                    name="characteristics"
                    error={formik.errors.characteristics}
                    touched={formik.touched.characteristics}
                    onChange={formik.handleChange}
                    value={formik.values.characteristics}
                    type="text"
                />
                <FormikField
                    label="Caracteristicas en inglés"
                    name="englishCharacteristics"
                    error={formik.errors.englishCharacteristics}
                    touched={formik.touched.englishCharacteristics}
                    onChange={formik.handleChange}
                    value={formik.values.englishCharacteristics}
                    type="text"
                />
                <FormikField
                    label="Alternativas"
                    name="alternatives"
                    error={formik.errors.alternatives}
                    touched={formik.touched.alternatives}
                    onChange={formik.handleChange}
                    value={formik.values.alternatives}
                    type="text"
                />
                <FormikField
                    label="Alternativas en inglés"
                    name="englishAlternatives"
                    error={formik.errors.englishAlternatives}
                    touched={formik.touched.englishAlternatives}
                    onChange={formik.handleChange}
                    value={formik.values.englishAlternatives}
                    type="text"
                />
                <FormikField
                    label="Precio"
                    name="price"
                    error={formik.errors.price}
                    touched={formik.touched.price}
                    onChange={formik.handleChange}
                    value={formik.values.price}
                    type="number"
                />
                    <LabeledReactSelectInput
                        label="Marca"
                        name="brand"
                        value={formik.values.brand}
                        error={formik.errors.brand}
                        touched={formik.touched.brand}
                        isClearable={false}
                        options={getOptionsFromEnum(BrandEnum)}
                        setter={(value: any) =>
                            formik.setFieldValue("type", value, true)
                        }
                        placeholder=""
                    />
                <FileInput
                    value={formik.values.productImage ?? null}
                    setter={(productImage: string) =>
                        formik.setFieldValue("productImage", productImage, true)
                    }
                    label="Imagen del producto"
                />
                <FileInput
                    value={formik.values.certificationsImage ?? null}
                    setter={(certificationsImage: string) =>
                        formik.setFieldValue(
                            "certificationsImage",
                            certificationsImage,
                            true
                        )
                    }
                    label="Imagen de certificaciones"
                />
                <MultiFileInput
                    label="Imagenes de caracteristicas"
                    name="characteristicsImages"
                    values={formik.values.characteristicsImages ?? null}
                    setter={(characteristicsImages: string[]) =>
                        formik.setFieldValue(
                            "characteristicsImages",
                            characteristicsImages,
                            true
                        )
                    }
                />
                <FileInput
                    value={formik.values.tablesImage ?? null}
                    setter={(tablesImage: string) =>
                        formik.setFieldValue("tablesImage", tablesImage, true)
                    }
                    label="Imagen de tablas"
                />
                <Button
                    type="submit"
                    isLoading={isLoading}
                    isDisabled={isLoading}
                    w="full"
                    colorScheme={"green"}
                >
                    {type === "create" ? "Crear" : "Editar"}
                </Button>
            </VStack>
        </chakra.form>
    );
};

export default ProductForm;
