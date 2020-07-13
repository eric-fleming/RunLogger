import React from 'react'
import style from './addrun.module.css';


const addrun = () => {
    return (
        <div>
            <form>
                <div className={style.form_Inputs}>
                    <div className={style.form_Input}>
                        <label for="date">Date</label>
                        <input id="date" type="text"></input><br />
                    </div>
                    <div className={style.form_Input}>
                        <label for="dist">Dist</label>
                        <input className={style.dist} id="dist" type="text"></input><br />
                    </div>
                    <div className={style.form_Input}>
                        <label for="time-hr">Time</label>
                        <input className={style.time} id="time-hr" type="number" min="0"></input>
                        <input className={style.time} id="time-min" type="number" min="0"></input>
                        <input className={style.time} id="time-sec" type="number" min="0"></input>
                    </div>
                </div>
                <button class="btn btn-primary" type="submit">Enter</button>
            </form>
        </div>
    )
}

export default addrun
