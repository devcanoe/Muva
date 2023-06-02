import { sungloApi } from "../lib/api";

export const authEndpoint = sungloApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (body) => ({
                url: "auth/login",
                method: "POST",
                body,
            })
        }),
        register: build.mutation({
            query: (body) => ({
                url: "auth/register",
                method: "POST",
                body
            })
        }),
    })
});

export const {
    useLoginMutation,
    useRegisterMutation,
} = authEndpoint;