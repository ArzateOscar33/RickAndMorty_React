import React from "react";
import { Component } from "react";
import PropTypes from 'prop-types';
class Footer extends Component {
    render(){
    return (
        <div className="Footer">
        <h2>{this.props.children}</h2>
        </div>
    );
  }
    }
  export default Footer;


  Footer.propTypes={
    texto1:PropTypes.string
  }
  
  Footer.defaultProps={
    texto1:"Rick And Morty 2023"
  }