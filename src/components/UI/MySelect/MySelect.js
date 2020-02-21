import React, { Component } from 'react';
import Select from 'react-select';
// import '../Select/Select.scss';
import './MySelect.scss';

const options = [
  { value: 'actionable', label: 'Actionable Potential Income' },
  { value: 'number', label: 'Number Of Patient This Month' },
  { value: 'preventative', label: 'Preventative Care Bonus(es) Obtained' },
  { value: 'outside', label: 'Outside Use' },
  { value: 'access', label: 'Access Bonus' },
  { value: 'group', label: 'Group Access Bonus Calculation' }
];

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: '100%',
    color: 'rgb(15, 62, 100)',
    fontWeight: 'bold',
    paddingTop: 2,
    paddingBottom: 5,
    // paddingLeft: 18,
    border: '1px solid #232323',
  }),

  option: (provided, state) => ({
    ...provided,
    paddingLeft: 18,
    paddingRight: 5,

  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: 'red',

  }),

  menuList: (provided, state) => ({
    ...provided,
    color: 'rgb(15, 62, 100)',
    cursor: 'pointer',


  }),

  control: (_, { selectProps: { width } }) => ({
    width: width,
    border: '1px solid #232323',
    borderRadius: '5px',
    color: 'rgb(15, 62, 100)',
    indicatorSeparator: false,
    display: 'flex',
    padding: 9,
    cursor: 'pointer'
  }),

  placeholder: (_) => ({
    color: 'rgb(15, 62, 100)',
    fontWeight: 'bold'

  }),

  indicatorSeparator: () => ({
    display: 'none',

  }),

  indicatorsContainer: () => ({
    display: 'none',
  }),

  singleValue: (provided, state) => {


    return { ...provided };
  }
};

class MySelect extends Component {

  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };


  render() {
    const { selectedOption } = this.state;

    return (
      <div className={ `Select ${ this.props.classes }` }>
        <span className="Select__label mr-1">From the last</span>
        <Select
          styles={ customStyles }
          placeholder={ options[0].label }
          value={ selectedOption }
          onChange={ this.handleChange }
          options={ options }
          className={ this.props.classes }
        />
      </div>
    );
  }
}

export default MySelect;