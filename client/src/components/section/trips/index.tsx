import Button from "@/components/form/button";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectCurrentFrom, setBooking } from "@/lib/slice/tripslice";
import { ISearch, useSearchTripQuery } from "@/services/trip.service";
import { useEffect, useState } from "react";

interface Trip {
    "_id": string,
    "departure_location": string,
    "departure_time": string,
    "arrival_location": string,
    "arrival_time": string,
    "trip_date": Date,
    "seat_cost": string,
    "capacity": string,
    "vehicle": string
}

export default function TripContent() {

    const router = useRouter();

    const dispatch = useAppDispatch();

    const [trips, setTrips] = useState<Trip[]>();

    const keyword: ISearch = useAppSelector(selectCurrentFrom);
 
    const payload = {
        departure_location: keyword.departure_location,
        arrival_location: keyword.arrival_location,
        trip_date: keyword.trip_date
    }
    console.log(payload)
    const { data, isLoading } = useSearchTripQuery(payload);

    console.log(!isLoading && data)
    const gotoCheckout = (id: string, cost: string) => {
        dispatch(setBooking({
            id,
            cost
        }));
        router.push("/checkout");
    }

    useEffect(() => {
        if (data) {
            setTrips(data.data)
        }
        
    },[data])

    return (
        <>
            {trips ?
                (<section className={styles.container}>
                    {/* <p>Abia to Port-harcourt</p> */}
                    <h3>Select a trip</h3>
                    <div className={styles.trips}>
                        {
                            trips?.map((trip: Trip, index: number) => {
                                return (
                                    <div className={styles.trip} key={index}>
                                        <p><b>Departure Time:</b> {trip.departure_time} </p>
                                        <p><b>Cost:</b> {trip.seat_cost} </p>
                                        <p><b>Available Seat:</b> {trip.capacity}</p>
                                        <Button label={"Book trip"} onClick={() => { gotoCheckout(trip._id, trip.seat_cost) }} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                ) :
                (
                    <p>No trip available for this date</p>
                )
            }
        </>
    )
}