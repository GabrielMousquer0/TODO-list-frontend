<script setup>
import { useMutation } from 'villus'
import { ref } from 'vue'
const inputTitle = ref('')
const inputDesc = ref('')

const createLists = `
mutation createLists($title: String!, $content: String!, $id: ID!) {
    createLists(title: $title, content: $content, id: $id) {
        title
        content
        id
    }
}
`

const { execute } = useMutation(createLists)

function submitList(title, content) {

    return execute({
        title: title,
        content: content,
        id: Math.floor(Math.random() * 10000000)
    })
}
</script>

<template>
    <div>
        <div class="q-gutter-md" style="max-width: 300px;">
            <q-input outlined label="Titulo" v-model="inputTitle" />
            <q-input outlined type="textarea" label="Descrição" v-model="inputDesc" />
            <q-btn square color="primary" icon="send" style="left: 230px;" label="Enviar" @click="submitList(inputTitle, inputDesc)" />
        </div>
    </div>
</template>