import React from "react";
class BookCard extends React.Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("https://covers.openlibrary.org/b/id/${this.props.book.cover_i}.jpg")`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={this.props.from || ""}
              onChange={(e) => {
                this.props.handleMoveBookToList(
                  this.props.from,
                  e.target.value,
                  this.props.book
                );
              }}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option
                disabled={this.props.from === "currentlyReading"}
                value="currentlyReading"
              >
                Currently Reading
              </option>
              <option
                disabled={this.props.from === "wantToRead"}
                value="wantToRead"
              >
                Want to Read
              </option>
              <option disabled={this.props.from === "read"} value="read">
                Read
              </option>
              <option value="">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.author_name}</div>
      </div>
    );
  }
}
export default BookCard;
