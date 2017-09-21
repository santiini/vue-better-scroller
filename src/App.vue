<template>
  <div id="app">
    <vue-better-scroller 
      :scroller="{ fade: true }"
      :data="list"
      :pullUpLoad="{ threshold: 0, text: { more: '更多加载', noMore: '没有了' } }"
      :startY="0"
      @pullingUp="getLists"
      ref="scroller">
			<!-- <div class="list-wrapper"> -->
        <ul>
          <li class="" v-for="(item,index) of list" :key="index">{{item}}</li>
        </ul>
			<!-- </div> -->
    </vue-better-scroller>
  </div>
</template>

<script>
import VueBetterScroller from './lib/BetterScroller/index.vue'
export default {
  name: 'app',
  components: {
    VueBetterScroller,
  },
  methods: {
    getLists() {
      setTimeout(() => {
        if (this.list.length > 55) {
          return this.$refs.scroller.forceUpdate()
        }
        this.list = this.list.concat(this.listData)
      }, 1200)
    },
  },
  created() {
    this.getLists()
  },
  data () {
    return {
      list: [],
      listData: [111,222,333,444,555,666,777,888,999],
    }
  }
}
</script>

<style lang="stylus">
html,body
  font-size 24px
  line-height 1.6

#app 
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  height 100%

.list-wrapper
 padding-bottom 10px

ul
  list-style none
  padding 10px

li
  padding 60px
</style>
