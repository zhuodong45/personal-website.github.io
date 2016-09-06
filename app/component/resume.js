import React from 'react';

export default class Resume extends React.Component {
  componentDidMount(){
    window.scrollTo(0,0);
  }
  render() {
    return (
    <div className="container put-mid">
      <div className="row title-style"><font>ABOUT ME</font></div>
      <hr className="hr-style"/>
      <div className="row font-style"><font>Here is my resume, also a link to my github :D<br/><br/></font></div>
      <div className="row">
        <a id="media" className="media resume-position" href="build/img/Zhuodong Huang_resume.pdf">PDF File</a>
      </div>

      <div className="resume-div-size margin-bot">
        <div className="row title-style"><font>MY PROJECT</font></div>
        <hr className="hr-style"/>

        <div className="grid put-mid">
  			  <figure className="effect-chico put-mid">
  			    <img src="build/img/git.jpg" alt="img15"/>
  			    <figcaption>
  			      <p><br/><br/><br/>https://github.com/zhuodong45</p>
  					  <a href="https://github.com/zhuodong45">View more</a>
  				  </figcaption>
  			  </figure>
  		  </div>
      </div>

      <hr className="sp-ending hr-style"/>

    </div>
    )
  }
}
