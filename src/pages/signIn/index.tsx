import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

import styles from './signIn.module.scss';

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
  });
  const [loginError, setLoginError] = useState<string>('');

  const { mutate, isLoading } = useMutation(
    async () => {
      const response = await axios.post('/api/login', formData);
      return response.data;
    },
    {
      onSuccess: (data) => {
        console.log(data);
        alert('로그인 되었습니다.');
      },
      onError: (error: any) => {
        console.error('로그인 오류:', error.response.data);
        setLoginError('로그인 실패. 사용자 이름 또는 비밀번호를 확인하세요.');
      },
    },
  );

  const handleLogin = async () => {
    mutate();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={styles.loginBox}>
      <h2>Login</h2>
      <form>
        <div className={styles.userBox}>
          <label>ID</label>
          <input type='text' name='id' value={formData.id} onChange={handleInputChange} disabled={isLoading} />
        </div>
        <div className={styles.userBox}>
          <label>PASSWORD</label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
            disabled={isLoading}
          />
        </div>
        {loginError && <div className={styles.error}>{loginError}</div>}
        <button onClick={handleLogin} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}
          <span />
          <span />
          <span />
          <span />
        </button>
      </form>
    </div>
  );
};

export default SignIn;
