"use client"; // Ensure this component is treated as a client component

import DetailsPage from "@/components/Modules/DetailsPage";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function FoodDetails() {
  const { id } = useParams(); // Extract the 'id' parameter from the URL
  const [foodData, setFoodData] = useState(null); // State to hold fetched data

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`http://localhost:3001/data/${id}`);
        const result = await res.json();
        setFoodData(result); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (id) { // Ensure 'id' is available before fetching
      fetchData();
    }
  }, [id]); 

  if (!foodData) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  return (
    <div>
      <DetailsPage foodData={foodData} />
    </div>
  );
}

export default FoodDetails;
