import axios from "axios";
import React from "react";
import BookCard from "./BookCard";
class Search extends React.Component {
  state = {
    books: [],
    loading: false,
  };

  handleSearch = async (e) => {
    this.setState({
      loading: true,
      books: [],
    });

    const inputString = e.target.value;

    if (inputString.length === 0) return;
    const res = await axios.get("https://openlibrary.org/search.json", {
      params: {
        q: inputString,
      },
    });

    this.setState({
      loading: false,
      books: res.data.docs,
    });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a
            href=" "
            className="close-search"
            onClick={() => this.props.showSearchPage(false)}
          >
            Close
          </a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              onChange={this.handleSearch}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) => (
              <BookCard
                key={book.key}
                handleMoveBookToList={this.props.handleMoveBookToList}
                book={book}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default Search;
