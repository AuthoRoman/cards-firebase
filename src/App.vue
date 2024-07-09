<script  setup lang="ts">
     import Navbar from './components/Navbar.vue' 
     import { inject } from 'vue';
 
import { User } from 'firebase/auth'; // Импортируем тип User

// Используем inject для получения состояния пользователя
  const user = inject<User | null>('user'); // Указываем тип User | nul
</script>

<template>
  <div class="container">
    <Navbar v-if="user !== null" ></Navbar>
    <router-view></router-view>
    
  </div>
   
</template>

<style  >
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

 .container{
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;

 }
</style>
