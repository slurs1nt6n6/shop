import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Items from "../components/Items";
import Categories from "../components/Categories";
import ShowFullItem from "../components/ShowFullItem";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contacts from "./Contacts";
import Cabinet from "./Cabinet";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id:1,
          title: 'Purple Cross Gloe Jeans',
          img:'75.jpg',
          desc:'Lorem ipsum dolor',
          category:'hoodie',
          price:7000,
        },
        {
          id:2,
          title: 'Surplus Airborne Cargo ',
          img:'pants.jpg',
          desc: 'Lorem ipsum dolor',
          category:'jeans',
          price:4550,
        },
        {
          id:3,
          title: 'Vetements Ecstasy',
          img:'Sbcd2e1b57d4e4fa09cf905a179226336c.jpg_640x640.jpg',
          desc: 'Lorem ipsum dolor',
          category:'hoodie',
          price:12000,
        },
        {
          id:4,
          title: 'Vetements Titanic',
          img:'titanik.jpg',
          desc: 'Lorem ipsum dolor',
          category:'hoodie',
          price:12000,
        },
        {
          id:5,
          title: 'Carhartt Cargo Pants',
          img:'carhartt.jpg',
          desc: 'Lorem ipsum dolor',
          category:'jeans',
          price:8000,
        },
        {
          id:6,
          title: 'Ventements World Tour 21',
          img:'wtour.jpg',
          desc: 'Lorem ipsum dolor',
          category:'hoodie',
          price:12000,
        },
        {
          id:7,
          title: 'Ventements Hello my Name',
          img:'hellomyname.png',
          desc: 'Lorem ipsum dolor',
          category:'tshirt',
          price:9000,
        }, {
          id:8,
          title: 'Number (n)ine School',
          img:'school.jpg',
          desc: 'Lorem ipsum dolor',
          category:'tshirt',
          price:9000,
        },
        {
          id:9,
          title: 'Number (N)ine S/S06 "My Jeweler Will" T-Shirt',
          img:'nn2.jpg',
          desc: 'Lorem ipsum dolor',
          category:'tshirt',  
          price:9000,
        }
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render() {
    return (
      <div className="wrapper">
        
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <Categories chooseCategory={this.chooseCategory} />
          <Items
            onShowItem={this.onShowItem}
            items={this.state.currentItems}
            onAdd={this.addToOrder}
          />
          {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder}  onShowItem={this.onShowItem} item={this.state.fullItem} />}
          <Footer />
      
      </div>
    );
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }
  
  chooseCategory(category){
  if(category === 'all'){
    this.setState({currentItems: this.state.items})
    return
  }
  
    this.setState({
   currentItems: this.state.items.filter(el=>el.category === category)
  })
  }
  
  deleteOrder(id){
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
  
  addToOrder(item){
    let isInArray = false
  this.state.orders.forEach(el=>{
    if(el.id === item.id)
      isInArray = true
  })
  if(!isInArray)
  this.setState({ orders: [...this.state.orders, item]})
  }  
}

export default Home;