// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";
import { StudentType } from '../../types/student';

type Data = {
  name: string,
  grade: string,
  year: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, grade, year }: StudentType = req.body;
  try {
    axios.post<StudentType>(
      process.env.API_URL,
      {
        name: name,
        grade: grade,
        year: year
      },
      {
        headers: {
          "Private-Access-Key": process.env.PRIVATE_KEY
        }
      }
    ).then((response) => {
      if (response.status === 201) {
        res.writeHead(302, { location: "/" }).end();
      }
      else {
        res.writeHead(302, { location: "/create" }).end();
        window.alert("Ocorreu um erro ao enviar os dados");
      }
    })
  }
  catch (e) {
    res.redirect("/create");
    window.alert("Dados não foram enviados, tente novamente");
  }
}
