import { type SchemaTypeDefinition } from 'sanity'
import author from '../../schemas/author'
import blockContent from '../../schemas/blockContent'
import heroe from '../../schemas/heroe'
import job from '../../schemas/job'
import post from '../../schemas/post'
import profile from '../../schemas/profile'
import project from '../../schemas/project'
import quiz from '../../schemas/quiz'
import table from '../../schemas/table'
import youtube from '../../schemas/youtube'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    author,
    blockContent,
    heroe,
    job,
    post,
    profile,
    project,
    quiz,
    table,
    youtube,
  ],
}
