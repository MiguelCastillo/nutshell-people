import React from 'react';
import './app.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      people: []
    };
  }

  componentDidMount() {
    loadPeople()
      .then(people => {
        return people
          .filter(person => person.email)
          .sort((a, b) => new Date(b.signup_date).getTime() - new Date(a.signup_date).getTime())
          .slice(0, 5);
      })
      .then(people => {
        this.setState({ people });
      });
  }

  render() {
    return (
      <div id="app">
        <div id="app-body">
          <People people={ this.state.people } />
        </div>
      </div>
    );
  }
}

class People extends React.Component {
  render () {
    return (
      <ul className="people">
        { this.props.people.map(person => <Person {...person} key={ person.email }/>) }
      </ul>
    );
  }
}

class Person extends React.Component {
  render() {
    return (
      <li className="person">
        { this.props.name } { this.props.signup_date }
      </li>
    );
  }
}

async function loadPeople(index = 1) {
  const response = await fetch(`http://join.nutshell.com/people/${index}/`);
  const people = await response.json();
  return people.concat(people.length ? await loadPeople(index + 1) : []);
}

export default App;
