import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'resumeFile',
      title: 'Resume PDF',
      type: 'file',
      description: 'Upload the latest version of your resume here.',
      options: {
        accept: '.pdf',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
})
