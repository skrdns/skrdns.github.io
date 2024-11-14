<template>
  <div class="cart-container p-10 bg-gray-900 bg-opacity-90 rounded-lg mt-20 text-white text-center w-11/12 max-w-7xl mx-auto">
    <h1 class="text-4xl font-extrabold mb-8">Your Cart</h1>

    <div v-if="cartItems.length === 0" class="empty-cart text-xl">
      <p>Your cart is empty. Add some products.</p>
    </div>
    
    <div v-else>
      <ul class="cart-items flex flex-wrap justify-center gap-5 mb-10">
        <li v-for="(item, index) in cartItems" :key="index" class="cart-item flex flex-col items-center w-full md:w-1/2 lg:w-1/3 p-5 bg-purple-800 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
          <div class="item-info flex items-center mb-4">
            <img :src="item.image" alt="product image" class="item-image w-16 h-16 object-cover rounded-md mr-4"/>
            <div class="item-details text-left">
              <p class="item-name text-xl font-semibold">{{ item.name }}</p>
              <p class="item-price text-lg text-gray-300">${{ item.price }}</p>
            </div>
          </div>
          <div class="item-quantity flex items-center gap-3 mt-2">
            <button @click="decreaseQuantity(index)" class="quantity-btn bg-white text-black px-2 py-1 rounded-md font-bold">-</button>
            <span class="text-xl font-semibold">{{ item.quantity }}</span>
            <button @click="increaseQuantity(index)" class="quantity-btn bg-white text-black px-2 py-1 rounded-md font-bold">+</button>
          </div>
          <button @click="removeFromCart(index)" class="remove-item-btn mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-bold">Видалити</button>
        </li>
      </ul>

      <div class="cart-summary flex flex-col md:flex-row items-center justify-between p-5 bg-gray-100 rounded-lg text-gray-800">
        <p class="text-2xl font-semibold">Total: ${{ totalAmount }}</p>
        <button @click="proceedToCheckout" class="checkout-btn mt-4 md:mt-0 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-bold transition-colors">Оформити замовлення</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
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
      this.$router.push({ name: 'Checkout' });
    },
  },
};
</script>