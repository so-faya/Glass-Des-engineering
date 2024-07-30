import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import backgroundImageAbout from '../assets/images/arch-home.jpg';
import productImage1 from '../assets/images/door-1.jpg';
import productImage2 from '../assets/images/door-2.jpg';
import productImage3 from '../assets/images/window-1.jpg';
import { FaTrashAlt } from 'react-icons/fa'; // Import a remove icon

const Cart = () => {
  const initialProducts = [
    { id: 1, image: productImage1, name: 'Product 1', price: 50, quantity: 1 },
    { id: 2, image: productImage2, name: 'Product 2', price: 30, quantity: 2 },
    { id: 3, image: productImage3, name: 'Product 3', price: 20, quantity: 1 }
  ];

  const [products, setProducts] = useState(initialProducts);

  const handleQuantityChange = (id, amount) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity: Math.max(1, product.quantity + amount) } : product
    ));
  };

  const handleRemove = id => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleApplyCoupon = () => {
    // Add logic for applying coupon code
    alert('Coupon applied!');
  };

  const handleUpdateCart = () => {
    // Add logic for updating the cart
    alert('Cart updated!');
  };

  const calculateSubtotal = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal(); // Modify this to include any discounts or additional charges
  };

  return (
    <div className='cart-container'>
      <NavBar fixed={true} /> {/* Set fixed prop to true */}

      {/* Cart hero section */}
      <div className="about-hero-container bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backgroundImageAbout})` }}>
        <div className="text-center">
          <div className="breadcrumb text-white mb-4">Home / Cart</div>
          <h1 className="text-4xl font-bold text-white">CART</h1>
        </div>
      </div>

      {/* Cart table section */}
      <div className="container mx-auto px-8 py-40">
        <div className="grid grid-cols-6 gap-4 text-center font-bold mb-4">
          <div>Images</div>
          <div>Product</div>
          <div>Unit Price</div>
          <div>Quantity</div>
          <div>Total</div>
          <div>Remove</div>
        </div>

        {products.map(product => (
          <div key={product.id} className="grid grid-cols-6 gap-4 items-center text-center border-b py-4 mb-4">
            <div><img src={product.image} alt={product.name} className="w-20 h-20 object-cover mx-auto" /></div>
            <div>{product.name}</div>
            <div>${product.price.toFixed(2)}</div>
            <div className="flex items-center justify-center">
              <button onClick={() => handleQuantityChange(product.id, -1)} className="px-2 py-1 bg-gray-300">-</button>
              <span className="px-4">{product.quantity}</span>
              <button onClick={() => handleQuantityChange(product.id, 1)} className="px-2 py-1 bg-gray-300">+</button>
            </div>
            <div>${(product.price * product.quantity).toFixed(2)}</div>
            <div>
              <button onClick={() => handleRemove(product.id)} className="text-red-600">
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <input type="text" placeholder="COUPON CODE" className="px-4 py-2 border mr-2" />
            <button onClick={handleApplyCoupon} className="px-4 py-2 bg-gold rounded-md">Apply</button>
          </div>
          <button onClick={handleUpdateCart} className="px-4 py-2 bg-gold rounded-md">Update Cart</button>
        </div>

        {/* Cart totals section */}
        <div className="mt-8 flex justify-end">
          <div className="bg-gray-100 p-6 basis-1/2 pb-20" style={{ marginTop: '20px', backgroundColor: '#f7f7f7' }}>
            <h3 className="text-xl font-bold mb-4 py-8">Cart Totals</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className='py-4 border-b'>Subtotal</div>
              <div className='py-4 border-b'>${calculateSubtotal().toFixed(2)}</div>
              <div className='py-4'>Total</div>
              <div className='py-4'>${calculateTotal().toFixed(2)}</div>
            </div>
            <button className="w-full py-4 bg-gold ">Proceed to Checkout</button>
          </div>
        </div>
      </div>


      <ScrollToTopButton heroClassName="about-hero-container"/>
      <Footer />
    </div>
  );
}

export default Cart;
