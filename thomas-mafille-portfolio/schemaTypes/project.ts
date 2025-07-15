import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the project.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'The unique URL identifier for the project. Click "Generate" to create from the name.',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'string',
      description: 'A brief, one-sentence description shown on the project card.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'The main image or logo for the project.',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      description: 'List of technologies used in this project.',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'dates',
      title: 'Dates',
      type: 'string',
      description: 'e.g., "February 2024 - Present"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Live Project Link',
      type: 'url',
      description: '(Optional) The URL to the live, deployed project.',
    }),
    defineField({
      name: 'githubLink',
      title: 'GitHub Link',
      type: 'url',
      description: '(Optional) The URL to the GitHub repository.',
    }),
    defineField({
      name: 'showGitHubLinkOnCard',
      title: 'Show GitHub Link on Card',
      type: 'boolean',
      description: 'Toggle this on to show the GitHub button on the main projects page.',
      initialValue: true,
    }),
    defineField({
      name: 'details',
      title: 'Project Details',
      type: 'blockContent',
      description:
        'The full, detailed description for the project page. Supports bold, italics, lists, etc.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'A number to sort the projects. Lower numbers appear first.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
