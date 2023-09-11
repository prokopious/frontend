import {defineField, defineType} from 'sanity'
import {cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary'

export default defineType({
  name: 'contact',
  title: 'Contact',
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
      defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
      }),
      defineField({
        name: 'phone',
        title: 'Phone',
        type: 'string',
      }),
  ],
})
