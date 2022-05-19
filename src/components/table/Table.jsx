import React, { useState, useEffect } from 'react'

import './table.css'

import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import Pagination from '@mui/material/Pagination';
import { StyledEngineProvider } from '@mui/material/styles';
import { styled } from "@mui/material/styles";

const PaginationNewStyle = styled(Pagination)(({ theme }) => ({

    "& button.Mui-selected": {
        border: "1px solid #0099ff",
        background: "#0099ff25",
    },
}));

const Table = props => {

    const { Search } = Input;

    const onSearch = value => console.log(value);

    const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit)) : props.bodyData

    const [dataShow, setDataShow] = useState(initDataShow)

    useEffect(() => {
        setDataShow(initDataShow);
    }, [props.bodyData]);

    let pages = 1

    let range = []

    if (props.limit !== undefined) {
        let page = Math.floor(props.bodyData.length / Number(props.limit))
        pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }
    const [currPage, setCurrPage] = useState(0)

    const handleChange = (event, value) => {
        const start = Number(props.limit) * (value-1)
        const end = start + Number(props.limit)

        setDataShow(props.bodyData.slice(start, end))

        setCurrPage(value-1);

        console.log(value)

    };

    return (
        <div className="table-area">
            {
                props.search == true ?
                    <Search className="search-table" placeholder="data search.." allowClear onSearch={onSearch} style={{ width: 200 }} />
                :null
            }
            <div className={props.pageDadb == true ? "table-wrapper-dasb" : "table-wrapper"}>
                <table>
                    {
                        props.headData && props.renderHead ? (
                            <thead >
                                <tr>
                                    {
                                        props.headData.map((item, index) => props.renderHead(item, index))
                                    }
                                </tr>
                            </thead>
                        ) : null
                    }
                    {
                        props.bodyData && props.renderBody ? (
                            <tbody >
                                {
                                    dataShow.map((item, index) => props.renderBody(item, index))
                                }
                            </tbody>
                        ) : null
                    }
                </table>
            </div>
            {
                pages > 1 ? (
                    <div className={props.pageDadb == true ? "con-pagination-dasb" : "con-pagination"}>
                        { 
                                <StyledEngineProvider injectFirst>
                                        <PaginationNewStyle
                                            variant="outlined" 
                                            shape="rounded" 
                                            size="small"  
                                            // color="secondary" 
                                            sx={{ marginRight: '0' }} 
                                            count={Math.ceil(props.bodyData.length/props.limit)} 
                                            page={currPage+1}
                                            onChange={handleChange} 
                                        />
                                </StyledEngineProvider>
                        }
                    </div>
                ) : null
            }
        </div>
    )
}

export default Table
