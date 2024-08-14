"use client";
import { useEffect, useState } from "react";
import MenuPage from "@/components/Templates/MenuPage";

function Menu() {
  const [data, setData] = useState([]); // State to hold the fetched data

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3001/data");
        const result = await res.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  return data ? <MenuPage data={data} /> : <h1>Loading ...</h1>;
  
}

export default Menu;
