import Head from "next/head";
import Image from "next/image";

// Components
import Header from "./components/_header";
import Bar from "./components/_bar";

export default function Home() {
  return (
    <div className="flex">
      <Bar />
      <div className="w-full">
        <Header/>
      </div>
    </div>
  );
}
