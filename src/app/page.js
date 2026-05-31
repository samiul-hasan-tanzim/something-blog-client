import HomePageMainWindow from "@/components/Home/HomePageMainWindow";
import Navbar from "@/components/Home/Navbar";
// import { auth } from "@/lib/auth";
import { allData } from "@/lib/data/data";
// import { headers } from "next/headers";

export default async function Home({ searchParams }) {
  const result = await searchParams
  const searchQuery = result?.search || ''
  const type = result?.type || ''

  const dataReq = await allData(searchQuery, type)


  // const session = await auth.api.getSession({
  //   headers: await headers() // you need to pass the headers object.
  // })

  // console.log(session.user)


  return (


    <div>
      <Navbar />
      <HomePageMainWindow allData={dataReq} />
    </div>
  );
}