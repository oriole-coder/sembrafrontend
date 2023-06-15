import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Auth({ children } :{children:any}) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    // using setTimeout to simulate async (auth) event
    setTimeout(() => {
      // if (localStorage.getItem("token")) {
        setCurrentUser({ id: "1", name: "foo" });
      // } else {
      //   setCurrentUser(null);
      // }
    }, 300);
  }, []);

  if (currentUser === undefined) {
    return null;
  }

  if (!currentUser) {
    navigate("/");
  }

  return children;
}
