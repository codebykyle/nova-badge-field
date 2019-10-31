export default {
    computed: {
        isValueEmpty() {
            return this.value == null;
        },

        formattedValue() {
            if (this.isValueEmpty) {
                return 'None'
            }

            return this.value
        }
    }
}