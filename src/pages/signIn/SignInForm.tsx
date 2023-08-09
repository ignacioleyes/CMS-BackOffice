import { Button, chakra, VStack } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormikField from "../../components/FormikField";
import { useSignInMutation } from "../../hooks/useSignInMutation";

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
});

const initialValues = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async () => {
            await signIn();
        },
    });

    const { mutateAsync: signIn, isLoading } = useSignInMutation(
        formik.values.email,
        formik.values.password
    );

    return (
        <chakra.form minW={"20vw"} onSubmit={formik.handleSubmit}>
            <VStack alignItems={"center"} spacing={5}>
                <FormikField
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                    touched={formik.touched.email}
                />
                <FormikField
                    name="password"
                    label="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                    touched={formik.touched.password}
                    type="password"
                />
                <Button
                    isDisabled={isLoading}
                    isLoading={isLoading}
                    type="submit"
                    bgColor={"primary"}
                    w="full"
                >
                    Ingresar
                </Button>
            </VStack>
        </chakra.form>
    );
};
export default SignInForm;