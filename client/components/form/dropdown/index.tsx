import styles from './index.module.css';

interface IDropdown {
    label: string,
    disabled: boolean,
    items: Iitem[],
    onChange: (e: any) => void,
    required?: boolean,
    value?: any,
    name?: string
}

export interface Iitem {
    id: string | number,
    title: string,
    value: string
}

export default function Dropdown(props: IDropdown) {

    // map select items 
    const options = props.items.map((item: Iitem, index: number) => {
        return <option key={index} value={item.value}> {item.title} </option>
    })

    return (
        <>
            <select className={styles.container} value={props.value} name={props.name} disabled={props.disabled} onChange={props.onChange} required>
                <option>{props.label}</option>
                {options}
            </select>
        </>
    )
}