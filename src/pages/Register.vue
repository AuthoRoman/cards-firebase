 <template>
    <div class="register">
      <div class="register__inner">
        <h1>Register</h1>
      <form class="registerForm" @submit.prevent="register">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <input v-model="name" type="text" placeholder="Name" required />
        <div class="register__footer">
          <button type="submit">Register</button>
        <button @click="backToLogin" type="button" >Back to Login</button>
        </div>
        
      </form>
      <p v-if="error">{{ error }}</p>
      </div>
      
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
            router.push('/cards-firebase/');
          }
        } catch (err) {
          error.value = (err as Error).message;
        }
      };

      const backToLogin = () => {
        router.push('/cards-firebase/login')
      }
  
      return { email, password, name, error, register,backToLogin };
    }
  });
  </script>

  <style scoped>

.register{
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

   .register__inner{
    max-width: 400px;
    max-height: fit-content;
    padding: 12px;
    background-color: white;
    border-radius: 15px;
   }

   .registerForm{
    display: flex;
    flex-direction: column;
    gap: 15px 15px;

   }

   .register__footer{
    display: flex;
    justify-content: space-between;
    gap: 20px;
   }
   
   
    </style>
  