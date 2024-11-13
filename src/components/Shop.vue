<template>
  <div class="shop-container">
    <h1>Магазин NFT Картинок з котами</h1>

    <!-- Форма фільтрації -->
    <div class="filter-container">
      <!-- Фільтрація за назвою -->
      <div class="filter-item">
        <label for="search">Пошук за назвою:</label>
        <input type="text" id="search" v-model="filters.search" @input="updateURL" placeholder="Введіть назву..." />
      </div>

      <!-- Фільтрація за ціною -->
      <div class="filter-item">
        <label for="min-price">Ціна від:</label>
        <input type="number" id="min-price" v-model="filters.minPrice" @input="updateURL" placeholder="Мінімальна ціна" />
      </div>
      <div class="filter-item">
        <label for="max-price">Ціна до:</label>
        <input type="number" id="max-price" v-model="filters.maxPrice" @input="updateURL" placeholder="Максимальна ціна" />
      </div>

      <!-- Фільтрація за категорією -->
      <div class="filter-item">
        <label for="category">Категорія:</label>
        <select v-model="filters.category" @change="updateURL" id="category">
          <option value="">Всі категорії</option>
          <option value="other">Інше</option>
          <option value="movies">Фільми</option>
          <option value="future">Майбутнє</option>
        </select>
      </div>
    </div>

    <!-- Список товарів -->
    <div class="product-list">
      <div class="product-card" v-for="product in filteredProducts" :key="product.id">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p><strong>{{ product.price }} грн</strong></p>
        <button @click="addToCart(product)" class="add-to-cart-button">Додати в кошик</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shop",
  data() {
    return {
      filters: {
        search: this.$route.query.search || "",
        minPrice: this.$route.query.minPrice || "",
        maxPrice: this.$route.query.maxPrice || "",
        category: this.$route.query.category || "",
      },
      products: [
        { id: 1, name: "Dartcat", description: "Кіт-дартвейдер", price: 5.54, category: "movies", image: "@/assets/sports_cat1.png" },
        { id: 2, name: "Skelecat", description: "Кіт-скелет", price: 2.9, category: "movies", image: "@/assets/movies_cat1.png" },
        { id: 3, name: "Cosmocat", description: "Кіт у космосі", price: 0.54, category: "other", image: "@/assets/future_cat1.png" },
        { id: 4, name: "Skeletok", description: "Кіт майбутнього", price: 2.81, category: "future", image: "@/assets/sports_cat2.png" },
        // Додайте більше продуктів
      ],
      cart: []
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(this.filters.search.toLowerCase());
        const matchesPrice = (this.filters.minPrice ? product.price >= this.filters.minPrice : true) &&
                             (this.filters.maxPrice ? product.price <= this.filters.maxPrice : true);
        const matchesCategory = this.filters.category ? product.category === this.filters.category : true;
        return matchesSearch && matchesPrice && matchesCategory;
      });
    }
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
      alert(`${product.name} додано до кошика!`);
    },
    updateURL() {
      const queryParams = {
        search: this.filters.search,
        minPrice: this.filters.minPrice,
        maxPrice: this.filters.maxPrice,
        category: this.filters.category
      };
      this.$router.push({ query: queryParams });
    }
  },
  watch: {
    "$route.query": "loadFilters"
  },
  created() {
    this.loadFilters();
  },
  methods: {
    loadFilters() {
      this.filters.search = this.$route.query.search || "";
      this.filters.minPrice = this.$route.query.minPrice || "";
      this.filters.maxPrice = this.$route.query.maxPrice || "";
      this.filters.category = this.$route.query.category || "";
    }
  }
};
</script>

<style scoped>
.shop-container {
  padding: 40px;
  font-family: 'Arial', sans-serif;
  text-align: center;
  background-color: rgba(50, 50, 50, 0.9); /* Темно-сірий майже прозорий фон */
  border-radius: 15px;
  margin-top: 80px; /* Відступ від хедера */
}

h1 {
  color: #fff;
  font-size: 2.8rem;
  margin-bottom: 20px;
  font-weight: bold;
}

.filter-container {
  margin-bottom: 30px;
  background-color: rgba(0, 0, 0, 0.3); /* Напівпрозорий фон для фільтрів */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.filter-item {
  margin-bottom: 20px;
}

.filter-container label {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  display: block;
  margin-bottom: 8px;
}

.filter-container input,
.filter-container select {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
}

.filter-container input:focus,
.filter-container select:focus {
  outline: none;
  border-color: #620F9A;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  padding-top: 20px;
}

.product-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
}

.product-card h3 {
  color: #620F9A;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.product-card p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.4;
}

.add-to-cart-button {
  background-color: #620F9A;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: bold;
}

.add-to-cart-button:hover {
  background-color: #4a0879;
}
</style>
