import { sungloApi } from "../lib/api";

const baseUrl = "booking";

export interface ISearch {
    departure_location: string;
    arrival_location: string;
    trip_date: string;
}

export const tripEndpoint = sungloApi.injectEndpoints({
    endpoints: (build: any) => ({
        searchTrip: build.query<any, ISearch>({
            query: (body: any) => `${baseUrl}/all?departure_location=${body.departure_location}&arrival_location=${body.arrival_location}&trip_date=${body.trip_date}`
        }),
        guestReserveTrip: build.mutation({
            query: (body: any) => ({
                url: `${baseUrl}/guest-reserve`,
                method: "POST",
                body,
            })
        }),
    })
});

export const {
    useSearchTripQuery,
    useGuestReserveTripMutation,
} = tripEndpoint;