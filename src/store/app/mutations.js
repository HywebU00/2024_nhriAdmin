// import Vuetify from '../../plugins/vuetify'

export default {
  /**
   * Main Toast
   */
  showToast: (state, toast) => {
    const { color, timeout, message } = toast

    state.toast = {
      message,
      color,
      timeout,
      show: true
    }
  },
  hideToast: (state) => {
    state.toast.show = false
  },
  resetToast: (state) => {
    state.toast = {
      show: false,
      color: 'black',
      message: '',
      timeout: 3000
    }
  },
  showFile: (state, file) => {
    const { filePath, fileName, fullScreen } = file
    state.file = {
      filePath,
      fileName,
      fullScreen,
      show: true,

    }
  },

  /**
   * Theme and Layout
   */
  // setGlobalTheme: (state, theme) => {
  //   Vuetify.framework.theme.dark = theme === 'dark'
  //   state.globalTheme = theme
  // },
  // setRTL: (state, isRTL) => {
  //   Vuetify.framework.rtl = isRTL
  //   state.isRTL = isRTL
  // },
  setContentBoxed: (state, isBoxed) => {
    state.isContentBoxed = isBoxed
  },
  setMenuTheme: (state, theme) => {
    state.menuTheme = theme
  },
  setToolbarTheme: (state, theme) => {
    state.toolbarTheme = theme
  },
  setTimeZone: (state, zone) => {
    state.time.zone = zone
  },
  setTimeFormat: (state, format) => {
    state.time.format = format
  },
  setCurrency: (state, currency) => {
    state.currency = currency
  },
  setToolbarDetached: (state, isDetached) => {
    state.isToolbarDetached = isDetached
  },



  SET_FULL_LOADING(state, obj) {
    if (obj != null)
      state.isFullLoading = obj
  },

  SET_LEGISTLATOR_SOURCE_ARRAY(state, obj) {
    if (obj != null)
      state.legislatorSourceArray = obj
  },
  SET_ROOT_DEPT_SOURCE_ARRAY(state, obj) {
    if (obj != null)
      state.rootDeptSourceArray = obj
  },
  SET_DEPT_SOURCE_ARRAY(state, obj) {
    if (obj != null)
      state.deptSourceArray = obj
  },
  SET_SEC_DEPT_SOURCE_ARRAY(state, obj) {
    if (obj != null)
      state.secDeptSourceArray = obj
  },
  SET_USER_ACL(state, obj) {
    if (obj != null)
      state.userAcl = obj
  },

  SET_SEARCH_ID(state, obj) {

    state.searchId = obj
  },
}
