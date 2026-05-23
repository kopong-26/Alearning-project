import vine from '@vinejs/vine'

const schema = vine.object({
    title: vine.string().maxLength(100),
    visibility: vine.enum(['public', 'private']),
    ownerId: vine.number(),
    description: vine.string().maxLength(300).nullable(),
    content: vine.string(),
    topic_id: vine.array(vine.number())
})

export const noteValidator = vine.compile(schema)