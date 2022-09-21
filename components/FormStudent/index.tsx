import { useState } from "react";
import styles from "../../styles/FormStudent.module.css";

const FormStudent = () => {
    const options = ["1ª série", "2ª série", "3ª série"];

    const [nameForm, setNameForm] = useState<string>("");
    const [gradeForm, setGradeForm] = useState<string>("");
    const [yearForm, setYearForm] = useState<number>(0);

    const handleAddButtonClick = () => {
        console.log({ name: nameForm, grade: gradeForm, year: yearForm });
    }

    return (
        <div className={styles.container}>
            <form action="/api/hello" method="post" className={styles.mainForm}>
                <label>
                    <input
                        className={styles.input}
                        name="name"
                        type="text"
                        placeholder="Nome"
                        onChange={(e) => setNameForm(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <select
                        className={styles.input}
                        name="grade"
                        value={gradeForm}
                        onChange={(e) => setGradeForm(e.target.value)}
                        required
                    >
                        {options.map((item, index) =>
                            <option value={item} key={index}>{item}</option>
                        )}
                    </select>
                </label>
                <label>
                    <input
                        name="year"
                        className={styles.input}
                        type="text"
                        placeholder="Ano"
                        onChange={(e) => setYearForm(parseInt(e.target.value))}
                        required
                    />
                </label>
                <input
                    className={styles.submitButton}
                    type="submit"
                    value="Adicionar"
                />
            </form>
        </div>
    );
}

export default FormStudent;
