import React from "react";
import Form from "../components/Form";
import Results from "../components/Results";
import API from "../utils/API";

class Search extends React.Component {
    state = {
        value: "",
        books: []
    };

    componentDidMount() {
        this.searchBook();
    }

    createBook = bookData => {
        return {
            _id: bookData.id,
            title: bookData.title,
            authors: bookData.authors,
            description: bookData.description,
            image: bookData.image,
            link: bookData.link
        }
    }

    searchBook = query => {
        API.getBook(query)
        .then(res => this.setState({ books:res.data.items.map(bookData => this.createBook(bookData))}))
        .catch(error => console.error(error));
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.search);

    };

    render() {
        return (
            <div>
                <Form
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <div>
                    <h1>Search Results</h1>
                    <SearchResults books={this.state.books} />
                </div>
            </div>
        )
    }
}

export default Search;