import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ArticleList from '../Components/ArticleList';
import CommentsList from '../Components/CommentsList';
import UpvotesSection from '../Components/UpvotesSection';
import AddCommentForm from '../Components/AddCommentForm';
import NotFoundPage from './NotFoundPage';
import Loader from '../Components/Loader';

const ArticlePage = () => {
  const { name } = useParams();
  const [articleInfo, setArticleInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    const fetchOtherArticles = async () => {
      const result = await fetch(`/api/articles`);
      const body = await result.json();
      const otherArticles = body.filter(
        (article) => article.name.toLowerCase() !== name
      );
      setArticles(otherArticles);
    };
    fetchArticle();
    fetchOtherArticles();

    setLoading(false);
    window.scrollTo(0, 0);
  }, [name]);

  if (!loading && !articleInfo) {
    return <NotFoundPage />;
  }

  return !loading && articles.length ? (
    <>
      <h1>This is the {articleInfo.title}</h1>
      <UpvotesSection
        upvotes={articleInfo.upvotes}
        articleName={name}
        setArticleInfo={setArticleInfo}
      />
      {articleInfo.content.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <AddCommentForm setArticleInfo={setArticleInfo} articleName={name} />
      <section>
        <h3>Other Articles</h3>
        <ArticleList articles={articles} />
      </section>
    </>
  ) : (
    <Loader />
  );
};

export default ArticlePage;
