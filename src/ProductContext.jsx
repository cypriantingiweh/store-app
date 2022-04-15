import React, { Component } from 'react'
import {storeProducts, detailProduct} from "./data"

const ProductContext = React.createContext();

class ProductProvider extends Component {
    constructor(props){
        super(props);
        this.state ={
            products:[],
            detailProduct:detailProduct,
            cart:[],
            modalOpen:false,
            modalProduct:detailProduct,
            cartSubTotal:0,
            cartTax:0,
            cartTotal:0,
        }
    }

    componentDidMount(){
        this.setProducts();
    }

    setProducts =()=>{
      let temProducts = [];
        storeProducts.forEach(item =>{
            const singleItem ={...item};
            temProducts = [...temProducts,singleItem];
        });
        this.setState(()=>{
            return {products:temProducts}
        })
    }

    getItems =(id)=>{
        return this.state.products.find(item=> item.id ===id);
    }

    handleDetails =(id)=>{

        this.setState({
            detailProduct:this.getItems(id)
        })
    }

    addToCart =(id)=>{
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItems(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        product.total = product.price;
        this.setState(()=>{
            return {
                products:tempProducts, cart: [...this.state.cart,product]
            }
        },() =>{
           this.addTotal(); 
        })
    }

    openModal= id=>{
        this.setState(()=>{
            return {modalProduct:this.getItems(id),modalOpen:true}
        })
    }

    closeModal = ()=>{
        this.setState(()=>{
            return {modalOpen:false}
        });
    }

    incrementItem =(id)=>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count += 1;
        product.total = product.count * product.price;
        this.setState(()=>{
            return { cart:[...tempCart]
            }
        },() =>{
           this.addTotal(); 
        })
    }
    decrementItem =(id)=>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count -= 1;
        if(product.count ===0){
            this.removeItem(id)
        }else{
            product.total = product.count * product.price;
            this.setState(()=>{
                return { cart:[...tempCart]
                }
            },() =>{
            this.addTotal(); 
            })
        }
    }
    removeItem =(id)=>{
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(this.getItems(id));
        const product = tempProducts[index];
        product.inCart = false;
        product.count = 0;
        product.total = 0;

        this.setState(()=>{
            return {
                products:[...tempProducts], cart:[...tempCart]
            }
        },() =>{
           this.addTotal(); 
        })
    }
    clearCart =()=>{
       this.setState(() => {
          return{cart:[]} 
       },() =>{
           this.setProducts();
           this.addTotal();
       })
    }

    addTotal =()=>{
        let subTotal = 0;
        this.state.cart.map(item =>(subTotal += item.total));
        const tempTax = subTotal*0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = tax + subTotal;
        this.setState(()=>{
            return{
                cartSubTotal:subTotal,
                cartTax:tax,
                cartTotal:total
            }});
    }

  render() {
    return (
      <ProductContext.Provider value={{
          ...this.state,
          addToCart: this.addToCart,
          handleDetails: this.handleDetails,
          openModal:this.openModal,
          closeModal:this.closeModal,
          incrementItem:this.incrementItem,
          decrementItem:this.decrementItem,
          removeItem:this.removeItem,
          clearCart:this.clearCart
      }}>
          {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}
