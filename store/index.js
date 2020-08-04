export const state = () => ({
  someValue: '',
})

export const mutations = {
  changeSomeValue(state, newValue) {
    this.$hello('store mutation')
    state.someValue = newValue
  },
}

export const actions = {
  setSomeValueToWhatever({ commit }) {
    this.$hello('store action')
    const newValue = 'whatever'
    commit('changeSomeValue', newValue)
  },
}
