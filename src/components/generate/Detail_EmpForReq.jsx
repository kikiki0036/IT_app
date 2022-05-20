import React, { useState, useEffect, useRef } from 'react'
import TextField from '@mui/material/TextField';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import axios from 'axios';

import FormControlLabel from '@mui/material/FormControlLabel';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DateTimePicker from '@mui/lab/DateTimePicker';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';

import {th} from 'date-fns/locale';

import InputAdornment from '@mui/material/InputAdornment';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
// import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import DateRangeIcon from '@mui/icons-material/DateRange';

import './style.css'
import { styled } from '@mui/material/styles';

import RenderDataEmp  from '../../assets/Field-RenderModel/RenderDataEmp';
import RenderDataEmpIT  from '../../assets/Field-RenderModel/RenderDataEmpIT';

const CssTextField = styled(TextField)(({ theme }) => ({
  "& label.Mui-focused": { },
  "& label.MuiInputLabel-root ": { fontSize: 15, fontFamily: 'Kanit' },
  "& .MuiInput-underline:after": { },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: theme.palette.mode === "light" ? "#969494" : "#2b2b2b" },
    "&:hover fieldset": { borderColor: theme.palette.mode === "light" ? "#969494" : "#2b2b2b" },
    "&.Mui-focused fieldset": { borderColor: theme.palette.mode === "light" ? "#969494" : "#2b2b2b" }
  },
  "& .MuiOutlinedInput-input": { fontSize: 12, fontFamily: 'Kanit' },
  "& .MuiInputBase-input": { fontSize: 12, fontFamily: 'Kanit' }
}));

// const FormControlLabelStyle = styled(FormControlLabel)(({ theme }) => ({
//   "& .MuiFormControlLabel-label": { 
//     fontSize: 14, 
//     fontFamily: 'Kanit'
//   },
// }));


// const CustomWidthTooltip = styled(({ className, ...props }) => (<Tooltip {...props} classes={{ popper: className }} />)) (({ theme }) => ({
//     [`& .${tooltipClasses.tooltip}`]: { maxWidth: 200, textAlign: "center", padding: 10, backgroundColor: "white", color: 'rgba(0, 0, 0, 0.87)', boxShadow: theme.shadows[1], fontSize: 11, },
//     [`& .${tooltipClasses.arrow}`]: { "&:before": { boxShadow: theme.shadows[1],  backgroundColor: theme.palette.common.white, }, color: theme.palette.common.white, backgroundColor: "none" },
// }));

const Detail_EmpForReq = () => {

        const [valuejobstart, setValuejobstart] = useState(null);//new Date()
        const [valuejobtarget, setValuejobtarget] = useState(null);
        const [section, setSection] = useState(null);
        const [email, setEmail] = useState(null);
        
        return (
          <div className="detail-req-step-2">

            <div className="box-fields-input-50">
            
              <div className="box-fields" id="box-fields">
                    <h5>Requestor</h5>
                    <br />
                    <div className="input-req">
                      <RenderDataEmp
                          // value={"test input v.2"}
                          funcx={true}
                          setSection={(props) => setSection(props.section)}
                          setEmail={(props) => setEmail(props.email)}
                          renderInput={(props) => <CssTextField {...props} 
                                                    required
                                                    className="field-req" 
                                                    id='requestor'
                                                    name='requestor' 
                                                    label='Requestor' 
                                                    type="text" 
                                                    variant="standard"
                                                    value={props.id}
                                                    InputProps={{
                                                                  endAdornment: (
                                                                    <InputAdornment position="end">
                                                                      <FolderSharedIcon sx={{ fontSize: 20 }}/>
                                                                    </InputAdornment>
                                                                  ),
                                                                }}
                                                  /> }
                      />
                    </div>   

                    <div className="input-req">
                      <CssTextField className="field-req" id='section' name='section' label='Section' type="text" variant="standard" 
                                    value={section != null ? section:""}
                                    InputLabelProps={section != null && section != ""?{ shrink: true }:{ shrink: false }}

                      />
                    
                    </div> 
                    <div className="input-req">
                      <CssTextField className="field-req" id='tel' name='tel' label='Tel' type="text" variant="standard" required
                        // value={name} onChange={handleChange}
                      />
                    </div> 
                    <div className="input-req">
                      <CssTextField className="field-req" id='email' name='email' label='Email' type="text" variant="standard"
                                    value={email != null ? email:""}
                                    InputLabelProps={email != null && email != ""?{ shrink: true }:{ shrink: false }}
                        // value={name} onChange={handleChange}
                      />
                    </div> 
         
              </div>
            </div>
            <div className="box-fields-input-50">
             
              <div className="box-fields" id="box-fields">
                    <h5>Assign and plan</h5>
                    <br />
                    <div className="box-input-pad">
                      <p>Appove</p>
                      <div className="in-box-input-pad">
                        <div className="input-req">
                          <RenderDataEmpIT
                              // value={"test input v.2"}
                              // funcx={false}
                              renderInput={(props) => <CssTextField {...props} 
                                                        required
                                                        className="field-req" 
                                                        id='appoveby' 
                                                        name='appoveby'
                                                        label='Appove By'
                                                        type="text"
                                                        variant="standard"
                                                        value={props.id}
                                                        InputProps={{
                                                                      endAdornment: (
                                                                        <InputAdornment position="end">
                                                                          <FolderSharedIcon sx={{ fontSize: 20 }}/>
                                                                        </InputAdornment>
                                                                      ),
                                                                    }}
                                                      /> }
                          />
                        </div> 
                      </div>
                    </div>  
                    <div className="box-input-pad">
                      <p>Assign</p>
                      <div className="in-box-input-pad">
                        <div className="input-req">
                          <RenderDataEmpIT
                                // value={"test input v.2"}
                                // funcx={false}
                                renderInput={(props) => <CssTextField {...props} 
                                                          required
                                                          className="field-req" 
                                                          id='assign' 
                                                          name='assign'
                                                          label='Assign'
                                                          type="text"
                                                          variant="standard"
                                                          value={props.id}
                                                          InputProps={{
                                                                        endAdornment: (
                                                                          <InputAdornment position="end">
                                                                            <FolderSharedIcon sx={{ fontSize: 20 }}/>
                                                                          </InputAdornment>
                                                                        ),
                                                                      }}
                                                        /> }
                            />
                        </div> 
                        <div className="input-req">
                          <CssTextField className="field-req" id='assigndetail' name='assigndetail' label='Assign Detail' type="text" variant="standard"
                            // value={name} onChange={handleChange}
                          />
                        </div> 
                        <div className="box-flex">
                            <div className="in-box">
                              <LocalizationProvider dateAdapter={AdapterDateFns}  locale={th} >
                                <MobileDateTimePicker
                                  renderInput={(props) => <CssTextField {...props}  required className="field-req"  id='jobstart'  name='jobstart' label='Job start'  variant="standard"  InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <DateRangeIcon sx={{ fontSize: 20 }}/>
                                      </InputAdornment>
                                    ),
                                  }}/> }
                                  inputFormat="dd/MM/yyyy HH:mm"
                                  minTime={new Date(0, 0, 0, 5)}
                                  maxTime={new Date(0, 0, 0, 18, 45)}
                                  value={valuejobstart}
                                  sx={{ fontSize: 20 }}
                                  onChange={(newValue) => {
                                    setValuejobstart(newValue);
                                  }}
                                />
                              </LocalizationProvider>

                              {/* <CssTextField className="field-req" id='jobstart' name='jobstart' label='Job start' type="datetime-local" variant="standard" InputLabelProps={{ shrink: true, }}
                                // value={name} onChange={handleChange}
                              /> */}
                            </div>
                            &nbsp;&nbsp;&nbsp;<p>-</p>&nbsp;&nbsp;&nbsp;
                            <div className="in-box">
                              <LocalizationProvider dateAdapter={AdapterDateFns}  locale={th} >
                                <MobileDateTimePicker
                                  renderInput={(props) => <CssTextField {...props} className="field-req" id='jobtarget' name='jobtarget' label='Job Taregt'  variant="standard"  InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <DateRangeIcon sx={{ fontSize: 20 }}/>
                                      </InputAdornment>
                                    ),
                                  }}/> }
                                  inputFormat="dd/MM/yyyy HH:mm"
                                  minTime={new Date(0, 0, 0, 5)}
                                  maxTime={new Date(0, 0, 0, 18, 45)}
                                  value={valuejobtarget}
                                  sx={{ fontSize: 20 }}
                                  onChange={(newValue) => {
                                    setValuejobtarget(newValue);
                                  }}
                                />
                              </LocalizationProvider>
                            </div>
                        </div>
                      </div>
                    </div>  
              </div>
            </div>
          </div>
        )
}

export default Detail_EmpForReq