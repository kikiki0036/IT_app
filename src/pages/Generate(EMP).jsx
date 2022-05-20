import React, { useState, useEffect } from 'react'

import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';

import { StyledEngineProvider } from '@mui/material/styles';
import Stepper  from '../components/m-ui/stepper/Stepper';

import Select_service from '../components/generate/Select_service';
import Detail_req from '../components/generate/Detail_req';
import Detail_EmpForReq from '../components/generate/Detail_EmpForReq';
import PlanAndJob from '../components/generate/PlanAndJob';

const Generate = () => {


  const _renderStepContent_1 = () => {
    return  <Select_service/>
  }

  const _renderStepContent_2 = () => {
    return  <Detail_req/>
  }

  const _renderStepContent_3 = () => {
    return  <Detail_EmpForReq/>
  }

  const _renderStepContent_4 = (data) => {
    return  <PlanAndJob
              data={data}
            />
  }


  return (
      <div className="layout-component m_r">
          <h2 className="page-header">
              { "mis self service".toUpperCase() }
          </h2>
          <div className="row">
              <div className="col-12">
                  <div className="card-g dataEmp-min-h box-generate-scoll">
                    <StyledEngineProvider injectFirst>
                      <Stepper
                        stepContent = {['Service', 'Detail Request', 'Requestor / Assign', 'All Detail']}
                        contents = {[_renderStepContent_1, _renderStepContent_2, _renderStepContent_3, _renderStepContent_4]}
                        icon = {[ 
                                  "*",
                                  <DesignServicesIcon sx={{ fontSize: 16 }} />,
                                  <AssignmentIcon sx={{ fontSize: 16 }}/>,
                                  <PersonIcon sx={{ fontSize: 18}} />,
                                  <DisplaySettingsIcon sx={{ fontSize: 18 }} />
                                  
                                ]}
                      />
                    </StyledEngineProvider>
                  </div>
              </div>
          </div>
      </div>
  )

}

export default Generate