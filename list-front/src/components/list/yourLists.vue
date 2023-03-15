<script>
export default {
    setup() {
        return {
            thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },

      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '9px',
        opacity: 0.2
      },
        }
    }
}
</script>
<script setup>
import { useQuery } from 'villus'
const fetchQuery = `
query fetchQuery {
    lists {
        id
        title
        content
    }
}
`

const { data } = useQuery({
    query: fetchQuery
})

</script>
<template>
    <div>

    <q-scroll-area
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
      style="height: 440px; max-width: 100%; top: 300px; "
    >
      <div v-for="n in 100" :key="n" class="q-pa-xs">
    {{ data }}
      </div>
    </q-scroll-area>

</div>
</template>