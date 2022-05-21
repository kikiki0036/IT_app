import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

const sleep = (delay = 0) => {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
}

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    
    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        (async () => {
            if(msg != ''){
                setState({ open: true, ...newState });
                await sleep(1e3);
                handleClose();
            }
          
          })();
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };


    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            }, { withCredentials: true });
            history.push("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    useEffect(() => {
        const  pswrdField = document.querySelector(".form-login input[type='password']"),
            toggleBtn = document.querySelector(".form-login .field i");
            // toggleBtn2 = document.querySelector("header nav .user p");
            toggleBtn.onclick=()=>{
                if(pswrdField.type == "password"){
                    pswrdField.type = "text";
                    toggleBtn.classList.add("active");
                }else{
                    pswrdField.type = "password"
                    toggleBtn.classList.remove("active");
                }
            }
    });

    // useEffect(() => {
    //     handleClick({
    //         vertical: "top",
    //         horizontal: "center"
    //     });
    // }, [msg]);

    return (
        <section className="box-content-center">
            <div className="box-s-l">
                {/* <div className="form-login-bg"></div> */}
                <div className="form-login">
                    <form onSubmit={Auth} className="box form-content">
                        {
                            <Snackbar
                              anchorOrigin={{ vertical, horizontal }}
                              open={open}
                              onClose={handleClose}
                              message={msg}
                              key={vertical + horizontal}
                            />
                        }
                        {/* <p className="has-text-centered">{msg}</p> */}
                        <header >APEX</header>
                        <div className="field mt-5">
                            <label className="label">Email</label>
                            <div className="controls validate-input">
                                <input type="text" className="input input100" placeholder="@apexcircuit.com" value={email} autoFocus onChange={(e) => setEmail(e.target.value)} />
                                <span className="focus-input100"></span>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className="label">Password</label>
                            <div className="controls validate-input">
                                <input type="password" className="input input100" placeholder="∘∘∘∘∘∘∘∘" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <span className="focus-input100"></span>
                                <i className="fas fa-eye"></i>
                            </div>
                        </div>
                        <div className="field mt-5">
                            {/* <button className="button">Login</button> */}
                            <button className="button">
                                <Button 
                                    // onClick={Auth} 
                                    variant={"text"}
                                    // color={"inherit"}
                                    onClick={handleClick({
                                        vertical: "top",
                                        horizontal: "center"
                                     })}
                                    sx={{ pt: 1 , px: 2}}
                                    >
                                    Log in
                                </Button>
                            </button>
                        </div>
                        {/* linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%) */}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login
