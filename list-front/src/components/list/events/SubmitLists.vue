<script setup>
import {
    useMutation
} from 'villus'
import {
    ref
} from 'vue'
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

const {
    execute
} = useMutation(createLists, {
    refetchTags: ['all_lists']
})

function submitList(title, content) {
    if(!title || !content) {
        return 
    }
    return execute({
        title: title,
        content: content,
        id: Math.floor(Math.random() * 10000000)
    })
}
</script>

<template>
    <div>
        <div class="q-gutter-md">
            <q-input outlined label="Titulo" v-model="inputTitle" :rules="[val => (!!val && val.length < 25) || 'Você deve digitar algo que não passe de 25 caracteres']"/>
            <q-input outlined type="textarea" label="Descrição" v-model="inputDesc" :rules="[val => (!!val) || 'Você deve digitar algo']"/>
            <q-btn square color="primary" icon="send" label="Enviar" @click="submitList(inputTitle, inputDesc)" />
        </div>
    </div>
</template>