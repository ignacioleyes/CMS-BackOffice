import { Grid, Flex, Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/Sidebar";
import SignIn from "./pages/signIn/SignIn";
import { RequireAuth } from "react-auth-kit";
import Products from "./pages/products/Products";
import Home from "./pages/home/Home";

const signInPath = "/sign-in";

interface Props {
    children: ReactNode;
}

const AuthenticatedLayout = ({ children }: Props) => {
    const location = useLocation();
    return (
        <RequireAuth loginPath={signInPath}>
            <Grid
                bgColor={"whitesmoke"}
                templateColumns="8rem 1fr minmax(0, 1fr)"
                h="100vh"
                overflow={"hidden"}
            >
                <Box h="100%">
                    {!location.pathname.toLowerCase().includes("/sign-in") && (
                        <Sidebar />
                    )}
                </Box>
                <Flex
                    gridColumn="2 / span 2"
                    bgColor="transparent"
                    h="64px"
                    justify="center"
                    align="center"
                    fontWeight="bold"
                    fontSize="2xl"
                    color="white"
                >
                    {!location.pathname.toLowerCase().includes("/sign-in") && (
                        <Navbar />
                    )}
                </Flex>
                <Box gridColumn="2 / span 2" h="calc(100vh - 64px)" p="5">
                    {children}
                </Box>
            </Grid>
        </RequireAuth>
    );
};

const App = () => {
    return (
        <Routes>
            <Route path={signInPath} element={<SignIn />} />
            <Route
                path="/"
                element={
                    <AuthenticatedLayout>
                        <Navigate to={"/products"} />
                    </AuthenticatedLayout>
                }
            />
            <Route
                path="products"
                element={
                    <AuthenticatedLayout>
                        <Products />
                    </AuthenticatedLayout>
                }
            />
            <Route
                path="home"
                element={
                    <AuthenticatedLayout>
                        <Home />
                    </AuthenticatedLayout>
                }
            />
        </Routes>
    );
};

export default App;
