<template>
<div class="main-wrapper-login">
    <v-container grid-list-sm>
        <v-layout row wrap>

            <v-flex xs12 sm12 style="position: center;text-align: left;">
                <v-layout column>

                    <v-container class="pa-0" grid-list-md text-xs-center>
                        <v-layout row wrap>

                            <v-flex xs12 sm12>

                                <v-layout column>

                                    <p class="title-login">
                                        <v-img height="150px" contain style=";" :src="smallLogo"></v-img>

                                    </p>
                                </v-layout>
                            </v-flex>

                                <v-flex xs12 sm12 style="margin-top: 10vh;">
                                    <v-layout column style="margin-left:3%">
                                        <v-text-field color="#4A6BAE" dense :background-color="'white'" v-on:keyup.enter="submitAuthentication()" v-model="credentials.email" required>
                                            <template v-slot:label>
                                                <p v-html="'Correo electrónico'" />
                                            </template>
                                        </v-text-field>

                                    </v-layout>
                                </v-flex>

                                <v-flex xs12 sm12>
                                    <v-layout column style="margin-left:3%">
                                        <br>
                                        <br>
                                        <p v-text="texts.desc_2" class="field-title" />
                                        <v-text-field :background-color="'white'" color="#4A6BAE" :append-icon="loginPasswordVisible ? 'mdi-eye' : 'mdi-eye-off'" @click:append="() => (loginPasswordVisible = !loginPasswordVisible)" v-on:keyup.enter="submitAuthentication()" v-model="credentials.password" :type="loginPasswordVisible ? 'text' : 'password'">
                                            <template v-slot:label>
                                                <p v-html="'Contraseña'" />
                                            </template>
                                        </v-text-field>
                                    </v-layout>
                                </v-flex>

                                <v-flex xs12 sm12>
                                    <br>
                                    <v-btn width="100%" color="#4A6BAE" v-on="on" @click.native="submitAuthentication()" dark>Iniciar Sesión</v-btn>
                                </v-flex>


                        </v-layout>
                    </v-container>
                </v-layout>
            </v-flex>

            <v-flex xs12 sm8 style="margin-left: 0vh;">
                <v-layout column>

                    <figure>
                        <div>
                            <img class="building-image" src="/static/background-image.png">

                        </div>
                    </figure>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>

    <br />
    <br />

</div>
</template>

<script>
import Authentication from '@/components/Authentication'
import router from '@/router'

export default {
    beforeMount() {
        if (this.loggedIn) {
            this.$router.push('/requests')
        }
    },
    data: () => ({
        loginPasswordVisible: false,
        isBooted: false,
        smallLogo: "https://pbs.twimg.com/profile_images/991710919456509952/CFSBX8vW_400x400.jpg",
        bigLogo: "https://pbs.twimg.com/profile_images/991710919456509952/CFSBX8vW_400x400.jpg",
        credentials: {
            email: '',
            password: ''
        },
        loadLogin: false

    }),
    methods: {
        submitAuthentication() {
            this.loadLogin = true
            Authentication.authenticate(this, this.credentials)
        }
    },
    mounted() {
        document.title = "BP Inicio de sesión";
        setTimeout(() => {
            this.isBooted = true
        }, 200)
    },
    computed: {
        loggedIn() {
            return this.$cookies.get('H1BPidLo') !== null
        },
        isHome() {
            return this.$route.path === '/'
        },
        namespace() {
            return this.$route.name
        },
        texts() {
            return this.$t("userIntreactions.texts");
        },
        titles() {
            return this.$t("userIntreactions.login");
        },
        titleLogo: function () {
            if (this.mini) {
                return this.smallLogo
            } else {
                return this.bigLogo
            }
        }
    }
};
</script>

<style lang="scss" scoped>

</style>

<style>

</style>
