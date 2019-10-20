<template>
  <div class="create">
    <h1>Create a new list</h1>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        {{item.itemName}}
        ({{item.quantity}})
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        list: [
          {itemName:"Bread", quantity: 1, acquired: false}
        ]
      }
    }
  }
</script>
