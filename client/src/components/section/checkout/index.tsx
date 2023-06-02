import InputField from "@/components/form/inputfield";
import styles from "./index.module.css";
import Button from "@/components/form/button";
import Dropdown, { Iitem } from "@/components/form/dropdown";
import { useRouter } from "next/router";
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useAppDispatch } from "@/lib/hooks";
import { setCheckout } from "@/lib/slice/tripslice";

const gender: Iitem[] = [
    {
        id: "0",
        title: "Male",
        value: "MALE"
    },
    {
        id: "1",
        title: "Female",
        value: "FEMALE"
    },
]

export default function CheckoutContent() {

    const router = useRouter();

    const dispatch = useAppDispatch();

    const validationSchema = yup.object({
        first_name: yup
            .string()
            .required('FirstName is required'),
        last_name: yup
            .string()
            .required('Lastname is required'),
        email: yup
            .string()
            .required('Email is required'),
        phone: yup
            .string()
            .required('Phone number is required'),
        gender: yup
            .string()
            .required('Gender is required'),
        next_of_kin_name: yup
            .string()
            .required('Next of kin name is required'),
        next_of_kin_phone: yup
            .string()
            .required('Next of kin phone is required'),
    });

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            gender: '',
            next_of_kin_name: '',
            next_of_kin_phone: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => { 
            dispatch(setCheckout(values));

            void router.push('/pay')
        },
    });

    return (
        <>
            <div className={styles.container}>
                <div className={styles.form}>
                    <h3 className={styles.h3}>Checkout</h3>
                    <InputField
                    placeholder='First Name'
                    label="First Name"
                    type={'text'}
                    name={'first_name'}
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                    helperText={formik.touched.first_name && formik.errors.first_name}
                />
                <InputField
                    placeholder='Last Name'
                    label="Last Name"
                    type={'text'}
                    name={'last_name'}
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                    helperText={formik.touched.last_name && formik.errors.last_name}
                />
                <InputField
                    placeholder='Email'
                    label="Email Address"
                    type={'email'}
                    name={'email'}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <InputField
                    label="Phone Number"
                    placeholder='Phone Number'
                    type={'text'}
                    name={'phone'}
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                /> 

                <Dropdown
                    label={'Gender'}
                    items={gender}
                    disabled={false}
                    name={'gender'}
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    error={formik.touched.gender && Boolean(formik.errors.gender)}
                    helperText={formik.touched.gender && formik.errors.gender}
                    required={true}
                />
                <InputField
                    placeholder='Next of kin Name'
                    label="Next of kin Name"
                    type={'text'}
                    name={'next_of_kin_name'}
                    value={formik.values.next_of_kin_name}
                    onChange={formik.handleChange}
                    error={formik.touched.next_of_kin_name && Boolean(formik.errors.next_of_kin_name)}
                    helperText={formik.touched.next_of_kin_name && formik.errors.next_of_kin_name}
                />
                <InputField
                    label="Next of kin Phone Number"
                    placeholder='Phone Number'
                    type={'text'}
                    name={'next_of_kin_phone'}
                    value={formik.values.next_of_kin_phone}
                    onChange={formik.handleChange}
                    error={formik.touched.next_of_kin_phone && Boolean(formik.errors.next_of_kin_phone)}
                    helperText={formik.touched.next_of_kin_phone && formik.errors.next_of_kin_phone}
                />  
                
                <Button
                    label={"Checkout"}
                    onClick={formik.handleSubmit}
                />
                </div>
            </div>
        </>
    )
}