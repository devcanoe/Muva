import Dropdown, { Iitem } from "@/components/form/dropdown";
import styles from "./index.module.css";
import InputField from "@/components/form/inputfield";
import Button from "@/components/form/button";
import { useRouter } from "next/router";
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useAppDispatch } from "@/lib/hooks";
import { setSearchKeyword } from "@/lib/slice/tripslice";

const location: Iitem[] = [
    {
        id: "0",
        title: "Port-Harcourt",
        value: "PH"
    },
    {
        id: "1",
        title: "Lagos",
        value: "LAG"
    }
]

export default function HomeContent() {

    const dispatch = useAppDispatch()

    const router = useRouter();

    const validationSchema = yup.object({
        from: yup
            .string()
            .required('From is required'),
        to: yup
            .string()
            .required('To is required'),
        departure_date: yup
            .date()
            .required('Departure date is required'),
    });

    const formik = useFormik({
        initialValues: {
            from: '',
            to: '',
            departure_date: new Date
        },
        validationSchema: validationSchema,
        onSubmit: (values) => { 
            dispatch(setSearchKeyword({
                departure_location: values.from,
                arrival_location: values.to,
                trip_date: `${values.departure_date}`
            }));

            void router.push("/trips");
        },
    });

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
                        <Dropdown
                            label={'From'}
                            items={location}
                            disabled={false}
                            name={'from'}
                            value={formik.values.from}
                            onChange={formik.handleChange}
                            error={formik.touched.from && Boolean(formik.errors.from)}
                            helperText={formik.touched.from && formik.errors.from}
                            required={true}
                        />
                        
                        <Dropdown
                            label={'To'}
                            items={location}
                            disabled={false}
                            name={'to'}
                            value={formik.values.to}
                            onChange={formik.handleChange}
                            error={formik.touched.to && Boolean(formik.errors.to)}
                            helperText={formik.touched.to && formik.errors.to}
                            required={true}
                        />
                        
                        <InputField
                            placeholder='date'
                            label="Departure Date"
                            type={'date'}
                            name={'departure_date'}
                            value={formik.values.departure_date}
                            onChange={formik.handleChange}
                            error={formik.touched.departure_date && Boolean(formik.errors.departure_date)}
                            helperText={formik.touched.departure_date && formik.errors.departure_date}
                        />
                        
                        <Button
                            label={"Find Trip"}
                            onClick={formik.handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}