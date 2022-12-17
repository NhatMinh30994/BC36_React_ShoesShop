import React, { Component } from "react";

export default class Shoes extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.element.image} alt />
        <div className="card-body">
          <h4 className="card-title">{this.props.element.name}</h4>
          <p className="card-text">{this.props.element.price} $</p>
          <button onClick={() => this.props.getShoesDetail(this.props.element)} className="btn btn-primary">Xem chi tiết</button>
        </div>
      </div>
    );
  }
}
