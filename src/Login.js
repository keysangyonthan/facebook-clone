import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import {auth, provider} from './firebase'
import {actionTypes} from './reducer'
import { useStateValue } from './StateProvider'

function Login() {
    const[state, dispatch] = useStateValue();

    const signin = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch(
                {
                    type: actionTypes.SET_USER,
                    user: result.user,
                }
            )
            console.log(result.user);
        }).catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__logi">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="logo"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt=""/>
            </div>

            <Button type="submit" onClick={signin}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
