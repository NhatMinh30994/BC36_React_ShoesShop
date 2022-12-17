import React, { Component } from "react";

import data from "../../data/DataShoes.json";
import ShoesDetail from "./ShoesDetail";
import ShoesList from "./ShoesList";

export default class BaiTapShoesShop extends Component {
  state = {
    shoesDetail: data[0],
  };

  getShoesDetail = (shoes) => {
    this.setState({
        shoesDetail: shoes,
    })
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-center p-3">Shoes Shop</h1>
          <ShoesList getShoesDetail={this.getShoesDetail}/>
          <ShoesDetail shoesDetail={this.state.shoesDetail}/>
        </div>
      </div>
    );
  }
}
