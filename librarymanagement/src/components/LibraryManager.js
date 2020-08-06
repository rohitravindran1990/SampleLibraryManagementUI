import React, { Component } from 'react';
import { listOfLibrary } from '../action/index';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TableComponent from './TableComponent';

class LibraryManager extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lib_data: []
    }
  }
  componentDidMount() {
    this.props.listOfLibrary();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.Library != nextProps.Library) {
      this.setState({ lib_data: nextProps.Library })
    }
  }

  render() {
    return (
      <TableComponent table_data={this.state.lib_data} />
    )
  }

}

function mapStateToProps(state) {
  return {
    Library: state.Library
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      listOfLibrary
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LibraryManager);