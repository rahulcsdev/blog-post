"use client"
import  { useState } from "react";
import {gql} from '@apollo/client'
import client from '../helpers/apollo-client'
import {useRouter} from 'next/navigation'
import Link from "next/link";
const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const router=useRouter();
  const [formData, setFormData] = useState(initialState);
  const bg = "bg-gradient-to-r from-gray-700 via-gray-900 to-black";
  const register = async (e) => {
    e.preventDefault();
    try {
        const {data}=await client.mutate({
            mutation:gql`
            mutation CreateUser($data: UserCreateInput!) {
                createUser(data: $data) {
                  id
                  name
                  email
                }
              }
            `,
            variables:{
                "data": {
                    "name": formData.name,
                    "email": formData.email,
                    "password": formData.password
                  }
            }
        });
        console.log(data);

        router.push('/login');

    } catch (error) {
        console.log(error)
    }
  };
  return (
    <div
      className={`h-screen bg-gradient-to-r flex items-center justify-center ${bg}`}
    >
      <div className="bg-gradient-to-r p-5 from-rose-50 to-teal-50 min-w-[600px] rounded-md h-[400px]">
        <h1 className="text-xl font-semibold text-center">Sign Up</h1>
        <form
          onSubmit={register}
          className="mt-5 flex items-stretch px-6 gap-3  justify-center flex-col "
        >
          <div className=" overflow-hidden gap-3  flex items-center justify-start rounded-md shadow-md border-2 border-gray-600 ">
            <h1 className=" px-3 bg-gray-700 text-white py-3">Name</h1>
            <input
              placeholder="Enter name"
              className=" py-3 bg-transparent  text-black border-none outline-none"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className=" overflow-hidden gap-3  flex items-center justify-start rounded-md shadow-md border-2 border-gray-600 ">
            <h1 className=" px-3 bg-gray-700 text-white py-3">Email</h1>
            <input
              type="email"
              placeholder="Enter Email"
              className=" py-3 bg-transparent  text-black border-none outline-none"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className=" overflow-hidden gap-3  flex items-center justify-start rounded-md shadow-md border-2 border-gray-600 ">
            <h1 className=" px-3 bg-gray-700 text-white py-3">Password</h1>
            <input
              type="password"
              placeholder="Enter Password"
              className=" py-3 bg-transparent  text-black border-none outline-none"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <button className="px-4 py-2 rounded-md bg-gray-700 text-white">
            Register
          </button>
          <div>  Already have an account ?  <Link href='/login' >Login</Link>  </div>
        </form>
        
      </div>
    </div>
  );
};

export default Register;
