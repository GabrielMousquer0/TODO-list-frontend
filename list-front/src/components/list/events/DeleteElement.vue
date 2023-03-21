<script setup>
import { useMutation } from 'villus'

const props = defineProps({
    itemId: {
        type: String
    }
})

const deleteElement = `
    mutation deleteElement($id: ID!) {
        deleteElement(id: $id) {
            title
            content
            id
    }
}
`


const { execute } = useMutation(deleteElement)

function deleteElements(id) {
    execute({
        id: id
    })
}
</script>

<template>
    <div>
        <q-btn square icon="delete" color="primary" style="left: 700px; bottom: 70px;" @click="deleteElements(props.itemId)" />
    </div>
</template>