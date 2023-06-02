import { sungloApi } from "../lib/api";

const baseUrl = "trip";

export interface ISearch {
    departure_location: string;
    arrival_location: string;
    trip_date: Date;
}

export const tripEndpoint = sungloApi.injectEndpoints({
    endpoints: (build) => ({
        search: build.mutation({
            query: (body) => ({
                url: "devices/search",
                method: "POST",
                body,
            })
        }),
        addProvider: build.mutation({
            query: (body) => ({
                url: "devices/create-provider",
                method: "POST",
                body,
            })
        }),
        addModel: build.mutation({
            query: (body) => ({
                url: "devices/create-model",
                method: "POST",
                body,
            })
        }),
        addDevice: build.mutation({
            query: (body) => ({
                url: "devices/create-device",
                method: "POST",
                body,
            })
        }),
        addStorage: build.mutation({
            query: (body) => ({
                url: "devices/create-storage",
                method: "POST",
                body,
            })
        }),
        getProviders: build.query<any, void>({
            query: () => `devices/providers`
        }),
        getStorages: build.query({
            query: ({ id }) => `devices/storages/${id}`
        }),
        getModels: build.query<any, { id: string }>({
            query: ({ id }) => `devices/model/${id}`
        }),
        searchTrip: build.query<any, ISearch>({
            query: (body) => `${baseUrl}/all?departure_location=${body.departure_location}&arrival_location=${body.arrival_location}&trip_date=${body.trip_date}`
        })
    })
});

export const {
    useGetModelsQuery,
    useGetStoragesQuery,
    useGetProvidersQuery,
    useAddDeviceMutation,
    useAddModelMutation,
    useAddProviderMutation,
    useAddStorageMutation,
    useSearchMutation,
    useSearchTripQuery,
} = tripEndpoint;