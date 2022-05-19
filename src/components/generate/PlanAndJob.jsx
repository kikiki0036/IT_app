import React from 'react'

import { styled } from "@mui/material/styles";
import moment from "moment";
import "moment-timezone";

const Root = styled('div')`

  td,
  th,
  .detail-request-plan p {
    padding: 11.42px 0px;
  }

  .css-i4bv87-MuiSvgIcon-root {
    width: 0.7rem;
    height: 0.7rem;
  }

  .css-dsuxgy-MuiTableCell-root {
    padding: 5px 10px;
  }

  .detail-arrow {
    padding: 0;
    border: 0;
  }

  .css-9l5vo-MuiCollapse-wrapperInner {
    padding: 5px 10px;
    background-color: rgba(248, 248, 248, 0.227);
  }
  
  .txt-detail:not(.detail-request-plan) thead {
    background-color: #f5f5f8a1;
  }

  .txt-detail:not(.detail-request-plan) tbody {
    // background-color: #f5f5f84d;
  }

  .tikket-detail {
    font-size: 0.6rem;
    height: 21rem;
    margin-bottom: 2rem;
    padding: 0px 20px;
    overflow: auto;
  }

  .tikket-detail td:not(.hiden-col) ,
  .tikket-detail th:not(.hiden-col) ,
  .tikket-detail .detail-request-plan p:not(.hiden-col) {
    padding: 5px 10px;
    font-size: 0.65rem;

  }

  .detail-request-plan .b-rl p,
  .detail-request-plan .b-rl td,
  .detail-request-plan .b-rl th  {
    border: 0;
    font-size: 0.65rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0;

  }

  // .detail-request-plan td.b-rl , {
  //   display: flex;
  // }

  .email-txt {
    text-transform: none;
  }
  
  .b-rl {
    border-left: 1px solid #ececec;
    border-right: 1px solid #ececec;
    width: 49%;
  }

  .b-rl-tk {
    width: 49%;
  }

  .hiden-col {
    border: 0;
    width: 5px;
    padding: 0px 0px;
  }

  .title-row {
    width: 8em;
  }

  .txt-detail {
    margin-bottom:20px;
  }

  .service-option {
    margin-bottom: 20px;
  }

  .detail-job-historys {
    display: flex;
  }
  
  .detail-job-historys .assign-detail {
    width: 100%;
  }
  
  .detail-job-historys .assign-detail div,
  .detail-job-historys .solution-detail div{
    width: 100%;
    padding: 5px 10px;
    border: 1px solid #ececec;
  }

  .font-kanit {
    font-family: 'Kanit', sans-serif;
  }

  p:not(.detail-request-plan p) {
    // margin-left: 10px;
    padding: 5px 10px;
    font-size: 0.65rem;
    font-weight: 600;
    text-shadow: none;
  }
`;

const PlanAndJob = (props) => {

  const Datecurrent = moment().tz("Asia/Bangkok").format("DD/MM/YY")
  // moment().tz("Asia/Bangkok").format("YYYY/MM/D HH:mm:s")
  console.log(Datecurrent);
  let rowdataitem = JSON.parse(props.data.get('items'));
  // [
  //   {
  //     id_item : "111",
  //     title : "tttt1",
  //     value : "vvvv1"
  //   },
  //   {
  //     id_item : "222",
  //     title : "tttt2",
  //     value : "vvvv2"
  //   }
  // ]

  return (
    <Root>
        <div className="tikket-detail">
            <h5>All Detail</h5>
            <div className="txt-detail detail-request-plan">

              <table size="small" aria-label="purchases">
                <thead>
                  <tr>
                    <td className="tableRow-req-plan col_txt">Requestor</td>
                    <td className="hiden-col"></td>
                    <td className="tableRow-req-plan col_txt">Plan</td>       
                  </tr>
                </thead>
                <tbody>
                     <tr>
                      <td className="b-rl"><td className="title-row">name</td><td className="font-kanit">: &nbsp;{props.data.get('requestor')}</td></td>
                      <td className="hiden-col"></td>
                      <td className="b-rl"><td className="title-row">job date</td><td className="">: &nbsp;{Datecurrent}</td></td>
                    </tr>
                    <tr>
                      <td className="b-rl"><td className="title-row">section</td><td className="">: &nbsp;{props.data.get('section')}</td></td>
                      <td className="hiden-col"></td>
                      <td className="b-rl"><td className="title-row">appove by</td><td className="">: &nbsp;{props.data.get('appoveby')}</td></td>
                    </tr>
                    <tr>
                      <td className="b-rl"><td className="title-row">tel</td><td className="">: &nbsp;{props.data.get('tel')}</td></td>
                      <td className="hiden-col"></td>
                      <td className="b-rl"><td className="title-row">Assign</td><td className="">: &nbsp;{props.data.get('assign')}</td></td>
                    </tr>
                    <tr>
                      <td className="b-rl"><td className="title-row">email</td><td className="email-txt">: &nbsp;{props.data.get('email')}</td></td>
                      <td className="hiden-col"></td>
                      <td className="b-rl"><td className="title-row">Start - target</td><td className="">: &nbsp;{props.data.get('jobstart')}&nbsp;-&nbsp;{props.data.get('jobtarget')}</td></td>
                    </tr>
                </tbody>
              </table>

            </div>

            <div className="detail-job-historys service-option font-kanit">
                <div className="assign-detail">
                    <p>Assign Detail</p>
                    <div className="txt-detail col_txt">
                      {props.data.get('assigndetail')}
                    </div>
                </div>
            </div>

            <div className="txt-detail">

              <table size="small" aria-label="purchases" className="service-option">
                <thead className="border-rl">
                  <tr>
                    <td className="col_txt">tikket date</td>
                    <td className="col_txt">Service</td>
                    <td className="col_txt">Option</td>
                  </tr>
                </thead>
                <tbody className="border-rl">
                    <tr key={"service-option"}>
                      <td className="col_txt">{Datecurrent}</td>
                      <td className="col_txt font-kanit">{props.data.get('ServiceType')}</td>
                      <td className="col_txt font-kanit">{props.data.get('ServiceOption')}</td>
                    </tr>
                </tbody>  
              </table>

              <table size="small" aria-label="purchases" className="service-option font-kanit">
                <thead className="border-rl">
                  <tr>
                    <td className="col_txt">tikket item</td>
                    <td className="col_txt">item detail</td>
                  </tr>
                </thead>
                <tbody className="border-rl vb">
                    {
                      rowdataitem.map((RowItem) => (
                        <tr key={RowItem.id_item}>
                          <td className="col_txt b-rl-tk">{RowItem.title}</td>
                          <td className="col_txt b-rl-tk">{RowItem.value}</td>
                        </tr>
                      ))
                    }
                </tbody>  
              </table>

            </div>
          </div>
    </Root>
  )
}

export default PlanAndJob

// -------------------2-------------------

//  ServiceType, ขอข้อมูล/ติดตั้ง -โปรแกรม
//  ServiceOption, ขอติดตั้งโปรแกรม

// IT000001-000001, 
// IT000001-000002, 
// IT000001-000003, 
// IT000001-000004, 

// requestor, 
// section, 
// tel, 
// eamil, 
// appoveby, 
// assign, 
// assigndetail, 
// jobstart, 
// jobtarget, 
 
// -------------------2-------------------