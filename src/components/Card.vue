<template>
    <div class="card">
        <div>{{ title }} </div>
    </div>
</template>

<script  lang="ts">
import { defineComponent } from 'vue'
 

export default defineComponent({
    props:{
        title: {
            type: String,
            default: 'Card'
        }
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

.card{
    text-align: center;
     
    color: white;
    width: 200px;
    height: 200px;
    background-color: rgba(69, 122, 104, 0.603);
    border-radius: 10px;
    border: 1px solid #000;
    transition: all .5s;
}

.card:hover{
    cursor: pointer;
    background-color: rgb(69, 122, 104);
}
</style>