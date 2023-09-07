import axios from 'axios';
import { useState } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';
import styles from './signUp.module.scss';

interface FormData {
  username: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [message, setMessage] = useState<string>('');

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.post('/api/signUp', data);
      setMessage(response.data.message);
      reset();
    } catch (error) {
      console.error('회원가입 오류:', error);
    }
  };

  return (
    <div className={styles.signUp}>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='username'>사용자 이름:</label>
          <input type='text' id='username' {...register('username', { required: true })} />
        </div>
        <div>
          <label htmlFor='email'>이메일:</label>
          <input type='email' id='email' {...register('email', { required: true })} />
        </div>
        <div>
          <label htmlFor='password'>비밀번호:</label>
          <input type='password' id='password' {...register('password', { required: true })} />
        </div>
        <Link href='/'>
          <button type='button'>이전</button>
        </Link>
        <button type='submit'>가입하기</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SignUp;
