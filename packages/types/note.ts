export interface Note{
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

export type NoteList = Note[]