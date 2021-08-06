import React from 'react';

class GeneralForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submited: 'no',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRender = this.handleRender.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submited: 'yes' });
  };

  handleRender = () => {
    if (this.state.submited === 'no') {
      return (
        <form onSubmit={this.handleSubmit}>
          <label className={this.props.formClass}>
            {this.props.label}
            <input
              type={this.props.type}
              name="name"
              defaultValue={this.state.input}
              onChange={this.handleChange}
              className={this.props.formClass}
            />
          </label>
          <input type="submit" value="Submit" className={this.props.formClass} />
        </form>
      );
    } else if (this.state.submited === 'yes') {
      const CustomTag = `${this.props.tag}`;
      return (
        <div onClick={this.handleEdit}>
          <CustomTag className={this.props.afterSubmitClass}>{this.state.input}</CustomTag>
        </div>
      );
    }
  };

  handleEdit = () => {
    this.setState({ submited: 'no' });
  };

  render() {
    return this.handleRender();
  }
}

export default GeneralForm;
