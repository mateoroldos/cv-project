import React from 'react';
import AddFormButton from '../general/AddForm';
import Study from './Study';

class Studies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studiesQ: 1,
    };

    this.addStudy = this.addStudy.bind(this);
    this.addFormButtonHandler = this.addFormButtonHandler.bind(this);
  }

  addStudy = () => {
    let studies = [];
    for (let i = 0; i < this.state.studiesQ; i++) {
      studies.push(<Study />);
    }
    return studies;
  };

  addFormButtonHandler = () => {
    this.setState((prevState, props) => ({
      studiesQ: prevState.studiesQ + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Studies</h2>
        {this.addStudy()}
        <AddFormButton onButtonClicked={this.addFormButtonHandler} />
      </div>
    );
  }
}

export default Studies;
