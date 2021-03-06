import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import { Button } from 'react-materialize'

import { fetchBing } from '../../actions/api/bing.jsx'
import { fetchReddit } from '../../actions/api/reddit.jsx'
import { fetchTwitter } from '../../actions/api/twitter.jsx'
import { fetchAlchemy } from '../../actions/api/alchemy.jsx'
import { fetchWikipedia } from '../../actions/api/wikipedia.jsx'
import { resetState } from '../../actions/resetState.jsx'
import SList from '../components/searchbar/SList.jsx'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.bingListClick = this.bingListClick.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
    this.props.fetchBing(event.target.value);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.resetState();

    this.props.fetchReddit(this.state.term);
    this.props.fetchTwitter(this.state.term);
    this.props.fetchWikipedia(this.state.term);
    this.setState({ term: '' });

    const path = `/${this.state.term}/plot`.replace(/\W^[/]/g, '-');
    browserHistory.push(path);
  }

  bingListClick(suggestion) {
    this.setState({term: suggestion});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>

            <input id="search" type='search' value={this.state.term}
                   style={{paddingLeft: '5px', paddingRight: '5px'}}
                   onChange={this.onInputChange}
                   placeholder="Enter a topic..." />

          <SList term={this.state.term} bingListClick={this.bingListClick} formSubmit={this.onFormSubmit} />
          
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchBing, fetchReddit, fetchTwitter, fetchWikipedia, fetchAlchemy, resetState }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar)