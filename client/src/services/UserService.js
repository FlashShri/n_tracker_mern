import axios from "axios";
import { BASE_URL } from "./apiConstant";

export async function singupUser(credentials) {
  const res = await axios.post(`${BASE_URL}/user/register`, credentials);
     console.log(res);
  return res;
}


export async function loginUser(credentials) {
  const res = await axios.post(`${BASE_URL}/user/signin`, credentials);
  console.log(res);
  return res;
}