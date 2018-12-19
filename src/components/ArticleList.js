import React from 'react';
import ArticlePreview from './ArticlePreview';
console.log("you enter the articlelist page");

const ArticleList = props => {
  if (!props.articles) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    );
  }
 else
  return (
    <div>
      {
        props.articles.map(article => {
          return (
           <ArticlePreview article={article} key={article.slug} />
          );
        })
      }
    </div>
  );
};

export default ArticleList;