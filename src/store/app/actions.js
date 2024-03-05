const showFile = ({ state, commit }, { filePath, fileName, fullScreen = false }) => {
  setTimeout(() => {
    commit('showFile', {
      filePath: filePath,
      fileName: fileName,
      fullScreen: fullScreen,
    })
  })
}

const showToast = ({ state, commit }, message) => {
  if (state.toast.show) commit('hideToast')

  setTimeout(() => {
    commit('showToast', {
      color: 'black',
      message,
      timeout: 3000
    })
  })
}

const showError = ({ state, commit }, { message = 'Failed!', error }) => {
  if (state.toast.show) commit('hideToast')

  setTimeout(() => {
    commit('showToast', {
      color: 'error',
      message: message + ' ' + error.message,
      timeout: 10000
    })
  })
}

const showSuccess = ({ state, commit }, message) => {
  if (state.toast.show) commit('hideToast')

  setTimeout(() => {
    commit('showToast', {
      color: 'success',
      message,
      timeout: 3000
    })
  })
}

const setFullLoading = ({ commit }, obj) => {
  commit("SET_FULL_LOADING", obj);

}

const setLegislatorSourceArray = ({ commit }, obj) => {
  commit("SET_LEGISTLATOR_SOURCE_ARRAY", obj);
}
const setRootDeptSourceArray = ({ commit }, obj) => {
  commit("SET_ROOT_DEPT_SOURCE_ARRAY", obj);
}
const setDeptSourceArray = ({ commit }, obj) => {
  commit("SET_DEPT_SOURCE_ARRAY", obj);
}
const setSecDeptSourceArray = ({ commit }, obj) => {
  commit("SET_SEC_DEPT_SOURCE_ARRAY", obj);
}
const setUserAcl = ({ commit }, obj) => {
  commit("SET_USER_ACL", obj);
}
const setSearchId = ({ commit }, obj) => {
  commit("SET_SEARCH_ID", obj);
}

export default {
  showToast,
  showError,
  showSuccess,

  setFullLoading,
  setLegislatorSourceArray,
  setRootDeptSourceArray,
  setDeptSourceArray,
  setSecDeptSourceArray,
  setUserAcl,
  setSearchId,
  showFile
}
