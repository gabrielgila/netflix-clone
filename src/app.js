import React from 'react';
import jumboData from "./fixtures/jumbo";
import Jumbotron from "./components/jumbotron";

export default function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
            </Jumbotron.pane>
            <Jumbotron.pane>
              <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron.pane>
          </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}


