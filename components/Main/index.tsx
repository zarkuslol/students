import styles from "../../styles/Home.module.css";
import StudentsList from "../StudentsList";

const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mainTitle}>
                Project S
            </div>
            <div>
                <StudentsList/>
            </div>
        </div>
    );
}

export default Main;
