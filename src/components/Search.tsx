import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IAppState } from '../store/Store';

import { getAllImages } from '../actions/ImageActions';

interface IProps {
    search: ((query: string) => void)
}

interface IState {
    query: string
}

class Search extends React.Component<IProps, IState> {

    state = {
        query: ''
    }


    public updateInput = e => {
        this.setState({
            query : e.target.value
        })
    }

    public updateSearch = e => {

        e.preventDefault();

        console.log('the value is ', this.state.query);


        this.props.search(this.state.query);
    }

    public render() {
        return (
            <form onSubmit={this.updateSearch}>
                <input type='text' placeholder='Enter search here' onChange={this.updateInput}></input>
                <button onSubmit={this.updateSearch}>Search</button>
            </form>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        search: query => dispatch(getAllImages(query)),
    };
  };

export default connect(null, mapDispatchToProps)(Search);