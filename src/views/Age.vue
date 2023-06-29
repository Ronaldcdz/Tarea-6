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
                <ion-list>
                    <h1>Adivina tu edad escribiendo tu propio nombre !!!!</h1>
                    <ion-item>
                        <ion-input aria-label="text" v-model="name"></ion-input>
                    <ion-button @click="genderGenerator">Adivina!!</ion-button>

                    </ion-item>

                </ion-list>
            </div>

            <div class="ion-padding" v-show="showAge">
                <ion-card>
                    <img :src="people.picture" alt="Foto de perfil">
                    <ion-card-header>
                        <ion-card-title>{{people.name}}</ion-card-title>
                        <ion-card-subtitle>{{ people.age }} años</ion-card-subtitle>
                    </ion-card-header>
                </ion-card>

            </div>
        </ion-content>
    </ion-page>
</template>
  
<script>

import { IonButtons, IonContent, IonHeader, IonMenuButton, IonItem, IonList, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardContent, 
    IonCardHeader, IonCardTitle, IonInput, IonButton, IonCardSubtitle } from '@ionic/vue';

export default {

    components: {
        IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol,
        IonCard, IonCardSubtitle, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonItem, IonList, IonButton
    },

    data() {
        return {
            name: '',
            showAge: false,
            gender: null,
            people: {
                age: null,
                picture: null,
                name: null,
            }
        }
    },

    methods: {
        async genderGenerator(){

            if(this.name){
                const response = await fetch(`https://api.agify.io/?name=${this.name.toLowerCase()}`)
                const {age} = await response.json();
                this.people.age = age;

                if(age >= 14 && age <= 26){
                    this.people.picture = 'https://blogs.ucontinental.edu.pe/wp-content/uploads/2022/09/dia-de-la-juventud-por-que-estudiar-de-joven-una-carrera-universitaria-universidad-continental-2.jpg';
                    this.people.name = 'Usted es Joven';

                }
                else if (age >= 27 && age <= 59){
                    this.people.picture = 'https://img.freepik.com/fotos-premium/hombre-adulto-joven-guapo-sonriendo-ampliamente-mirando-feliz-positivo-seguro-exitoso-ambos-pulgares-arriba_1194-215353.jpg';
                    this.people.name = 'Usted es Adulto';
                }
                else if(age >= 60){
                    this.people.picture = 'https://ubikare.io/wp-content/uploads/sarcopenia-ancianos-que-es-768x512.jpg';
                    this.people.name = 'Usted es Anciano';
                }
                else{
                    this.people.picture = 'https://img.freepik.com/foto-gratis/nino-sonriente-aislado-rosa_23-2148984798.jpg';
                    this.people.name = 'Usted es un niño';
                }

                this.showAge = true;

            }

        }
    }
}
</script>
  
<style lang="scss">

.maleBackground{
    background-color: blue;
    width: 25vh;
    height: 25vh;
    color: white;
}

.femaleBackground{
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
  