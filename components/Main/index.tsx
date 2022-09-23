import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import StudentsList from "../StudentsList";

const Main = () => {
    const [refresh, setRefresh] = useState<boolean>(false);

    useEffect(() => {
        if (refresh) {
            //window.location.reload();
            setRefresh(false);
        }
    }, [refresh]);

    return (
        <div className={styles.container}>
            <div className={styles.mainTitle}>
                Project S
            </div>
            <div>
                <StudentsList setRefresh={setRefresh}/>
            </div>
        </div>
    );
}

export default Main;
