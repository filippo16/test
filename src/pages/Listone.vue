<template>
    <div class="list-page">
        <div class="container-fluid">
            <div class="row">
                <div class="col-8">
                    <h2 class="text-center"><strong>Listone</strong></h2>
                    <section class="listone">
                        <listOP class="item" v-for="player in list" :listOP="player" @player-selected="handlePlayerSelected" />
                    </section>
                </div>
                <div class="col-4">
                    <h2 class="text-center"><strong>Info Player</strong></h2>
                    <section class="info">
                        <div>
                            <p v-if="selectedPlayer"><listOP :listOP="selectedPlayer" /></p>
                            <p v-if="selectedPlayer">Media voto -> {{ selectedPlayer.mv }}</p>
                            <p v-if="selectedPlayer">Fanta media -> {{ selectedPlayer.fm }}</p>
                            <p v-if="selectedPlayer && selectedPlayer.r != 'P'"> Gol fatti -> {{ selectedPlayer.gf }}</p>
                            <p v-if="selectedPlayer && selectedPlayer.r == 'P'">Gol subiti -> {{ selectedPlayer.gs }}</p>
                            <p v-if="!selectedPlayer">Nessun giocatore selezionto</p>
                        </div>
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
            list: [] as Player[],
            selectedPlayer: null as Player | null
        };
    },
    methods: {
        async getAdviceFormation() {
            try {
                const response = await axios.get('http://localhost:3000/list');
                this.list = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        handlePlayerSelected(player: Player) {
            this.selectedPlayer = player;
        },
    },
    mounted() {
        this.getAdviceFormation();
    }
})
</script>

<style scoped>

    .col-4 {
        margin-top: 12%;
        position: fixed;
        right: 0;
        top: 0;
    }

    h2 {
        font-family: 'Courier New', Courier, monospace;
    }

    .info >div > p:first-child {
        padding-top: 4%;
    }

    .info > div > p {
        padding-left: 4%;
    }

    .info {
        font-size: 18px;
        border: 1px solid black;
        border-radius: 10px;
        background-color: #F4EAD5;
    }

    .listone {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-auto-rows: minmax(10px, 50px);
        
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

    .item {
        border: 1px solid black;
        border-radius: 10px;
        padding: 8px;
        background-color: #F4EAD5;
        margin-right: 2%;
        margin-bottom: 2%;
    }

    .list-page {
        background-color: #F5F5F5;
        padding-top: 2%;
    }
</style>