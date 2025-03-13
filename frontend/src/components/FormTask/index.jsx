import React from "react";
import style from './style.module.css';

export default function FormTask() {
    return(
        <section>
            <form action="#" id="form-task" className={style.formTask}>
                <input type="text" id="input-task" className={style.inputTask} placeholder="Digite a descrição da tarefa..." required />
                <button type="submit" id="btn-add" className={style.btnAdd}>+</button>
            </form>
        </section>
    )
}