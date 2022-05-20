import React, { useState, useEffect, useRef } from 'react'

import './layout.css'

import { BrowserRouter, Route } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import ThemeAction from '../../redux/actions/ThemeAction'

/////////////////////////////////////////////////////

import axios from 'axios';

import jwt_decode from "jwt-decode";

import { useHistory } from 'react-router-dom';

import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import Routes from '../Routes'
import Content_rigth from '../content-rigth/Content_rigth'

import DatePickerExample from '../date-calendar/DatePickerCalendarExample';
// import Note from '../note/note'
import Editor from '../../components/Editor/Edit';

const Layout = () => {

    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()



    useEffect(() => {
        
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))

    }, [dispatch]) 
    
    ///////////////////////////////////////
    const [name, setName] = useState('loading...');
    const [id_profile, setIdprofile] = useState(0);
    const [id_emp, setIdemp] = useState('loading');
    const [section, setsection] = useState('loading');

    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const [tttttt, settttttttttttttt] = useState();
    const history = useHistory();


    useEffect(() => {
        refreshToken();
        // getUsers();
    }, [name]);
    
    const refreshToken = async () => {
        
        try {
            await axios.get('http://localhost:5000/token',).then((res) => {  
                setToken(res.data.accessToken);
                const decoded = jwt_decode(res.data.accessToken);
                    setIdprofile(decoded.id_profile);
                    setName(decoded.profile_name);
                    setIdemp(decoded.id_emp);
                    setsection(decoded.section);
                    setExpire(decoded.exp); 
            })
        } catch (error) {
            if (error.response) {
                history.push("/login");
            }else{
                history.push("/dashboard");
            }
        }
     }
    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            await axios.get('http://localhost:5000/token',).then(res => {  
                config.headers.Authorization = `Bearer ${res.data.accessToken}`;
                setToken(res.data.accessToken);
                const decoded =  jwt_decode(res.data.accessToken);
                    setIdprofile(decoded.id_profile);
                    setName(decoded.profile_name);
                    setIdemp(decoded.id_emp);
                    setsection(decoded.section);
                    setExpire(decoded.exp); 
            })
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    // const getUsers = async () => {

    //     const response = await axiosJWT.get('http://localhost:5000/users', {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     });
    //     setUsers(response.data);
    // }
    // localStorage.setItem('id_emp', id_emp   )
    return (
        <BrowserRouter>
            <Route  render={(props) => (
                <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                    <Sidebar IdEmp = {id_emp} {...props}/>
                    <div className="layout__content">
                        <TopNav
                            IdEmp = {id_emp}
                            UserName = {name}
                            section = {section}
                        />
                        
                            <div className="layout__content-main">
                                <Routes  IdEmp = {id_emp}/>
                                <Content_rigth
                                    IDProfile = {id_profile}
                                />  
                            </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>

    )
}

export default Layout
