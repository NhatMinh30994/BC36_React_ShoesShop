import React, { Component } from "react";

import data from "../../data/DataShoes.json";
import Shoes from "./Shoes";

export default class ShoesList extends Component {
  renderShoesList = () => {
    return data.map((element) => {
      return (
        <div className="col-4" key={element.id}>
          <Shoes element={element}
          getShoesDetail={this.props.getShoesDetail}
          addToCart={this.props.addToCart}/>
        </div>
      );
    });
  };

  render() {
    return <div className="row">{this.renderShoesList()}</div>;
  }
}
