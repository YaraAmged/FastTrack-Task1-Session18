import React from "react";
import Shelf from "./Shelf";
class Shelves extends React.Component {
  render() {
    return (
      <div className="list-books-content">
        <div>
          <Shelf
            name="currentlyReading"
            label="Currently Reading"
            handleMoveBookToList={this.props.handleMoveBookToList}
            books={this.props.shelves.currentlyReading}
          />
          <Shelf
            name="wantToRead"
            label="Want To Read"
            handleMoveBookToList={this.props.handleMoveBookToList}
            books={this.props.shelves.wantToRead}
          />
          <Shelf
            name="read"
            label="Read"
            handleMoveBookToList={this.props.handleMoveBookToList}
            books={this.props.shelves.read}
          />
        </div>
      </div>
    );
  }
}
export default Shelves;
