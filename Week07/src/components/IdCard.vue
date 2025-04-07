<script setup>

    defineProps({
        companyName: String,
        idImg: String,
        name: String,
        department: String,
        expiryDay: Number,
        expiryMonth: Number,
        expiryYear: Number,
    })


</script>

<template>

    <div class="id-card">
        <div>
            <h3>{{ companyName }}</h3>
            <img :src="idImg" alt="Leighton Rodney" width="150" />
        </div>
        <div class="info-section">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Algonquin_College_logo.png" width="90" />        
            <h4>{{ name }}</h4>
            <p>
                <strong>{{ department }}</strong>
                <br/>
                <strong>Expires: {{ expiryDay }}/{{ expiryMonth }}/{{ expiryYear }}</strong>
            </p>
        </div>
    </div>

</template>

<style scoped>

    .id-card {
        border: 1px solid #DEDEDE;
        border-radius: 16px;
        display: flex;
        gap: 30px;
        width: 400px;
        height: 250px;
        padding: 8px 16px;
        margin-bottom: 20px;
    }

    .info-section {
        margin-top: 30px;
    }

</style>