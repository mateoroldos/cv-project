import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

class AddFormButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.onButtonClicked}>
        <FontAwesomeIcon icon={faPlusCircle} />
      </button>
    );
  }
}

export default AddFormButton;
