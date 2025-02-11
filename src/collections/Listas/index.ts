import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'

export const Listas: CollectionConfig = {
  slug: 'listas',
  access: {
    create: authenticated,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'posts',
              type: 'relationship',
              relationTo: 'posts',
              hasMany: true,
            },
          ],
          label: 'Configurações',
        },
        {
          fields: [
            {
              name: 'relatedPosts',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              hasMany: true,
              relationTo: 'posts',
            },
            {
              name: 'greeting',
              type: 'text',
              admin: {
                components: {
                  Field: '@/components/ReactFlowPanel'
                }
              }
            },
          ],
          label: 'Painel React Flow',
        },
      ],
    },
  ],
}
