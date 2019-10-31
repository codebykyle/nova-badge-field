<template>
    <panel-item :field="field">
        <template slot="value">
            <span class="rounded-full uppercase px-2 py-1 text-xs font-bold"
                  :style="{
                    backgroundColor: backgroundColor(this.formattedValue),
                    color: textColor(this.formattedValue)
                  }"
            >{{ __(field.formattedValue) }}</span>
        </template>
    </panel-item>
</template>

<script>
    import colors from '../mixins/colors';
    import value from '../mixins/value';

    export default {
        props: ['resource', 'resourceName', 'resourceId', 'field'],
        mixins: [colors, value]
    }
</script>
