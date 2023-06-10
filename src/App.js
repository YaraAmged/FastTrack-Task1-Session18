import React from "react";
import "./App.css";
import Shelves from "./components/Shelves";
import Search from "./components/Search";
import SearchButton from "./components/SearchButton";
import Header from "./components/Header";

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    currentlyReading: [],
    wantToRead: [],
    read: [],
  };

  handleMoveBookToList = (fromList, toList, book) => {
    this.setState((prev) => ({
      ...prev,
      [toList]: toList ? [...prev[toList], book] : undefined,
      [fromList]: fromList
        ? prev[fromList].filter((bookInList) => bookInList.key !== book.key)
        : undefined,
    }));
  };

  componentDidUpdate() {
    localStorage.setItem("shelves", JSON.stringify(this.state));
  }

  componentDidMount() {
    const shelves = localStorage.getItem("shelves");

    if (shelves) {
      this.setState(JSON.parse(shelves));
    }
  }

  updateSearchPageState = (state) => {
    this.setState({ showSearchPage: state });
  };

  render() {
    console.log(this.state);
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search
            handleMoveBookToList={this.handleMoveBookToList}
            showSearchPage={this.updateSearchPageState}
          />
        ) : (
          <div className="list-books">
            <Header />
            <Shelves
              shelves={this.state}
              handleMoveBookToList={this.handleMoveBookToList}
            />
            <SearchButton showSearchPage={this.updateSearchPageState} />
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
