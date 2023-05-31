import Button from '@/component/form/button';
import styles from './index.module.css';

export interface ICard {
    id: string,
    vendor_name: string,
    provider: string,
    model: string,
    size: string,
    cost: string,
    phone: string,
    address: string,
    state: string,
    city: string,
}

export default function Card(props: ICard) {
    return (
        <>
            <section className={styles.container}>
                <h4>{props.vendor_name}</h4>
                <p><b>Provider: </b>{props.provider}</p>
                <p><b>Model: </b>{props.model}</p>
                <p><b>Size: </b>{props.size}</p>
                <p><b>Value: </b>{props.cost}</p>
                <Button label={'Contact Vendor'} onClick={() => {}}/>
            </section>
        </>
    )
}