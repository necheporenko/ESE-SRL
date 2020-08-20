const path = require('path');
const fs = require('fs');

const config = require('./src/constants/site-config');

const LoadablePlugin = require('@loadable/webpack-plugin');

exports.onCreateWebpackConfig = ({ stage, getConfig, rules, loaders, plugins, actions }) => {
  actions.setWebpackConfig({
    plugins: [new LoadablePlugin()],
  });
};

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    resolve(
      graphql(request).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        return result;
      })
    );
  });

const getPrefix = (lang) => {
  switch (lang) {
    case 'es-bo':
      return 'es';
    case 'en-us':
      return 'en';
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  var allArticlesData = [];
  const getArticles = async () => {
    const createPageRecursively = async (query, endCursor = '') => {
      const results = await graphql(query, { after: endCursor });
      const hasNextPage = results.data.prismic.allArticles.pageInfo.hasNextPage;
      endCursor = results.data.prismic.allArticles.pageInfo.endCursor;

      allArticlesData = [...allArticlesData, ...results.data.prismic.allArticles.edges];

      if (hasNextPage) {
        await createPageRecursively(query, endCursor);
      } else {
        allArticlesData.forEach(({ node }) => {
          const prefix =
            getPrefix(node._meta.lang) === config.defaultLang ? '' : getPrefix(node._meta.lang);
          createPage({
            path: `${prefix}/news/${node._meta.uid}/`,
            component: path.resolve(`src/templates/article.jsx`),
            context: {
              locale: getPrefix(node._meta.lang),
              lang: node._meta.lang,
              uid: node._meta.uid,
            },
          });
        });
      }
    };

    await createPageRecursively(
      `
      query($after: String) {
          prismic {
            allArticles(after: $after, sortBy: date_DESC) {
              pageInfo {
                hasNextPage
                endCursor
              }
              edges {
                node {
                  _meta {
                    uid
                    lang
                    id
                  }
                  title
                  date
                  image
                  imageSharp {
                    childImageSharp {
                      fluid(maxWidth: 789) {
                        aspectRatio
                        base64
                        sizes
                        src
                        srcSet
                      }
                    }
                  }
                  author
                  content
                }
              }
            }
          }
        }
    `
    );
  };

  const getJobs = await makeRequest(
    graphql,
    `
      {
        prismic {
          allJobs {
            edges {
              node {
                _meta {
                  lang
                  id
                  uid
                }
              }
            }
          }
        }
      }
    `
  ).then((result) => {
    result.data.prismic.allJobs.edges.forEach(({ node }) => {
      const prefix =
        getPrefix(node._meta.lang) === config.defaultLang ? '' : getPrefix(node._meta.lang);

      createPage({
        path: `${prefix}/jobs/${node._meta.uid}/`,
        component: path.resolve(`src/templates/job.jsx`),
        context: {
          locale: getPrefix(node._meta.lang),
          lang: node._meta.lang,
          uid: node._meta.uid,
        },
      });
    });
  });

  const getPages = async () =>
    config.locales.map((locale) => {
      const templateFolder = './src/templates';
      const PAGES = fs
        .readdirSync(templateFolder)
        .map((file) => file)
        .filter((page) => {
          if (page !== 'article.jsx' && page !== 'job.jsx') {
            return page;
          }
        });

      PAGES.forEach((template) => {
        const getSlug = () => {
          if (template.includes('.jsx')) {
            return template.replace('.jsx', '');
          }
          if (template.includes('.js')) {
            return template.replace('.js', '');
          }
        };
        const prefix = locale === config.defaultLang ? '' : locale;
        const slug = getSlug() === 'index' ? '' : `${getSlug()}/`;
        const langPrismic = () => {
          switch (locale) {
            case 'es':
              return 'es-bo';
            case 'en':
              return 'en-us';
          }
        };

        if (getSlug() === 'news') {
          createPage({
            path: `${prefix}/${slug}`,
            component: path.resolve(`./src/templates/${template}`),
            context: {
              locale: locale,
              lang: langPrismic(),
              allNews: allArticlesData.filter(({ node }) => node._meta.lang === langPrismic()),
            },
          });
        } else {
          createPage({
            path: `${prefix}/${slug}`,
            component: path.resolve(`./src/templates/${template}`),
            context: { locale: locale, lang: langPrismic() },
          });
        }
      });
    });

  return Promise.all([await getArticles(), getJobs, await getPages()]);
};
