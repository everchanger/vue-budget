<template>
	<div class="">
		<div v-for="data in formdata" :key="data.id" class="mb-2">
			<savings-field :savingsId="data.id" />
		</div>
		<button class="btn btn-blue">+</button>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data: function () {
        return {
            editing: false,
        };
    },
    props: {
        personId: {
            type: Number,
            required: true,
        },
    },
    computed: {
        ...mapGetters([
            'personSavings',
        ]),
        formdata: function () {
            return this.personSavings(this.personId);
        },
    },
};
</script>
