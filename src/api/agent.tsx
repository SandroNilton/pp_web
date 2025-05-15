import { IBoard } from '../models/board';
import { ICompany } from '../models/company';
import { ISession, ISessionFormValues } from '../models/auth/session'; 
import axios, { AxiosResponse } from 'axios';
import { history } from '../App';
import { toast } from '../components/common/toast/Toast'; 

axios.defaults.baseURL = 'https://localhost:5001/api';

axios.interceptors.response.use(undefined, (error) => {
  
  if (error.message === 'Network Error' && !error.response) {
    toast.push('Error de comunicacion al api', 'warning');
  }

  const status = error.response.status;

  if (status === 404) history.push('/not-found');
  if (status === 500) toast.push('500 Error del servidor', 'negative');
  if (status === 400) toast.push('400 Solicitud Incorrecta', 'negative');
  throw error.response;
})

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwt');
  if (token) 
    config.headers.Authorization = `Bearer ${token}`;
  return config;
}, (error) => Promise.reject(error));

const responseBody  = (response: AxiosResponse) => response.data;
  
const request = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody), 
}

const Boards = {
  list: (): Promise<IBoard[]> => request.get('/board'),
  details: (id: string) => request.get(`/board/${id}`),
  create: (board: IBoard) => request.post('/board', board),
  update: (board: IBoard) => request.put(`/board/${board.id}`, board),
  delete: (id: string) => request.delete(`/board/${id}`),
}

const Companies = {
  list: (): Promise<ICompany[]> => request.get('/company'),
  details: (id: string) => request.get(`/company/${id}`),
  create: (company: ICompany) => request.post('/company', company),
  update: (company: ICompany) => request.put(`/company/${company.id}`, company),
  delete: (id: string) => request.delete(`/company/${id}`),
}

const Auth = {
  login: (session: ISessionFormValues) : Promise<ISession> => request.post('/auth/login', session),
  register: (session: ISessionFormValues) : Promise<ISession> => request.post('/auth/register', session),
  current: (): Promise<ISession> => request.get('/auth/'),
}

export default {
  Boards,
  Companies,
  Auth,
};