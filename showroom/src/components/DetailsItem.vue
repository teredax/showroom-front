<template>
<div>


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

</style>
