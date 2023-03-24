<script>
import YourLists from './YourLists.vue'
import SubmitLists from './events/SubmitLists.vue'

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
        YourLists,
        SubmitLists
    }
}
</script>

<template>
    <div>
        <span class="text-h4">Suas Listas</span>
        <q-btn class="createButton" square color="primary" icon="create" label="Criar Lista" @click="createLists" />
        <YourLists />
        <div id="cList">
            <SubmitLists/>
        </div>
    </div>
</template>

<style>
.createButton {
    position: absolute;
    left: 620px;
    top: 55px;
}

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