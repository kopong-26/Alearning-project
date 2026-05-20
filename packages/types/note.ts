export interface NoteResponse{
    id: number
    title: string
    slug: string
    visibility: 'public' | 'private'
    ownerId: number
    isShadow: boolean
    description: string | null
    content: string | null
    createdAt: string
    updatedAt: string
    topics: any[]
    owner: {}
}

// export interface NoteFormBody{
//     title: string
//     visibility: string
//     description: string
//     contentRaw: string
//     topic_id: number[]
// }