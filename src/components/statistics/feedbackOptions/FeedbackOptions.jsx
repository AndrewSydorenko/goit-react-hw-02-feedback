import React from "react";
import css from '../feedbackOptions/FeedbackOptions.module.css'

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (
        <div className={css.feedback__btns}>
            {options.map((item) => 
                <button key={item} type="button" onClick={() => onLeaveFeedback(item)}>{item}</button>
            )}
   
</div>
    )
   
}