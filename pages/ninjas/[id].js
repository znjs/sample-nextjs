import Link from "next/link";

export const getStaticPaths = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => data);
  const paths = [...data.map((ninja) => ({ params: { id: ninja.id.toString() } }))];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .then((data) => data);
  return {
    props: { ninja: data },
  };
};

export default function NinjaDetails({ ninja }) {
  return (
    <div>
      <Link href={"/ninjas"}>
        <a style={{ textDecoration: "underline", color: "blue", paddingLeft: "4px" }}>Back</a>
      </Link>
      <h1>Detail Page</h1>
      <h2>{ninja.name}</h2>
      <p>email: {ninja.email}</p>
      <p>website: {ninja.website}</p>
      <p>city: {ninja.address.city}</p>
    </div>
  );
}
