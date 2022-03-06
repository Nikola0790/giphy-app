import React, { Component } from "react";
import getData from "../../services/serviceUrlTrending";
import getSearchData from "../../services/serviceUrlSearch";
import { SearchBar } from "./listGiphySearch";

import "./listGiphy.css";

export class GiphyList extends Component {
  constructor() {
    super();
    this.state = {
      gifData: [],
      searchData: [],
      searchName: "",
    };
  }

  componentDidMount() {
    getData().then((data) => {
      this.setState({ gifData: data });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.searchName !== prevState.searchName) {
      getSearchData(this.state.searchName).then((data) => {
        this.setState({searchData: data})
      })
    }  
  }  

  render() {
    return (
      <div className="container main">
        {Array.isArray(this.state.searchData) ?  (<>
          <div className="row head">
          <div className="col-1"></div>
          <div className="col-10">
            <h1 className="text-center">Search Giphy</h1>
            <SearchBar x={(e) => this.setState({searchName: e})}/>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row">
          {this.state.gifData.map((content, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="col-12 mt-2 gifBox text-center">
                  <a href={content.url}>
                    <p>{content.title}</p>
                  </a>
                  <img
                    className="img-fluid "
                    src={content.images.original.url}
                    alt="GIF"
                  />
                </div>
              </div>
            );
          })}
        </div></>
        ) : (<div className="row">
        {this.state.searchData.data.map((content, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="col-12 mt-2 gifBox text-center">
                <a href={content.url}>
                  <p>{content.title}</p>
                </a>
                <img
                  className="img-fluid "
                  src={content.images.original.url}
                  alt="GIF"
                />
              </div>
            </div>
          );
        })}
      </div>) }
        
      </div>
    );
  }
}
