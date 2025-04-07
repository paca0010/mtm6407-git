<script setup>

    const bannerImg = 'https://images.prismic.io/melodious-taiyaki-9pkr2z/ZrFJDkaF0TcGIsrC_20240730_Assortment_4_Isolated.png?auto=format,compress';

</script>

<template>

    <div class="banner-container">
        <img :src="bannerImg" width="300" alt="" />
        <div class="cta">
            <slot>
                <h2 class="light">25% off select items!</h2>
                <p class="light">Sale ends Mar. 4th.</p>
            </slot>
        </div>
    </div>

</template>

<style scoped>

    .banner-container {
        border: 1px solid #000;
        width: 300px;
        height: 250px;
        overflow: hidden;
        margin-bottom:20px;
    }

    .banner-container img{
        display: block;
        object-fit: cover;
    }

    .cta {
        width: 100%;
        text-align: center;
        background-color: #F68F03;
        height: 40%;
        position: relative;
        bottom: 75px;
        left: 0;
        padding: 10px;
    }

    .light {
        color: #FFF;
    }

    h2, p {
        margin: 5px;
    }


</style>