import style from "./SkillSection.module.css"

export function SkillsSection(){
    return (
        <section className={style.container}>
            <h2>Skills Section</h2>
            <ul>
                <li>Javascript</li>
                <p>Pretty good!</p>
            </ul>
        </section>
    )
}