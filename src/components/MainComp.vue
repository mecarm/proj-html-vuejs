<template>
  <main>
    <JumboTron/>
    <FirstSection/>
  </main>
</template>

<script>
import JumboTron from './JumboTron.vue'
import FirstSection from './FirstSection.vue'

export default {
    name: 'MainComp',
    components: {
        JumboTron,
        FirstSection
    }
}
</script>

<style lang="scss" scoped>

</style>