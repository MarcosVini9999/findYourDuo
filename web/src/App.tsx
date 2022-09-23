import React from "react";
import "./styles/main.css";
import logoSvg from "./assets/Logo.svg";

const App: React.FC = () => {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoSvg} />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-your-duo-gradient text-transparent bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image-1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-background-title-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-sm text-zinc-300 block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative">
          <img src="/image-2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-background-title-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-sm text-zinc-300 block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative">
          <img src="/image-3.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-background-title-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">CS-GO</strong>
            <span className="text-sm text-zinc-300 block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative">
          <img src="/image-4.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-background-title-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              World Of Warcraft
            </strong>
            <span className="text-sm text-zinc-300 block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative">
          <img src="/image-5.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-background-title-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Apex</strong>
            <span className="text-sm text-zinc-300 block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative">
          <img src="/image-6.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-background-title-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-sm text-zinc-300 block">4 anúncios</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default App;
