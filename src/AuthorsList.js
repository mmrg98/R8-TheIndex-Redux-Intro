import React from "react";
import {connect} from 'react-redux';

// Components
import AuthorCard from "./AuthorCard";

const AuthorsList =(props) => {
  
  const authorCards = props.authors.map((author) => (
    <AuthorCard key={author.first_name + author.last_name} author={author} />
  ));

  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">{authorCards}</div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    authors: state.authors, 
    
  }
};


export default connect(mapStateToProps,null)(AuthorsList);
