<!-- the App.vue is the root component where other components are imported and nested
    It typically consists of three main sections:
    <template>: This is the HTML template of the component.
        It defines the structure and layout of the app's main view.
    <script>: This section contains the JavaScript logic for the component.
        Here you can import other components, define data properties, methods, computed properties, and more.
    <style> -->

<template>
    <div id="app">
        <div class="nav-bar"></div>
        <div class="cart">Cart({{ cart.length }})</div>
        <product-display :premium="premium" :cart-length="cart.length" @add-to-cart="updateCart"
            @remove-from-cart="removeById">
        </product-display>
        <review-list :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
    </div>
</template>
      
<script>
import ProductDisplay from './components/ProductDisplay.vue';
import ReviewForm from './components/ReviewForm.vue';
import ReviewList from './components/ReviewList.vue';

export default {
    components: {
        ProductDisplay,
        ReviewForm,
        ReviewList
    },
    data() {
        return {
            cart: [],
            premium: false,
            reviews: []
        };
    },
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
        addReview(review) {
            this.reviews.push(review);
        }
    },
};
</script>