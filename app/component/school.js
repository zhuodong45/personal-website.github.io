import React from 'react';

export default class School extends React.Component {
  componentDidMount(){
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div className="container put-mid">
        <div className="title-style"><font>MY SCHOOL</font></div>
        <hr className="hr-style"/>

        <div className="ck-slide">
			    <ul className="ck-slide-wrapper">
				      <li>
					      <img src="build/img/1.jpg" width="800px" alt=""/>
				      </li>
      				<li className="opacity-item">
      					<img src="build/img/2.jpg" width="800px" alt=""/>
      				</li>
      				<li className="opacity-item">
      					<img src="build/img/3.jpg" width="800px" alt=""/>
      				</li>
      				<li className="opacity-item">
      					<img src="build/img/4.jpg" width="800px" alt=""/>
      				</li>
      				<li className="opacity-item">
      					<img src="build/img/5.jpg" width="800px" alt=""/>
      				</li>
              <li className="opacity-item">
      					<img src="build/img/6.jpg" width="800px" alt=""/>
      				</li>
			    </ul>
			    <a href="javascript:;" className="ctrl-slide ck-prev">上一张</a> <a href="javascript:;" className="ctrl-slide ck-next">下一张</a>
    			<div className="ck-slidebox">
    				<div className="slideWrap">
    					<ul className="dot-wrap">
    						<li className="current"><em>1</em></li>
    						<li><em>2</em></li>
    						<li><em>3</em></li>
    						<li><em>4</em></li>
    						<li><em>5</em></li>
                <li><em>6</em></li>
    					</ul>
    				</div>
    			</div>
		    </div>

        <div className="mypanel"><font className="font-style">Take a quick look at my university. I love this school, it left many precious memories for me. The University of Massachusetts Amherst, (otherwise known as UMass Amherst or simply UMass) is a public research and land-grant university in Amherst, Massachusetts, United States, and the flagship of the University of Massachusetts system. With approximately 1,300 faculty members and more than 29,000 students, UMass Amherst is the largest public university in New England.</font></div>
      </div>
    )
  }
}
