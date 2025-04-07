<script setup>

const bankingImage = 'https://www.bizagi.com/files/live/sites/bizagi/files/Blogs/Banking%20Innovation-%20Why%20Banks%20Need%20to%20Modernize.jpg';

</script>

<template>

    <div class="banner-container">
        <a href="#" target="_blank">
            <img :src="bankingImage" width="300" height="250" alt="Your money is safe with us!" />
            <div class="cta-bg">
                <div class="text-section">
                    <slot name="textSection"></slot>
                </div>
                <div class="cta">
                    <slot name="ctaSection"></slot>
                </div>
            </div>
        </a>
    </div>

</template>

<style scoped>

.banner-container {
    border: 1px solid #000;
    width: 300px;
    height: 250px;
    overflow: hidden;
    margin-bottom:20px;
    position: relative;
}

.banner-container img{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
}

.text-section {
    color: #000;
    text-transform: uppercase;
}

.cta-bg {
    background-color: #DEDEDE;
    height: 45%;
    width: 100%;
    position: relative;
    z-index: 3;
    bottom: -110px;
    padding: 14px 0;
}

.text-section, .cta {
    text-align: center;
}

</style>