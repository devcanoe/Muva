import InputField from "@/components/form/inputfield";
import styles from "./index.module.css";
import Button from "@/components/form/button";
import Dropdown from "@/components/form/dropdown";
import { useRouter } from "next/router";

export default function PayContent() {

    const router = useRouter();

    return (
        <>
            <section className={styles.container}>
                <div className={styles.form}>
                    <h3 className={styles.h3}>Make Payment</h3>
                    <p><b>First Name: </b> Golden</p> 
                    <p><b>Last Name: </b> Mac-Eteli</p> 
                    <p><b>Email: </b> maceteligolden@gmail.com</p> 
                    <p><b>Phone Number: </b> +2347016181313</p>  
                    <p><b>Gender: </b> Others</p> 
                    <p><b>Next of kin Name: </b> Adesewa</p> 
                    <p><b>Next of kin Phone: </b> +2348036108654</p> 
                    <Button label={"Pay"} onClick={() => {}}/>
                </div>
            </section>
        </>
    )
}