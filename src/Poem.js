import React from "react";

class Poem extends React.Component {
  render() {
    return (
      <div style={{ color: "black" }}>
        <h3>Title</h3>
        <p>Content</p>
        <p>
          <strong>- By Author</strong>
        </p>
        <button>Read</button>
      </div>
    );
  }
}

export default Poem;
