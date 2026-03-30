import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Note extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare slug: string

  @column()
  declare visibility: 'public' | 'private'

  @column()
  declare owner: number

  @column()
  declare isShadow: boolean

  @column()
  declare description: string | null

  @column()
  declare contentRaw: string | null

  @column()
  declare contentHtml: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}