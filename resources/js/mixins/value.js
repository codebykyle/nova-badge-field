export default {
    computed: {
        isValueEmpty() {
            return this.field.value == null;
        },

        formattedValue() {
            if (this.isValueEmpty) {
                return 'None'
            }

            return this.field.value
        }
    }
}