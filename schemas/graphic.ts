import {defineField, defineType} from 'sanity'
import {cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary'

export default defineType({
  name: 'graphic',
  title: 'Graphic',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
      }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'cloudinary.asset',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      }),

      {
        name: 'contentBlocks',
        title: 'Content Blocks',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
                {
                    title: 'Asset Type',
                    name: 'assetType',
                    type: 'string',
                    initialValue: 'image',
                    options: {
                      list: [
                        { title: 'Image', value: 'image' },
                        { title: 'Video', value: 'Video' },
                        { title: 'Audio',  value: 'audio' },
                      ], // <-- predefined values
                      //layout: 'radio' // <-- defaults to 'dropdown'
                    }
                },
              {
                title: 'Title',
                name: 'title',
                type: 'string'
              },
              {
                title: 'Subtitle',
                name: 'subtitle',
                type: 'image'
              },
              {
                title: 'Asset',
                name: 'asset',
                type: 'cloudinary.asset'
              },
              defineField({
                name: 'body',
                title: 'Body',
                type: 'blockContent',
              }),
            ]
          }
        ],
      }
  ],
})
