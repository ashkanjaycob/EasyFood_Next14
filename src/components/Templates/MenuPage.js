import Card from "../Modules/Card";
import styles from "./MneuPage.module.css";

function MenuPage({ data }) {
//   console.log(data);

  return (
    <div className={styles.container}>
      <h2>Menu</h2>
      <div className={styles.subContainer}>
        {data.map((item) => (
          <Card key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
