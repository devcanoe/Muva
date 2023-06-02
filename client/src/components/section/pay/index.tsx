import InputField from "@/components/form/inputfield";
import styles from "./index.module.css";
import Button from "@/components/form/button";
import Dropdown from "@/components/form/dropdown";
import { useRouter } from "next/router";
import { useAppSelector } from "@/lib/hooks";
import { ICheckout, selectCurrentCheckout } from "@/lib/slice/tripslice";

export default function PayContent() {

    const router = useRouter();

    const checkoutData: ICheckout = useAppSelector(selectCurrentCheckout)
    console.log(checkoutData)
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
                    <Button label={"Pay"} onClick={() => {}}/>
                </div>
            </section>
        </>
    )
}