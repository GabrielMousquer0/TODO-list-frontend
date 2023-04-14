<script>
import ListCreate from './list/CreateLists.vue'
export default {
    components: {
        ListCreate
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
            <q-btn square color="grey" class="buttonShowlist" icon="list" label="Mostrar Listas" @click="viewList" />
            <div id="vList">
                <div>
                    <ListCreate />
                </div>
            </div>
        </q-page>
    </q-page-container>
</template>

<style>
.buttonShowlist {
    left: 150px;
    top: 30px;
}

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