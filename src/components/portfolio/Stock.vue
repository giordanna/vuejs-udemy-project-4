<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price | currency }}) | Quantity: {{ stock.quantity }}</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input
                        type="number"
                        min="0"
                        :max="stock.quantity"
                        step="1"
                        class="form-control"
                        :class="{danger: insuffcientQuantity}"
                        v-model.number="quantity"
                        placeholder="Quantity">
                </div>
                <div class="pull-right">
                    <button
                        @click.prevent="sellStock"
                        :disabled="disableButton"
                        class="btn btn-info">
                        {{ insuffcientQuantity ? 'Not enough' : 'Sell' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        insuffcientQuantity() {
            return this.quantity > this.stock.quantity
        },
        disableButton() {
            return this.quantity <= 0 ||
                !Number.isInteger(this.quantity) ||
                this.insuffcientQuantity
        }
    },
    methods: {
        ...mapActions({
            placeSellOrder: 'sellStock'
        }),
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }

            this.placeSellOrder(order)
            this.quantity = 0
        }
    }
}
</script>

<style scoped>
.danger {
    border: 1px solid red;
}
</style>
