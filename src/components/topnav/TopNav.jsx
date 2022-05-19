import { React, useEffect,} from "react";

import './topnav.css'

import { Link} from 'react-router-dom'


import Dropdown from '../dropdown/Dropdown'

import ThemeMenu from '../thememenu/ThemeMenu'

import notifications from '../../assets/JsonData/notification.json'

import user_image from '../../assets/images/tuat.png'

import user_menu from '../../assets/JsonData/user_menus.json'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUserCog } from '@fortawesome/free-solid-svg-icons'

import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import Nav from '../../pages/Nav';

import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const FormGroupStyle = styled(FormGroup)(({ theme }) => ({
    marginLeft: 5,
    padding: 0,
}));
const FormControlLabelStyle = styled(FormControlLabel)(({ theme }) => ({
    margin: 0,
    padding: 0,
}));
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 45,
  height: 28,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 2,
    padding: 0,
    top: 1,
    left: -4,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? 'red' : '#ccc',
        // backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',

      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? 'red' : '#403e74',
    width: 21,
    height: 21,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#ccc',
    borderRadius: 20 / 2,
  },
}));



const renderNotificationItem = (item, index) => (    
    <div className="notification-item item-nf" id="item-nf" key={index}>
        <i className={item.icon}></i>
        <span className="span-nf">{item.content}</span>
    </div>
)

const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__name">
            {user.user_id}
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
        <div className="topnav__right-user__name">
            {user.section}
        </div>
        <div className="topnav__right-user__image">
            {/* <img src={user.image} alt="" /> */}
            <FontAwesomeIcon icon={faUserCog} />
        </div>
    </div>
)

const renderUserMenu =(item, index) => (
    
    <Link to={item.route || '/'} key={index}>
        <div className="notification-item user-bnt">
            <i className={item.icon+' menu-hover'}></i>
            <span className="menu-hover" >{item.content}</span>
        </div>
    </Link>
)


const Topnav = (props) => {

    const { Search } = Input;

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    const onSearch = value => console.log(value);

    const curr_user =  {
        // display_name: 'Attaphon N.',
        display_name: props.UserName,
        user_id: "ID : "+ props.IdEmp,
        section: props.section,
        image: user_image
    }

    return (
        <div className='topnav'>
            {/* <div className="topnav__search">
                <input type="text" placeholder='Search here...' />
                <i className='bx bx-search'></i>
            </div> */}
            <Nav pills className="search-n">
                <Search className="search-table" placeholder="Search here.." allowClear onSearch={onSearch} style={{ width: 200 }} />
            </Nav>

            <div className="topnav__right">
                <div className="topnav__right-item">
                    <Dropdown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    /> 
                    {/* dropdown here */}
                </div>
                <div className="topnav__right-item">
                    {/* dropdown here */}
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>
                <FormGroupStyle>
                    <FormControlLabelStyle
                        control={<MaterialUISwitch defaultChecked />}
                        label=""
                    />
                </FormGroupStyle>
                {/* <div className="topnav__btnColor">
                    <ThemeMenu/>
                </div> */}
            </div>
        </div>
    )
}

export default Topnav
