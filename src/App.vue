<template>
  <div id="app">
    <router-link to="/"><h1>Shopping list</h1></router-link>
    <router-link to="/load"><button class="list">Load list</button></router-link>
    <router-link to="/create"><button class="list">Create a new list</button></router-link>
    <router-view></router-view>
  </div>
</template>

<style src="./assets/main.css"></style>
