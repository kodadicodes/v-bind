const app = Vue.createApp({
    template: `
    <div :style="style">DENEME</div>
   
    `,
    data() {
        return {
            style:"color:green"
        }
    },
    methods: {
      
    }
});

app.mount("#app");

// "v-bind" kullanarak, bir Vue.js uygulamasında bir HTML öğesinin özelliklerini veya değerlerini dinamik olarak değiştirebilirsiniz.
// Kısaltması ":" işaretidir.