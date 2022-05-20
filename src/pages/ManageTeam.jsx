import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Axios from "axios";
import { notification } from 'antd';
import { ViewState, EditingState, IntegratedEditing, GroupingState, IntegratedGrouping } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    WeekView,
    Appointments,
    AppointmentForm,
    AppointmentTooltip,
    ConfirmationDialog,
    Resources,
    GroupingPanel,
    Toolbar,
    ViewSwitcher,
    DragDropProvider,
    MonthView,
    DayView,
    DateNavigator
} from '@devexpress/dx-react-scheduler-material-ui';
import moment from 'moment';
import Sname from "./sceduler/Sname";
import Sdata from "./sceduler/Sdata";
const ManageTeam = () => {
    useEffect(() => {
        setvalue();
    }, []);
    const [rdata, setdata] = useState([]);
    const [cname, setcname] = useState([{ text: ' ', id: 0 }]);
    var temp;
    var temp1;
    var temp2;
    var temp3;
    var temp4;
    var temp5;
    var temp6;
    const corecnoti = type => {
        notification[type]({
            message: 'การลงข้อมูล',
            description:
                'ลงสำเร็จ',
        });
    };
    const incorecnoti = type => {
        notification[type]({
            message: 'การลงข้อมูล',
            description:
                'ลงไม่สำเร็จเนื่องจากกรอกข้อมูลไม่ครบ',
        });
    };
    const fincorecnoti = type => {
        notification[type]({
            message: 'การลงข้อมูล',
            description:
                'แก้ขอมูลไม่สำเร็จเนื่องจากกรอกข้อมูลไม่ครบ',
        });
    };
    const delcorecnoti = type => {
        notification[type]({
            message: 'ลบข้อมูล',
            description:
                'ลบข้อมูลสำเร็จ',
        });
    };
    const todatetime = (time) => {

        return (moment(time).format());
    }
    const todate = (time) => {

        return (moment(time).toDate());
    }
    const emp = [
        { text: 'Jhon ', id: 1 },
        { text: 'Chris', id: 2 },
        { text: 'James', id: 3 },
    ];

    const resources = [{
        fieldName: 'name',
        title: 'Name',
        instances: cname,
    }];

    const setvalue = () => {
        Sdata.then(result => setdata(result))
        Sname.then(result => setcname(result))

        // console.log(resources);

        // setdata(arr23);
    }
    const groupOrientation = viewName => viewName.split(' ')[0];
    const grouping = [{
        resourceName: 'name',
    }];
    function commitChanges({ added, changed, deleted }) {
        if (added) {
            console.log(added);
            if (added.title !== undefined & added.notes != null) {
                setdata([
                    ...rdata, {
                        id: rdata.length + 1,
                        notes: added.notes,
                        startDate: added.startDate,
                        endDate: added.endDate,
                        title: added.title,
                        name: added.name
                    },
                ])
                Axios.post('http://localhost:5000/addschedu', { 's_id': rdata.length + 1, 'notes': added.notes, 'time_start': todatetime(added.startDate), 'time_end': todatetime(added.endDate), 'title': added.title, 'owner_n': added.name }).then((response) => {
                    // console.log(response);
                    corecnoti('success')
                });
            }
            else {
                incorecnoti('error')
            }

        }
        if (changed) {
            console.log(changed);


            setdata(

                rdata.map(a => (
                    changed[a.id] ? (temp = a.id, temp2 = todatetime(changed[a.id].startDate), temp3 = todatetime(changed[a.id].endDate), temp4 = changed[a.id].title, temp5 = changed[a.id].name, temp6 = changed[a.id].notes, { ...a, ...changed[a.id] }) : a
                )
                )
            )
            console.log(temp +" "+temp6+ " " + temp2 + " " + temp3 + " " + temp4 + " " + temp5 );
            if (temp2 !== undefined & temp3 !== undefined & temp4 !== undefined & temp5 !== undefined & temp6 !== undefined) {
                corecnoti('success')
                Axios.post('http://localhost:5000/upschedu', { 's_id': temp,'notes': temp6, time_start: temp2, time_end: temp3, 'title': temp4, 'owner_n': temp5,  }).then((response) => {
                    corecnoti('success')
                });
            }
            else {
                fincorecnoti('error')
            }
            // ...a, ...changed[a.id] 
            // (temp = a.id, temp2 = todatetime(changed[a.id].startDate), temp3 = todatetime(changed[a.id].endDate), temp4 = changed[a.id].title, temp5 = changed[a.id].name, temp6 = changed[a.id].notes
            // temp = a.id, temp2 = a.startDate, temp3 = a.endDate, temp4 = a.name, temp5 = a.title
            // console.log(temp + " " + temp2 + " " + temp3 + " " + temp4 + " " + temp5 + " " + temp6);
            // Axios.put('http://localhost:3001/updatesche', { 's_id': temp, time_start: temp2, time_end: temp3, 'title': temp4, 'owner_n': temp5, 'notes': temp6 }).then((response) => {
            //     // console.log(response);
            // });


        }
        if (deleted !== undefined) {
            console.log(deleted);
            setdata(rdata.filter(rdata => rdata.id != deleted))
            Axios.post('http://localhost:5000/delschedu', { 's_id': deleted }).then((response) => {
                delcorecnoti('success')
            });
        }
    }
    return (
        <div >
            <h2 className="page-header">
                {"work schedule".toUpperCase()}
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card-g  dataEmp-min-h">
                        <Paper>
                            <Scheduler
                                data={rdata}
                                
                        
                            >
                                <EditingState
                                    onCommitChanges={commitChanges}
                                />
                                <GroupingState
                                    grouping={grouping}
                                    groupOrientation={groupOrientation}
                                />
                                <ViewState
                                    defaultCurrentDate={moment()}
                                // currentViewName={currentViewName}
                                // onCurrentViewNameChange={this.currentViewNameChange}
                                />
                                <WeekView
                                    startDayHour={9}
                                    endDayHour={16}
                                    excludedDays={[0, 7]}
                                    name="Vertical Orientation"
                                    cellDuration={60}
                                />
                                <DayView
                                    startDayHour={9}
                                    endDayHour={16}

                                />
                                <MonthView
                                    startDayHour={9}
                                    endDayHour={16}
                                />
                                <Toolbar />
                                <DateNavigator />
                                <Appointments />
                                <Resources
                                    data={resources}
                                    mainResourceName="name"
                                />
                                <IntegratedGrouping />
                                <IntegratedEditing />
                                <AppointmentTooltip showOpenButton />
                                <AppointmentForm />
                                <GroupingPanel />
                                <ConfirmationDialog />

                                <DragDropProvider />

                                <ViewSwitcher />

                            </Scheduler>
                        </Paper>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default ManageTeam