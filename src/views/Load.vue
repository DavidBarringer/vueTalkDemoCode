<template>
  <div class="load">
    <h1>Load a list</h1>
    <div v-for="(list, index) in lists" :key="index">
      <button class="list" @click="load(index)">{{ list.split(".")[0] }}</button>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        lists: []
      }
    },
    created: function(){
      this.axios.get('/load').then((res) => {
        this.lists = res.data.lists;
      })
    },
    methods: {
      load(index){
        var listName = this.lists[index].split(".")[0];
        this.$router.push({name:'list', params: {listName}});
      }
    }
  }
</script>
