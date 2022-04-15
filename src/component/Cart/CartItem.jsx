import React, { Component } from 'react'

export default class CartItem extends Component {
  render() {
      const {id,title,img,price,total,count} = this.props.item;
        const { incrementItem,decrementItem,removeItem} = this.props.value;
    return (
      <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width:'5rem',height:'5rem'}} className="img-fluid" alt="product" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
             <p> 
                 <span className='d-lg-none'>product:</span>{title}</p> 
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase"> 
                <span className='d-lg-none'>price:</span>{price}</p>
            </div>
            <div className="col-10 mx-auto my-2 col-lg-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <span className="btn btn-black mx-1" onClick={()=>decrementItem(id)}>-</span>
                    <span className='btn btn-black mx-1' >{count}</span>
                    <span className="btn btn-black mx-1" onClick={()=>incrementItem(id)}>+</span>
                </div>
                
            </div>

            <div className="col-10 mx-auto col-lg-2">
              <div onClick={() =>{removeItem(id)}} className="cart-icon">
                  <i className="fa fa-trash"></i>
              </div>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <strong className="text-uppercase"> 
                <span className='d-lg-none'>item total:</span> <span>$</span> {total}</strong>
            </div>
        </div>
    )
  }
}
