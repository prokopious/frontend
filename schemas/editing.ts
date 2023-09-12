import { defineField, defineType } from 'sanity'
import { cloudinarySchemaPlugin } from 'sanity-plugin-cloudinary'

export default defineType({
    name: 'editing',
    title: 'Audio and Video Editing',
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
                                    { title: 'Audio', value: 'audio' },
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
                            type: 'string'
                        },
                        defineField({
                            type: "array",
                            name: "imageList",
                            title: "ImageList",
                            description: "Image assets from Cloudinary",
                            of: [{ type: "cloudinary.asset" }]
                        }),
                        {
                            title: 'Creator',
                            name: 'creator',
                            type: 'string'
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