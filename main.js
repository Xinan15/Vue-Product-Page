const app = Vue.createApp({
  data() {
    return {
      image: "./src/assets/images/socks_green.jpg",
      product: "Socks",
      inStock: true,
      inventory: 100,

      // Square brackets [] is array, and values inside separated by commas
      details: ["50% cotton", "30% wool", "20% polyester"],

      variants: [
        { id: 2234, color: "green" },
        { id: 2235, color: "blue" },
      ],
    };
  },
}); 
