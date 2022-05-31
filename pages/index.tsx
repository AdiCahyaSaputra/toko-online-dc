import { GetServerSideProps } from "next";
import Head from 'next/head';
import Navbar from 'components/Navbar';
import CategoryBar from 'components/CategoryBar';
import HeadlineProduct from 'components/HeadlineProduct';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  //const req = await fetch("https://toko-online-dea.herokuapp.com/products");
  //const res = await req.json();

  return {
    props: {
      res: "Hello Wolrd"
    }
  }
}

export default function Home({ res }: any) {

  return (
    <div className="bg-blue-700 overflow-hidden">
      <Head>
        <title>Toko Online</title>
      </Head>
      <header className="text-white z-50 relative space-x-2 p-2 bg-blue-700 flex justify-center items-center">
        <h1 className="font-bold">
          Toko Online
        </h1>
        <p className="text-gray-300 text-sm">
          Komunitas Discord
        </p>
      </header>
      <Navbar/>
      <HeadlineProduct/>
      <CategoryBar />
    </div>
  )
}
