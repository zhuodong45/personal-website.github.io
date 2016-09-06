import React from 'react';

export default class Intro extends React.Component {
  componentDidMount(){
    window.scrollTo(0,0);
  }
  render() {
    return (
    <div className="container container-size put-mid">
      <span id="typed" className="typed-font-style"></span>
      <hr className="intro-hr-style"/>
      <div>
        <font className="intro-font-style">“Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning.”<br/>–– Gloria Steinem, Feminist<br/><br/>Here is A programmer and his dream.</font>
      </div>
    </div>
    )
  }
}
