import Head from "next/head";
import Image from "next/image";

// Components
import Header from "./components/_header";
import Bar from "./components/_bar";
import Main from "./components/_main";

export default function Home() {
  return (
    <div className="flex selection:bg-sky-600 selection:text-white overflow-x-hidden">
      <Bar />
      <div className="w-full">
        <Header />
        <Main />
      </div>
    </div>
  );
}
