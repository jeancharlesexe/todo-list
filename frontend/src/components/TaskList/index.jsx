import React from "react"
import style from './style.module.css'

export default function TaskList(props) {
    return(
        <section className={style.taskContainer}>
            <ul id="task-list" className={style.taskList}>
                {props.children}
            </ul>
        </section> 
    )
}