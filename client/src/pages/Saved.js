import React, {Component} from "react";
import API from "../utils/API";
import SearchResults from "../components/SearchResults";

class Saved extends Component {
    state = {
        savedBooks: []
    }

    componentDidMount() {
        API.savedBooks().then(savedBooks => this.setState({ savedBooks: savedBooks })).catch(error => console.error(error));
    }

    render(){
        return (
            <div className="container">
                <h1>Saved</h1>
                <SearchResults books={this.state.savedBooks} />
            </div>
        )
    }
}

export default Saved;