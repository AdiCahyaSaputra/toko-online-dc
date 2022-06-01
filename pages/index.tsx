import { GetServerSideProps } from "next";
import Head from 'next/head';
import Navbar from 'components/Navbar';
import CategoryBar from 'components/CategoryBar';
import HeadlineProduct from 'components/HeadlineProduct';
import {useState} from "react";

import ProductCard from 'components/ProductCard';
import ProductWrapper from 'components/ProductWrapper';

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
  const products = [
    ["300.000", "160.000", "Keyboard K120", "Komputer"],
    ["200.000", "120.000", "Jubah Thomas Slebew", "Pakaian"],
    ["700.000", "400.000", "Kamera Golang", "Elektronik"],
    ["600.000", "450.000", "Mouse Lucitik", "Komputer"],
    ["260.000", "100.000", "Sepatu Pentopel Cool", "Sepatu"],
    ["20.000", "10.000", "Kacamata Cool", "Kacamata"],
    ["330.000", "150.000", "Sepatu Andri", "Sepatu"],
    ["100.000", "75.000", "Baju Mark Zuckerberg", "Pakaian"]
  ];

  const [active, setActive] = useState(false);

  function changeActiveFromChild(stateFromChild: boolean): void {
    setActive(stateFromChild);
  }

  return (
    <>
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
        <Navbar isActive={active} changeActiveFromChild={changeActiveFromChild}/> 
        <HeadlineProduct/>
        <CategoryBar />
      </div>
			{ active && (
				<div className='fixed z-40 transition-all duration-75 ease-in-out inset-0 bg-white/30 backdrop-blur-sm'>

				</div>
			)}
      <main className="bg-white">
        <ProductWrapper>
          { products.map(([hargaAsli, hargaDiskon, namaBarang, kategori]) => (
            <ProductCard hargaAsli={hargaAsli} hargaDiskon={hargaDiskon} namaBarang={namaBarang} kategori={kategori}/>
          )) }
        </ProductWrapper>
      </main>
    </>
  )
}
