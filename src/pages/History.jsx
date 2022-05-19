import React, { useState, useEffect } from 'react'

import TableNew from '../components/m-ui/NewTable'
import axios from 'axios';

import {
    Col,
} from 'reactstrap';

import { Input } from 'antd';
import Nav from './Nav';

const { Search } = Input;

const Customers = () => {

    const [search, setSearch] = useState("");  

    const onSearch = value => {
        setSearch(value)
    } 
    
    return (
        <div className="layout-component m_r">
            <h2 className="page-header">
                { "Job History".toUpperCase() }
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card-g dataEmp-min-h">
                    <Col lg={ 8 } className="del-p-g">
                        <div className="box-nav">
                            <Nav pills className="search-n">
                                <Search className="search-table" placeholder="Search here.." allowClear onSearch={onSearch} style={{ width: 200 }} />
                            </Nav>
                            <Nav pills id="box1-n"></Nav>
                        </div>
                        <TableNew
                            Search={search}
                        />
                    </Col>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Customers
