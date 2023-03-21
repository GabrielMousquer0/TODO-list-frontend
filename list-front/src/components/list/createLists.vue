<script>
import yourLists from './yourLists.vue'
import submitLists from './events/submitLists.vue'

export default {
    methods: {
        createLists() {
            if (cList.style.display == "block") {
                cList.style.display = "none"
            } else {
                cList.style.display = "block"
            }
        }
    },
    components: {
        yourLists,
        submitLists
    }
}
</script>

<template>
    <div>
        <span class="text-h4">Suas Listas</span>
        <q-btn square color="primary" icon="create" style="left: 430px; top: 40px;" label="Criar Lista" @click="createLists" />
        <yourLists />
        <div id="cList">
            <submitLists/>
        </div>
    </div>
</template>

<style>
#cList {
    margin: 0;
    padding: 0;
    position: absolute;
    height: 300px;
    width: 50%;
    top: 20px;
    left: 200px;
    display: none;
    border-radius: 10px;
    background-color: rgb(138, 132, 132);
}
</style>