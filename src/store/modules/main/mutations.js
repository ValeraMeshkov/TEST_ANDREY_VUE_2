export default {
    setOpenFilters (state, data) {
        state.filters[data].isOpen = !state.filters[data].isOpen;
    },
    setChangeCheckboxManufacturer (state, data) {
        state.filters.manufacturer.checkboxes[data] = !state.filters.manufacturer.checkboxes[data];
    },
};
