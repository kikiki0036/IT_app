import React, { useState, useEffect } from 'react'

import Table from '../components/table/Table'

import dateShortcode from 'date-shortcode'

import axios from 'axios';

import UncontrolledTabs from './UncontrolledTabs';
import Nav from './Nav';

import { Input } from 'antd';

import {
    Col,
    TabPane,
    // Badge,
    NavItem,
} from 'reactstrap';

const customerTableHead = {
    header: [
        "job no",         
        "requestor",
        "service",  
        "option", 
        "open", 
        "close",
        "assign"
    ], 
    databody: [
        
        { 
            "job_no": "RQ22021300001", 
            "requestor": "SUPIWAN T.",
            "service_type": "ขอข้อมูล/ติดตั้ง -โปรแกรม",  
            "service_option": "ขอติดตั้งโปรแกรม", 
            "open_date": "2022-02-20 09:10:00", 
            "close_date": "2022-02-20 10:30:00" ,
            "assign_by": "NATCHAI M."
        }
    ]
}

const formatDateTime = (datetime) => {
    var str = '{DD/MM/YY HH:mm}'    
    return dateShortcode.parse(str, datetime)
}  

const subName = (name) => {
    const fullName = name.split(' ')
    const Sname = fullName[0].charAt(0).toUpperCase() + fullName[0].slice(1) +"  "+ fullName[1].charAt(0).toUpperCase() + '.'
    // const Sname = fullName.shift() +"  "+ fullName.pop().charAt(0) + '.'
    return Sname
}  

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td className="col_txt">{item.job_no}</td>
        <td className="col_txt">{item.service_tikkets[0].user_profiles[0].profile_name}</td>
        <td className="col_txt">{item.service_tikkets[0].service_types[0].title}</td>
        <td className="col_txt">{item.service_tikkets[0].service_options[0].title}</td>
        <td className="col_txt">{formatDateTime(item.open_date)}</td>
        <td className="col_txt">{formatDateTime(item.close_date)}</td>
        <td className="col_txt">{subName(item.erp_rights[0].it_name)}</td>
        {/* <td className="col_txt">
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td> */}
    </tr>
)

const { Search } = Input;

const onSearch = value => console.log(value);

const Request = () => {

    const [datajob, setdatajob] = useState([]);
  
    const DataJob = async (e) => {
        try {
            await axios.post('http://localhost:5000/getDataJob', {
                status: ['finish']
             }).then((res) => {  
                setdatajob(res.data);   
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        DataJob();
    },[]);

    useEffect(() => {
        const letters = Array.from(document.querySelectorAll('.nav-link'))
          letters.forEach((letter) => {
            let timerId;
            letter.addEventListener('mousedown', (e) => {
              clearTimeout(timerId);
              const ripple = e.target.querySelector('.ripple-nav')
              const size = letter.offsetWidth;
              const pos = letter.getBoundingClientRect();
              const x = e.pageX - pos.left - size;
              const y = e.pageY - pos.top - size;
              ripple.style = 'top:' + y + 'px; left:' + x + 'px; width: ' + size * 2 + 'px; height: ' + size * 2 + 'px;';
              ripple.classList.remove('activer');
              ripple.classList.remove('start');
              setTimeout(() => {
                ripple.classList.add('start')
                setTimeout(() => {
                  ripple.classList.add('activer')
                });
              });
              timerId = setTimeout(() => {
                ripple.classList.remove('activer');
                ripple.classList.remove('start');
              }, 500);
            })
          })
        let btns = document.querySelectorAll(".nav-link")
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
                let current = document.getElementById("box1").querySelectorAll(".active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    }, []);
    // const orderStatus = {
    //     "shipping": "primary",
    //     "pending": "warning",
    //     "finish": "success",
    //     "refund": "danger"
    // }

    return (
        <div className="layout-component m_r">
            <h2 className="page-header">
                { "Request".toUpperCase() }
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card-g dataEmp-min-h">
                    {
                        <Col lg={ 8 } className="del-p-g">
                                <UncontrolledTabs initialActiveTabId="overview" >
                                    
                                    <div className="box-nav">
                                        <Nav pills className="search-n">
                                            <Search className="search-table" placeholder="Search here.." allowClear onSearch={onSearch} style={{ width: 200 }} />
                                        </Nav>
                                        <Nav pills id="box1">
                                            <NavItem className="nav-tab">
                                                <UncontrolledTabs.NavLink tabId="overview" className="btn letter active-item">
                                                    Waite
                                                    <div className="ripple-nav"></div>
                                                </UncontrolledTabs.NavLink>
                                            
                                                <UncontrolledTabs.NavLink tabId="approve" className="btn letter">
                                                    approve
                                                    <div className="ripple-nav"></div>
                                                </UncontrolledTabs.NavLink>
                                        
                                                <UncontrolledTabs.NavLink tabId="reject"  className="btn letter">
                                                    reject
                                                    <div className="ripple-nav"></div>
                                                </UncontrolledTabs.NavLink>
                                                <div className="animation start-home"></div>

                                            </NavItem>
                                        </Nav>
                                    </div>
                                    { /* END Pills Nav */}
                                    <UncontrolledTabs.TabContent>

                                        <TabPane tabId="overview" id="Overview">                                
                                            <Table
                                                limit='15'
                                                headData={customerTableHead.header}
                                                renderHead={(item, index) => renderHead(item, index)}
                                                bodyData={datajob}
                                                renderBody={(item, index) => renderBody(item, index)}
                                                // search={true}
                                            />
                                        </TabPane>

                                        <TabPane tabId="approve" id="Approve">
                                            approve
                                        </TabPane>

                                        <TabPane tabId="reject" id="Reject">
                                            reject
                                        </TabPane>
                                     
                                    </UncontrolledTabs.TabContent>
                                </UncontrolledTabs>
                        </Col>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Request
