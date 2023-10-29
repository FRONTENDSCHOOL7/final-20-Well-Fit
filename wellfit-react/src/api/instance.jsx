import axios from 'axios';

const URL = 'https://api.mandarin.weniv.co.kr/';

// 로그인, 회원가입, 이메일 및 계정 검증
export const infoInstance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 이미지 업로드
export const imgInstance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

// 기본
export const authInstance = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
});

// 프로필 정보
export const tokenInstance = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const axiosUrlApi = axios.create({
  baseURL: URL,
});
