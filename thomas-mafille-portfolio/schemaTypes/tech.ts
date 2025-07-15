import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tech',
  title: 'Tech Stack',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      readOnly: true,
      hidden: true,
      initialValue: 'Tech Stack and Software Proficiencies',
    }),
    defineField({
      name: 'skills',
      title: 'Technical Skills',
      description: 'The list of technologies for the first marquee (e.g., React, Node.js, Java).',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'software',
      title: 'Software',
      description: 'The list of software for the second marquee (e.g., Git, Figma, Docker).',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
