import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//same logic for multiple components ..no need to repeat the code

const withAuth = (WrappedComponent) => {
  const WithAuthComponent = (props) => {
    console.log("props", props);
    const navigate = useNavigate();
    const isAuth = false;

    useEffect(() => {
      console.log("User Authentication : ", isAuth);
      if (!isAuth) {
        navigate("/");
      }
    }, [isAuth, navigate]);

    //
    console.log("called WithAuthComponent");
/////////////////////// enhanced component
    return isAuth ? <WrappedComponent {...props} /> : <div>Null</div>;
  };
  console.log("called withAuth");
  return WithAuthComponent;
};

export default withAuth;
