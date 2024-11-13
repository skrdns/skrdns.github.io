<template>
    <div class="relative">
      <GifBackground />
      <div
        class="flex items-center justify-center min-h-screen relative z-10 transition-colors duration-500"
        :class="{ 'bg-red-500': isSignUp }"
      >
        <div class="container mx-auto flex flex-col lg:flex-row">
          <div
            class="form-container flex flex-col justify-center items-center w-full lg:w-1/2 p-8 bg-white shadow-md rounded-lg transition-all duration-500"
            v-show="!isSignUp"
          >
            <h1 class="text-2xl font-bold mb-6">Sign In</h1>
            <form @submit.prevent="handleSignIn">
              <input
                type="email"
                v-model="email"
                placeholder="Email"
                class="mb-4 w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="password"
                v-model="password"
                placeholder="Password"
                class="mb-4 w-full p-2 border border-gray-300 rounded"
                required
              />
              <button
                type="submit"
                class="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Sign In
              </button>
            </form>
          </div>
          <div
            class="form-container flex flex-col justify-center items-center w-full lg:w-1/2 p-8 bg-white shadow-md rounded-lg transition-all duration-500"
            v-show="isSignUp"
          >
            <h1 class="text-2xl font-bold mb-6">Sign Up</h1>
            <form @submit.prevent="handleSignUp">
              <input
                type="text"
                v-model="name"
                placeholder="Name"
                class="mb-4 w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="email"
                v-model="email"
                placeholder="Email"
                class="mb-4 w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="password"
                v-model="password"
                placeholder="Password"
                class="mb-4 w-full p-2 border border-gray-300 rounded"
                required
              />
              <button
                type="submit"
                class="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Sign Up
              </button>
            </form>
          </div>
  
          <div class="overlay-container flex flex-col justify-center items-center w-full lg:w-1/2 p-8">
            <button
              class="mt-4 bg-transparent text-blue-500 font-bold"
              @click="toggleForm"
            >
              {{ isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up" }}
            </button>
            <div v-if="message" class="mt-4 text-green-600">{{ message }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import GifBackground from './GifBackground.vue';
  
  export default {
    name: 'AuthForm',
    components: {
      GifBackground,
    },
    data() {
      return {
        isSignUp: false,
        email: '',
        password: '',
        name: '',
        message: '',
      };
    },
    methods: {
      toggleForm() {
        this.isSignUp = !this.isSignUp;
      },
      handleSignIn() {
        // Тут реалізуйте свою логіку входу
        this.message = 'You have signed in successfully!';
      },
      handleSignUp() {
        // Тут реалізуйте свою логіку реєстрації
        this.message = 'You have signed up successfully!';
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  </style>
  