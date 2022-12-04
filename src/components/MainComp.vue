<template>
  <main>
    <JumboTron/>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
  </main>
</template>

<script>
import JumboTron from './JumboTron.vue'
import FirstSection from './FirstSection.vue'
import SecondSection from './SecondSection.vue'
import ThirdSection from './ThirdSection.vue'

export default {
    name: 'MainComp',
    components: {
        JumboTron,
        FirstSection,
        SecondSection,
        ThirdSection
    }
}
</script>

<style lang="scss" scoped>

</style>