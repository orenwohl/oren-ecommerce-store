import Directory from "../../comps/directory-component/directory";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import { Outlet } from "react-router-dom";

const Home = () => {
  // const [Menu_items, setMenuItems] = useState([]);

  // const url = "http://127.0.0.1:5000/category-items";
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const resp = await axios.get(url);
  //     setMenuItems(resp.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      {/* <Directory categories={Menu_items} /> */}
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
