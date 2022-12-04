<template>
  <main>
    <JumboTron/>
    <FirstSection/>
    <SecondSection/>
  </main>
</template>

<script>
import JumboTron from './JumboTron.vue'
import FirstSection from './FirstSection.vue'
import SecondSection from './SecondSection.vue'

export default {
    name: 'MainComp',
    components: {
        JumboTron,
        FirstSection,
        SecondSection
    }
}
</script>

<style lang="scss" scoped>

</style>