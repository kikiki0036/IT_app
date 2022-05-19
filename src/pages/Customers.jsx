import React, { useState, useEffect } from 'react'

import Table from '../components/table/Table'

import axios from 'axios';

import customerList from '../assets/JsonData/customers-list.json'

import UncontrolledTabs from './UncontrolledTabs';
import Nav from './Nav';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

import {
    Col,
    TabPane,
    Badge,
    NavItem,
} from 'reactstrap';

const customerTableHead = {
    headerEmp: [
        "id",         
        "name",
        "dept",  
        "section", 
        "position", 
        "level",
        "type"
    ],
    headerDevice: [
        "device id",         
        "ip address ",
        "mac address",  
        "brand", 
        "system",
        "model", 
        "location",
        "user"
    ],
    databody: [
        
        { 
            "id": "6400004", 
            "name": "miss sudarat seanjan",
            "dept": "BACK 2",  
            "section": "DF-G OUTER", 
            "position": "operator", 
            "level": "emp" ,
            "type": "daily"
        }
    ]
}

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBodyEMP = (item, index) => (
    <tr key={index}>
        <td className="col_txt">{item.id_emp}</td>
        <td className="col_txt">{( item.gender == 'female' ? "Miss ":"Mr " ) + item.emp_nameEng}</td>
        <td className="col_txt">{item.departments[0].dept}</td>
        <td className="col_txt">{item.sections[0].section}</td>
        <td className="col_txt">{item.positions[0].position}</td>
        <td className="col_txt">{item.level}</td>
        <td className="col_txt">{item.type}</td>
    </tr>
)

const renderBodyDevice = (item, index) => (
    <tr key={index}>
        <td className="col_txt">{item.device_id}</td>
        <td className="col_txt">{item.ipaddress}</td>
        <td className="col_txt">{item.macaddress}</td>
        <td className="col_txt">{item.device_details[0].brand}</td>
        <td className="col_txt">{item.device_details[0].os_type+" "+item.device_details[0].system_type}</td>
        <td className="col_txt">{item.device_details[0].model}</td>
        <td className="col_txt">{item.locations[0].location}</td>
        <td className="col_txt">{item.user_profiles[0].profile_name}</td>
    </tr>
)

const Customers = () => {
    
    
    const [dataemp, setdataemp] = useState([]);
    const [datadevice, setddatadevice] = useState([]);

    const { Search } = Input;

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    const DataJEmp = async (e) => {
        try {
            await axios.get('http://localhost:5000/getDataAllEmp', { }).then((res) => {  
                setdataemp(res.data);
            })

        } catch (error) {
            console.log(error);
        }
    }

    const DataJDevice = async (e) => {
        try {
            await axios.get('http://localhost:5000/getDataDevice', { }).then((res) => {  
                setddatadevice(res.data);
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        DataJEmp();
        DataJDevice();
    },[]);


    const [DataEmprow, setDataEmprow] = useState(dataemp);  
    const [DataDevicerow, setDataDevicerow] = useState(datadevice);  
    const [SwitchSearch, setSwitchSearch] = useState("DataEmp");  


    useEffect(() => {
        setDataEmprow(dataemp)
    },[dataemp]);

    useEffect(() => {
        setDataDevicerow(datadevice)
    },[datadevice]);

    const onSearch = value => {
        // console.log(value);
        if(SwitchSearch == "DataEmp") {

            const filteredRowsEmp = dataemp.filter((row) => {
                const rowcolummEmp = row.id_emp
                return rowcolummEmp.toLowerCase().includes(value.toLowerCase());
            });
            setDataEmprow(filteredRowsEmp);

        } else if(SwitchSearch == "DataDevice") 
        {
            let rowcolummDevice
            const filteredRowsDevice = datadevice.filter((row) => {
                if(value.toLowerCase().slice(0,3) == "itu") {
                    rowcolummDevice = row.device_id
                } else {
                    rowcolummDevice = row.id_profile
                }
                return rowcolummDevice.toLowerCase().includes(value.toLowerCase());
            });
            
            setDataDevicerow(filteredRowsDevice);
        }
  
    }

    const FuncSwitchSearch = () => {
        if(SwitchSearch == "DataEmp") {
            setDataEmprow(dataemp)
            setSwitchSearch("DataDevice")
        } else if(SwitchSearch == "DataDevice") {
            setDataDevicerow(datadevice)
            setSwitchSearch("DataEmp")
        }
    }

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

    return (
        <div className="layout-component m_r">
            <h2 className="page-header">
                { "Data Emp & Device".toUpperCase() }
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
                                        <Nav pills id="box1" onClick={() => { FuncSwitchSearch() }}>
                                            <NavItem className="nav-tab">
                                                <UncontrolledTabs.NavLink tabId="overview" className="btn letter active-item">
                                                    Data Emp
                                                    <div className="ripple-nav"></div>
                                                </UncontrolledTabs.NavLink>
                                            
                                                <UncontrolledTabs.NavLink tabId="device" className="btn letter"> 
                                                    Device
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
                                                limit='8'
                                                headData={customerTableHead.headerEmp}
                                                renderHead={(item, index) => renderHead(item, index)}
                                                bodyData={DataEmprow}
                                                renderBody={(item, index) => renderBodyEMP(item, index)}
                                                // search={true}
                                            />
                                        </TabPane>

                                        <TabPane tabId="device" id="Device">
                                            <Table
                                                limit='8'
                                                headData={customerTableHead.headerDevice}
                                                renderHead={(item, index) => renderHead(item, index)}
                                                bodyData={DataDevicerow}
                                                renderBody={(item, index) => renderBodyDevice(item, index)}
                                                // search={true}
                                            />
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

export default Customers
