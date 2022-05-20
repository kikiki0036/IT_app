import React, { useState, useEffect } from 'react'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

// import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

// import StatusCards from '../assets/JsonData/status-card-data.json'

import ServiceOption from '../assets/JsonData/service_options.json'

import axios from 'axios';

import dateShortcode from 'date-shortcode'
// import { HomeOutlined, HeartTwoTone } from '@ant-design/icons';

import '../components/status-card/statuscard.css'


let dateTime_s;
let dateTime_e;

function getDateTime() {

    var now     = new Date(); 
    var year    = now.getFullYear();
    var year_s    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var month_s   = now.getMonth()+1; 
    var day     = now.getDate();
    var day_s   = now.getDate();

    if(month.toString().length == 1) {
         month = '0'+month;
    }

    if(day.toString().length == 1) {
         day = '0'+(day-1);
    } 

    if( (day-6) <= 0) {

        day_s = (day_s-1+30)-6;

        if(day_s.toString().length == 1) {
            day_s = '0'+day_s;
        }

        if(month_s.toString().length == 1) {
            if (month_s-1 <= 0) {
                month_s = 12; 
                year_s = year_s-1;
            } else {
                month_s = '0'+month_s-1;
            }
        }

    } else {

        day_s = (day_s-1)-6;
        if (day_s.toString().length == 1) {
            day_s = '0'+day_s;
        }
        month_s = month;

    }

    dateTime_s = month_s+'-'+day_s+'-'+year_s; 
    dateTime_e = month+'-'+day+'-'+year;

    return dateTime_e;

}

getDateTime();
const data_s = dateTime_s;
const data_e = dateTime_e;

const chartOptions = {

    series: [
        {
            name: 'request approve',
            // data: [40,70,20,90,36,80,30,91,60]
            data: [
                {
                    x: "12-26-2021",
                    y: 2
                },
                {
                    x: "12-27-2021",
                    y: 7
                },
                {
                    x: "12-28-2021",
                    y: 3
                },
                {
                    x: "12-29-2021",
                    y: 1
                },
                {
                    x: "12-30-2021",
                    y: 6
                },
                {
                  x: "12-31-2021",
                  y: 5
                },
                {
                  x: "01-01-2022",
                  y: 4
                },
                {
                  x: "01-02-2022",
                  y: 7
                },
                {
                  x: "01-03-2022",
                  y: 3
                },
                {
                  x: "01-04-2022",
                  y: 8
                },
                {
                  x: "01-05-2022",
                  y: 3
                },
                {
                  x: "01-06-2022",
                  y: 7
                },
                {
                  x: "01-07-2022",
                  y: 5
                },
            ]
        }
        , 
        {
            name: 'request reject',
            // data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
            data: [
                {
                    x: "12-26-2021",
                    y: 6
                },
                {
                    x: "12-27-2021",
                    y: 2
                },
                {
                    x: "12-28-2021",
                    y: 3
                },
                {
                    x: "12-29-2021",
                    y: 5
                },
                {
                    x: "12-30-2021",
                    y: 2
                },
                {
                  x: "12-31-2021",
                  y: 7
                },
                {
                  x: "01-01-2022",
                  y: 4
                },
                {
                  x: "01-02-2022",
                  y: 1
                },
                {
                  x: "01-03-2022",
                  y: 7
                },
                {
                  x: "01-04-2022",
                  y: 6
                },
                {
                  x: "01-05-2022",
                  y: 7
                },
                {
                  x: "01-06-2022",
                  y: 9
                },
                {
                  x: "01-07-2022",
                  y: 4
                },
            ]
        }
    ],
    options: {
        colors: [ '#FF0080', '#4e67f5'],//4e67f5 9C27B0
        title: {
            text: "Requests",
            align: 'left',
            margin: 0,
            offsetX: 8,
            offsetY: 0,
            floating: false,
            style: {
              fontSize:  '14px',
              fontWeight:  'bold',
              fontFamily:  ["Roboto","Helvetica","Arial","sans-serif"],
              //   color:  '#263238'
            },
        },
        chart: {
            id: 'yt',
            group: 'social',
            height: 160,
            type: "line",
            background: 'transparent',
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
              },
              toolbar: {
                autoSelected: 'zoom'
              },
        },
        dataLabels: {
            enabled: false,
            
        },
        stroke: {
            curve: 'straight',
            // straight smooth  
            width: [0.5,0.5]
        },
        fill: {
            // style: {
            //     colors: [ '#E91E63', '#9C27B0']
            //   },
            gradient: {
              enabled: true,
              opacityFrom: 0.55,
              opacityTo: 0
            }
        },
        markers: {
            size: 5,
            hover: {
                // size: undefined,
                sizeOffset: 2
            }
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '10px',
                    colors: '#969494',
                    fontFamily:  ["Roboto","Helvetica","Arial","sans-serif"],
                },

                show: true,
                align: 'right',
                minWidth: 10,
                maxWidth: 50,
            },
        },
        xaxis: {
            type: 'datetime',
            min: new Date(data_s).getTime(),
            // max: new Date(data_e).getTime(),
            labels: {
                style: {
                    fontSize: '10px',
                    colors: '#969494',
                }
            },
        },
        legend: {
            show: false,

            position: 'bottom',
            horizontalAlign: 'left', 
            offsetX: 1,
            fontSize: "10px"
        },
        tooltip: {
            theme: "dark",
            //light dark
            // enabled: true,
            // enabledOnSeries: undefined,52
            // shared: true,
            // followCursor: false,
            // intersect: false,
            // inverseOrder: false,
            // custom: undefined,
            // fillSeriesColor: false,
            // theme: false,
            style: {
              fontSize: '12px',
              fontFamily:  ["Roboto","Helvetica","Arial","sans-serif"],
            },
            onDatasetHover: {
                highlightDataSeries: false,
            },
            x: {
                show: false,
                format: 'dd MMM',
                formatter: undefined,
            },
            y: {
                formatter: undefined,
                title: {
                    formatter: (seriesName) => seriesName,
                },
            },
            z: {
                formatter: undefined,
                title: 'Size: '
            },
            marker: {
                show: true,
            },
            // items: {
            //    display: flex,
            // },
            fixed: {
                enabled: true,
                position: 'topRight',
                offsetX: -100,
                offsetY: -15,
            },
        },
        
        grid: {
            show: true,
            borderColor: '#eeeeee',
            strokeDashArray: 0,
            yaxis: {
                lines: {
                    show: true
                }
            },   
            // padding: {
            //     top: 0,
            //     right: 50,
            //     bottom: 0,
            //     left: 0
            // },
        }
    }
}



 
export const Dashboard = () => {
    const [datajob, setdatajob] = useState([]);
    const [datajobCount, setdatajobCount] = useState(
        {
            "pending": {
              "count": 0,
            },
            "inprogress": {
              "count": 0,
            },
            "delay": {
              "count": 0,
            },
            "finish": {
              "count": 0,
            }
        }
    );

    const [series, setseries] = useState([0,0,0,0]);

    const DataJobCount = async () => {
        try {
            await axios.post('http://localhost:5000/getDataJobCount', { 
            }).then((res) => {  
                setdatajobCount(res.data);   

            })
        } catch (error) {
            console.log(error);
        }
    }

    const DataJob = async (e) => {
        try {
            await axios.post('http://localhost:5000/getDataJob', { 
                // status : ['pending','open','delay']
                status : [e]
            }).then((res) => {  
                setdatajob(res.data);   
            })
        } catch (error) {
            console.log(error);
        }
    }

    function funcCallData (e) {
        DataJob(e)
    }

    useEffect(() => {
        DataJobCount()
        DataJob('pending');  
    },[]);


    useEffect(() => {
        setseries([ 
                    datajobCount.pending.count,
                    datajobCount.inprogress.count,
                    datajobCount.delay.count,
                    datajobCount.finish.count
                  ])
    },[datajobCount]);

    const value_pin = (w) => {
        let n = 1
        return w.globals.seriesTotals.reduce((a, b) => {

            if(n!=4){
                n++
                return a + b
            }else{
                return a
            }
         
          }, 0)
    }

    const donutOptions = {
        series: series,
        options: {
            labels: ['Pendi..', 'Inprog..', 'Delay', 'Finish'],
            colors: [ '#ff7b00', '#1f88e9', '#fc1e4e', '#51ed5b'],

            // colors: [ '#fe9166', '#46c3f9', '#ff3f94', '#51ed5b'],

            // colors: [ '#ffb108', '#1a8af3', '#fd3448', '#00e253'],
        
            title: {
                text: "All JOB",
                align: 'right',
                margin: 0,
                offsetX: -5,
                offsetY: 0,
                floating: false,
                style: {
                fontSize:  '14px',
                fontWeight:  'bold',
                fontFamily:  ["Roboto","Helvetica","Arial","sans-serif"],
            },
            },
            chart: {
                width: '100%',
                type: 'donut',
            },
            stroke: {
                // show:false,
                width: 2,
                // colors: 'undefined' ,
            },
            plotOptions: {
                pie: {
                    customScale: 1.14,
                    offsetY: 0,
                    startAngle:-180,
                    endAngle: 180,
                    expandOnClick: false,
                    size: 200,
                    donut: {
                        size: '75%',
                        background: 'transparent',
                        labels: {
                        show: true,
                        //   name:{
                        //     show: true,
                        //     fontSize: "0.1rem",

                        //   },
                        total: {
                            label:"TODAY",
                            showAlways: true,
                            show: true,
                            fontSize: "0.55rem",
                            fontWeight: "600",
                            fontFamily:  ["Roboto","Helvetica","Arial","sans-serif"],
                            color: "#969494",
                            formatter: function (w) {
                                return value_pin(w)
                            }
                        },
                        value: {
                            show: true,
                            fontSize: '1.7rem',
                            fontFamily:  ["Roboto","Helvetica","Arial","sans-serif"],
                            color: "#403e74",
                            fontWeight: 600,
                            offsetY: 3,
                            
                        }
                        }
                    }
                    
                },

            },
        
            tooltip: {
                theme:'dark',
                //dark light
                fillSeriesColor: false,
                style: {
                    fontSize: '10px',
                    fontFamily:  ["Roboto","Helvetica","Arial","sans-serif"],
                    
                },
                onDatasetHover: {
                    highlightDataSeries: false,
                },
                marker: {
                    show: true,
                },
                items: {
                    display: "flex",
                },
                fixed: {
                    enabled: false,
                    position: 'topRight',
                    offsetX: 0,
                    offsetY: 0,
                },
            },
            dataLabels: {
                enabled: false,
                donut: {
                    labels: {
                    show: true,
                    total: {
                        showAlways: true,
                        show: true,
                    }
                    }
                }
            },
            fill: {
                //หลอดสี
                type: 'gradient',
                opacity: 1,
                colors: [ '#ff9900', '#4e67f5', '#fd2d42', '#00e253'],

                //colors: [ '#fe9166', '#46c3f9', '#ff3f94', '#00e253'],

                // colors: [ '#fe9166', '#3f55e9', '#fd2d42', '#00e253'],
                gradient: {
                    gradientToColors: ["#ffdc18", "#00d2ff", "#FD2DA2" , '#50ffa5'],

                    //gradientToColors: ["#fed472", "#62edd0", "#fd5fd6" , '#89f0ae'],

                    // gradientToColors: ["#fed472", "#30E9FF", "#FD2DA2" , '#89f0ae'],
                    
                    // shade: "dark",
                    // type: "horizontal",
                    // shadeIntensity: 1,
                    // inverseColors: true,
                    opacityFrom:0.8,
                    opacityTo: 1,
                    stops: [60,100]
                }

            },
            legend: {
                //แถบหัวข้อ
                offsetY: 15,
                fontSize: '10px',
                fontFamily:  ["Roboto","Helvetica","Arial","sans-serif"],
                fontWeight: 500,
                labels: {
                    colors: "#969494",
                    // useSeriesColors: false
                },
                markers: {
                    width: 10,
                    height: 10,
                    radius: 15,
                    onClick: undefined,
                    offsetX: -2,
                    offsetY: 1.4
                },

            },
            // responsive: [{
            //     breakpoint: 200,
            //     options: {
            //         chart: {
            //             width: 510,
            //             background: '#2787AB',
            //         },
            //         legend: {
            //             position: 'bottom'
            //         }
            //     }
            // }],
        
        },
    }

    const latestOrders = {
        header: [
            "requestor",
            "service",
            "start",
            "target",
            "status"
        ],
        databody : [
          
        ]
    }

    const formatDateTime = (datetime) => {
        var str = '{DD/MM/YY HH:mm}'    
        return dateShortcode.parse(str, datetime)
    }    

    
    const StatusCard = propssCard => {  
        return (
            <div className='status-card' onClick={() => { funcCallData(propssCard.status); }} >
                <div className="status-card__icon">
                    {/* <i className={props.icon}></i> */}
                    <div className={propssCard.count <= 0 ? "box-icon" : "box-icon active-icon-" + propssCard.status}>
                        <svg x="0px" y="0px" width="30px" height="30px" viewBox="-3 -3 30 30" className={propssCard.count <= 0 ? "status_icon" : "status_icon"}>
                            <filter id="dropshadow" x="-2" y="-2" width="200" height="200">
                                <feGaussianBlur  stdDeviation="4"/>
                            </filter>
                            <path className={propssCard.count <= 0 ? "path" : "path blur"} d={propssCard.icon}/>
                            <path className='path' d={propssCard.icon}/>

                        </svg>
                    </div>
                    <div className="status-card__info">
                        <h4>{propssCard.count}</h4>
                    </div>
                </div>
                <div className="title-card">Status {propssCard.title}</div>
            </div>
        )
    }

    const orderStatus = {
        "inprogress": "primary",
        "pending": "warning",
        "finish": "success",
        "delay": "danger"
    }

        
    const StatusCount = [
       
            {
                "id":1,
                "icon": "M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z",
                "count": series[0],
                "title": "Pending",
                "status":"pending"
            },
            {
                "id":2,
                "icon": "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
                "count":series[1],
                "title": "inprogress",
                "status":"inprogress"
            },
            {
                "id":3,
                "icon": "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
                "count": series[2],
                "title": "Delay",
                "status":"delay"
            },
            {
                "id":4,
                "icon": "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z",
                "count": series[3],
                "title": "Finish",
                "status":"finish"
            }

        ]

    const renderOrderHead = (item, index) => (
        <th key={index}>{item}</th>
    )

    const renderOrderBody = (item, index) => (
        <tr key={index}>
            <td className="col_txt">{item.service_tikkets[0].user_profiles[0].profile_name}</td>
            <td className="col_txt">{item.service_tikkets[0].service_options[0].title}</td>
            <td className="col_txt">{formatDateTime(item.start_date)}</td>
            <td className="col_txt">{formatDateTime(item.target_date)}</td>

            {/* <td className="col_txt">{item.name}</td>
            <td className="col_txt">{item.service}</td>
            <td className="col_txt">{item.start}</td>
            <td className="col_txt">{item.target}</td> */}
            <td className="col_txt">
                <Badge type={orderStatus[item.status]} content={item.status}/>
            </td>
        </tr>
    )

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div className="layout-component m_r">
            {/* <HomeOutlined twoToneColor="#52c41a" style={{ fontSize: '15px' ,color: 'hotpink'}}/>  <HeartTwoTone twoToneColor="#eb2f96" style={{ fontSize: '15px'}} /> */}
            <h2 className="page-header">{ "Manage Job".toUpperCase() }  </h2>
            <div className="row">
                <div className="col-3 del-p-r ">
                    <div className="row inside-box">
                        <div className="col-12 del-p">
                            <div className="card-chart full-height">
                                <Chart
                                    options={themeReducer === 'theme-mode-dark' ? {
                                        ...chartOptions.options,
                                        theme: { mode: 'dark'}
                                    } : {
                                        ...chartOptions.options,
                                        theme: { mode: 'light'}
                                    }}
                                    series={chartOptions.series}
                                    type='area'
                                    height='100%'
                                />
                            </div>
                        </div>
                        <div className="col-12 del-p donut">
                            <div className="card-chart-donut full-height">
                                {/* chart */}
                                <Chart
                                    options={themeReducer === 'theme-mode-dark' ? {
                                        ...donutOptions.options,
                                        theme: { mode: 'dark'}
                                    } : {
                                        ...donutOptions.options,
                                        theme: { mode: 'light'}
                                    }}
                                    series={donutOptions.series}
                                    type='donut'
                                    height='100%'
                                />
                            </div>
                        </div>
                    </div>               
                </div>
               
                <div className="col-8">
                    <div className="card full-h">
                        <div className="card__header">
                            <h3>MY JOB TODAY</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                limit='5'
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={datajob}
                                // bodyData={latestOrders.databody}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                                // search={false}
                                pageDadb={true}
                            />
                        </div>
                    </div>
                </div>
      
                <div className="col-12 del-p ">
                    <div className="row inside-box">
                        {
                            StatusCount.map((item, index) => (
                                <div className="col-2-2 " key={item.id}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                        status={item.status}
                                    />
                                </div>
                            ))
                        }
                    </div>               
                </div>
            </div>
        </div>
      )
}

export default Dashboard
