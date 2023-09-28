/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProductCreation } from "../../api/types";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, chakra, Flex, HStack, VStack } from "@chakra-ui/react";
import FormikField from "../../components/FormikField";
import FileInput from "./FileInput";
import MultiFileInput from "./MultiFileInput";

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
    brand: Yup.string().required("Marcación requerida"),
    characteristics: Yup.string().required("Caracteristicas requeridas"),
    englishCharacteristics: Yup.string().nullable(),
    price: Yup.number().required("Precio requerido"),
    productImage: Yup.string().required("Imágen de producto requerida"),
    characteristicsImages: Yup.array().required(
        "Imágen de caracteristicas requerida"
    ),
    tablesImage: Yup.string().required("Imágen de tabla requerida"),
    application: Yup.string().nullable(),
    englishApplication: Yup.string().nullable(),
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
            <Flex flexDirection={{ base: "column", md: "row" }} w="full">
                <VStack
                    spacing={5}
                    w={{ base: "full", md: "50%" }}
                    pr={{ md: 5 }}
                >
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
                        label="Descripción"
                        name="description"
                        error={formik.errors.description}
                        touched={formik.touched.description}
                        onChange={formik.handleChange}
                        value={formik.values.description}
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
                        label="Alplicación"
                        name="application"
                        error={formik.errors.application}
                        touched={formik.touched.application}
                        onChange={formik.handleChange}
                        value={formik.values.application}
                        type="text"
                    />
                    <FormikField
                        label="Marcación"
                        name="brand"
                        error={formik.errors.brand}
                        touched={formik.touched.brand}
                        onChange={formik.handleChange}
                        value={formik.values.brand}
                        type="text"
                    />
                    <FileInput
                        value={formik.values.productImage ?? null}
                        setter={(productImage: string) =>
                            formik.setFieldValue(
                                "productImage",
                                productImage,
                                true
                            )
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
                </VStack>
                <VStack
                    spacing={5}
                    w={{ base: "full", md: "50%" }}
                    pl={{ md: 5 }}
                >
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
                        label="Descripción en inglés"
                        name="englishDescription"
                        error={formik.errors.englishDescription}
                        touched={formik.touched.englishDescription}
                        onChange={formik.handleChange}
                        value={formik.values.englishDescription}
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
                        label="Aplicación en inglés"
                        name="englishApplication"
                        error={formik.errors.englishApplication}
                        touched={formik.touched.englishApplication}
                        onChange={formik.handleChange}
                        value={formik.values.englishApplication}
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
                    <MultiFileInput
                        label="Imagenes de codificación"
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
                            formik.setFieldValue(
                                "tablesImage",
                                tablesImage,
                                true
                            )
                        }
                        label="Imagen de tablas"
                    />
                </VStack>
            </Flex>
            <HStack paddingTop={10} width={"100%"}>
                <Button
                    type="submit"
                    isLoading={isLoading}
                    isDisabled={isLoading}
                    w="full"
                    colorScheme={"green"}
                >
                    {type === "create" ? "Crear" : "Editar"}
                </Button>
            </HStack>
        </chakra.form>
    );
};

export default ProductForm;
