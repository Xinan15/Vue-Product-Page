const app = Vue.createApp({
  // data()
  data() {
    return {
      product: "Socks",

      inventory: 100,

      // Square brackets [] is array, and values inside separated by commas
      details: ["50% cotton", "30% wool", "20% polyester"],

      variants: [
        { id: 2234, color: 'green', image: './src/assets/images/socks_green.jpg', quantity: 50 },
        { id: 2235, color: 'blue', image: './src/assets/images/socks_blue.jpg', quantity: 0 },
      ],

      // initial value of cart is 0
      cart: 0,

      styles: {
        color: 'red',
        fontSize: '20px',
      },

      activeClass: true,

      isActive: true,
      
      brand: 'Vue',

      // the initial value of selectedVariant is 0
      selectedVariant: 0,

    };
  },

  // methods()
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateVariant(index) {
      this.selectedVariant = index;
      console.log(index);
    }

  },

  // computed()
  // the benefits of computed properties is that it will cache the result
  // and only re-compute the result if one of its dependencies have changed
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },

    // this.selectedVariant here is the index of the selectedVariant
    image() {
      return this.variants[this.selectedVariant].image;
    },

    // now inStock() is not a data property, but a computed property
      inStock() {
      return this.variants[this.selectedVariant].quantity;
    }
  }
});
