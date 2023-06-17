import React, { useState } from 'react'
import styles from './Landing.module.css'
import { soalat } from '../assets/soalat'
import Soal from './Soal'

export default function Landing() {
    const [searchText , setSearchText] = useState("")

    const changeHandler = (e) => {
        setSearchText(e.target.value)
    }
    const newListSoalat = soalat.filter(i => i.quiz.includes(searchText))
  return (
    <div className={styles.container}>
        
        <input type='text' className={styles.input} placeholder='متن سوال...' value={searchText} onChange={changeHandler} autoFocus />
        <span style={{marginBottom : "10px"}}>تعداد کل سوالات : {soalat.length}</span>
        {
            newListSoalat.map((item , index)=> <Soal key={index} quiz={item.quiz} answer={item.answer} />)
        }
    </div>
  )
}
