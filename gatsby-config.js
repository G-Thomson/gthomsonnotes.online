module.exports = {
  siteMetadata: {
    title: 'Geoffrey\'s ideas and notes',
    description: `Ideas and links`,
    author: 'Geoffrey Thomson',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'notes',
        basePath: '/',
        showThemeInfo: true,
        showDescriptionInSidebar: true,
      },
    },
  ],
}
