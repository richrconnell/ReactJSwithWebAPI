import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	
	state = {
		list: [],
		loading: true
	}
	
	componentDidMount() {
		fetch(process.env.REACT_APP_API_URL).then(response => {
			return response.json()
		}).then(list => {
			
			
			this.setState({
				list,
				loading: false
			})
			
		})
	}
	
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
			{this.state.loading ? 'Loading ...':''}
        </p>
		
		<List items={this.state.list} />
      </div>
    );
  }
  
}

class List extends React.Component {
	render() {
		return <ul style={{ textAlign: 'left'}}>
		{this.props.items.map(this.renderItem, this)}
		</ul>
	}
	
  renderItem(item, index) {
	  return <li key={item.id || index}>{item.Brand_classification_name}</li>
  }
}

export default App;
