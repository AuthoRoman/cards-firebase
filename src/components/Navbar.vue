<template>
     
        <nav>
            <ul class="navList">
                <li ><router-link class="list__item" to="/cards-firebase">Главная

</router-link> </li>
                <li  ><router-link class="list__item" to="/cards-firebase/about">О предмете</router-link> </li>
                <li  ><router-link class="list__item" to="/cards-firebase/">Контакты</router-link> </li>
                <li v-if="user !== null"><button @click="logout">Logout</button></li>
            </ul>
        </nav>
     
</template>

<script  lang="ts">
import { defineComponent, inject } from 'vue';
 import { useRouter } from 'vue-router';
import { User } from 'firebase/auth';  
import { auth } from '../firebase';

export default defineComponent({
    name: 'Navbar',
    setup () {
       
const router = useRouter();
const user = inject<User | null>('user');
const logout = async () => {
  try {
    await auth.signOut();  
    router.push('/cards-firebase/login');  
  } catch (error) {
    console.error('Error logging out:', );
  }
};

        return {user, logout}
    }
})
</script>

<style scoped>

.navList{
    display: flex;
    list-style: none;
    padding: 5px;
    margin: 0;
    gap: 10px;

}

.list__item{
    text-decoration: none;
    color: black;
    font-size: 20px;
    
}
.list__item:hover{
     text-decoration: underline;
    cursor:pointer ;
}

</style>