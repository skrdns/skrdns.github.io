<template>
  <div class="shop-container p-10 bg-gray-900 bg-opacity-90 rounded-lg mt-20 text-white text-center w-11/12 max-w-7xl mx-auto">
    <h1 class="text-4xl font-extrabold mb-8">Магазин NFT Картинок з котами</h1>

    <!-- Форма фільтрації -->
    <div class="filter-container mb-10 p-5 bg-purple-800 bg-opacity-80 rounded-lg shadow-lg">
      <!-- Фільтрація за назвою -->
      <div class="filter-item mb-4">
        <label for="search" class="text-lg font-semibold">Пошук за назвою:</label>
        <input type="text" id="search" v-model="filters.search" @input="updateURL" placeholder="Введіть назву..." class="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-600"/>
      </div>

      <!-- Фільтрація за ціною -->
      <div class="filter-item mb-4 flex gap-5">
        <div class="flex-1">
          <label for="min-price" class="text-lg font-semibold">Ціна від:</label>
          <input type="number" id="min-price" v-model="filters.minPrice" @input="updateURL" placeholder="Мінімальна ціна" class="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-600"/>
        </div>
        <div class="flex-1">
          <label for="max-price" class="text-lg font-semibold">Ціна до:</label>
          <input type="number" id="max-price" v-model="filters.maxPrice" @input="updateURL" placeholder="Максимальна ціна" class="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-600"/>
        </div>
      </div>

      <!-- Фільтрація за категорією -->
      <div class="filter-item mb-4">
        <label for="category" class="text-lg font-semibold">Категорія:</label>
        <select v-model="filters.category" @change="updateURL" id="category" class="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-600">
          <option value="">Всі категорії</option>
          <option value="other">Інше</option>
          <option value="movies">Фільми</option>
          <option value="future">Майбутнє</option>
        </select>
      </div>

      <!-- Кнопка скидання фільтрів -->
      <div class="filter-item mt-6">
        <button @click="resetFilters" class="w-full bg-white text-black p-3 rounded-md font-semibold hover:bg-gray-200 transition-colors">
          Скинути всі фільтри
        </button>
      </div>
    </div>

    <!-- Список товарів -->
    <div class="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div class="product-card flex flex-col items-center bg-purple-800 p-5 rounded-lg shadow-lg hover:shadow-2xl transform hover:translate-y-1 transition-all" v-for="product in paginatedProducts" :key="product.id">
        <img :src="product.image" :alt="product.name" class="product-image w-full h-48 object-cover rounded-md mb-4"/>
        <h3 class="text-xl font-semibold text-white mb-2">{{ product.name }}</h3>
        <p class="text-gray-300 text-base mb-4">{{ product.description }}</p>
        <p class="text-lg font-semibold text-white mb-4">{{ product.price }} грн</p>
        <button @click="addToCart(product)" class="add-to-cart-button bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-bold transition-colors">Додати в кошик</button>
      </div>
    </div>

    <!-- Пагінація -->
    <div class="pagination mt-6">
      <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1" class="prev-page bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700">
        Попередня
      </button>
      <span class="page-number text-white mx-4">{{ currentPage }} / {{ totalPages }}</span>
      <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages" class="next-page bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700">
        Наступна
      </button>
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
        { id: 5, name: "Cat Knight", description: "Лицар-кіт", price: 3.45, category: "movies", image: "@/assets/future_cat2.png" },
        { id: 6, name: "Space Cat", description: "Кіт у космосі", price: 7.99, category: "future", image: "@/assets/sports_cat3.png" },
        { id: 7, name: "Cybercat", description: "Кібер-кот", price: 4.99, category: "other", image: "@/assets/movies_cat2.png" },
        { id: 8, name: "MechaCat", description: "Меха-кот", price: 6.55, category: "movies", image: "@/assets/future_cat3.png" },
      ],
      cart: [],
      currentPage: 1,
      itemsPerPage: 4
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
    },
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredProducts.slice(start, end);
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
    },
    resetFilters() {
      // Скидаємо фільтри до початкових значень
      this.filters.search = "";
      this.filters.minPrice = "";
      this.filters.maxPrice = "";
      this.filters.category = "";
      this.updateURL(); // Оновлюємо URL без фільтрів
    },
    loadFilters() {
      // Завантажуємо фільтри з URL параметрів
      this.filters.search = this.$route.query.search || "";
      this.filters.minPrice = this.$route.query.minPrice || "";
      this.filters.maxPrice = this.$route.query.maxPrice || "";
      this.filters.category = this.$route.query.category || "";
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    }
  },
  watch: {
    "$route.query": "loadFilters"
  },
  created() {
    this.loadFilters();
  }
};
</script>

<style scoped>
/* Додаткові стилі для пагінації */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  padding: 10px 15px;
  border: none;
  background-color: #5a67d8;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.page-number {
  font-size: 1.2rem;
  color: white;
}
</style>
