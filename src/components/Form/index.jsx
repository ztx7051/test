import React, { Component } from "react";

class Form extends Component {
  state = {
    formData: {},
  };

  submitForm = (cb) => {
    cb({ ...this.state.formData });
  };

  resetForm = () => {
    const { formData } = this.state;
    Object.keys(formData).forEach((item) => {
      formData[item] = "";
    });

    this.setState({ formData });
  };

  setValue = (name,value)=>{
    this.setState({
      formData:{
        ...this.state.formData,
        [name]:value
      }
    })
  }

  render() {
    const {children} = this.props;
    const renderChildren = [];
    React.Children.forEach(children,(child)=>{
      if(child.type.displayName === 'formItem'){
        const {name} = child.props;
      }
    })
    return <div>index</div>;
  }
}

export default Form;
