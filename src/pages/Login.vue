
<template>
    <div class="login">
      <div class="login__inner">
        <h1>Login</h1>
      <form class="loginForm" @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <button @click="$router.push('/cards-firebase/register')">Register</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
      </div>
      
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { auth } from '../firebase';
  import { useRouter } from 'vue-router';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  
  export default defineComponent({
    setup() {
      const email = ref('');
      const password = ref('');
      const error = ref<string | null>(null);
      const router = useRouter();
  
      const login = async () => {
        error.value = null;
        try {
          await signInWithEmailAndPassword(auth, email.value, password.value);
          router.push('/cards-firebase/register');
        } catch (err) {
          error.value = (err as Error).message;
        }
      };
  
      return { email, password, error, login };
    }
  });
  </script>

  <style scoped>

  .login{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.589);
    display: flex;
    justify-content: center;
    align-items: center;
  }

   .login__inner{
    max-width: 400px;
    max-height: fit-content;
    padding: 12px;
    background-color: white;
    border-radius: 15px;
   }

   .loginForm{
    display: flex;
    flex-direction: column;
    gap: 15px 15px;
   }
  </style>
  