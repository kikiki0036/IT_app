import React, { useState, useEffect } from 'react'
import Axios from "axios";
import { Button, Popconfirm, notification } from 'antd';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
const NotebookCenterBooking = (props) => {

    const [id, setId] = useState('');
    const [nn, setnn] = useState([]);

    useEffect(() => {
        setId(localStorage.getItem('id_emp'));
    }, [localStorage.getItem('id_emp')]);
    useEffect(() => {
        nnow();
    }, []);
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
        a("AC00003", "morning");
        // console.log(a, b);
    }
    const confirmb = () => {
        a("AC00003", "afternoon");
    }
    const confirmc = () => {
        a("LV00001", "morning");
    }
    const confirmd = () => {
        a("LV00001", "afternoon");
    }
    const confirme = () => {
        a("LV00002", "morning");
    }
    const confirmf = () => {
        a("LV00002", "afternoon");
    }
    const nnow = () => {
        let today = new Date().toISOString().slice(0, 10)
        const arr3 = []
        Axios.post('http://localhost:5000/checknote', { day: today }).then((response) => {
            console.log(response);
            for (let i = 0; i < response.data.length; i++) {
                arr3.push(
                    <div>
                        {"-" + response.data[i].device_id + " " + "-" + response.data[i].round}
                    </div>
                )
            }
            setnn(
                <div>
                    {arr3}
                </div>
            )

        })

    }

    const a = (did, round) => {
        let today = new Date().toISOString().slice(0, 10)

        Axios.post('http://localhost:5000/checkNotebook', { device_id: did, round: round, day: today, reserve_by: id }).then((response) => {
            console.log(response.data);
            if (response.data == "1") {
                nnow()
                corecnoti('success');
            }
            else {
                incorecnoti('error');
            }
            nnow()
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
                        <Row>
                            <Col span={16}>
                                AC00003
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
                                LV00001
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
                                LV00002
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
                            </Col>
                            <Col span={8}>
                                Notebook In Use
                                {nn}
                            </Col>
                        </Row>


                    </div>
                </div>
            </div>
        </div>
    )

}

export default NotebookCenterBooking