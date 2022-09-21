import { useEffect, useState } from "react";
import styles from "../../styles/StudentsList.module.css";
import { StudentType } from "../../types/student";
import Student from "../Student";
import axios from "axios";
import Loading from "../Loading";
import Link from "next/link";

const StudentsList = () => {
    const [students, setStudents] = useState<StudentType[]>([]);
    const [loadingData, setLoadingData] = useState<boolean>(true);

    const getAllData = () => {
        axios.get<StudentType[]>(
            process.env.API_URL,
            {
                headers: {
                    'Private-Access-Key': process.env.PRIVATE_KEY,
                }
            }
        )
        .then(response => {
            setStudents(response.data);
            setLoadingData(false);
        })
    }

    useEffect(() => {
        getAllData();
    }, []);

    if (loadingData) {
        return <Loading/>
    }

    return (
        <div className={styles.container}>
            <div className="btn-add-student">
                <Link href="/create">
                    <a>
                        <button className={styles.addStudentButton}>+ Adicionar novo aluno</button>
                    </a>
                </Link>
            </div>
            <div className={styles.studentsList}>
                {
                    students.map((item, index) =>
                        <Student data={item} key={index}/>
                    )
                }
            </div>
        </div>
    );
}

export default StudentsList;
