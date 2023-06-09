import InputField from "@/components/form/inputfield";
import styles from "./index.module.css";
import Button from "@/components/form/button";
import Dropdown from "@/components/form/dropdown";
import { useRouter } from "next/router";
import { useAppSelector } from "@/lib/hooks";
import { IBooking, ICheckout, selectCurrentBooking, selectCurrentCheckout } from "@/lib/slice/tripslice";
import { useGuestReserveTripMutation } from "@/services/booking.service";
import { IHandleMotion } from "@/components/displays/toast/toast";
import { useState } from "react";

export default function PayContent() {

    const router = useRouter();

    const checkoutData: ICheckout = useAppSelector(selectCurrentCheckout);
    const bookingData: IBooking = useAppSelector(selectCurrentBooking);

    const [successToastStatus, setSuccessToastStatus] = useState<IHandleMotion>({
        message: '',
        visibility: false,
        status: false
    });
    const [errorToastStatus, setErrorToastStatus] = useState<IHandleMotion>({
        message: '',
        visibility: false,
        status: false
    });

    const successToastHandler = (args: IHandleMotion) => {
        setSuccessToastStatus(args);
    }

    const errorToastHandler =(args: IHandleMotion) => {
        setErrorToastStatus(args);
    }

    const [ guestReserve, { isLoading } ] = useGuestReserveTripMutation();
  
    const makePayment = () => {
        guestReserve({
            trip: bookingData.id, 
            first_name: checkoutData.first_name, 
            last_name: checkoutData.last_name, 
            email: checkoutData.email, 
            phone: checkoutData.phone, 
            gender: checkoutData.gender, 
            total_cost: bookingData.cost, 
            next_of_kin_name: checkoutData.next_of_kin_name, 
            next_of_kin_number: checkoutData.next_of_kin_phone
        }).then((res: any) => {
            router.push(res.data.data.payment.data.authorization_url);
        }).catch((err: any) => {
            errorToastHandler({
                message: err.message,
                visibility: true,
                status: false,
            })
        })
    }

    return (
        <>
            <section className={styles.container}>
                <div className={styles.form}>
                    <h3 className={styles.h3}>Make Payment</h3>
                    <p><b>First Name: </b> {checkoutData.first_name}</p> 
                    <p><b>Last Name: </b> {checkoutData.last_name}</p> 
                    <p><b>Email: </b> {checkoutData.email}</p> 
                    <p><b>Phone Number: </b> {checkoutData.phone}</p>  
                    <p><b>Gender: </b> {checkoutData.gender}</p> 
                    <p><b>Next of kin Name: </b> {checkoutData.next_of_kin_name}</p> 
                    <p><b>Next of kin Phone: </b> {checkoutData.next_of_kin_phone}</p> 
                    <Button isLoading={isLoading} label={"Pay"} onClick={makePayment}/>
                </div>
            </section>
        </>
    )
}