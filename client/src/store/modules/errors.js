export default {
    state: {
        costCalculationFormsErrors: [],
        // isErrorsVisible: false
    },

    getters: {
        costCalculationFormsErrors(state) {
            return state.costCalculationFormsErrors;
        },

        // isErrorsVisible(state) {
        //     return state.isErrorsVisible;
        // }
    },

    actions: {
        getErrorsFromCostCalculationForm(state, errors) {
            state.commit('getErrorsFromCostCalculationForm', errors);
        },

        setErrorsFromCostCalculationForm(state, errors) {
            state.commit('setErrorsFromCostCalculationForm', errors);
        },

        // showErrorsPanel(state) {
        //     // if (state.costCalculationFormsErrors.length != 0) {
        //     //     console.log(state.costCalculationFormsErrors);
        //         state.commit('showErrorsPanel');
        //     // }
        // }
    }, 

    mutations: {
        getErrorsFromCostCalculationForm(state) {
            return state.costCalculationFormsErrors;
        },

        setErrorsFromCostCalculationForm(state, errors) {
            state.costCalculationFormsErrors = errors;
            setTimeout(() => {
                state.costCalculationFormsErrors = [];
            }, 2000);
        },

        // showErrorsPanel(state) {
        //     // state.isErrorsVisible = false;
        //     console.log(state.costCalculationFormsErrors);
        // }
    }
};