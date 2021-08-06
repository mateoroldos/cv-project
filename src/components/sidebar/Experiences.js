import React from 'react';
import AddFormButton from '../general/AddForm';
import Study from './Study';

class Experiences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experiencesQ: 1,
    };

    this.addStudy = this.addStudy.bind(this);
    this.addFormButtonHandler = this.addFormButtonHandler.bind(this);
  }

  addStudy = () => {
    let experiences = [];
    for (let i = 0; i < this.state.experiencesQ; i++) {
      experiences.push(<Study />);
    }
    return experiences;
  };

  addFormButtonHandler = () => {
    this.setState((prevState, props) => ({
      experiencesQ: prevState.experiencesQ + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Experiences</h2>
        {this.addStudy()}
        <AddFormButton onButtonClicked={this.addFormButtonHandler} />
      </div>
    );
  }
}

export default Experiences;
