<template>
  <div class="create">
    <h1>Create a new list</h1>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <input type="text" v-model="list[index].itemName">
        <input type="number" v-model="list[index].quantity">
      </li>
    </ul>
    <button @click="newItem()">+</button>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        list: [
          {itemName:"", quantity: 0, acquired: false}
        ]
      }
    },
    methods:{
      newItem(){
        this.list.push({itemName:"", quantity:0, acquired:false});
      },
    }
  }
</script>
