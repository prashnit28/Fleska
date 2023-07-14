import Image from "next/image";
import styles from "../redux/styles/PizzaCard.module.css";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  const rus = "https://source.unsplash.com/3tYZjGSBwbk"
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={rus} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[0]}</span>
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  );
};

export default PizzaCard;
