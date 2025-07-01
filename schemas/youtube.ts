import { defineType } from 'sanity'

export default defineType({
  name: 'youtube',
  title: 'YouTube Embed',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'YouTube URL',
      type: 'url',
      validation: Rule => Rule.uri({ scheme: ['https'] })
    }
  ]
})
