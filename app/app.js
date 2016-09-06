import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header.js'
import Intro from './component/intro.js'
import Footer from './component/footer.js'
import AboutMe from './component/aboutMe.js'
import School from './component/school.js'
import Events from './component/events.js'
import Resume from './component/resume.js'
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/* Show the Feed at / */}
      <IndexRoute component={Intro} />
      <Route path="aboutme" component={AboutMe} />
      <Route path="school" component={School} />
      <Route path="intro" component={Intro} />
      <Route path="events" component={Events} />
      <Route path="resume" component={Resume} />
    </Route>
  </Router>
),document.getElementById('main-body'));
