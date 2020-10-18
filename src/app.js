import React from 'react';
import jumboData from "./fixtures/jumbo";
import Jumbotron from "./components/jumbotron";

export default function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SuTitle>{item.subTitle}</Jumbotron.SuTitle>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}


