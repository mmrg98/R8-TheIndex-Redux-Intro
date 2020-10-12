import React from "react";

const Sidebar = props => {
  return (
    <div id="sidebar">
      <img src="theindex.svg" className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item active">
          <button>AUTHORS</button>
        </h4>
        <button
          id="add-button"
          className="btn btn-block btn-light"
          onClick={props.addAuthorHandler}
        >
          + ADD AUTHOR
        </button>
      </section>
    </div>
  );
};

export default Sidebar;
