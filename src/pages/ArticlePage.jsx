import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import articleContent from './article-content';
import ArticleList from '../Components/ArticleList';
import CommentsList from '../Components/CommentsList';
import UpvotesSection from '../Components/UpvotesSection';
import AddCommentForm from '../Components/AddCommentForm';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
  const { name } = useParams();
  const article = articleContent.find(
    (article) => article.name.toLowerCase() === name
  );
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) {
    return <NotFoundPage />;
  }
  const otherArticles = articleContent.filter(
    (article) => article.name.toLowerCase() !== name
  );

  return (
    <>
      <h1>This is the {article.title} Article</h1>
      <UpvotesSection
        upvotes={articleInfo.upvotes}
        articleName={name}
        setArticleInfo={setArticleInfo}
      />
      {article.content.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <AddCommentForm setArticleInfo={setArticleInfo} articleName={name} />
      <section>
        <h3>Other Articles</h3>
        <ArticleList articles={otherArticles} />
      </section>
    </>
  );
};

export default ArticlePage;
