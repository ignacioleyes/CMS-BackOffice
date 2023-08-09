export interface ApplicationUser {
    id: string;
    firstName: string;
    fullName: string;
    email: string;
    userType: UserType;
}

export interface AuthResponse {
    authToken: {
        token: string;
        expiresIn: number;
    };
    tokenType: string;
    authState: ApplicationUser;
    error: {
        code: string;
        description: string;
    };
}

export enum UserType {
    Admin,
}
