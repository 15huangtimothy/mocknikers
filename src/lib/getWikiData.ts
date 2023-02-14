import fetchData from './fetch';

//remove results containing these in the descirptions (in all lowercase)

const fetchPageViewData = async () => {
  //get previous day's date
  const date = new Date();
  date.setDate(date.getDate() - 1);
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth()}`;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  const dateString = `${date.getFullYear()}/${month}/${day}`;

  let pageviewUrl = `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${dateString}`;

  const data = await fetchData(pageviewUrl);
  return cleanPageViewData(data);
};

const cleanPageViewData = (data: PageviewData | undefined) => {
  let chunckedData = [];
  if (data) {
    let twentyArticleTitles = '';
    for (let i = 0; i < 1000; i++) {
      twentyArticleTitles =
        twentyArticleTitles +
        encodeURIComponent(data.items[0].articles[i].article);
      if (i % 20 !== 19) {
        twentyArticleTitles = twentyArticleTitles + '|';
      }
      if (i % 20 === 19) {
        chunckedData.push(twentyArticleTitles);
        twentyArticleTitles = '';
      }
    }
  }
  return chunckedData;
};

const fetchWikiArticleData = async (chunckedData: string) => {
  let wikiUrl = 'https://en.wikipedia.org/w/api.php';
  const wikiUrlParams = {
    action: 'query',
    format: 'json',
    origin: '*',
    prop: 'extracts|pageterms',
    formatversion: '2',
    exlimit: '20',
    exintro: '1',
    explaintext: '1',
    exsentences: '2',
    titles: chunckedData,
  };
  Object.keys(wikiUrlParams).forEach((key, index) => {
    if (index === 0) {
      wikiUrl += `?${key}=${wikiUrlParams[key as keyof typeof wikiUrlParams]}`;
    } else {
      wikiUrl += `&${key}=${wikiUrlParams[key as keyof typeof wikiUrlParams]}`;
    }
  });
  const data = await fetchData(wikiUrl);
  return data;
};

export const getWikiArticles = async () => {
  const chunckedPageViewData = await fetchPageViewData();
  const articleDataArray: ArticleData[] = await Promise.all(
    chunckedPageViewData.map((chunk) => fetchWikiArticleData(chunk))
  );

  const articles: Article[] = [];
  articleDataArray.forEach((articleData) => {
    articleData.query.pages.forEach((page) => {
      articles.push(page);
    });
  });
  return cleanupWikiArticles(articles);
};

const cleanupWikiArticles = (articles: Article[]) => {
  const cleanedArticles = articles.filter((article) => {
    if (article.ns !== 0) return false;
    if (
      article.title.toLowerCase().startsWith('list of') ||
      article.terms?.description?.join().toLowerCase().startsWith('list of')
    )
      return false;
    if (article.title.toLowerCase() === 'main page') return false;
    if (
      article.terms?.description
        ?.join(' ')
        .toLowerCase()
        .includes('disambiguation page')
    )
      return false;
    return true;
  });
  return cleanedArticles;
};
