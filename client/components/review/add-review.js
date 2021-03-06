import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userInfo } from 'os'
import { createReview } from '../../store/review'

class ReviewForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      rating: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleSubmit = this.props.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleToggle(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {
    const product =
      this.props.products.filter(ele => {
        return ele.id === +this.props.match.params.productId
      })[0] || {}
    const user = this.props.user || {}
    return (
      <div>
        <h1>
          {user.email} You are leaving a review for {product.name}
        </h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Review below:
            <input
              type="text"
              value={this.state.text}
              name="text"
              required
              onChange={this.handleChange}
            />
          </label>
          <label>
            Rating
            <select
              className="browser-default"
              name="rating"
              value={this.state.rating}
              onChange={this.handleToggle}
            >
              <option value="" disabled selected>
                Choose rating
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </label>
          <button type="submit" className="btn waves-effect waves-light">
            Submit Review
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    products: state.product,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: function(event) {
      event.preventDefault()
      this.props.history.push(`/products/${this.props.match.params.productId}`)
      const review = {
        ...this.state,
        userId: +this.props.user.id,
        productId: +this.props.match.params.productId,
      }
      dispatch(createReview(review))
      this.setState({
        text: '',
        rating: 5,
      })
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm)
