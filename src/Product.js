import { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    // console.log("constructor-product");
    this.state = {
      product: this.props.product,
    };
  }

  render() {
    // console.log("render-product");

    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">#{this.state.product.id}</div>
            <span
              onClick={() => {
                this.props.onDelete(this.state.product);
              }}
              className="pull-right hand-icon"
            >
              <i className="fa fa-times"></i>
            </span>
            <h5 className="pt-2 border-top">
              {this.state.product.productName}
            </h5>
            <div>${this.state.product.price}</div>
          </div>
          <div className="card-footer">
            <div className="float-left">
              <span>{this.state.product.quantity}</span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.product, 10);
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDecrement(this.state.product, 0);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <div className="float-right">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // console.log("didMount-product");
  }


  componentDidUpdate() {
    // console.log("didUpdate-product");
  }

  componentWillUnmount() {
    // console.log("unmount-product");
  }
}
