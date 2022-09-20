import React from "react";
import "./styles/main.css";

interface TituloProps {
  title: string;
}

const Titulo: React.FC<TituloProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

const App: React.FC = () => {
  return (
    <div className="bg-violet-500">
      <Titulo title="Hello World"></Titulo>
    </div>
  );
};

export default App;
