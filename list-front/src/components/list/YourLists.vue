<script setup>
import {
    useQuery
} from 'villus'
import DeleteItem from './events/DeleteElement.vue'
import EditContent from './events/edit/EditContent.vue'
import EditTitle from './events/edit/EditTitle.vue'

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

const {
    data
} = useQuery({
    query: fetchQuery,
    tags: ['all_lists']
})
</script>

<template>
    <div>
        <q-scroll-area :thumb-style="thumbStyle" :bar-style="barStyle" class="scrollArea">
            <ul v-if="data">
                <li v-for="list in data.lists" :key="list">
                    <div class="bg-grey">
                        <q-list>
                            <q-separator spaced inset></q-separator>
                            <q-item>
                                <q-item-section>
                                    <q-item-label>
                                        <span class="text-h4">Titulo: <EditTitle :itemTitle="list.title" :itemId="list.id"/></span>
                                    </q-item-label>
                                    <q-item-label><span class="text-h5">Descrição:</span></q-item-label>
                                    <q-item-label>
                                        <DeleteItem :itemId="list.id" /> </q-item-label>
                                    <q-item-label>
                                        <EditContent :itemId="list.id" :itemContent="list.content" />
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
.scrollArea {
    height: 470px;
    max-width: 100%;
    top: 280px;
}

#viewList {
    margin: 0;
    padding: 0;
    background-color: rgb(207, 207, 207);
}
</style>