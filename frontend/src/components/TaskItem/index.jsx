import React from "react";
import style from './style.module.css';

import { useState } from "react";

export default function TaskItem(props) {

    const [isChecked, setIsChecked] = useState(props.isChecked);

    const handleCheckbox = ()=>{
        setIsChecked(!isChecked)
    }

    return (
        <div className={`${style.taskItem} ${isChecked ? style.checked : ''}`}>
            <div className={style.taskInfo}>
                <input type="checkbox" checked={isChecked} onChange={handleCheckbox}/>
                <label for="">{props.title}</label>
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