import { Route, Switch } from "react-router-dom";
import Header from "../main/header/header";
import Side from "../main/side/side";
import { useState } from "react";
import Content from '../main/content/content';
import PanelCompany from "../../pages/main/company/panel";
import PanelBoard from "../../pages/main/board/panel";
import Error404 from '../error/404'
import Dashboard from "../../pages/main/dashboard";
import React from 'react';

const main = () => {

  const [isSideOpen, setIsSideOpen] = useState(false);

  return (
    <div className="h-screen overflow-hidden bg-[#eceff8]">
      <Header />
      <div className="h-[calc(100%-3rem)]">
        <Side />
        <Content isSideOpen={isSideOpen}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/company" component={PanelCompany} />
            <Route exact path="/board/:id" component={PanelBoard} />
            <Route component={Error404} />
          </Switch>
        </Content>
      </div>
      

      
        
          

     
    </div>
  );
};

export default main;