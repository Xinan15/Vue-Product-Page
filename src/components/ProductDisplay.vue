<template>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle"
          :style="{ 'background-color': variant.color }">
        </div>
        <button class="button" :class="{ disabledButton: !inStock }" @click="addToCart" :disabled="!inStock">
          Add to Cart
        </button>
        <button class="button" :class="{ disabledButton: !inStock || cartLength === 0 }"
          :disabled="!inStock || cartLength === 0" @click="removeFromCart">
          Remove Item
        </button>
      </div>
    </div>
    <review-list :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>
</template>

<script>
export default {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
    cartLength: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      product: "Socks",
      inventory: 100,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
      selectedVariant: 0,
    };
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
};
</script>

<style>
/* You can insert your CSS styles here */
</style>
