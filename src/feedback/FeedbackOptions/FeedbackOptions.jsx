import React from 'react';
import s from './FeedbackOptionsStyles.module.css';

function FeedbackOptions({ onFeedbackButtonClick }) {
return (
<ul className={s.btnList}>
                    <li className={s.btnListItem}>
                        <button
                            type="button"
                            className={s.btn}
                            onClick={onFeedbackButtonClick}
                        >Good
                        </button>
                    </li>
                    <li className={s.btnListItem}>
                        <button
                            type="button"
                            className={s.btn}
                            onClick={onFeedbackButtonClick}
                        >Neutral
                        </button>
                    </li>
                    <li className={s.btnListItem}>
                        <button
                            type="button"
                            className={s.btn}
                            onClick={onFeedbackButtonClick}
                        >Bad
                        </button>
                    </li>
                </ul>
        );
}

export default FeedbackOptions;