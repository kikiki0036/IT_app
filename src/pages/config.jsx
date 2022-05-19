import React, { useState, useEffect } from 'react'

import axios from 'axios';

import UncontrolledTabs from './UncontrolledTabs';
import Nav from './Nav';

import {
    Col,
    TabPane,
    Badge,
    NavItem,
} from 'reactstrap';

import { StyledEngineProvider } from '@mui/material/styles';
import Dialog  from '../components/m-ui/dialog/Dialog';

const Generate = () => {

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
        
        // letter.addEventListener('mouseup', (e) => {
        //   const ripple = e.target.querySelector('.ripple-nav')
        //   clearTimeout(timerId);
        //   timerId = setTimeout(() => {
        //     ripple.classList.remove('activer');
        //     ripple.classList.remove('start');
        //   }, 500);
        // })
      })
        //dd active class to the current button (highlight it)
        // document.querySelectorAll('div.ef-hover')
    
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
                { "service & config".toUpperCase() }
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card-g  dataEmp-min-h">
                        {/* {
                        <Col lg={ 8 }>
                                <UncontrolledTabs initialActiveTabId="overview" >
                                    <div className="box-nav">
                                        <Nav pills className="search-n">
                                        </Nav>
                                        <Nav pills id="box1">
                                            <NavItem className="nav-tab">
                                                <UncontrolledTabs.NavLink className="btn letter active-item" tabId="overview" >
                                                    Overview
                                                    <div className="ripple-nav"></div>
                                                </UncontrolledTabs.NavLink>
                                            
                                                <UncontrolledTabs.NavLink tabId="detailContact" className="btn letter">
                                                    Detail
                                                    <div className="ripple-nav"></div>
                                                </UncontrolledTabs.NavLink>
                                        
                                                <UncontrolledTabs.NavLink tabId="chat"  className="btn letter">
                                                    Chat
                                                    <div className="ripple-nav"></div>
                                                </UncontrolledTabs.NavLink>
                                        
                                                <UncontrolledTabs.NavLink tabId="messages"  className="btn letter">
                                                    Messages 
                                                    <div className="ripple-nav"></div>
                                                </UncontrolledTabs.NavLink>
                    
                                                <div className="animation start-home"></div>

                                            </NavItem>
                                        </Nav>
                                    </div>
                                    <UncontrolledTabs.TabContent>

                                        <TabPane tabId="overview" id="Overview">                                
                                            <div> s</div>
                                        </TabPane>

                                        <TabPane tabId="detailContact" id="Detail">
                                            <StyledEngineProvider injectFirst>
                                                <Dialog />
                                            </StyledEngineProvider>  
                                        </TabPane>

                                        <TabPane tabId="chat" id="Chat">
                                            C
                                        </TabPane>
                                        
                                        <TabPane tabId="messages" id="Messages">
                                            D
                                        </TabPane>

                                    </UncontrolledTabs.TabContent>
                                </UncontrolledTabs>
                        </Col>
                        } */}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Generate
// {
//     <Col lg={ 8 }>
//         <UncontrolledTabs initialActiveTabId="overview">
//             { /* START Pills Nav */}
//             <div className="box1">
//                 <Nav pills className="nav-tab">
//                 {/* <Nav pills className="mb-4 flex-column flex-md-row mt-4 mt-lg-0 nav-tab"> */}
//                     <NavItem  className="btn letter active-item">
//                         <UncontrolledTabs.NavLink tabId="overview">
//                             Overview
//                         </UncontrolledTabs.NavLink>
//                         <div className="ripple-nav"></div>
//                     </NavItem>
//                     <NavItem className="btn letter">
//                         <UncontrolledTabs.NavLink tabId="detailContact">
//                             Detail
//                         </UncontrolledTabs.NavLink>
//                         <div className="ripple-nav"></div>
//                     </NavItem>
//                     <NavItem className="btn letter">
//                         <UncontrolledTabs.NavLink tabId="chat">
//                             Chat
//                         </UncontrolledTabs.NavLink>
//                         <div className="ripple-nav"></div>
//                     </NavItem>
//                     <NavItem className="btn letter">
//                         <UncontrolledTabs.NavLink tabId="messages">
//                             Messages 
//                             {/* <Badge pill color="secondary" className="ml-2">5</Badge> */}
//                         </UncontrolledTabs.NavLink>
//                         <div className="ripple-nav"></div>
//                     </NavItem>
//                     <div className="animation start-home"></div>
//                 </Nav>
//             </div>

//             { /* END Pills Nav */}
//             <UncontrolledTabs.TabContent>
//                 <TabPane tabId="overview" id="Overview">                                
//                    <div> s</div>
//                 </TabPane>
//                 <TabPane tabId="detailContact" id="Detail">
//                     B
//                 </TabPane>
//                 <TabPane tabId="chat" id="Chat">
//                     C
//                 </TabPane>
//                 <TabPane tabId="messages" id="Messages">
//                     D
//                 </TabPane>

//             </UncontrolledTabs.TabContent>
//         </UncontrolledTabs>
//     </Col>
//     }