const app = Vue.createApp({
  // data()
  data() {
    return {
      product: "Socks",

      image: "./src/assets/images/socks_green.jpg",

      inStock: true,
      inventory: 100,

      // Square brackets [] is array, and values inside separated by commas
      details: ["50% cotton", "30% wool", "20% polyester"],

      variants: [
        { id: 2234, color: 'green', image: './src/assets/images/socks_green.jpg' },
        { id: 2235, color: 'blue', image: './src/assets/images/socks_blue.jpg' },
      ],

      // initial value of cart is 0
      cart: 0,

      styles: {
        color: 'red',
        fontSize: '20px',
      },

      activeClass: true,

      isActive: true,
      
    };
  },

  // methods()
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    }
  },
});
