export default{
    title: 'Photo',
    name: 'photo',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },

        {
            title: 'Image',
            name: 'image',
            type: 'image'
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string'
        },
        {
            name: 'home',
            title: 'Home?',
            description: 'select to show image on homepage and link to category page',
            type: 'boolean'
        }
    ]
}