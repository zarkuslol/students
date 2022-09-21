import styles from "../styles/Create.module.css";
import FormStudent from "../components/FormStudent";

const Create = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mainTitle}>
                Adicionar novo aluno
            </div>
            <div className="main-form-student">
                <FormStudent/>
            </div>
        </div>
    )
}

export default Create;
