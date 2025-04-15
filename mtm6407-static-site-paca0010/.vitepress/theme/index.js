// https://vitepress.dev/guide/custom-theme
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import Layout from './Layout.vue';
import './style.css';

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== 'undefined') {
      // Load Bootstrap JS only on the client side
      import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }
};

