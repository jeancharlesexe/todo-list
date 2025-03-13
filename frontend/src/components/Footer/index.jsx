import React from "react";
import style from './style.module.css'

export default function Footer() {
    return(
        <footer className={style.barContainer}>
            <div className={style.progressBar}>
                <div className={style.progressContent}></div>
                <span className={style.progressInfo}>0/0 concluídos (0.0%)</span>
            </div>
            <button className={style.btnHide}>Ocultar concluídas</button>
        </footer>
    )
}