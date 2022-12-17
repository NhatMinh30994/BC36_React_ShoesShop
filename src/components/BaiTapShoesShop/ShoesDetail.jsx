import React, { Component } from "react";

export default class ShoesDetail extends Component {
  render() {
    const {
      name,
      alias,
      price,
      description,
      shortDescription,
      quantity,
      image,
    } = this.props.shoesDetail;
    return (
      <div className="row mt-5">
        <div className="col-4 text-center">
          <h2>{name}</h2>
          <img className="img-fluid" src={image} />
        </div>
        <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <td colSpan={2}>
                  <h2>Thông tin chi tiết</h2>
                </td>
              </tr>
              <tr>
                <td>Loại giày:</td>
                <td>{alias}</td>
              </tr>
              <tr>
                <td>Mô tả:</td>
                <td>{description}</td>
              </tr>
              <tr>
                <td>Mô tả ngắn:</td>
                <td>{shortDescription}</td>
              </tr>
              <tr>
                <td>Số lượng còn:</td>
                <td>{quantity} đôi</td>
              </tr>
              <tr>
                <td>Giá:</td>
                <td>{price} $</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}
