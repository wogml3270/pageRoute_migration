import axios from 'axios';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import styles from './Home.module.scss';

const Home = () => {
  const [message, setMessage] = useState<string>('');
  const [postData, setPostData] = useState<string>('');

  useEffect(() => {
    axios
      .get('/api/hello')
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/helloData', { data: postData });
      setMessage(response.data.message);
    } catch (error) {
      console.error('API 호출 중 오류:', error);
    }
  };

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Next.js API TEST</h1>
      <h2 className={styles.subTitle}>API 테스트용 앱입니다.</h2>
      <div className={styles.inputBox}>
        <input
          type='text'
          placeholder='데이터를 입력하세요'
          value={postData}
          onChange={(e) => setPostData(e.target.value)}
        />
        <button onClick={handleSubmit}>데이터 보내기</button>
      </div>
      <div className={styles.contents}>
        <h3>API에서 받은 메시지</h3>
        <p>{message}</p>
      </div>
      <div className={styles.routeButton}>
        <Link className={styles.route} href='/signUp'>
          <button>회원가입</button>
        </Link>
        <Link className={styles.route} href='/signIn'>
          <button>로그인</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
