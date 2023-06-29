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
                </ion-toolbar>
            </ion-header>



            <div class="ion-padding">

                <ion-card>
                    <ion-card-header>
                        <ion-card-title></ion-card-title>
                        <ion-card-subtitle>{{ title }}</ion-card-subtitle>

                    </ion-card-header>
                    <ion-card-content>
                        <ion-input aria-label="text" v-model="country" label="Pais:"></ion-input>
                        <ion-button expand="block" @click="findUniversities">Buscar universidades</ion-button>

                    </ion-card-content>
                </ion-card>

                <template v-if="showUniversities">
                    
                    <ion-card v-for="(uni, index) in universities" :key="index">
                     <ion-card-header>
                         <ion-card-title>{{ uni.name }}</ion-card-title>
                         <ion-card-subtitle>{{ uni.country }} ({{ uni.alpha_two_code }})</ion-card-subtitle>
                     </ion-card-header>
                     <ion-card-content>
                        <template v-for="(link, index) in uni.web_pages" :key="index">
                            <a :href="link" target="_blank">{{ link }}</a>
                        </template>
                     </ion-card-content>
                    </ion-card>
                </template>
            </div>

            <ion-toast :is-open="showToast" @idDismiss="showToast = false" message="Debe escribir el nombre del pais en ingles" :duration="5000"></ion-toast>
        </ion-content>
    </ion-page>
</template>
  
<script>

import {
    IonButtons, IonContent, IonHeader, IonMenuButton, IonItem, IonList, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardContent,
    IonCardHeader, IonCardTitle, IonInput, IonButton, IonCardSubtitle, IonToast
} from '@ionic/vue';

export default {

    components: {
        IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol,
        IonCard, IonCardSubtitle, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonItem, IonList, IonButton,
        IonToast,
    },

    data() {
        return {
            title: 'Escribe el nombre de un pais en ingles y obten todas las universdades del mismo',
            country: null,
            showToast: false,
            universities: [],
            showUniversities: false,
        }
    },


    methods: {
        async findUniversities(){
            if(this.country){
                this.showUniversities = false;
                const response = await fetch(`http://universities.hipolabs.com/search?country=${this.country}`);
                const data = await response.json();
                console.log(data);

                if(data.length != 0){
                    this.universities = [];
                    this.universities.push(...data);
                    this.showUniversities = true;
                }
                else{
                    this.showToast = true;
                }
                
            }
        }
    }
}
</script>
  
<style lang="scss">
.maleBackground {
    background-color: blue;
    width: 25vh;
    height: 25vh;
    color: white;
}

.femaleBackground {
    background-color: pink;
    width: 25vh;
    height: 25vh;
    color: white;

}

.container {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
    /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
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
  