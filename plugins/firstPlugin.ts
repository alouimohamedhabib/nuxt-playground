export default defineNuxtPlugin((nuxtApp) => {
    useHead({
        title: 'Embrace',
    })
  
    nuxtApp.provide('yahya', () => {
        return new Date()
    })
})



