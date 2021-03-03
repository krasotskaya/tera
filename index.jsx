class TodoApp extends React.Component {
	

	constructor(props) {
	    super(props);
	    this.state = { items: [], text: '' };
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	  }

  render() {
    return (
      <div style={styleObj}>
        <h2>Your TO-DO list:</h2>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <p>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          </p>
          <p>
          <button style={styleButton}>
            Add #{this.state.items.length + 1}
          </button>
          </p>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

const styleObj = {
		color:'black',
		fontFamily:'Century Gothic'
		};

const styleButton = {
	backgroundColor:'#70ffa1',
	color:'white'
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('todos-example')
);