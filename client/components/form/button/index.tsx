import styles from './index.module.css';

interface IButton {
    label: string,
    onClick?: (e: any) => void,
    isLoading?: boolean,
    type?: 'submit' | 'button',
    disabled?: boolean
}

export default function Button(props: IButton) {
    return (
        <>
            <button type={props.type}  className={'heroBtn'} onClick={props.onClick} disabled={props.disabled}>
                {props.isLoading ? ('Loading...') : props.label}
            </button>
        </>
    )
}