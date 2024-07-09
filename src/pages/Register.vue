<!-- src/views/Register.vue -->
<template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="register">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <input v-model="name" type="text" placeholder="Name" required />
        <button type="submit">Register</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { auth, db } from '../firebase';
  import { useRouter } from 'vue-router';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { setDoc, doc } from 'firebase/firestore';
  
  export default defineComponent({
    setup() {
      const email = ref('');
      const password = ref('');
      const name = ref('');
      const error = ref<string | null>(null);
      const router = useRouter();
  
      const register = async () => {
        error.value = null;
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
          const user = userCredential.user;
          if (user) {
            await setDoc(doc(db, 'users', user.uid), {
              email: email.value,
              name: name.value,
              createdAt: new Date()
            });
            router.push('/');
          }
        } catch (err) {
          error.value = (err as Error).message;
        }
      };
  
      return { email, password, name, error, register };
    }
  });
  </script>
  