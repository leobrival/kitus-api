import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { DbAccessToken } from '@adonisjs/auth/access_tokens'
import type { User } from './user.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class AccessToken extends BaseModel implements DbAccessToken {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare name: string | null

  @column()
  declare type: string

  @column()
  declare hash: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime()
  declare expiresAt: DateTime | null

  @column.dateTime()
  declare lastUsedAt: DateTime | null

  @belongsTo(() => import('./user.js'))
  declare user: BelongsTo<typeof User>
}
