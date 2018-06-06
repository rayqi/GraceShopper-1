import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class ProductLanding extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shoes: false,
      shirts: false,
      suits: false,
    }
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this)
  }
  toggleCheckboxChange(event) {
    this.setState({ [event.target.name]: !this.state[event.target.name] })
    console.log(event.target.name, 'here', this.state)
  }
  //need api routes to Link
  render() {
    const products = this.props.products || []

    const shoes = products.filter(product => {
      return product.type === 'shoe'
    })
    const shirts = products.filter(product => {
      return product.type === 'shirt'
    })
    const suits = products.filter(product => {
      return product.type === 'suit'
    })

    // seperating products by type
    return (
      <div className="Landing">
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              name="suits"
              //   checked={isChecked}
              onChange={this.toggleCheckboxChange}
            />
            suits
          </label>
          <label>
            <input
              type="checkbox"
              name="shirts"
              //   checked={isChecked}
              onChange={this.toggleCheckboxChange}
            />
            shirts
          </label>
          <label>
            <input
              type="checkbox"
              name="shoes"
              //   checked={isChecked}
              onChange={this.toggleCheckboxChange}
            />
            shoes
          </label>
        </div>
        {products.map(product => {
          return (
            <div className="SingleProduct" key={product.id}>
              <div className="ProductText">
                <img src={product.imageUrl} />
                <h3>{product.name}</h3>
                <p>{product.color}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.product,
  }
}

export default connect(
  mapState,
  null
)(ProductLanding)
