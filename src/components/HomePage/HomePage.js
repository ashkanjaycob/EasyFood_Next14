import Attributes from "../Attributes/Attributes";
import Banner from "../Banner/Banner"
import Companies from "../Companies/Companies";
import Definition from "../Definition/Definition";
import Instruction from "../Instruction/Instruction";
import Guide from "../Guide/Guide";
import Restrictions from "../Restrictions/Restrictions";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes />
      <Definition />
      <Companies />
      <Instruction />
      <Guide />
      <Restrictions />
    </div>
  );
}

export default HomePage;
