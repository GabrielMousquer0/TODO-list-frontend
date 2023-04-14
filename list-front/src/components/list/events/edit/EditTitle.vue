<script setup>
import {
    useMutation
} from 'villus'
import {
    ref
} from 'vue'

const props = defineProps({
    itemId: {
        type: String
    },
    itemTitle: {
        type: String
    }
})

const newTitle = ref(props.itemTitle)

const fetchEdit = `
mutation editList($id: ID!, $title: String!) {
    editElement(id: $id, title: $title) {
        title
    }
}
`

const {
    execute
} = useMutation(fetchEdit, {
    refetchTags: ['all_lists']
})

function editLists(id, title) {
    execute({
        title: title,
        id: id
    })
}
</script>

<template>
    <div>
        <q-input id="iTitle" class="bg-white" filled v-model="newTitle" />
        <q-btn square color="primary" icon="save" label="salvar" @click="editLists(props.itemId, newTitle)" />
    </div>
</template>