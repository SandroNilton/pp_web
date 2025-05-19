// routes/PublicRoute.tsx
import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useContext } from 'react';
import { RootStoreContext } from "../../stores/rootStore";

interface IProps extends RouteProps {
  component: React.ComponentType<any>;
}

const PublicRoute: React.FC<IProps> = ({ component: Component, ...rest }) => {
  const { sessionStore } = useContext(RootStoreContext);

  return (
    <Route
      {...rest}
      render={props =>
        sessionStore.isLoggedIn ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
