export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5fc3c321613244f49df96468',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-83v1gvi3',
                  apiId: 'b6b3f383-012b-4b5c-a71f-375ddb81f9e7'
                },
                {
                  buildHookId: '5fc3c32133d944d20f8b55cc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wmrk4xn7',
                  apiId: '518e601a-eb50-4f28-bab3-ca43c34aeed1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ariefbuddies/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wmrk4xn7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
