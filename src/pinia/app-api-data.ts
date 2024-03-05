import { defineStore } from "pinia";
import axios from 'axios'

export const useAppApiDataStore = defineStore({
    id: "appApiData",
    state: () => ({

        apiServerUrl: process.env.NODE_ENV === 'production'               //一勞永逸
            // ? 'http://146.71.77.32:8072/'            //M20 cloud
            // ? 'http://211.20.93.125:80/'             //hyweb cloud
            // ? 'https://tonhoonline.hyweb.com.tw/'        //hyweb cloud DNS
            ? '/'        //hyweb cloud DNS
            // : '/api/',
            : '/devTest/',
        apiToken: null,
        count: 0,
        testArray: [],
        testArray2: [],
    }),
    persist: true,
    getters: {
        doubleCount: (state) => state.count * 2,

        //非同步用actions比較正規
        async getTestArray(state) {

            if (state.testArray.length != 0) { return state.testArray }
            else
                try {
                    // const response = await axios.get('./assets/model/testModelT01.json');
                    // return response.data; // 返回資料
                    return axios.get('./assets/model/testModelT01.json').then((response) => {
                        console.log("re getTestArray");
                        state.testArray = response.data
                        return (response.data)
                    });

                } catch (error) {
                    console.error('Error fetching data:', error);
                    throw error;
                }
            // return new Promise((resolve, reject) => {
            //     axios.get('./assets/model/testModelT01.json').then((response) => {
            //         console.log("01 " + response.data)
            //         // vm.basicUsage = response.data
            //         resolve("SSS")
            //         return ("SSS")
            //     });
            //     resolve("2222")
            // })
        }

        ,
    },
    actions: {
        async getToken() {
            console.log("getToken!!!!!!!!!!!!!!!!!!!##  " + this.apiServerUrl);
            let data = {
                "account": "hyweb",
                "password": "t3sthyweb"
            }
            axios.post(this.apiServerUrl + 'nhri/login', data).then((response) => {
                console.log("response!!!!!!!!! ", response.data.token);
                this.apiToken = "Bearer " + response.data.token
            });
            // axios.post('https://nhri.hywebcloud20.com/' + 'nhri/login', data).then((response) => {
            //     console.log("response!!!!!!!!! ", response.data.token);
            //     this.apiToken = response.data.token
            // });
        },
        getTestArray1() { console.log("getTestArray1"); },
        async getTestArray2() {
            console.log("getTestArray2");
            if (this.testArray2.length != 0) { return this.testArray2 }
            else
                try {
                    // const response = await axios.get('./assets/model/testModelT01.json');
                    // return response.data; // 返回資料
                    return await axios.get('./assets/model/testModelT01.json').then((response) => {
                        // console.log("re getTestArray2 ", response.data);
                        this.testArray2 = response.data
                        return (this.testArray2)
                    });

                } catch (error) {
                    console.error('Error fetching data:', error);
                    throw error;
                }

        }
    }
});