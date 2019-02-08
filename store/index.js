//store/index.js
export const state = () => ({
  locales: ['en', 'pl'],
  locale: 'pl'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
