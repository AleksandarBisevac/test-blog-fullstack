import React from 'react';
import { useParams } from 'react-router';
import articleContent from './article-content';
import ArticleList from '../Components/ArticleList';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
  const { name } = useParams();
  const article = articleContent.find(
    (article) => article.name.toLowerCase() === name
  );

  if (!article) {
    return <NotFoundPage />;
  }
  const otherArticles = articleContent.filter(
    (article) => article.name.toLowerCase() !== name
  );

  return (
    <>
      <h1>This is the {article.title} Article</h1>
      {article.content.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
      <section>
        <h3>Other Articles</h3>
        <ArticleList articles={otherArticles} />
      </section>
    </>
  );
};

export default ArticlePage;
