import React from "react";
import BookCard from "./BookCard";

class Shelf extends React.Component {
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.label}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map((book) => (
                <BookCard
                  key={book.key}
                  from={this.props.name}
                  handleMoveBookToList={this.props.handleMoveBookToList}
                  book={book}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
export default Shelf;
