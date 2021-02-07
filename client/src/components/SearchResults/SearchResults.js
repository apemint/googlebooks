import React, { Component } from "react";
import API from "../../utils/API";

class SearchResults extends Component {
    state = {
        savedBooks: []
    }

    componentDidMount() {
        API.savedBooks().then(savedBooks => this.setState({ savedBooks: savedBooks })).catch(error => console.error(error));
    }

    handleSave = book => {
        if (this.state.savedBooks.map(book => book.id).includes(book.id)) {
            API.deleteBook(book.id)
                .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(books => book.id !== deletedBook.id) }))
                .catch(error => console.error(error));
        } else {
            API.saveBook(book)
                .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
                .catch(err => console.error(error));
        }
    }

    render() {
        <div>
            {!this.props.books.length ? (
                <h1 className="text-center"> No results</h1>
            ) : (
                    <div>
                        {this.props.books.map(result => (
                            <div className="card mb-3" key={result.id}>
                                <div className="row">
                                    <div className="col-md-2">
                                        <img alt={result.title} className="img-fluid" src={result.image} />
                                    </div>
                                    <div className="col-md-10">
                                        <div className="card-body">
                                            <h5 className="card-title">{result.title} by {result.authors}</h5>
                                            <p className="card-text">{result.description}</p>
                                            <div>
                                                <a href={result.link} className="btn badge-pill btn-outline-dark mt-3" target="_blank">View</a>
                                                <button onClick={() => this.handleSave(result)} className="btn badge-pill btn-outline-warning mt-3 ml-3">
                                                    {this.state.savedBooks.map(book => book.id).includes(result.id) ? "Unsave" : "Save"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
        </div>
    }
}


export default SearchResults;