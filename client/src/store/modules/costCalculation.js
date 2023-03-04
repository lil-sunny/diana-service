// // import axios from 'axios';

// export default {
//     state: {
//         costCalculationFormsData: [],
//         // applications: [
//         //     {name: 'colis'}
//         // ]
//     },

//     getters: {
//         costCalculationFormsData(state) {
//             return state.costCalculationFormsData;
//         },
//     },

//     actions: {
//         // async getApplications(state) {
//         //     return await state.costCalculationFormsData;
//         // },

//         // async getCostCalculationFormsData(state) {
//         //     await axios.get('http://127.0.0.1:5111/api/cost-calculation-form')
//         //     .then(response => {
//         //         state.commit('getCostCalculationFormsData', response.data);
//         //     });
//         // },

//         // async postCostCalculationForm(state, data) {
//         //     await axios.post('http://127.0.0.1:5111/api/cost-calculation-form/create', data)
//         //     .then(response => {
//         //         state.commit('POST_APPLICATION', response.data);
//         //     });
//         // },

//         // async deleteApplication(state, id) {
//         //     await axios.delete(`http://127.0.0.1:5111/api/cost-calculation-form/${id}`)
//         //     .then(response => {
//         //         state.commit('DELETE_APPLICATION', response.data);
//         //     });
//         // },

//         // testFunc(state, data) {
//         //     state.commit('TEST_FUNC', data);
//         // }
//     },

//     mutations: {
//         // getApplications(state) {
//         //     return state.costCalculationFormsData;
//         // },

//         // getCostCalculationFormsData(state, result) {
//         //     state.costCalculationFormsData = result;
//         // },

//         // POST_APPLICATION(state, result) {
//         //     state.costCalculationFormsData.push(result);
//         // },

//         // DELETE_APPLICATION(state, data) {
//         //     state.costCalculationFormsData.splice(state.costCalculationFormsData.indexOf(data), 1);
//         // },

//         // TEST_FUNC(state, data) {
//         //     state.applications = state.applications.push(data);
//         // }
//     }
// };