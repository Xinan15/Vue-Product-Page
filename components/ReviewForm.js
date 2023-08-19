// <input id="name" v-model="name">
// v-model creates a binding between the input and the name property in data() property

//  @submit.prevent="onSubmit"
// the '.prevent' is a modifier, prevents the default browser refreshing behavior of the event

app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a review</h3>
      <label for="name">Name:</label>

      <input id="name" v-model="name">

      <label for="review">Review:</label>      
      <textarea id="review" v-model="review"></textarea>
  
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
  
      
      <label for="recommend">Would you recommend this product?</label>
      <select id="recommend" v-model="recommend">
        <option>Yes</option>
        <option>No</option>
      </select>
  
      <input class="button" type="submit" value="Submit">  
  
    </form>`,
    data() {
      return {
        name: '',
        review: '',
        rating: null,
        recommend: null
      }
    },


    methods: {
      onSubmit() {
        if (this.name === '' || this.review === '' || this.rating === null || this.recommend === null) {
          alert('Review is incomplete. Please fill out every field.')
          return
        }
  
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recommend: this.recommend
  
        }
        this.$emit('review-submitted', productReview)
        // pass the productReview object to the parent component as a payload
  
        this.name = ''
        this.review = ''
        this.rating = null 
        this.recommend = null
  
      }
    }
  })