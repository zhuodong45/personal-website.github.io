import React from 'react';
import {Link} from 'react-router';

export default class AboutMe extends React.Component {
  componentDidMount(){
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div className="container">
        <div>
          <center><div className="title-style"><font>About Me</font></div></center>
          <hr className="hr-style"/>
          <div className="row">
            <div className="col-md-4 col-md-offset-1">
              <img src="./build/img/aboutme-1.jpg" width="100%"/>
            </div>
            <div className="col-md-6">
              <br/>
              <font className="aboutme-font-style">My name is Zhuodong Huang, a software engineer in this world. I am a student in UMass Amherst. Computer science is my major. I love programming and I enjoy the time when I work on my projects.</font>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-6 col-md-offset-1">
              <br/>
              <font className="aboutme-font-style">· Programming languages: Java, C, HTML/CSS, JavaScript, Scala, Android, Python.
              <br/>· Platforms: Windows, Linux.
              <br/>· Tools: Eclipse, IntelliJ IDEA, Android Studio, PyCharm, VirtualBox</font >
            </div>
            <div className="col-md-4">
              <img src="./build/img/aboutme-2.jpg" width="100%"/>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-4 col-md-offset-1">
              <img src="./build/img/aboutme-3.jpg" width="100%"/>
            </div>
            <div className="col-md-6">
              <br/>
              <font className="aboutme-font-style">For more detail, you can take a look at my Resume or <a className="font-color" href="mailto:zhuodong45@gmail.com">email me</a>.</font>
            </div>
          </div>
          <br/>
        </div>
      </div>
    )
  }
}
