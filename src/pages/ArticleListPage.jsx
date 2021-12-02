import { useEffect, useState } from 'react';
import ArticleList from '../Components/ArticleList';

const ArticleListPage = () => {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api/articles');
      const body = await body.json();
      setAllArticles(body);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Articles List</h1>
      <ArticleList articles={allArticles} />
    </>
  );
};

export default ArticleListPage;
