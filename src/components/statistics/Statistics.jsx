import React from "react"
import css from '../statistics/Statistics.module.css'

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    
        return (
            <div className={css.feedback}>          
                    <ul>
                        <li className={css.stats__item}>Good: {good}</li>
                        <li className={css.stats__item}>Neutral: {neutral}</li>
                        <li className={css.stats__item}>Bad: {bad}</li>
                        <li className={css.stats__item}>Total: {total}</li>
                        <li className={css.stats__item}>Positive feedback: {positivePercentage}%</li>
                    </ul>
            </div>
        ) 
     
}