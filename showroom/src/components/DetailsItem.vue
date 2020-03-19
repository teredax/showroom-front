<template>
<div>
    <v-card class="detailItem">
        <v-card-title class="headline" style="justify-content:center;color:white;font-size:2em;font-weight:bolder;">{{details_item.title}}</v-card-title>
        <v-card-text>
            <v-container class="pa-0" grid-list-md text-xs-center>
                <v-layout row wrap>
                    <v-flex>
                        <v-container class="pa-0" grid-list-md text-xs-left>
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-layout column>
                                        <v-flex xs12 sm12 class="pa-1">
                                            <v-img :src="details_item.img_feature" style="border-radius: 10px;"></v-img>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>

                                <v-flex xs12 sm3 style="margin-left:50px;">
                                    <v-layout column>
                                        <ul class="nav nav-tabs">
                                            <li>
                                                <a class="nav-link active">{{details_item.title_descr_1}}</a>
                                            </li>
                                        </ul>
                                        <div style="color:white;padding-top: 20px !important;">
                                            {{details_item.descr_1}}
                                        </div>
                                    </v-layout>
                                </v-flex>

                                <v-flex xs12 sm5 style="margin-left:35px;margin-top:30px;">
                                    <v-layout column>

                                        <v-container class="pa-0" grid-list-md text-xs-left>
                                            <v-layout row wrap>

                                                <v-flex xs12 sm6>
                                                    <v-img src="../assets/aws-certif.png" :max-width="85" :max-height="40" contain class="grey lighten-2"></v-img>
                                                </v-flex>
                                                <v-flex xs12 sm6>
                                                    <v-img src="../assets/iso-certif.png" :max-width="120" :max-height="40" contain class="grey lighten-2"></v-img>
                                                </v-flex>
                                                <v-flex xs12 sm6>
                                                    <v-img src="../assets/microsoft-certif.png" :max-width="120" :max-height="30" contain class="grey lighten-2"></v-img>
                                                </v-flex>
                                                <v-flex xs12 sm6>
                                                    <v-img src="../assets/istob-certf.png" :max-width="70" :max-height="40" contain class="grey lighten-2"></v-img>
                                                </v-flex>
                                                <v-flex xs12 sm12>

                                                    <v-container class="pa-0" grid-list-md text-xs-left>
                                                        <v-layout row wrap>

                                                            <v-flex xs12 sm4>
                                                                <v-img src="../assets/user-def.png" style="border-radius: 50%;" class="grey lighten-2"></v-img>
                                                            </v-flex>
                                                            <v-flex xs12 sm8>
                                                                <v-flex xs12 style="color:white;">
                                                                    <v-icon medium color="white">mdi-account</v-icon>
                                                                    {{contact_name}}
                                                                </v-flex>
                                                                <v-flex xs12 style="color:white;">
                                                                    <v-icon medium color="white">mdi-phone</v-icon>
                                                                    {{contact_phone}}
                                                                </v-flex>

                                                                <v-flex xs12 style="color:white;">
                                                                    <v-icon medium color="white">mdi-email</v-icon>
                                                                    {{contact_email}}
                                                                </v-flex>

                                                                <v-flex xs12>
                                                                    <div class="tags">
                                                                        <ul v-for="(tag,j) in details_item.tags" :key="j"> <a href="#" class="badge badge-pill badge-primary"> {{tag}} </a></ul>
                                                                    </div>
                                                                </v-flex>
                                                            </v-flex>
                                                        </v-layout>
                                                    </v-container>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card-text>
    </v-card>

</div>
</template>

<script>
import {
    mapState
} from 'vuex';
export default {
    name: 'DetailsItem',
    computed: mapState(['details_item', 'contact_name', 'contact_phone', 'contact_email']),
}
</script>

<style>
.detailItem {
    background: radial-gradient(rgb(20, 72, 114), rgba(0, 0, 0, .9));
}

.phone,
.user,
.mail {
    height: 20px;
    filter: brightness(0) invert(1);

}

.v-icon.notranslate.mdi.mdi-account.theme--light.white--text,
.v-icon.notranslate.mdi.mdi-phone.theme--light.white--text,
.v-icon.notranslate.mdi.mdi-email.theme--light.white--text {
    color: white !important;
}
</style>
