<template>
  <main>
    <JumboTron/>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    <FourthSection/>
    <SubscriptionSection/>
    <ReviewSection/>
    <NewsBlogSection/>
    <CompanySection/>
  </main>
</template>

<script>
import JumboTron from './JumboTron.vue'
import FirstSection from './FirstSection.vue'
import SecondSection from './SecondSection.vue'
import ThirdSection from './ThirdSection.vue'
import FourthSection from './FourthSection.vue'
import SubscriptionSection from './SubscriptionSection.vue'
import ReviewSection from './ReviewSection.vue'
import NewsBlogSection from './NewsBlogSection.vue'
import CompanySection from './CompanySection.vue'

export default {
    name: 'MainComp',
    components: {
        JumboTron,
        FirstSection,
        SecondSection,
        ThirdSection,
        FourthSection,
        SubscriptionSection,
        ReviewSection,
        NewsBlogSection,
        CompanySection
    },
   
}
</script>

<style lang="scss" scoped>

</style>