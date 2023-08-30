import React from "react";
import { CardBody, CardContainer, CardFooter, CardHeader } from "./CardStyle";
import { TextLimit } from "../TextLimit/TextLimit";

export function Card(props) {
  return (
    <>
      <CardContainer>
        <CardBody>
          <div>
            <CardHeader>
              <h2>{props.title}</h2>
              <TextLimit text={props.text} limit={100}/>
            </CardHeader>
          </div>
          <img src={props.banner} alt="" />
        </CardBody>

        <CardFooter>
          <section>
            <i className="bi bi-hand-thumbs-up"></i>
            <span>{props.likes}</span>
          </section>

          <section>
            <i className="bi bi-chat"></i>
            <span>{props.comments}</span>
          </section>
        </CardFooter>
      </CardContainer>
    </>
  );
}
