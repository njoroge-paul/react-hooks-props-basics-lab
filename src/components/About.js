import React from "react";
import Links from "./Links";

function BioInfo (props){
 const Item = props.bio;
 if(Item){
   return <p>{Item}</p>;
 } else {
   return "Bio not provided";
 
}
}


function About(props) {
  // const bio = "I made this";
  const github = "https://github.com/liza";
  const linkedin = "https://www.linkedin.com/in/liza/";

  return (
    <div id="about">
      <h2>About Me</h2>
      <BioInfo bio={props.bio} />
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
