const { Nuxt } = require('nuxt-start') // Menggunakan require untuk modul Nuxt

const config = require('./nuxt.config.ts') // Menggunakan require untuk konfigurasi

const nuxt = new Nuxt({ ...config, dev: false })

module.exports.handler = async (req, res) => {
  await nuxt.ready()
  nuxt.server.app(req, res)
};
