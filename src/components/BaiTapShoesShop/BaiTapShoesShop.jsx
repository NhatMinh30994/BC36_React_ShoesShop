import React, { Component } from "react";

import data from "../../data/DataShoes.json";
import ShoesCart from "./ShoesCart";
import ShoesDetail from "./ShoesDetail";
import ShoesList from "./ShoesList";

export default class BaiTapShoesShop extends Component {
  state = {
    shoesDetail: data[0],
    cart: [],
  };

  getShoesDetail = (shoes) => {
    this.setState({
      shoesDetail: shoes,
    });
  };

  addToCart = (shoes) => {
    const data = [...this.state.cart];
    const idx = data.findIndex((element) => element.id === shoes.id);

    if (idx === -1) {
      data.push({ ...shoes, soLuong: 1 });
    } else {
      data[idx].soLuong += 1;
    }

    this.setState({
      cart: data,
    })
  };

  handleQuality = (shoes, isIncrease) => {
    const data = [...this.state.cart];
    const idx = data.findIndex((element) => element.id === shoes.id);

    if(isIncrease){
      data[idx].soLuong += 1;
    }else{
      if(data[idx].soLuong > 1){
        data[idx].soLuong -= 1;
      }else if(window.confirm("Bạn có muốn xóa sản phẩm này?")){
        data.splice(idx, 1);
      }
    }

    this.setState({
      cart: data,
    })
  }

  handleDelete = (shoes) => {
    const data = [...this.state.cart];
    const idx = data.findIndex((element) => element.id === shoes.id);

    data.splice(idx, 1);

    this.setState({
      cart: data,
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-center p-3">Shoes Shop</h1>
          <ShoesCart cart={this.state.cart} handleQuality={this.handleQuality} handleDelete={this.handleDelete}/>
          <ShoesList getShoesDetail={this.getShoesDetail} addToCart={this.addToCart}/>
          <ShoesDetail shoesDetail={this.state.shoesDetail} />
        </div>
      </div>
    );
  }
}
