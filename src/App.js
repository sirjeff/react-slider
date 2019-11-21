import React from "react";
import styled from "styled-components";
import Slide from "./Slide.js";

const OutSide = styled.div`
 display: block;
 width: auto;
 height: auto;
`;

const AppWrapper = styled.div`
 display: flex;
 justify-content: center;
`;

export default function App() {
 return(
  <OutSide>
   <h1 className="title">{process.env.REACT_APP_TITLE}</h1>
   <AppWrapper>
    <Slide />
   </AppWrapper>
  </OutSide>
 );
}


