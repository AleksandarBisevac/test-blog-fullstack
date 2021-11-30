import articlesContent from './article-content';
import ArticleList from '../Components/ArticleList';

const ArticleListPage = () => {
  return (
    <>
      <h1>Articles List</h1>
      <ArticleList articles={articlesContent} />
    </>
  );
};

export default ArticleListPage;
