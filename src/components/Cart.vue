<template>
    <div class="cart-container">
      <h1 class="text-3xl font-bold mb-6">Your Cart</h1>
      <div v-if="cartItems.length === 0" class="empty-cart">
        <p>Your cart is empty. Add some products.</p>
      </div>
      
      <div v-else>
        <ul class="cart-items">
          <li v-for="(item, index) in cartItems" :key="index" class="cart-item">
            <div class="item-info">
              <img :src="item.image" alt="product image" class="item-image" />
              <div class="item-details">
                <p class="item-name">{{ item.name }}</p>
                <p class="item-price">${{ item.price }}</p>
                <div class="item-quantity">
                  <button @click="decreaseQuantity(index)" class="quantity-btn">-</button>
                  <span>{{ item.quantity }}</span>
                  <button @click="increaseQuantity(index)" class="quantity-btn">+</button>
                </div>
              </div>
            </div>
            <button @click="removeFromCart(index)" class="remove-item-btn">Видалити</button>
          </li>
        </ul>
  
        <div class="cart-summary">
          <p>Total: ${{ totalAmount }}</p>
          <button @click="proceedToCheckout" class="checkout-btn">Оформити замовлення</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Cart",
    data() {
      return {
        // Приклад товарів у кошику (можете динамічно додавати їх з іншої частини додатку)
        cartItems: [
          { name: "Dartcat", price: 5.54, quantity: 1, image: "@/png/1" },
          { name: "Skelecat", price: 2.9, quantity: 2, image: "@/png/2" },
          { name: "Cosmocat", price: 0.54, quantity: 1, image: "@/png/3" },
          { name: "Skeletok", price: 2.81, quantity: 2, image: "@/png/4" },
        ],
      };
    },
    computed: {
      totalAmount() {
        return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    },
    methods: {
      increaseQuantity(index) {
        this.cartItems[index].quantity++;
      },
      decreaseQuantity(index) {
        if (this.cartItems[index].quantity > 1) {
          this.cartItems[index].quantity--;
        }
      },
      removeFromCart(index) {
        this.cartItems.splice(index, 1);
      },
      proceedToCheckout() {
        // Перехід до сторінки оформлення замовлення
        this.$router.push({ name: 'Checkout' });
      },
    },
  };
  </script>
  
  <style scoped>
  .cart-container {
    padding: 40px;
    font-family: 'Arial', sans-serif;
    background-color: rgba(50, 50, 50, 0.9); /* Темно-сірий напівпрозорий фон */
    border-radius: 15px;
    margin-top: 80px;
    color: #fff;
    text-align: center;
  }
  
  h1 {
    color: #fff;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .cart-items {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(50% - 10px);
    padding: 20px;
    background-color: #620F9A; /* Темний фіолетовий для фону картки */
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .cart-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
  
  .item-info {
    display: flex;
    align-items: center;
  }
  
  .item-image {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 15px;
  }
  
  .item-details {
    display: flex;
    flex-direction: column;
  }
  
  .item-name {
    font-size: 1.2rem;
    font-weight: bold;
    color: #f1f1f1;
  }
  
  .item-price {
    font-size: 1rem;
    color: #e0e0e0;
  }
  
  .item-quantity {
    display: flex;
    align-items: center;
    color: #060606;
  }
  
  .quantity-btn {
    background-color: #ffffff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 0 5px;
    cursor: pointer;
    font-weight: bold;
  }
  
  .remove-item-btn {
    background-color: #DE0B0B;
    color: white;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  
  .remove-item-btn:hover {
    background-color: #a50a0a;
  }
  
  .cart-summary {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: rgba(240, 240, 240, 0.9);
    margin-top: 30px;
    border-radius: 10px;
    color: #333;
  }
  
  .checkout-btn {
    background-color: #16C64B;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  
  .checkout-btn:hover {
    background-color: #139a3c;
  }
  </style>
  