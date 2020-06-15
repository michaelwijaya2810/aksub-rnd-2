import React, { Component } from "react";

import Card from "../Components/Card/Card";
import productList from "../Datas/ProductList";
import SearchBar from "../Components/Search/SearchBar";
import Cart from "../Components/Cart/Cart";
import TransactionSummary from "../Components/TransactionSummary/TransactionSummary";

class ProductPage extends Component {
  state = {
    products: [],
    cart: [],
    summary: [],
    total: 0
  };

  componentDidMount() {
    this.setState({ products: productList });
  }

  searchProduct = (value) => {
    const filteredProducts = productList.filter((product) => {
      const productName = product.name.toLowerCase();
      return productName.indexOf(value.toLowerCase()) !== -1;
    });
    this.setState({ products: filteredProducts });
  };

  // Single Responsibility Principle SRP = 1 fungsi cuman boleh melakukan 1 hal
    // Penamaannya (nama fungsi mencerminkan apa yg dilakukan)
    // Immutable
    // Destructure (kyk cost{name, price}=this.props, udh nge assign props nya)

  addToCart = (data) => {
    for(var i=0; i<this.state.cart.length;++i){
      if(this.state.cart[i].name===data.name){
        this.setState({cart: [...this.state.cart[i].total + data.price]})
      }
    }
    if(i===this.state.cart.length){
      this.setState({ cart: [...this.state.cart, data] });
    } 
  };

  renderCard=()=>{
    return(
      this.state.products.map((product) => (
        <Card
          name={product.name}
          price={product.price}
          stock={product.stock}
          key={product.id}
          addToCart={this.addToCart}
        />
      ))
    );
  }

  generateSummary(){
    for(var k=0;k<this.state.cart.length;++k){
      this.setState( {summary: [...this.state.summary, this.state.cart[k]]});
    }
    for(var j=0;j<this.state.summary.length;++j){
      this.setState({total: this.state.total + this.state.summary[j].total});
    }
    return(
      <TransactionSummary summary={this.state.summary}/>
    );  
  }

  render() {
    return (
      <div>
        <div className="card-container">
          <SearchBar searchProduct={this.searchProduct} />
          <Cart datas={this.state.cart} />
          <button onClick={this.generateSummary()}>Generate Transaction Summary</button> 
          <div>Total summary : {this.state.total}</div>
          {this.renderCard()}
        </div>
      </div>
    );
  }
}

export default ProductPage;