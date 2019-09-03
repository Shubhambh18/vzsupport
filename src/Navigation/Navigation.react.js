import React from 'react';
import {Switch , Route} from 'react-router-dom';
import Register from '../Register/Register.react';
import LoginPage from '../LoginPage/LoginPage.react';


const Navigation = () => {
    return (
        <div className="Navigation">
       
            <Switch>
            
                <Route path="/register" component={Register}></Route>
            </Switch>

            
           
           
        </div>
    );

}

export default Navigation;