var React = require('react');
var WordData = require('./WordData.js');
var WordDataSeq = React.createClass({
  render: function() {
    var createWordData = function(wd, i) {
      return <WordData word={wd.word} attributes={wd.attributes} key={i} />;
    };
    return (
      <div className="wordDataSeq">{this.props.data.map(createWordData)}</div>
    );
  }
});
module.exports = WordDataSeq;