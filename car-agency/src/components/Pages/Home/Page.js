import React from "react";
import About from './About';
import Case from './Case';
import Feedback from './Feedback';
import Banner from "./Banner";


export default function Page() {
  return (
      <React.Fragment>
        <Banner/>
        <About />
        <Case />
        <Feedback />
      </React.Fragment>
  );
}
