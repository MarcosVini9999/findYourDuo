import React from "react";

interface TituloProps {
  title: string;
}

const Titulo: React.FC<TituloProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Titulo title="Hello World"></Titulo>
    </React.Fragment>
  );
};

export default App;
