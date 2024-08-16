"use client";
import { useState } from "react";
import styles from "./CategoriesPage.module.css";
import { useRouter } from "next/navigation";

function CategoriesPage() {
  const router = useRouter();

  const [query, setQuery] = useState({ difficulty: "", time: "" });

  const ChangeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  // const searchHandler = () => {
  //   console.log("Query: ", query); // Log query
  //   // router.push({
  //   //   pathname: "/categories",
  //   //   query: { name: "ashkan", lastname: "jaycob" },
  //   // });
  //   router.push(`/categories?difficulty=${query.difficulty}&time=${query.time}`);
  // };
  
  const searchHandler = () => {
    console.log("Query: ", query); // Log query

    // Construct the query string dynamically
    const queryParams = new URLSearchParams();

    if (query.difficulty) {
      queryParams.append("difficulty", query.difficulty);
    }
    if (query.time) {
      queryParams.append("time", query.time);
    }

    // Push the new route with only the non-empty query parameters
    router.push(`/categories?${queryParams.toString()}`);
  };


  return (
    <div className={styles.container}>
      <h2>Categories page</h2>
      <div className={styles.subContainer}>
        <div className={styles.select}>
          <select
            value={query.difficulty}
            name="difficulty"
            onChange={ChangeHandler}
          >
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select value={query.time} name="time" onChange={ChangeHandler}>
            <option value="">Cooking Time</option>
            <option value="More">More than 30 min</option>
            <option value="Less">Less Than 30 min</option>
          </select>
          <button onClick={searchHandler}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
