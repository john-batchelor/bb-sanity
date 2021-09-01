export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '612fde71bb85ff1a52ebe7a1',
                  title: 'Sanity Studio',
                  name: 'bb-sanity-studio',
                  apiId: 'b9a2ea08-d926-4696-9e24-ceb48b720570'
                },
                {
                  buildHookId: '612fde7197cc941eb057c20f',
                  title: 'Blog Website',
                  name: 'bb-sanity',
                  apiId: '74e05dd6-4dc0-41cb-b5c7-c8fb74812def'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/john-batchelor/bb-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://bb-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
