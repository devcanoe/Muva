import styles from './index.module.css';

export default function TextArea() {
    return (
        <>
            <textarea className={styles.container}  rows={4}></textarea>
        </>
    )
}