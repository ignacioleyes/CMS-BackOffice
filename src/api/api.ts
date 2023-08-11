import { client } from "./config";
import { KeyValuePair } from "./types";


export const getResource = async <T>(resource: string, authHeader: string) => {
    return await client.get<T>(resource, {
        headers: { Authorization: authHeader },
    });
};

export const getResourceList = async <T>(
    resource: string,
    authHeader: string
) => {
    return await client.get<Array<T>>(resource, {
        headers: { Authorization: authHeader },
        params: {
            "range.Start": 0,
            "range.End": 10000,
        },
    });
};

export const postResource = async (
    resource: string,
    authHeader: string,
    data: KeyValuePair | KeyValuePair[]
) => {
    return await client.post(`/${resource}`, data, {
        headers: { Authorization: authHeader },
    });
};

