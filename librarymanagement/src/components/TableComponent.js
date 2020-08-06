import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AgGridReact } from 'ag-grid-react';
import { listOfBooks,updateBook } from '../action/index';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { TouchListener } from 'ag-grid-community';


class TableComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      table_data: props.table_data,
      book_data: [],
      libcolumnDefs: [],
      librowData: [],
      bookcolumnDefs: [],
      bookrowData: [],
      show: false

    }
    this.showBooks = this.showBooks.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.table_data != nextProps.table_data) {
      var columnarray = [];
      var rowarray = [];
      this.setState({ table_data: nextProps.table_data })
      //creating columns
      var keys = Object.keys(nextProps.table_data[0]);
      keys = keys.filter(item => item !== 'book')
      keys.forEach((element) => {
        columnarray.push({ 'headerName': element, 'field': element });
      });
      //creating rows
      nextProps.table_data.forEach((element) => {
        var rowkey = {}
        if (element != 'book') {
          keys.forEach((key) => {
            rowkey[key] = element[key];
          })
        }
        rowarray.push(rowkey);
      });
      this.setState({ libcolumnDefs: columnarray, librowData: rowarray });
    }

    if (this.props.Books != nextProps.Books) {
      var columnarray = [];
      var rowarray = [];
      this.setState({ book_data: nextProps.Books })
      //creating columns
      var keys = Object.keys(nextProps.Books[0]);
      keys.forEach((element) => {
        if(element== 'fk_id' || element=='bookId')
        columnarray.push({ 'headerName': element, 'field': element });
        else{
          columnarray.push({ 'headerName': element, 'field': element, 'editable':true });
        }
      });
      //creating rows
      nextProps.Books.forEach((element) => {
        var rowkey = {}
        keys.forEach((key) => {
          rowkey[key] = element[key];
        })
        rowarray.push(rowkey);
      });

      this.setState({ bookcolumnDefs: columnarray, bookrowData: rowarray });
    }
    debugger;
    if(this.props.BookUpdate!=nextProps.BookUpdate)
    {

    }
  }

  showBooks(event) {
    this.props.listOfBooks(event.data.libraryId);
    this.setState({ show: true })
  }

  updateData(event)
  {
    this.props.updateBook(event.data);
  }
  render() {
    return (
      <div>
        <div className="ag-theme-alpine" style={{ height: '200px', width: '600px', marginLeft: '30%', marginTop: '5%' }}>
          <AgGridReact
            columnDefs={this.state.libcolumnDefs}
            rowData={this.state.librowData}
            onCellClicked={(e) => this.showBooks(e)}>
          </AgGridReact>
        </div>
        {this.state.show ? <div className="ag-theme-alpine" style={{ height: '200px', width: '600px', marginLeft: '30%', marginTop: '2%' }}>
          <AgGridReact
            columnDefs={this.state.bookcolumnDefs}
            rowData={this.state.bookrowData}
            onCellEditingStopped={(e) => this.updateData(e)}>
          </AgGridReact>
        </div> : ''}
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    Books: state.Books,
    BookUpdate: state.BookUpdate
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      listOfBooks,
      updateBook

    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);