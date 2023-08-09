import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { AuthProvider } from "react-auth-kit";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <AuthProvider
                authType={navigator.cookieEnabled ? "cookie" : "localstorage"}
                authName={"_marvel_backoffice_auth"}
                cookieDomain={window.location.hostname}
                cookieSecure={window.location.protocol === "https:"}
            >
                <QueryClientProvider client={new QueryClient()}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </QueryClientProvider>
            </AuthProvider>
        </ChakraProvider>
    </React.StrictMode>
);
