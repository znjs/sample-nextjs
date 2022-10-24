import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";
export const getStaticProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => data);
  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List</title>
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map((ninja) => (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <a className={styles.single}>
              <h2>{ninja.name}</h2>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Ninjas;
