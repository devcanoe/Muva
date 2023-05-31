import InputField from "@/components/form/inputfield";
import styles from "./index.module.css";
import Button from "@/components/form/button";
import Dropdown from "@/components/form/dropdown";
import { useRouter } from "next/router";

export default function CheckoutContent() {

    const router = useRouter();

    return (
        <>
            <section className={styles.container}>
                <div className={styles.form}>
                    <h3 className={styles.h3}>Checkout</h3>
                    <InputField type={"text"} label="First Name" />  

                    <InputField type={"text"} label="Last Name" />  

                    <InputField type={"email"} label="Email" />  

                    <InputField type={"text"} label="Phone number" />  

                    <Dropdown label={"Gender"} disabled={false} items={[]} onChange={function (e: any): void {
                        throw new Error("Function not implemented.");
                    }} />
                    
                    <InputField type={"text"} label="Next of kin Name" /> 
                    
                    <InputField type={"text"} label="Next of kin Phone number" />  
                    
                    <Button label={"Checkout"} onClick={() => {router.push("/pay")}}/>
                </div>
            </section>
        </>
    )
}