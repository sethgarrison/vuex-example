<template>
  <div>
    <h1>{{count}}</h1>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script>
  // Binding helpers from Vuex - SUPER HANDY!
  import {mapState, mapActions} from 'vuex'

  export default {
    // computed properties are how we map store state to component properties
    computed: {
      // mapState can also take an object - also the splat is not
      // really required here, but a useful pattern in case you want to add non
      // vuex driven computed properties
      ...mapState([
        'count'
      ])
    },
    // methods are how we map actions AND mutations to our component instance
    methods: {
      // Again, the splat isn't necessary and mapActions can also take an object
      ...mapActions([
        'increment',
        'decrement'
      ])
    }
  }
</script>
