import axios from 'axios'
import { exceptionHandler } from '../core'
import { APP_CONFIGS } from '../utilities/constants'

axios.defaults.baseURL = APP_CONFIGS.API_BASE

export const axiosPublicInstance = axios.create()
export const axiosPrivateInstance = axios.create()

// Request interceptor to manage authorization & headers
axiosPrivateInstance.interceptors.request.use(async (request) => {
  // const token = await Auth.currentSession()
  // if (token !== undefined) {
  //   // @ts-ignore
  //   request.headers.Authorization = `Bearer ${token.idToken.jwtToken}`
  // }
  return request
}, (error) => {
  console.log('Req interceptor Error', error)
})

// Response interceptor to manage responses & errors
axiosPrivateInstance.interceptors.response.use(async (response) => {
  return response
}, async (error) => {
  return Promise.reject(await exceptionHandler(error.response))
})

axiosPublicInstance.interceptors.response.use(async (response) => {
  return response
}, async (error) => {
  return Promise.reject(await exceptionHandler(error.response))
})

