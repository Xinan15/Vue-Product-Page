<!-- Typically, the App.vue component should contain all the necessary logic, data properties, and methods. -->

<template>
    <div id="app">
        <header>
            <h1>My Product Page</h1>
        </header>
        <main>
            <!-- Pass cart and premium as props to child components if needed -->
            <ProductDisplay :cart="cart" :premium="premium" @add-to-cart="updateCart" @remove-from-cart="removeById" />
            <section id="reviews">
                <!-- Pass cart and premium as props to child components if needed -->
                <ReviewList :cart="cart" />
                <ReviewForm :premium="premium" />
            </section>
        </main>
    </div>
</template>
  
<script>
import ProductDisplay from './components/ProductDisplay.vue';
import ReviewForm from './components/ReviewForm.vue';
import ReviewList from './components/ReviewList.vue';

export default {
    data() {
        return {
            cart: [],
            premium: false,
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
    },
    components: {
        ProductDisplay,
        ReviewList,
        ReviewForm,
    },
};
</script>
  
<style scoped>
/* Add your styles here */
</style>