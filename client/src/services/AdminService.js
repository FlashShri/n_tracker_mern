import axios from "axios";
import { BASE_URL } from "./apiConstant";

export async function login(credentials) {
  const res = await axios.post(`${BASE_URL}/admin/login`, credentials);
  //   console.log(res);
  return res;
}

export async function fetchusers() {
  try {
    const res = await axios.get(`${BASE_URL}/admin/user`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchuser( name ){
  try {
     const res = await axios.get(`${BASE_URL}/admin/user/${name}`);
    console.log(res.data);
    return res.data;
    
  } catch (error) {
    console.log( error );
  }
}

export async function deleteusers(name) {
  try {
    const res = await axios.delete(`${BASE_URL}/admin/user/${name}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateusers(newdata, name) {
  try {
    console.log( newdata );
    const res = await axios.put(`${BASE_URL}/admin/user/${name}`, newdata);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
