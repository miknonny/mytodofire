var React = require('react');

var AddItem = React.createClass({
  getInitialState () {
    return {
      newItem: ''
    }
  },

  handleChange (e) {
    e.preventDefault();
    this.setState({
      newItem: e.target.value
    })
  },

  handleSubmit (e) {
    if (e.keyCode === 13) {
      this.props.add(this.state.newItem);
      this.setState({
        newItem: ''
      })
    }
  },

  render () {
    return (
      <div>
        <input type="text" 
          className="form-control"
          value={this.state.newItem}
          onKeyDown={this.handleSubmit}
          onChange={this.handleChange} />
      </div>
    )
  }
});

module.exports = AddItem;