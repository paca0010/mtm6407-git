<script setup>

  import IdCard from './components/IdCard.vue'
  import Contacts from './components/Contacts.vue';
  import Banner from './components/Banner.vue';
  import InteractiveBanner from './components/InteractiveBanner.vue';

  const contactsData = [
    {
        name: 'Leighton Rodney',
        address: '123 Something St.',
        email: 'leighton@gmail.com',
        phone: '613-555-5555',
    },
    {
        name: 'John Doe',
        address: '999 Anywhere Ave.',
        email: 'johndoe@yahoo.com',
        phone: '613-123-4567',
    },
    {
        name: 'Jane Doe',
        address: '333 Someplace Blvd.',
        email: 'janedoe@hotmail.com',
        phone: '343-111-3322',
    },
    {
        name: 'Kim Fields',
        address: '888 Straight Ave.',
        email: 'kimmy@hotmail.com',
        phone: '613-999-4433',
    },
];

</script>

<template>

  <InteractiveBanner>
    <template #textSection>
      <h3>Your money is safe with us!</h3>
    </template>
    <template #ctaSection>
      <button class="cta-btn">Learn more</button>
    </template>
  </InteractiveBanner>

  <Banner></Banner>

  <Banner>
    <p><strong>Sale has ended!</strong></p>
    <p class="small">We've run out of items to sell.</p>
  </Banner>

  <Contacts :contacts="contactsData" />

  <IdCard 
  companyName="Algonquin College"
  idImg="https://images.squarespace-cdn.com/content/v1/592738c58419c2fe84fbdb81/1728228789595-I2VNIM9WAJXDVB21S0K3/DBS_Anthony_web_background_7171.jpg"
  name="Marco Polo"
  department="Media & Design"
  expiryDay="12"
  expiryMonth="03"
  expiryYear="2030" 
  />

  <IdCard 
  companyName="Dell Inc."
  idImg="https://images.squarespace-cdn.com/content/v1/592738c58419c2fe84fbdb81/1737375691735-MR3LLUNH0MSDOCKBAPR7/DBS_Olivia-0899.jpg"
  name="Jane Doe"
  department="Support"
  expiryDay="16"
  expiryMonth="12"
  expiryYear="2025" 
  />

  <IdCard 
  companyName="Microsoft Inc."
  idImg="https://images.squarespace-cdn.com/content/v1/592738c58419c2fe84fbdb81/1715108460690-H8094W7F61VQ0SDAFJMH/OttawaHeadshots_Prishnee_web_8353%281%29.jpg" 
  name="Nimitha Kaur"
  department="Sales"
  expiryDay="04"
  expiryMonth="10"
  expiryYear="2027" 
  />

</template>

<style scoped>

  .small {
    font-size: 12px;
  }

  .cta-btn {
    border: none;
    border-radius: 6px;
    background-color: #FFF;
    color: #BF5000;
    font-size: 18px;
    padding: 7px 14px;
  }

</style>
