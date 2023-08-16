import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { AuthResponse } from "../api/types";
import { useMutation } from "react-query";
import { client } from "../api/config";

export const useSignInMutation = (email: string, password: string) => {
    const navigate = useNavigate();
    const toast = useToast();
    const signIn = useSignIn();

    return useMutation(
        () =>
            client.post<AuthResponse>("/users/login", {
                email,
                password,
            }),
        {
            onSuccess: (res) => {
                signIn({
                    token: res.data.authToken.token,
                    expiresIn: res.data.authToken.expiresIn,
                    tokenType: res.data.tokenType,
                    authState: res.data.authState,
                });
                navigate("/");
                toast({
                    status: "success",
                    title: "Bienvenido de Vuelta",
                    isClosable: true,
                });
            },
            onError: (err: AxiosError<AuthResponse>) => {
                console.log(err);
                toast({
                    status: "error",
                    title:
                        err.response?.data?.error?.description ||
                        "Ocurrió un error",
                });
            },
        }
    );
};