import { useEffect, useState } from 'react';
import ArticleList from '../Components/ArticleList';
import Loader from '../Components/Loader';

const ArticleListPage = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api/articles');
      const body = await result.json();
      setAllArticles(body);
      setLoading(false);
    };
    fetchData();
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <>
      <h1>Articles List</h1>
      <ArticleList articles={allArticles} />
    </>
  );
};

export default ArticleListPage;
