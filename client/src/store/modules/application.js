import axios from 'axios';

export default {
    state: {
        isShowApplication: false,
        application: '',
        applications: []
    },

    getters: {
        isShowApplication(state) {
            return state.isShowApplication;
        },

        application(state) {
            return state.application;
        },

        applications(state) {
            return state.applications;
        }
    },

    actions: {
        getShowApplication(state) {
            state.commit('getShowApplication');
        },

        showOrHideApplication(state) {
            state.commit('showOrHideApplication');
        },

        getOneApplication: async (state, id) => {
            await axios.get(`http://127.0.0.1:5111/api/cost-calculation-form/${id}`)
            .then(response => {
                state.commit('setApplication', response.data);
            });
        },

        getApplicationData(state) {
            state.commit('getApplicationData');
        },

        getApplications: async (state) => {
            await axios.get('http://127.0.0.1:5111/api/cost-calculation-form/')
            .then(response => {
                state.commit('GET_APPLICATIONS', response.data);
            });
        },

        async postApplication(state, data) {
            await axios.post('http://127.0.0.1:5111/api/cost-calculation-form/create', data)
            .then(response => {
                state.commit('POST_APPLICATION', response.data);
            });
        },

        async deleteApplication(state, id) {
            await axios.delete(`http://127.0.0.1:5111/api/cost-calculation-form/${id}`)
            .then(response => {
                state.commit('DELETE_APPLICATION', response.data);
            });
        },
    },

    mutations: {
        setApplication(state, data) {
            state.application = data;
        },

        getApplicationData(state) {
            return state.application;
        },

        GET_ALL_APLICATIONS(state) {
            return state.applications;
        },

        GET_APPLICATIONS(state, data) {
            state.applications = data;
        },

        POST_APPLICATION(state, data) {
            state.applications.push(data);
        },

        DELETE_APPLICATION(state, data) {
            state.applications.splice(state.applications.indexOf(data), 1);
        },

        /// visible one aplication   ///

        getShowApplication(state) {
            return state.isShowApplication;
        },

        showOrHideApplication(state) {
            if (state.isShowApplication === false) {
                state.isShowApplication = true;
            }

            else if (state.isShowApplication === true) {
                state.isShowApplication = false;
            }
        }
    }
};