import { Route, Switch, useLocation } from "react-router-dom";
import SignIn from "../../pages/auth/sign-in";
import signUp from "../../pages/auth/sign-up";
import React from 'react';

const auth = () => {

  const location = useLocation();

  const backgroundImages = { 
    "/auth": "https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png",
    "/auth/sing-in": "https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png",
    "/auth/sing-up": "https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/set-up-your-account.png"
  };
  const backgroundImage = backgroundImages[location.pathname as keyof typeof backgroundImages] || backgroundImages["/auth"];


  return (
    <div className="flex flex-col w-full h-screen">
      <div className="h-full">
        <div className="grid lg:grid-cols-12 h-full">
          <div className="col-span-7 flex justify-center items-center">
            <Switch>
              <Route exact path="/auth" component={SignIn} />
              <Route path="/auth/sign-in" component={SignIn} />
              <Route path="/auth/sign-up" component={signUp} />
              <Route component={SignIn} />
            </Switch>
          </div>

          <div className="col-span-5 lg:flex hidden bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url("${backgroundImage}")` }}></div>
        </div>
      </div> 
    </div>
  );
};

export default auth;