import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';


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
