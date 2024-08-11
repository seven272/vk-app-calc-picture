import React, { useEffect, useState } from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    const [year, setYear] = useState('')
    //Получаем текущий год
    useEffect(() => {
        const dateObj = new Date()
        const yearNow = dateObj.getUTCFullYear()
        setYear(yearNow)
    }, [])

    return (
        <footer className={styles.footer}>
            <span className={styles.text}>
                &#169; {year}
            </span>
        </footer>
    )
}

export default Footer