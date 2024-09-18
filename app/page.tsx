'use client'
import Link from "next/link";




export default function Home() {
  // console.log(process.env.NODE_ENV);
  // console.log(process.env.SERVER_PASSWORD);
  return (
    <>

    <div className="flex items-center justify-center ">
      <h1>Fetch Data with API in Client Component</h1>

      <br />
      <br />
    </div>
      <Link className="w-auto text-center" href='/productlist'>Go to product list</Link>

    </>
  );
}
