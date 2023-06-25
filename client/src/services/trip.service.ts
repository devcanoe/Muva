import { sungloApi } from "../lib/api";

const baseUrl = "trip";

export interface ISearch {
    departure_location: string;
    arrival_location: string;
    trip_date: string;
    adult: number,
    infant?: number,
    child?: number,
}

export const tripEndpoint = sungloApi.injectEndpoints({
    endpoints: (build: any) => ({
        searchTrip: build.query<any, ISearch>({
            query: (body: any) => `${baseUrl}/all?departure_location=${body.departure_location}&arrival_location=${body.arrival_location}&trip_date=${body.trip_date}`
        })
    })
});

export const {
    useSearchTripQuery,
} = tripEndpoint;