import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButtom from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const Cart = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem => (<CartItem key={ cartItem.id } item={ cartItem }/>))
      }
    </div>
    <CustomButtom> GO TO CHECKOUT </CustomButtom>
  </div>
)


const mapStateToProps = (state) => ({ cartItems: selectCartItems(state)})

export default connect(mapStateToProps, null)(Cart);
