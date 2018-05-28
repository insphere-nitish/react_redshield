import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Footer from './components/footer';
import TopHomePageCta from './partials/_cta_top-home-page';
import AppealCta from './partials/_cta_appeal';
import Articles from './partials/_articles';

class HeaderSeaction extends Component { 
  render(){
    return (
      <div>
        <Header />
      </div>
    );
  }

}
ReactDOM.render(<HeaderSeaction/>, document.querySelector('.page__header'));

class TopCtaSeaction extends Component { 
  render(){
    return (
      <div>
        <TopHomePageCta />
      </div>
    );
  }

}
ReactDOM.render(<TopCtaSeaction/>, document.querySelector('.top__home_page__cta'));

class AppealCtaSeaction extends Component { 
  render(){
    return (
      <div>
        <AppealCta />
      </div>
    );
  }

}
ReactDOM.render(<AppealCtaSeaction/>, document.querySelector('.appeal__cta'));

class ArticlesSeaction extends Component { 
  render(){
    return (
      <div>
        <Articles />
      </div>
    );
  }

}
ReactDOM.render(<ArticlesSeaction/>, document.querySelector('.articles__seaction'));

class FooterSection extends Component { 
  render(){
    return (
      <div>
        <Footer />
      </div>
    );
  }

}
ReactDOM.render(<FooterSection/>, document.querySelector('.page__footer'));
