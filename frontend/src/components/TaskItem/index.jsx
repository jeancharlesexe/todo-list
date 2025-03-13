import React from "react";
import style from './style.module.css';

export default function TaskItem() {
    return (
    <div className={`${style.taskItem}`}>
            <div className={style.taskInfo}>
                <input type="checkbox"/>
                <label for="">Treinar</label>
            </div>
            <div className={style.taskSettings}>
                <button>
                    <img src="https://img.icons8.com/?size=30&id=AWPFmbr0eZkC&format=png&color=000000" alt="Editar" />
                </button>
                <button>
                    <img src="https://img.icons8.com/?size=30&id=exEuV0xMCMYC&format=png&color=000000"  alt="Excluir" />
                </button>
            </div>
        </div>
    )
}