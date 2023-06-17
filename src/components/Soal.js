import React from 'react'
import styles from './Soal.module.css'

export default function Soal({quiz , answer}) {
  return (
    <div className={styles.container}>
        <h3>{quiz}</h3>
        <span>{answer}</span>
    </div>
  )
}
