<template>
    <div id="app">
      <header>
        <h1>My Product Page</h1>
      </header>
      <main>
        <ProductDisplay />
        <section id="reviews">
          <ReviewList />
          <ReviewForm />
        </section>
      </main>
    </div>
  </template>
  
  <script>
  // Import components here
  import ProductDisplay from './components/ProductDisplay.vue'
  import ReviewForm from './components/ReviewForm.vue'
  import ReviewList from './components/ReviewList.vue'
    
  export default {
    components: {
        ProductDisplay,
        ReviewList,
        ReviewList
    },
    // Add your Vue logic here
  }
  </script>
  
  <style scoped>
    /* Add your styles here */
  </style>
  