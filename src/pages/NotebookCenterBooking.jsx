import React, { useState, useEffect } from 'react'
import Axios from "axios";
import { Button, Popconfirm, notification } from 'antd';
import 'antd/dist/antd.css';
const NotebookCenterBooking = (props) => {

    const [id, setId] = useState('');
   
    useEffect(() => {
      setId(localStorage.getItem('id_emp'));
    },[localStorage.getItem('id_emp')]);

    const corecnoti = type => {
        notification[type]({
            message: 'การจองโน็ตบุค',
            description:
                'จองสำเร็จ',
        });
    };
    const incorecnoti = type => {
        notification[type]({
            message: 'การจองโน็ตบุค',
            description:
                'ไม่สำเร็จเนื้องจากมีคนจองเวลานี้ไปแล้ว',
        });
    };
    const confirma = () => {
        // console.log("HI");
        a("AC00003", "m");
        // console.log(a, b);
    }
    const confirmb = () => {
        a("AC00003", "an");
    }
    const confirmc = () => {
        a("LV00001", "m");
    }
    const confirmd = () => {
        a("LV00001", "an");
    }
    const confirme = () => {
        a("LV00002", "m");
    }
    const confirmf = () => {
        a("LV00002", "an");
    }
    
    const a = (did, round) => {
        let today = new Date().toISOString().slice(0, 10)
    
        Axios.post('http://localhost:5000/checkNotebook', { device_id: did, round: round,day:today, reserve_by: id }).then((response) => {
            console.log(response.data);
            if (response.data == "1") {
                corecnoti('success');
            }
            else {
                incorecnoti('error');
            }
            // if(response.data)
            // if (response.data[0].status == "empty") {
            //     Axios.put('http://localhost:3001/updatestatus', { device_id: did, round: round, reserve_by: /*location.state.id*/"6400001", status: "disabled" }).then((response) => {
            //         console.log("ยืมเรียบร้อย");
            //         corecnoti('success');
            //     })
            // }
            // else {
            //     console.log("ไม่ว่าง");
            //     incorecnoti('error');
            // }
        });
    }

    return (
        <div className="layout-component m_r">
            <h2 className="page-header">
                {"Notebook Center".toUpperCase()}
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card-g  dataEmp-min-h" >
                        NOTEBOOK 1
                        <br />
                        <Popconfirm
                            title="Title"
                            onConfirm={confirma}
                        >
                            <Button type="primary" id="time1">9.00-12.00</Button>
                        </Popconfirm>
                        <Popconfirm
                            title="Title"
                            onConfirm={confirmb}
                        >
                            <Button type="primary" id="time2"  >13.00-16.00</Button>
                        </Popconfirm>
                        <br />
                        NOTEBOOK 2
                        <br />
                        <Popconfirm
                            title="Title"
                            onConfirm={confirmc}
                        >
                            <Button type="primary" id="time1" >9.00-12.00</Button>
                        </Popconfirm>
                        <Popconfirm
                            title="Title"
                            onConfirm={confirmd}
                        >
                            <Button type="primary" id="time2"  >13.00-16.00</Button>
                        </Popconfirm>
                        <br />
                        NOTEBOOK 3
                        <br />
                        <Popconfirm
                            title="Title"
                            onConfirm={confirme}
                        >
                            <Button type="primary" id="time1" >9.00-12.00</Button>
                        </Popconfirm>
                        <Popconfirm
                            title="Title"
                            onConfirm={confirmf}
                        >
                            <Button type="primary" id="time2"  >13.00-16.00</Button>
                        </Popconfirm>
                        <br />

                    </div>
                </div>
            </div>
        </div>
    )

}

export default NotebookCenterBooking