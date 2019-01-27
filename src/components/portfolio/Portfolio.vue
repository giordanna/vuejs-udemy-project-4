<template>
    <div>
        <app-stock
            v-for="stock in stocks"
            :stock="stock"
            :key="stock.id" />
    </div>
</template>

<script>
import Stock from './Stock'
import { mapGetters } from 'vuex'

export default {
    components: {
        appStock: Stock
    },
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    }
}
</script>