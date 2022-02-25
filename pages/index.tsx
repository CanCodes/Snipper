/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import type { NextPage } from "next";
import { Header, Footer, GetStared } from "../components";
const Home: NextPage = () => {
  return (
    <main className="">
      <section className="space-y-10 home-hero">
        <Header></Header>
        <div className="flex flex-col items-center w-3/4 mx-auto space-y-4 text-center md:text-start ">
          <h1 className="text-6xl font-bold ">Gorgeous Code Snippets</h1>
          <p className="font-light break-words opacity-80">
            With Snipper, create fully customizable code snippets in a matter of
            seconds right from your browser.
          </p>
          <GetStared />
          <p className="font-light opacity-80">No credit card required.</p>
        </div>
        <img src="/Snippet Image.png" className="w-3/4 mx-auto " alt="" />
      </section>
      <section className="grid w-3/4 grid-cols-1 gap-12 mx-auto mt-24 lg:grid-cols-2">
        <span className="flex flex-col items-start justify-center order-2 space-y-4 lg:order-1">
          <h1 className="text-4xl font-bold">
            A fully customizable code snippet editor
          </h1>
          <p className="font-light opacity-80">
            Fully customize the color scheme of your code snippet, or use our
            own premade color schemes. Export your code snippets in JPG, PDF,
            PNG, or any of the other 10+ common extensions.
          </p>
          <GetStared />
        </span>
        <span className="flex justify-center order-1 lg:justify-end lg:order-2">
          <img
            src="/Customizable Image.png"
            alt="Customizable Image"
            className="md:w-3/4"
          />
        </span>
      </section>
      <Footer></Footer>
    </main>
  );
};

export default Home;
