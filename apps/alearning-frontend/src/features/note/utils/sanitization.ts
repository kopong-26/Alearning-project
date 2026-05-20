import type { NoteResponse } from "@alearning/types";
import type { Note } from "../types/note.types";

export function mapToNote(noteResponse: NoteResponse):Note{
    return {
        id: noteResponse.id,
        title: noteResponse.title,
        slug: noteResponse.slug,
        visibility: noteResponse.visibility,
        ownerId: noteResponse.ownerId,
        isShadow: noteResponse.isShadow,
        description: noteResponse.description ?? "",
        content: noteResponse.content ?? "",
        createdAt: noteResponse.createdAt,
        updatedAt: noteResponse.updatedAt,
        topics: noteResponse.topics,
        owner: noteResponse.owner,
    }
}