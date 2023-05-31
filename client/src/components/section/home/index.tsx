import Dropdown from "@/components/form/dropdown";
import styles from "./index.module.css";
import InputField from "@/components/form/inputfield";
import Button from "@/components/form/button";

export default function HomeContent() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2>The modern way to commute across cities</h2>
                    <p>Muva is an African technology powered company, providing seamless mobility services to commuters across Africa</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.card}>
                        <h3>Book a trip</h3>
                        <Dropdown label={"From"} disabled={false} items={[]} onChange={function (e: any): void {
                            throw new Error("Function not implemented.");
                        }} />
                        
                        <Dropdown label={"To"} disabled={false} items={[]} onChange={function (e: any): void {
                            throw new Error("Function not implemented.");
                        }} />
                        
                        <InputField type={"date"} label="Departure date" />
                        
                        <Button label={"Find Trip"} onClick={() => {}}/>
                    </div>
                </div>
            </div>
        </>
    )
}