import React from 'react';

export default class Events extends React.Component {
  componentDidMount(){
    window.scrollTo(0,0);
  }
  render() {
    return (
    <div className="container put-mid">
      <div className="title-style"><font>Life Time</font></div>
      <hr className="hr-style"/>
      <div className="gallery">

        <div className="row">
          <div className="videogallery">
             <a className="voverlay" href="http://www.youtube.com/v/pigsRzEBHKw?autoplay=1&rel=0&enablejsapi=1&playerapiid=ytplayer" title="skydive"><img src="index_videolb/thumbnails/0.png" alt="skydive" /><span></span></a>
             <br/><font className="event-font-style">Skydive video</font>
          </div>
        </div>

        <div className="row">
          <hr className="event-hr-style"/>
          <div className="col-md-3">
            <a href="build/img/2016-Fall-BBQ-1.jpg" data-title="2016 Fall BBQ" data-lightbox="2016 Fall BBQ"><img src="build/img/2016-Fall-BBQ-1.jpg" className="img-thumbnail"/></a><br/>
          </div>
          <div className="col-md-3">
            <a href="build/img/2016-Fall-BBQ-2.jpg" data-title="2016 Fall BBQ" data-lightbox="2016 Fall BBQ"><img src="build/img/2016-Fall-BBQ-2.jpg" className="img-thumbnail"/></a>
          </div>
          <div className="col-md-3">
            <a href="build/img/2016-Fall-BBQ-3.jpg" data-title="2016 Fall BBQ" data-lightbox="2016 Fall BBQ"><img src="build/img/2016-Fall-BBQ-3.jpg" className="img-thumbnail"/></a>
          </div>
          <div className="col-md-3">
            <a href="build/img/2016-Fall-BBQ-4.jpg" data-title="2016 Fall BBQ" data-lightbox="2016 Fall BBQ"><img src="build/img/2016-Fall-BBQ-4.jpg" className="img-thumbnail"/></a>
          </div>
          <div>
            <br/><font className="event-font-style">2016 Fall UMass Amherst BBQ Event</font>
          </div>
        </div>

        <div className="row margin-bot">
          <hr className="event-hr-style"/>
          <div className="col-md-3">
            <a href="build/img/2015hackumass-1.jpg" data-title="2015 HackUMass" data-lightbox="2015 HackUMass"><img src="build/img/2015hackumass-1.jpg" className="img-thumbnail"/></a><br/>
          </div>
          <div className="col-md-3">
            <a href="build/img/2015hackumass-2.jpg" data-title="2015 HackUMass" data-lightbox="2015 HackUMass"><img src="build/img/2015hackumass-2.jpg" className="img-thumbnail"/></a>
          </div>
          <div className="col-md-3">
            <a href="build/img/2015hackumass-3.jpg" data-title="2015 HackUMass" data-lightbox="2015 HackUMass"><img src="build/img/2015hackumass-3.jpg" className="img-thumbnail"/></a>
          </div>
          <div className="col-md-3">
            <a href="build/img/2015hackumass-4.jpg" data-title="2015 HackUMass" data-lightbox="2015 HackUMass"><img src="build/img/2015hackumass-4.jpg" className="img-thumbnail"/></a>
          </div>
          <div>
            <br/><font className="event-font-style">Hack UMass Event</font>
          </div>
        </div>

      </div>
    </div>
    )
  }
}
