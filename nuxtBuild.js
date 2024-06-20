import { Nuxt } from 'nuxt-start'
import config from './nuxt.config.ts'

const nuxt = new Nuxt({ ...config, dev: false })

export default async (req, res) => {
  await nuxt.ready()
  nuxt.server.app(req, res)
}
