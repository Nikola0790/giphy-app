import React, { Component } from "react";

export class SearchBar extends Component {
  constructor() {
    super ()
    this.state = {
      name: '',
    };
/*     this.onSearch = this.onSearch.bind(this); */
  }

 /*  onSearch = (event) => {
    console.log(this.props.x)
    (this.props.x(event.target.value))
  };  */



  render() {
    return (
      <div className="searchBox">
        <input
          className="form-control"
          aria-label="Search"
          type="text"
          placeholder="Search"
          onChange={(event) => this.props.x(event.target.value)} 
          value={this.state.name}
        />
      </div>
    ) 
  }
};
