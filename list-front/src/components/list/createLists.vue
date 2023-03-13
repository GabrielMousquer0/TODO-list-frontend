<script>
export default {
    methods: {
        createLists() {
            if(cList.style.display == "block") {
                cList.style.display = "none"
      } else {
        cList.style.display = "block"
       } 
        }
    }
}
</script>
<template>
<div>
 <h4>Suas Listas</h4> <q-btn square color="primary" icon="create" style="left: 630px;" label="Criar Lista" @click="createLists"/>
        <div id="cList">
            <div>
                <div class="q-gutter-md" style="max-width: 300px;">
                    <q-input standout="bg-grey text-black" label="Titulo"/>
                    <q-input standout="bg-grey text-black" type="textarea" label="Descrição" />
                    <q-btn square color="primary" icon="send" style="left: 230px;" label="Enviar"/>
                </div>
            </div>
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
    left: 100px;
    display: none;
    border-radius: 10px;
    background-color: rgb(138, 132, 132);
}
</style>