<template>
    <ion-page class="body-background">
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>{{ $route.params.id }}</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true" class="body-background">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <h1 class="ion-padding">Clima del dia de hoy <br/>({{ new Date().toLocaleDateString().slice(0, 9) }})</h1>
                </ion-toolbar>
            </ion-header>



            <div class="ion-padding" v-if="showWeather">
                <ion-card v-for="(clima, index) in weather" :key="index">
                    <ion-card-header>
                        <ion-card-title>Temperatura promedio: {{clima.temp_C}}&#8451;</ion-card-title>
                        <ion-card-subtitle>Se siente como: {{ clima.FeelsLikeC }}&#8451;</ion-card-subtitle>
                    </ion-card-header>
                        <p class="ion-padding">Humedad del {{ clima.humidity }}%</p>
                        <p class="ion-padding">Velocidad de los vientos {{ clima.windspeedKmph }}km/h</p>
                    <ion-card-content>
                    </ion-card-content>
                </ion-card>
                </div>
        </ion-content>
    </ion-page>
</template>
  
<script>

import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/vue';

export default {

    components: {
        IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol,
        IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle
    },

    data() {
        return {
            weather: [],
            showWeather: false,
        }
    },

    mounted(){
        this.getWeather();
    },

    methods: {
        async getWeather() {
            const response = await fetch('https://wttr.in/Dominican+Republic?format=j1'); 
            const data = await response.json(); 
            console.log(data);
            this.weather = [];
            this.weather.push(...data.current_condition);
            this.showWeather = true;
            console.log(this.weather);
        },
    },

    beforeUnmount(){
        this.showWeather = false;

    }


}
</script>
  
<style lang="scss">
.container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.animate-charcter {
    text-transform: uppercase;
    background-image: linear-gradient(-225deg,
            #231557 0%,
            #44107a 29%,
            #ff1361 67%,
            #fff800 100%);
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
    font-size: 20px;
}

@keyframes textclip {
    to {
        background-position: 200% center;
    }
}

.body-background {
    --ion-background-color {
        background: rgb(131, 58, 180);
        background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);
    }
}

#container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

#container strong {
    font-size: 20px;
    line-height: 26px;
}

#container p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
}

#container a {
    text-decoration: none;
}

.swiper-slide {
    padding: 12px;
    text-align: center;
    font-size: 28px;
    background: #fff;
}

.swiper-container {
    width: 100%;
    height: 80%;
}
</style>
  