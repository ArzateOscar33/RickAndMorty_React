import React from "react";
import { Component } from "react";
import PropTypes from 'prop-types';

class Banner extends Component {
    render(){
        const{texto1}=this.props;
    return (
        <div className="Banner">

        {texto1}
        </div>
    );
  }
    }
  export default Banner;
  Banner.propTypes={
    texto1:PropTypes.string,
    texto2:PropTypes.string
  }

  Banner.defaultProps={
    texto1:"Rick And Morty"
  }