<template>
    <div>
        <Card  title="О предмете"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../components/Card.vue';

export default defineComponent({
    name: 'About',
    components:{
        Card
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>