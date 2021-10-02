import React from 'react';
import s from './SectionStyles.module.css';

function Section({title, children}) {
        return (
            <section className={s.section}>
                <h2>{title}</h2>
                {children}
            </section>
        )
}

export default Section;