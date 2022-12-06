<template>
  <section>
    <div class="container">
        <div class="card">
            <img src="../assets/images/client-1-2x.png" alt="azienda">
        </div>
        <div class="card">
            <img src="../assets/images/client-3-2x.png" alt="azienda">
        </div>
        <div class="card">
            <img src="../assets/images/client-4-2x.png" alt="azienda">
        </div>
        <div class="card">
            <img src="../assets/images/client-5-2x.png" alt="azienda">
        </div>
        <div class="card">
            <img src="../assets/images/client-7-2x.png" alt="azienda">
        </div>
        <div class="card">
            <img src="../assets/images/client-9-2x.png" alt="azienda">
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'CompanySection'
}
</script>

<style lang="scss" scoped>
@import '../style/style.scss';
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&family=Varela+Round&display=swap');

section{
    background: $bg-soft-grey;
}
.container{
    padding: $vertical-center-pd;
    @include center;
    @include flex($justify: Between_Center)
}
</style>