<script setup>
import { useMutation } from 'villus'
import {ref} from 'vue'

const props = defineProps({
        itemId: {
          type: String
        },
        itemContent: {
            type: String
        }
      })

const newContent = ref(props.itemContent)
const newTitle = ref(props.itemTitle)

const fetchEdit = `
mutation editList($id: ID!, $content: String!) {
    editElement(id: $id, content: $content) {
        content
        id
    }
}
`

const { execute } = useMutation(fetchEdit)
function editLists(id, content) {
execute({
    content: content,
    id: id
})
}
</script>
<template>
        <div>
            <q-input class="bg-white" filled type="textarea" v-model="newContent" />
                <q-btn square  color="primary" icon="save" label="Editar" @click="editLists(props.itemId, newContent)"/>
    </div>
</template>
