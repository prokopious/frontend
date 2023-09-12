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
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
      }),
      defineField({
        name: 'mainImage',
        title: 'Main image',
        type: 'cloudinary.asset',
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
