// in morden front-end javascript frameworks, components are the building blocks of an app
// they are a bit like legos that you can plug into each other in this component hierarchy

// here 'product-display' is the name of the component
// inside the {} curly braces is the component definition to configure the component
// template is a property that defines the html template that will be used for this component

// '/* html */' this is a special comment that tells the editor to treat the code inside as html
// this activates the es6 string extension
// add all code inside the tick marks ``

// props: a custom attribute for passing data into our components

app.component("product-display", {
  props: {
    // here is the props validation
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /* html */
    `<div class="product-display">
    <div class="product-container">
    <div class="product-image">

        <!-- 'v-bind:' or shorthand ':' Dynamically bind an attribute to an expression -->
        <img :src="image">

      </div>
      <div class="product-info">

        <h1>{{ brand + ' ' + product }}</h1>

        <!-- use computed property -->
        <h1>{{ title }}</h1>

        <!-- 'v-if' directive renders if the condition is true -->
        <!-- if the condition is not true, renders 'v-else' -->
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>

        <ul>
          <!-- 'v-for' works like a 'for loop' -->
          <!-- Here 'details' is the name of the array -->
          <!-- 'detail' is the alias for the elements inside the array -->
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <!-- 'background-color' is kebab-cased property name, put inside quotes -->
        <!-- here we update image and inStock state using computed properties -->
        <!-- use index is second parameter and pass it in -->
        <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
          class="color-circle" :style="{ 'background-color': variant.color }"></div>

        <!-- disable the button if it is out of stock -->
        <button class="button" :class="{ disabledButton: !inStock }" @click="addToCart" :disabled="!inStock">
          Add to Cart</button>
      </div>
    </div>
  </div>`,
  // behind the template literal, we add our data and computed properties
  data() {
    return {
      product: "Socks",

      inventory: 100,

      // Square brackets [] is array, and values inside separated by commas
      details: ["50% cotton", "30% wool", "20% polyester"],

      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],

      styles: {
        color: "red",
        fontSize: "20px",
      },

      activeClass: true,

      isActive: true,

      brand: "Vue",

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
    },
  },

  // computed()
  // the benefits of computed properties is that it will cache the result
  // and only re-compute the result if one of its dependencies have changed
  computed: {
    title() {
      return this.brand + " " + this.product;
    },

    // this.selectedVariant here is the index of the selectedVariant
    image() {
      return this.variants[this.selectedVariant].image;
    },

    // now inStock() is not a data property, but a computed property
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
});
