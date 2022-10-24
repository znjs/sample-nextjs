import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PageNotFound = () => {
  const router = useRouter();
  useEffect(() => {
    console.log("useEffect ran");
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);
  return (
    <div className='not-found'>
      <h1>Ooops...</h1>
      <h2>The Page could not be found</h2>
      <p>404 | Page Not Found</p>
      <p>
        GO BACK TO{" "}
        <Link href='/'>
          <a style={{ textDecoration: "underline", color: "blue" }}>HOMEPAGE</a>
        </Link>
      </p>
    </div>
  );
};

export default PageNotFound;
