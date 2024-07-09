<template>
    <div class="cardsList">
        <Card  title="Раздел 1"/>
        <Card  title="Раздел 2"/>
        <Card  title="Раздел 3"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../components/Card.vue';

export default defineComponent({
    name: 'MainMenu',
    components:{
        Card
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

.cardsList{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

</style>