<template>
  <div>
    <h1>List items</h1>
    <table>
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Got</th>
      </tr>
      <tr v-for="(item, index) in list" :key="index" v-bind:class="[{got:item.acquired}]">
        <td>{{item.itemName}}</td>
        <td>{{item.quantity}}</td>
        <td>
          <button @click="update(index)">
            {{!item.acquired ? "Got" : "To get"}}
          </button>
        </td>
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
    },
    methods:{
      update(index){
        this.list[index].acquired = !this.list[index].acquired
      }
    }
  }
</script>
