export default {
    openFilters (context, value) {
        context.commit("setOpenFilters", value);
    },
    changeCheckboxManufacturer (context, value) {
        context.commit("setChangeCheckboxManufacturer", value);
    },
};
