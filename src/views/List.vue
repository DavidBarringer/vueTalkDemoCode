<template>
  <div>
    <div>List items</div>
    <table>
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Got</th>
      </tr>
      <tr v-for="item in list" :key="item.itemName">
        <td>{{item.itemName}}</td>
        <td>{{item.quantity}}</td>
        <td><button>Got</button></td>
      </tr>
    </table>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        list: []
      }
    },
    created: function(){
      var listName = this.$route.params.listName;
      this.axios.post('/load',{
        listName: listName
      }).then((res) => {
        this.list = res.data.list;
      });
    }
  }
</script>
