/* eslint-disable vars-on-top */

import { PrismaPg } from '@prisma/adapter-pg'
import paginateExt from 'prisma-paginate'

import { PrismaClient } from '@/database/generated/client'

const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({ connectionString })

/**
 * 实例化prisma client
 */
const prismaClientSingleton = () => {
  return new PrismaClient({ adapter }).$extends(paginateExt)
  // return new PrismaClient({ adapter })
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const db = globalThis.prismaGlobal ?? prismaClientSingleton()

export default db

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = db
