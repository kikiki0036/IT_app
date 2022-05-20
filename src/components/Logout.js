// import React from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const history = useHistory();

    const Logout = async () => {
        try {
            await axios.delete('https://react-api-dep.herokuapp.com/logout');
            history.push("/login");
            window.location.reload();

        } catch (error) {
            console.log(error);
        }
    }
    Logout()
}
export default Navbar
