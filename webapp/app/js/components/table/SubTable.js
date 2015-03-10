var React = require('react');
var bs = require('react-bootstrap');
var BsTable = bs.Table;
var TableRow = require('./TableRow.js');
var RowAdder = require('./RowAdder.js');
var SubTable = React.createClass({
  headerCell: function(col, i) {
    return <th key={i}>{col}</th>;
  },
  thead: function() {
    var cols = this.props.cols;
    var cells = cols.map(this.headerCell);
    return <thead>{cells}</thead>;
  },
  row: function(row, i) {
    var key = "row" + i;
    return <TableRow key={key} row={row}/>;
  },
  tbody: function() {
    var rows = this.props.rows;
    var rowComponents = rows.map(this.row);
    var rowAdder = this.rowAdder();
    return (
      <tbody>
        {rowAdder}
        {rowComponents}
      </tbody>
    );
  },
  rowAdder: function() {
    var cols = this.props.cols;
    var tableName = this.props.tableName;
    var rowType = this.props.rowType;
    var add = function(valueStrings) {
      var row = TableManager.stringsRow(valueStrings);
      TableManager.addRow(tableName, rowType, row);
    };
    return <RowAdder cols={cols} onSubmit={add}/>;
  },
  render: function() {
    var style = {borderTop: 0};
    return (
      <BsTable bordered style={style}>
        {this.thead()}
        {this.tbody()}
      </BsTable>
    );
  }
});
module.exports = SubTable;
