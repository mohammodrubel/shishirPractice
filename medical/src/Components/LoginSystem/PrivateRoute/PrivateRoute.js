import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAurh from './../../../hooks/UseAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading} = useAurh()
    if(isLoading){
        return <div className="text-center"><Spinner animation="grow" variant="danger" /></div>
    }
    return (
        <Route
        {...rest}
        render={
                ({location})=>user.email?children :  <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                }}
              />
        }
        >
            
        </Route>
    );
};

export default PrivateRoute;