import React, { useState, useEffect } from 'react'

import axios from 'axios';

import jwt_decode from "jwt-decode";

import { useHistory } from 'react-router-dom';

const Layout = () => {
    
    ///////////////////////////////////////
    // const [name, setName] = useState('');
    // const [user_id, setUser_id] = useState(0);
    // const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    // const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(() => {
        refreshToken();
        // getUsers();
    });

    const refreshToken = async () => {
        try {
            const response = await axios.get('https://react-api-dep.herokuapp.com/token');
            const decoded = jwt_decode(response.data.accessToken);
            setExpire(decoded.exp);
            history.push("/dashboard");

        } catch (error) {
            if (error.response) {
                history.push("/login");
            }else{
                history.push("/dashboard");
            }
        }
    }

    // const axiosJWT = axios.create();

    // axiosJWT.interceptors.request.use(async (config) => {
    //     const currentDate = new Date();
    //     if (expire * 1000 < currentDate.getTime()) {
    //         const response = await axios.get('http://localhost:5000/token');
    //         config.headers.Authorization = `Bearer ${response.data.accessToken}`;
    //         // setToken(response.data.accessToken);
    //         const decoded = jwt_decode(response.data.accessToken);
    //         // setName(decoded.name);
    //         setExpire(decoded.exp);
    //     }
    //     return config;
    // }, (error) => {
    //     return Promise.reject(error);
    // });

    // const getUsers = async () => {
    //     const response = await axiosJWT.get('http://localhost:5000/users', {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     });
    //     // setUsers(response.data);
    // }

    return (
        <div>
        {/* {history.push("/dashboard")} */}
        </div>

    )
}

export default Layout
