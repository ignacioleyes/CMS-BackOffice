import {
    chakra,
    useToast,
    Button,
    HStack,
    VStack,
    Box,
} from "@chakra-ui/react";
// import * as Yup from "yup";
import { useFormik } from "formik";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import FormikField from "../../components/FormikField";
import { postResource } from "../../api/api";
import { useAuthHeader } from "react-auth-kit";
import ImagesField from "./ImagesField";
import DescriptionsField from "./DescriptionsField";
import { Home } from "../../api/types";

interface Props {
    data: Home;
}

const initialValues = {
    images: [],
    title: "",
    description: [],
};

const ContactForm = ({data}: Props) => {
    const getAuthHeader = useAuthHeader();
    const toast = useToast();

    // const validationSchema = Yup.object().shape({
    //     images: Yup.string().nullable(),
    //     title: Yup.string().nullable(),
    //     description: Yup.string().nullable(),
    // });

    const formik = useFormik({
        initialValues: data ? {...data} : initialValues,
        // validationSchema,
        onSubmit: async () => {
            await home();
            formik.resetForm();
        },
    });

    const onSuccess = () => {
        toast({
            title: "Actualización Exitosa",
            status: "success",
            isClosable: true,
        });
    };

    const onError = (err: AxiosError) => {
        console.log(err);
        toast({
            title: "Error",
            description: <>{err?.response?.data || "Try again later"}</>,
            status: "error",
        });
    };

    const { mutateAsync: home, isLoading } = useMutation(
        () => postResource("home", getAuthHeader(), formik.values),
        {
            onSuccess: onSuccess,
            onError: onError,
        }
    );

    return (
        <VStack height={"auto"} spacing={0} mb={5} mt={5}>
            <HStack
                width={"90%"}
                height={"auto"}
                justifyContent={"center"}
                alignItems={"center"}
                bg={"whitesmoke"}
                borderRadius={"1rem"}
                boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
            >
                <chakra.form
                    w={"full"}
                    onSubmit={formik.handleSubmit}
                    px={5}
                    m={2}
                >
                    <Box mb={5}>
                        <ImagesField
                            values={formik.values.images}
                            setter={(values: string[]) =>
                                formik.setFieldValue("images", values)
                            }
                        />
                    </Box>
                    <Box mb={5}>
                        <FormikField
                            name="title"
                            id="title"
                            // isRequired={true}
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            error={formik.errors.title}
                            touched={formik.touched.title}
                            label={"Título"}
                        />
                    </Box>
                    <Box>
                        <DescriptionsField
                            values={formik.values.description}
                            setter={(values: string[]) =>
                                formik.setFieldValue("description", values)
                            }
                        />
                    </Box>
                    <Box mt={"2rem"} mb={"0.5rem"}>
                        <HStack w="full" justifyContent={"flex-end"}>
                            <Button
                                type="submit"
                                minWidth={"8rem"}
                                isLoading={isLoading}
                                bgColor={"primary"}
                            >
                                Guardar
                            </Button>
                        </HStack>
                    </Box>
                </chakra.form>
            </HStack>
        </VStack>
    );
};

export default ContactForm;
