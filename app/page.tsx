'use client'
import Link from "next/link";




export default function Home() {
  return (
    <>

    <div className="flex items-center justify-center ">
      <p>Fetch Data with API in Client Component</p>

      <br />
      <br />
    </div>
      <Link className="w-auto text-center" href='/productlist'>Go to product list</Link>

    </>
  );
}
