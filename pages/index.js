import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero temporibus earum at harum
          assumenda dolor vero quae tempora vitae modi, dolores voluptatum aspernatur dolorem aut
          consequuntur, consequatur eius reiciendis nisi?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse animi dolores cum repellat
          iusto minima accusantium officia dolorum nostrum! Soluta dolorum cum neque earum
          cupiditate, consectetur unde impedit eligendi quod.
        </p>
        <Link href={"/ninjas"}>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
