//不用這個也沒差

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// import { globalFunctions } from '@/utils/globalFunctions';
// 創建 pinia


// export const pinia = createPinia();
// pinia.use(({ store }) => {
//     store.$globalFunctions = globalFunctions;
// });

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

// 注册全局函数
pinia.use(({ store }) => {
    // store.$globalFunctions = globalFunctions;
});

export { pinia };


