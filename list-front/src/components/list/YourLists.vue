<script setup>
import { watchEffect } from 'vue'
import { useQuery } from 'villus'
import DeleteItem from './events/DeleteElement.vue'
import EditElement from './events/EditElement.vue'

let thumbStyle = {
    right: '4px',
    borderRadius: '5px',
    backgroundColor: '#027be3',
    width: '5px',
    opacity: 0.75
}
let barStyle = {
    right: '2px',
    borderRadius: '9px',
    backgroundColor: '#027be3',
    width: '9px',
    opacity: 0.2
}

const fetchQuery = `
query fetchQuery {
    lists {
        id
        title
        content
    }
}
`

const { data, execute } = useQuery({
    query: fetchQuery
})
</script>

<template>
    <div>
        <q-scroll-area :thumb-style="thumbStyle" :bar-style="barStyle" style="height: 470px; max-width: 100%; top: 280px; ">
            <ul v-if="data">
                <li v-for="list in data.lists" :key="list">
                    <div class="bg-grey">
                        <q-list>
                            <q-separator spaced inset></q-separator>
                            <q-item>
                                <q-item-section>
                                    <q-item-label>
                                        <span class="text-h2" style="font-size: 30px;">Titulo: {{ list.title }}</span>
                                    </q-item-label>
                                    <q-item-label><span class="text-h3" style="font-size: 20px;">Descrição:</span></q-item-label>
                                    <q-item-label>
                                        <DeleteItem :itemId="list.id" /> </q-item-label>
                                    <q-item-label>
                                        <EditElement :itemId="list.id" :itemContent="list.content" />
                                    </q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </div>
                </li>
            </ul>
    
        </q-scroll-area>
    
    </div>
</template>

<style scoped>
#viewList {
    margin: 0;
    padding: 0;
    background-color: rgb(207, 207, 207);
}
</style>