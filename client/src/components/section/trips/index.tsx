import Button from "@/components/form/button";
import styles from "./index.module.css";
import { useRouter } from "next/router";

export default function TripContent() {

    const router = useRouter();

    const gotoCheckout = () => {
        router.push("/checkout")
    }

    return (
        <>
            <section className={styles.container}>
                <p>Abia to Port-harcourt</p>
                <h3>Select a trip</h3>
                <div className={styles.trips}>
                    <div className={styles.trip}>   
                        <p><b>Departure Time:</b> 11:00am </p>
                        <p><b>Cost:</b> $10 </p>
                        <p><b>Available Seat:</b> 12 </p>
                        <Button label={"Book trip"} onClick={() => {gotoCheckout()}}/>
                    </div>

                    <div className={styles.trip}>   
                        <p><b>Departure Time:</b> 11:00am </p>
                        <p><b>Cost:</b> $10 </p>
                        <p><b>Available Seat:</b> 12 </p>
                        <Button label={"Book trip"} onClick={() => {gotoCheckout()}}/>
                    </div>

                    <div className={styles.trip}>   
                        <p><b>Departure Time:</b> 11:00am </p>
                        <p><b>Cost:</b> $10 </p>
                        <p><b>Available Seat:</b> 12 </p>
                        <Button label={"Book trip"} onClick={() => {gotoCheckout()}}/>
                    </div>
                </div>
            </section>
        </>
    )
}