import React, { useState } from "react";

// Data
import data from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";

const App = () => {
  const [authors, setAuthors] = useState(data);
  const [newAuthorId, setNewAuthorId] = useState(5);

  const addAuthor = () => {
    const newAuthor = {
      id: newAuthorId,
      first_name: "Author",
      last_name: "McAuthorFace",
      imageUrl:
        "https://www.netz.de/images/2016-11-21-firefox-focus-header-58cfedd908c25_500_300.jpg",
      books: [
        {
          title: "Anonymous book",
          color: "mysterious color"
        }
      ]
    };

    setAuthors(authors.concat(newAuthor));
    setNewAuthorId(newAuthorId + 1);
  };

  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar addAuthorHandler={addAuthor} />
        </div>
        <div className="content col-10">
          <AuthorsList authors={authors} />
        </div>
      </div>
    </div>
  );
};

export default App;
