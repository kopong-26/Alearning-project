export interface Note{
    id: number
    title: string
    slug: string
    visibility: string
    owner: number
    isShadow: boolean
    description: string
    contentRaw: string
    contentHtml: string
    createdAt: string
    updatedAt: string
    topics: any[]
}