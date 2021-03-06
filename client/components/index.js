/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export { default as Navbar } from './navbar'
export { default as UserHome } from './user-home'
export { Login, Signup } from './auth-form'
export { default as AddForm } from './product/addForm'
export { default as SingleProduct } from './product/singleProduct'
export { default as AllProducts } from './product/allProducts'
export { default as EditForm } from './product/editForm'
export { default as Cart } from './product/cart'
export { default as ReviewForm } from './review/add-review'
export { default as Home } from './home'
export { default as Checkout } from './product/checkout'
export { default as Stripe } from './stripe'
