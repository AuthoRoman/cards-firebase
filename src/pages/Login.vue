<!-- src/views/Login.vue -->
<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <button @click="$router.push('/register')">Register</button>
      </form>
      <p v-if="error">{{ error }}</p>
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
          router.push('/');
        } catch (err) {
          error.value = (err as Error).message;
        }
      };
  
      return { email, password, error, login };
    }
  });
  </script>
  