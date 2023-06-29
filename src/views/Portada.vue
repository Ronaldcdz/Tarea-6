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
                    <h3 class="ion-padding"><strong>Bienvenido a la tarea 6 con muchas funcionalidades</strong></h3>
                </ion-toolbar>
            </ion-header>



            <div class="ion-padding">
                <h6>Haga click en el menu o desplace hacia la derecha para ver las funcionalidades</h6>
                 <img src="https://assets-ferremix.tiendagoshop.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbm9UIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--68a2253db4ba0191611bd39c854264af32a6a573/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDam9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRGpFd01EQjRNVEF3TUFZN0JsUTZER2R5WVhacGRIbEpJZ3RqWlc1MFpYSUdPd1pVT2d0bGVIUmxiblJBQnpvSlkzSnZjRWtpRWpFd01EQjRNVEF3TUNzd0t6QUdPd1pVIiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--59a8807dba6878f106011d65e1e1cdc8e9f2342c/CHP-23R.jpg" alt="">
                <!-- <ion-card>
                    <ion-card-content>
                   
                        <ion-card-title class="animate-charcter">Hell's Paradise Trailer</ion-card-title>
                    </ion-card-content>
                </ion-card> -->
            </div>
        </ion-content>
    </ion-page>
</template>
  
<script>

import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/vue';

export default {

    components: {
        IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol,
        IonCard, IonCardContent, IonCardHeader, IonCardTitle
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
  