import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Thomas Mafille Portfolio',

  projectId: 'j16plobg',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Our singleton "Site Settings" document
            S.listItem().title('Site Settings').child(
              S.document().schemaType('siteSettings').documentId('siteSettings'),
            ),
            // Our singleton "Tech" document
            S.listItem()
              .title('Tech Stack')
              .child(S.document().schemaType('tech').documentId('tech')),
            S.divider(),
            // The rest of our document types
            ...S.documentTypeListItems().filter(
              // Filter out ALL our singletons from the main list
              (listItem) => !['tech', 'siteSettings'].includes(listItem.getId()!),
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
