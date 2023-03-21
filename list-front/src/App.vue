<script>
import HeaderBar from './components/HeaderBar.vue'
import ShowList from './components/ShowList.vue'

export default {
    name: "App",
    components: {
        HeaderBar,
        ShowList
    },
}
</script>

<template>
    <div>
        <q-layout>
            <HeaderBar />
            <ShowList />
        </q-layout>
    </div>
</template>