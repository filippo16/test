<template>
    <div class="formation-page">
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <!-- --------------------------------------------------------------------------------- -->
                    <section>
                        <h2 class="text-center"><strong>Formazione Consigliata</strong></h2>
                        <div class="text-start ps-4">
                            <p v-if="!list">Formazione non disponibile!</p>
                            <listOP v-if="list" v-for="player in list" :listOP="player" />
                        </div>
                        <!-- lista con componente -->
                    </section>
                </div>
                <!-- --------------------------------------------------------------------------------- -->
                <div class="col">
                    <section >
                        <h2 class="text-center"><strong>La mia Rosa</strong></h2>
                        <div class="text-start ps-4">
                            <p v-if="!list">Rosa non disponibile!</p>
                            <listOP v-if="list" v-for="player in list" :listOP="player" />
                             <!-- dovrò cambiare nome a list  -->
                        </div>
                        <!-- Seconda sezione -->
                    </section>
                </div>
                <!-- --------------------------------------------------------------------------------- -->
                <div class="col">
                    <section>
                        <p>Ultime 5 giornate Serie A</p>
                        <!-- Terza sezione -->
                    </section>
                </div>
            </div>
        </div>
        <footer class="footer">
            <div class="container">
            <p>&copy; 2024 Fantacalcio</p>
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Player } from '../types';
import listOP from '../components/listOP.vue';
import axios from 'axios';

export default defineComponent({
    components: {
        listOP
    },
    data() {
        return {
            list: [] as Player[]
        };
    },
    methods: {
        async getAdviceFormation() {
            try {
                const response = await axios.get('http://localhost:3000/formation');
                this.list = response.data;
            } catch (error) {
                console.error(error);
            }
        }
    },
    mounted() {
        this.getAdviceFormation();
    }
})
</script>

<style scoped>
    h2 {
        font-family: 'Courier New', Courier, monospace;
    }

    section {
        border: 1px solid black;
        border-radius: 10px;
        background-color: #F4EAD5;
    }

    .footer {
        border-top: 1px solid #dee2e6;
        padding: 20px 0;
        text-align: center;
        margin-top: 5%;
        /* position: fixed;
        bottom: 0;
        width: 100%; */
    }
    .formation-page {
        background-color: #F5F5F5;
        padding-top: 2%;
    }
</style>