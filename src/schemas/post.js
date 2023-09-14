import { defineField } from "sanity";


const product_post = {
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
                    name: "github",
                    title: "Image 1",
                    type: "url",
                    initialValue: "https://res.cloudinary.com/",


                },
                {
                    name: "linkedin",
                    title: "Image 2",
                    type: "url",
                    initialValue: "https://res.cloudinary.com/",


                },
                {
                    name: "twitter",
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
            title: 'Categorie',
            name: 'categorie',
            type: 'string',
            initialValue: 'electronics',
            options: {
                list: [
                    { title: 'electronics', value: 'Electronics' },
                    { title: 'sport', value: 'Sport' },
                    { title: 'fashion', value: 'Fashion' },
                    { title: 'accessories', value: 'Accessories' },
                ], // <-- predefined values
                //layout: 'radio' // <-- defaults to 'dropdown'
            }
        }),
    ],
};

export default product_post;