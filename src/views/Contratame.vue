<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>{{ $route.params.id }}</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">{{ $route.params.id }}</ion-title>
                </ion-toolbar>
            </ion-header>

            <div class="ion-padding">
                <ion-card>
                    <img src="../../assets/profile_picture.jpeg" alt="Foto de perfil">
                    <ion-card-header>
                        <ion-card-title>Ronald Alfredo Cadiz Moris</ion-card-title>
                        <ion-card-subtitle>Programador Fullstack</ion-card-subtitle>
                    </ion-card-header>
                    <ion-card-content>
                        <p><strong>Correo:</strong> rnldcadiz@gmail.com</p>
                        <p><strong>Numero:</strong> 829-708-0566</p>
                    </ion-card-content>
                </ion-card>
            </div>


        </ion-content>
    </ion-page>
</template>
  
<script>

import {
    IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonGrid, IonRow,
    IonCol, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle,
    IonChip
} from '@ionic/vue';

export default {

    components: {
        IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol,
        IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonChip, IonCardHeader
    },

    data() {
        return {

        }
    },

    methods: {

    }
}
</script>
  
<style lang="scss">
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
  