<script>
import headerBar from './components/headerBar.vue'
import showList from './components/showList.vue'

export default {
    name: "App",
    components: {
        headerBar,
        showList
    },
}
</script>

<template>
    <div>
        <q-layout>
            <headerBar />
            <showList />
        </q-layout>
    </div>
</template>