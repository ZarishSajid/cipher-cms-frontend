import axios from 'axios'
import {AuthModel} from '../models/AuthModel'
import {UserModel} from '../models/UserModel'

const API_URL = process.env.REACT_APP_API_URL;

export const GET_USER_BY_ACCESSTOKEN_URL = `http://localhost:3011`
export const LOGIN_URL = `${API_URL}/login`
 export const REGISTER_URL = `${API_URL}/signup`
export const REQUEST_PASSWORD_URL = `${API_URL}/auth/forgot-password`
// Server should return AuthModel
export function login(username: string, password: string) {
  return axios.post(LOGIN_URL, {username, password})
}
// Server should return AuthModel
export function register( firstname: string, lastname: string,email: string, username:string ,password: string) {
  return axios.post<AuthModel>(REGISTER_URL, {
    firstname,
    lastname,
    email,
    username,
    password,
  })
}
// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(username: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {username})
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  return axios.get<UserModel>(GET_USER_BY_ACCESSTOKEN_URL)
}
