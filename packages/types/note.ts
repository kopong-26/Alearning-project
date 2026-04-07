export interface NoteResponse{
    id: number
    title: string
    slug: string
    visibility: 'public' | 'private'
    owner: number
    isShadow: boolean
    description: string | null
    contentRaw: string | null
    contentHtml: string | null
    createdAt: string
    updatedAt: string
}

export interface NoteFormBody{
    title: string
    visibility: string
    description: string
    contentRaw: string
    topic_id: number[]
}