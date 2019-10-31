export default {
    methods: {
        backgroundColor: function (forValue) {
            if (!this.field.colorMap.hasOwnProperty(forValue)) {
                return '#333';
            }

            let colorMapElement = this.field.colorMap[forValue];

            if (colorMapElement.hasOwnProperty('background')) {
                return colorMapElement.background;
            }

            return colorMapElement;
        },

        textColor: function (forValue) {
            if (!this.field.colorMap.hasOwnProperty(forValue)) {
                return '#333';
            }

            let colorMapElement = this.field.colorMap[this.field.value];

            if (colorMapElement.hasOwnProperty('color')) {
                return value.color;
            }

            let color = colorMapElement;

            //if only first half of color is defined, repeat it
            if (color.length < 5) {
                color += color.slice(1);
            }

            color = (color.replace('#', '0x')) > (0xffffff / 2) ? '#333' : '#fff';

            return color;
        }
    }
}