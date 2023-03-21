<script>
import listCreate from './list/createLists.vue'
export default {
    components: {
        listCreate
    },
    methods: {
        viewList() {
            if (vList.style.display == "block") {
                vList.style.display = "none"
            } else {
                vList.style.display = "block"
            }
        }
    }
}
</script>

<template>
    <q-page-container>
        <q-page class="q-pa-md">
            <q-btn square color="grey" icon="list" style="left: 200px;" label="Mostrar Listas" @click="viewList" />
            <div id="vList">
                <div>
                    <listCreate />
                </div>
            </div>
        </q-page>
    </q-page-container>
</template>

<style>
#vList {
    margin: 0;
    padding: 0;
    position: absolute;
    background-color: rgb(179, 179, 179);
    height: 800px;
    width: 800px;
    left: 450px;
    top: 30px;
    border-radius: 10px;
    display: none;
}
</style>