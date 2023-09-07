import { NextApiRequest, NextApiResponse } from 'next';

interface responseData {
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<responseData>) {
  if (req.method === 'POST') {
    try {
      const { data } = req.body;
      console.log(data);
      res.status(200).json({ message: '회원가입 완료' });
    } catch (error) {
      res.status(500).json({ message: 'Error processing data' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
