import { React, useEffect, useState } from "react";

import { Link } from 'react-router-dom'

import axios from 'axios';
import './sidebar.css'
// import logo from '../../assets/images/logo.png'
import sidebar_items from '../../assets/JsonData/sidebar_routes.json'

const SidebarItem = props => {

    useEffect(() => {
        const buttons = document.querySelectorAll('div.ef-hover')
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', function (e) {
                let x = e.clientX - e.target.offsetLeft;
                let y = e.clientY - e.target.offsetTop;
                let ripples = document.createElement('span');
                ripples.classList.add('span-hover');

                ripples.style.left = x + 'px';
                ripples.style.top = y + 'px';

                this.appendChild(ripples);
                setTimeout(() => {
                    ripples.remove();
                }, 1000);

            })

        })
    }, []);

    const active = props.active ? 'active' : ''
    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <div className={`ef-hover ${active}`}>
                    <i className={props.icon}></i>
                </div>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const Sidebar = (props) => {
    const [nav_prom, setNav_prom] = useState([]);
    const arr = [];

    const LoadNavbar = async (e) => {         

        axios.post('http://localhost:5000/naselect', { s_id: props.IdEmp }).then((res) => {
            setNav_prom(res.data);   
        })
    }

    useEffect(() => {  
            LoadNavbar();
            
    }, [props.IdEmp]);

    console.log(nav_prom)
    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)

    return (
        <div className='sidebar'>

            <div className='sidebar__box'>

                <div className="sidebar__logo">
                    <h1>APEX</h1>
                    <p>@apexcircuit thailand</p>
                </div>
                <hr className="MuiDivider-root MuiDivider-fullWidth MuiDivider-light css-hr" />
                {
                    nav_prom ? 
                        sidebar_items.map((item, index) => {     

                            if ((nav_prom.indexOf(item.con) > -1) != true) {
                                arr.push(
                                    <Link to={item.route} key={index}>
                                        <SidebarItem
                                            title={item.display_name}
                                            icon={item.icon}
                                            active={index === activeItem}
                                        />
                                    </Link>)
                            }
                        })
                    : <div>{nav_prom.length}</div>

                }

            </div>
        </div>
    )
}
export default Sidebar


















                // sidebar_items.map((item, index) => (
                //     <Link to={item.route} key={index}>
                //         <SidebarItem
                //             title={item.display_name}
                //             icon={item.icon}
                //             active={index === activeItem}
                //         />


                //     </Link>
                // ))