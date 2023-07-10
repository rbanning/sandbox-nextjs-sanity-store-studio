import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'the-sandbox-store',

  projectId: process.env.SANITY_PROJECT_ID ?? '',
  dataset: process.env.SANITY_DATABASE ?? '',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
