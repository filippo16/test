<template>
    <div>
        <p>
            <span class="circle" :style="{ backgroundColor: bgColor }">{{ listOP.r }}</span> - {{ listOP.nome }}
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { Player } from '../types';

export default defineComponent({
    props: {
        listOP: {
            type: Object as () => Player,
            required: true,
            default: () => ({})
        }
    },
    setup(props) {
        const bgColor = computed(() => {
            switch (props.listOP.r) {
                case 'A':
                    return 'red';
                case 'C':
                    return 'blue';
                case 'D':
                    return 'green';
                case 'P':
                    return 'orange';
                default:
                    return 'transparent';
            }
        });

        return {
            bgColor
        };
    }
});
</script>

<style scoped>
    .circle {
        display: inline-block;
        width: 22px;
        height: 22px;
        border-radius: 39%;
        color: whitesmoke;
        text-align: center;
        line-height: 20px;
    }
</style>