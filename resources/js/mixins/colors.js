export default {
    methods: {
        backgroundColor(forValue) {
            if (!this.field.hasOwnProperty('colorMap')) {
                return this.defaultBackgroundColor;
            }

            if (!this.field.colorMap.hasOwnProperty(forValue)) {
                return this.defaultBackgroundColor;
            }

            let colorMapElement = this.field.colorMap[forValue];

            if (colorMapElement.hasOwnProperty('background')) {
                return colorMapElement.background;
            }

            return colorMapElement;
        },

        textColor(forValue) {
            if (!this.field.hasOwnProperty('colorMap')) {
                return this.defaultTextColor;
            }

            if (!this.field.colorMap.hasOwnProperty(forValue)) {
                return this.defaultTextColor;
            }

            let colorMapElement = this.field.colorMap[this.field.value];

            if (colorMapElement.hasOwnProperty('color')) {
                return colorMapElement.color;
            }

            return this.offsetColor(colorMapElement);
        },

        defaultBackgroundColor() {
            if (!this.field.hasOwnProperty('defaultMap')) {
                return '#f1f1f1';
            }

            if (this.field.defaultMap.hasOwnProperty('background')) {
                return this.field.defaultMap.background;
            }

            return this.field.defaultMap;
        },

        defaultTextColor() {
            if (!this.field.hasOwnProperty('defaultMap')) {
                return this.offsetColor(this.defaultBackgroundColor);
            }

            if (this.field.defaultMap.hasOwnProperty('color')) {
                return this.field.defaultMap.color;
            }
        },

        offsetColor(color) {
            if (color.length < 5) {
                color += color.slice(1);
            }

            color = (color.replace('#', '0x')) > (0xffffff / 2) ? '#333' : '#fff';

            return color;
        },
    }
}