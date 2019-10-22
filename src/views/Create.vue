<template>
  <div class="create">
    <h1>Create a new list</h1>
    <h2>List name: <input type="text" v-model="listName"></h2>
    <button @click="newItem()">+</button>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <input type="text" v-model="list[index].itemName">
        <input type="number" class="quantity" v-model="list[index].quantity">
      </li>
    </ul>
    <div>
      <button @click="save()">Save</button>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        listName: "",
        list: [
          {itemName:"", quantity: 0, acquired: false}
        ]
      }
    },
    methods:{
      newItem(){
        this.list.push({itemName:"", quantity:0, acquired:false});
      },
      save(){
        this.axios.post("/save",{
          name: this.listName,
          list: this.list
        }).then((res) => {
          console.log(res.data);
          this.list=[];
          this.listName="";
          this.newItem();
        })
      }
    }
  }
</script>
