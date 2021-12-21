import React, { useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom';
import { Link, Route, Switch, useHistory } from 'react-router-dom'
import ViewProfile from '../ViewProfile';
import EditProfile from '../EditProfile';

const Profile = ({login})=>{
    const history=useHistory();
    useEffect(
        ()=>{
            if(!login){
                history.push("/about");
            }
        }
    ,[login,history])
    const {path,url}=useRouteMatch()
    return (
        <div>
            <h1>Profile page</h1>
            <ul>
                <li>
                    <Link to={`${url}/viewprofile`}>View profile</Link>
                </li>
                <li>
                    <Link to={`${url}/editProfile`}>Edit profile</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${path}/viewprofile`} component={ViewProfile}></Route>
                <Route path={`${path}/editprofile`} component={EditProfile}></Route>
            </Switch>
        </div>
    )
}

export default Profile
