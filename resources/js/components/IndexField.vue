<template>
    <span class="rounded-full uppercase px-2 py-1 text-xs font-bold"
          :style="{
            backgroundColor: backgroundColor(this.formattedValue),
            color: textColor(this.formattedValue)
          }"
    >{{ __(this.formattedValue) }}</span>
</template>

<script>
    import colors from '../mixins/colors';
    import value from '../mixins/value';

    export default {
        props: ['resourceName', 'field'],
        mixins: [colors, value]
    }
</script>
