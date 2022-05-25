const install = Vue => {
  const components = (context => {
    const keys = context.keys()
    const values = keys.map(context)
    return keys.reduce((components, key, item) => {
      const component = values[item].default
      const name = component?.name || 'Hl' + key.replace('./', '').replace('.vue', '')
      return Object.assign(components, { [name]: component })
    }, {})
  })(require.context('../components/global', true, /\.vue$/))

  Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
  })
}

export default { install }
