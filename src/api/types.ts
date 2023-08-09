/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Sort {
    field: string;
    isAscending: boolean;
}

export interface FilterItem {
    field: string;
    value: any;
    operator: string;
    alternativeOperator?: AlternativeOperators;
}

export enum AlternativeOperators {
    StringContains = 1,
    DateTime,
}
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

export interface ApiListResponse<T> {
    items: T[];
    totalCount: number;
}

export enum UserType {
    Admin,
}
