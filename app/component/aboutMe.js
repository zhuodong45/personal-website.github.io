import React from 'react';
import {Link} from 'react-router';

export default class AboutMe extends React.Component {
  componentDidMount(){
    window.scrollTo(0,0);
  }
  render() {
    return (
    <div className="container div-size">
      <div>
        <div className="title-style put-mid"><font>ABOUT ME</font></div>
        <hr className="hr-style"/>
        <div className="put-mid"><img className="put-mid" src="./build/img/IMG_2943_meitu_1.jpg" width="70%" /></div>

        <div id="aboutme-not-type" className="mypanel">
          <font className="aboutme-font-style">
            My name is Zhuodong Huang, a programmer in this world. I am a student in UMass Amherst. Computer science is my major. I love programming and I enjoy the time when I work on my projects.
            <br/>
            <br/>· Experiences: Java, C, HTML/CSS, JavaScript, SQL, Node.js, MongoDB, Scala, Android, Python.
            <br/>· Platforms: Windows, Linux.
            <br/>
            <br/>· Email: zhuodong45@gmail.com
            <br/>
            <br/>For more detail, you can take a look at my Resume or <a className="font-color" href="mailto:zhuodong45@gmail.com">email me</a>.
          </font>
        </div>
      </div>
    </div>
    )
  }
}
