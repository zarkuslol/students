import axios from "axios";
import styles from "../../styles/Student.module.css";
import { StudentType } from "../../types/student";

type Props = {
    data: StudentType;
}

const Student = ({ data }: Props) => {
    const handleDeleteButtonClick = () => {
        axios.delete(
            `${process.env.API_URL}/${data.id}`,
            {
                headers: {
                    'Private-Access-Key': process.env.PRIVATE_KEY,
                }
            }
        )
        .finally(() => window.location.reload());
    }

    return (
        <div className={styles.studentsBox}>
            <div className={styles.students}>
                {data.name} - {data.grade} - {data.year}
            </div>
            <div className={styles.deleteButton}>
                <button
                    className={styles.delBtn}
                    onClick={handleDeleteButtonClick}
                >Deletar</button>
            </div>
        </div>
    );
}

export default Student;
