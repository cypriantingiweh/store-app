import React, { Component } from "react"
import styled from "styled-components";
import {Link} from "react-router-dom";
import { ProductConsumer } from "../ProductContext";
import  PropTypes  from "prop-types";
export default class Product extends Component {
  render() {
      const {id, title, img, price,inCart}  = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <ProductConsumer>
          {(value)=>{
           return(<div className="card">
            <div className="img-container p-5" onClick={()=>value.handleDetails(id)}>
              <Link to="/details">
                  <img className="card-img-top" src={img} alt="product" />
              </Link>
              <button onClick={() =>{value.addToCart(id); value.openModal(id);}} className="cart-btn" disabled={inCart ? true : false} >
                {inCart ? (<p className="text-capitalize mb-0" disabled>
                  {" "} in inCart
                </p>):( <i className="fa fa-cart-plus"></i> )}
              </button>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <p className="align-self-center mb-0"> {title} </p>
              <h5 className="text-blue font-italic mb-0">
                <span className="mr-1">$</span>  {price}
              </h5>
            </div>
          </div>)
          }}
        </ProductConsumer>
      </ProductWrapper>
    )
  }
}

Product.propTypes={
  product:PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    company: PropTypes.string,
    info:PropTypes.string,
    inCart: PropTypes.bool,
    count: PropTypes.number,
    total: PropTypes.number
  }).isRequired
}

const ProductWrapper=styled.div`
  .card{
    border-color:transparent;
    transition: all 1s linear;
  }
  .card-footer{
    background:transparent;
    border-top:transparent;
    transition: all 1s linear;
  }
  &:hover{
    .card{
        border:0.1rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
      }
   .card-footer{
        background:rgba(247,247,247);
    }
  }
  .img-container{
    position:relative;
    overflow:hidden;
  }
  .card-img-top{
    transition: all 1s linear;
  }
   .img-container:hover .card-img-top{
    transform:scale(1.2);
  }
  .cart-btn{
    position:absolute;
    bottom:0;
    right;0;
    padding:0.2rem 0.4rem;
    background: var(--lightBlue);
    border:none;
    border-radius:0.5rem 0 0 0;
    color:var(--mainWhite);
    font-size:1.4rem;
    transform: translate(100%,100%);
    transition: all .5s linear;
    &:hover{
      color:var(--mainBlue);
      cursor:pointer;
    }
  }
  .img-container:hover .cart-btn{
    transform:translate(0%,0%);
  }


`