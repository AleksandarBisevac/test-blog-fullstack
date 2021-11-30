import React from 'react';
import { useParams } from 'react-router';
import articleContent from './article-content';

const ArticlePage = () => {
  const { name } = useParams();
  const article = articleContent.find(
    (article) => article.name.toLowerCase() === name
  );

  if (!article) {
    return <h1>Sorry... Article does not exist...</h1>;
  }
  return (
    <>
      <h1>This is the {article.title} Article</h1>
      {article.content.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
    </>
  );
};

export default ArticlePage;
