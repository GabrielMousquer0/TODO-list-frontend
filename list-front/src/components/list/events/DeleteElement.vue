<script setup>
import {
    useMutation
} from 'villus'

const props = defineProps({
    itemId: {
        type: String
    }
})

const deleteElement = `
    mutation deleteElement($id: ID!) {
        deleteElement(id: $id)
}
`


const {
    execute
} = useMutation(deleteElement, {
    refetchTags: ['all_lists']
})

function deleteElements(id) {
    execute({
        id: id
    })
}
</script>

<template>
    <div>
        <q-btn class="btnDelete" square icon="delete" color="primary" id="deleteButton" @click="deleteElements(props.itemId)" />
    </div>
</template>

<style scoped>
.btnDelete {
    position: absolute;
    left: 700px;
    top: 40px;
}
</style>