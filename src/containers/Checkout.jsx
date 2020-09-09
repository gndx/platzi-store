import React, { useContext } from 'react';
import '../styles/components/Checkout.styl';
import { CartContext } from '../context/CartContext'


const Checkout = () => {
  const [cart, setCart] = useContext(CartContext)
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0)

  const remove = productToRemove => () => {
    console.log(productToRemove.id)
    setCart(
      cart.filter((product) => product.id !== productToRemove.id)
    )
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => {
          const { title, price, id } = item
          return (
            <div className="Checkout-item" key={id}>
              <div className="Checkout-element">
                <h4>{title}</h4>
                <span>
                  $
                {price}
                </span>
              </div>
              <button
                type="button"
                onClick={remove(item)}
              >
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          )
        })}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>
            {`Precio Total: ${totalPrice}`}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Checkout





















// import React from 'react';
// import { connect } from 'react-redux';
// import actions from '../actions';
// import '../styles/components/Checkout.styl';

// const Checkout = (props) => {
//   const { cart } = props;

//   const handleSumTotal = () => {
//     const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
//     const sum = cart.reduce(reducer, 0);
//     return sum;
//   };

//   const remove = product => () => {
//     props.removeFromCart(product);
//   };

//   return (
//     <div className="Checkout">
//       <div className="Checkout-content">
//         {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
//         {cart.map(item => (
//           <div className="Checkout-item" key={item.title}>
//             <div className="Checkout-element">
//               <h4>{item.title}</h4>
//               <span>
//                 $
//                 {item.price}
//               </span>
//             </div>
//             <button
//               type="button"
//               onClick={remove(item)}
//             >
//               <i className="fas fa-trash-alt" />
//             </button>
//           </div>
//         ))}
//       </div>
//       {cart.length > 0 && (
//         <div className="Checkout-sidebar">
//           <h3>
//             {`Precio Total: $ ${handleSumTotal()}`}
//           </h3>
//         </div>
//       )}
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     cart: state.cart,
//   };
// };

// const mapDispatchToProps = {
//   removeFromCart: actions.removeFromCart,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
