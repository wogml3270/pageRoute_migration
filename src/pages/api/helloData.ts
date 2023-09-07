import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { data } = req.body;
      res.status(200).json({ message: '데이터 보내기 성공적.' });
    } catch (error) {
      res.status(500).json({ message: '서버 에러' });
    }
  } else {
    res.status(405).json({ message: '보내는 메소드 에러' });
  }
}
