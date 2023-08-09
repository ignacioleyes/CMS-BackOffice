import { useAuthUser, useSignOut } from "react-auth-kit";
import {
    HStack,
    Avatar,
    Text,
    IconButton,
    Center,
    Divider,
} from "@chakra-ui/react";
import { ApplicationUser, UserType } from "../../api/types";
import IconLogout from "../../assets/svg/IconLogout";

const NavbarUser = () => {
    const user = useAuthUser()() as ApplicationUser;
    const signOut = useSignOut();
    const logout = async () => {
        await signOut();
    };

    if (!user) {
        // User is not authenticated, render appropriate UI
        return null;
    }

    return (
        <>
            {user && (
                <HStack color={"secondary"}>
                    <Avatar
                        variant={"circle"}
                        size={"md"}
                        name={user.fullName}
                    />
                    <Text fontSize={"1rem"}>{UserType[user.userType]}</Text>
                    <Center height="2rem">
                        <Divider
                            orientation="vertical"
                            variant={"solid"}
                            borderColor={"secondary"}
                        />
                    </Center>
                    <IconButton
                        colorScheme={"white"}
                        variant={"ghost"}
                        icon={<IconLogout />}
                        aria-label="sign out"
                        size={"lg"}
                        onClick={logout}
                    />
                </HStack>
            )}
        </>
    );
};
export default NavbarUser;
