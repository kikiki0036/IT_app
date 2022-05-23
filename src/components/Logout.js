// import React from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
const Navbar = () => {
    const history = useHistory();
    const cookies = new Cookies();
    const Logout = async () => {
        try {
            await axios.delete('https://react-api-dep.herokuapp.com/logout');
            history.push("/login");
            window.location.reload();
            cookies.removeAll()

        } catch (error) {
            console.log(error);
        }
    }
    Logout()
}
export default Navbar
