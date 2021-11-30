import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => {
  return (
    <>
      {articles.map((article, idx) => (
        <Link to={`/article/${article.name.toLowerCase()}`} key={idx}>
          <h3>{article.title}</h3>
          <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
    </>
  );
};

export default ArticleList;
