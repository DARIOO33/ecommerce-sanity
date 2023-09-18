import { defineField } from "sanity";


const post = {
    name: "product_post",
    title: "product post",
    type: "document",

    fields: [
        defineField({
            name: "product_name",
            title: "Product Name",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "product_desription",
            title: "Product Desription",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "imageLink",
            title: "Product Image Links",
            type: "object",
            description: "Add your product image links:",
            fields: [
                {
                    name: "image1",
                    title: "Image 1",
                    type: "url",
                    initialValue: "https://res.cloudinary.com/",


                },
                {
                    name: "image2",
                    title: "Image 2",
                    type: "url",
                    initialValue: "https://res.cloudinary.com/",


                },
                {
                    name: "image3",
                    title: "Image 3",
                    type: "url",
                    initialValue: "https://res.cloudinary.com/",
                },

            ],
            options: {
                collapsed: false,
                collapsible: false,
                columns: 2,
            },
        }),
        defineField({
            name: "product_price",
            title: "Product Price",
            type: "number",
            validation: (rule) => rule.required(),
        }),
        defineField({
            title: 'categorie',
            name: 'categorie',
            type: 'string',
            initialValue: ' ',
            validation: (rule) => rule.required(),
            options: {
                list: [
                    { title: 'electronics', value: 'Electronics' },
                    { title: 'sport', value: 'Sport' },
                    { title: 'fashion', value: 'Fashion' },
                    { title: 'accessories', value: 'Accessories' },

                ],
            }
        }),
        defineField({
            title: 'discount',
            name: 'discount',
            type: 'string',
            initialValue: '0%',
            validation: (rule) => rule.required(),
            options: {
                list: [
                    { title: '0%', value: '0%' },
                    { title: '5%', value: '5%' },
                    { title: '10%', value: '10%' },
                    { title: '15%', value: '15%' },
                    { title: '20%', value: '20%' },
                    { title: '30%', value: '30%' },
                    { title: '40%', value: '40%' },
                    { title: '50%', value: '50%' },
                ],
            }
        })
    ],
};

export default post;