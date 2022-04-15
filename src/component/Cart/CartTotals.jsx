import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class CartTotals extends Component {
  render() {
      const { cartSubTotal,cartTax,cartTotal, clearCart} = this.props.value;
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row m-5">
                    <div className="text-capitalize d-flex align-items-end flex-column">
                            <Link to="/">
                                <button onClick={() =>clearCart()} className='btn btn-outline-danger text-uppercase mb-3 px-5' 
                                type='button'>clear cart</button>
                            </Link>
                            <h5>
                                <span className="text-title">
                                    Sub Total: <strong>${cartSubTotal}</strong>
                                </span>
                            </h5>
                              <h5>
                                <span className="text-title">
                                   Tax: <strong>${cartTax}</strong>
                                </span>
                            </h5>
                              <h5>
                                <span className="text-title">
                                  Total: <strong>${cartTotal}</strong>
                                </span>
                            </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
  }
}
