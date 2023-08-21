import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ProductList from './components/ProductList.vue'
import ProductDetails from './components/ProductDetails.vue'
import ProductReview from './components/ProductReview.vue'
import ProductReviewForm from './components/ProductReviewForm.vue'


const app = Vue.createApp({
  // data()
  data() {
    return {
      // set cart to an empty array
      cart: [],

      // premium indicates if the user is a premium member or not
      premium: false,
    };
  },

  // methods()
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeById(id) {
      const index = this.cart.indexOf(id);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    },
  },
});


createApp(App).mount('#app')