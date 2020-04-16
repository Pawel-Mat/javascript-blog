{
'use strict';
/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });
  */
  const titleClickHandler = function(){
    console.log('Link was clicked!');
    console.log(event);

  /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }
  /* [DONE] add class 'active' to the clicked link */
    event.preventDefault();
    const clickedElement = this;
    clickedElement.classList.add('active');

    console.log('clicked element: ', clickedElement);

  /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post.active');

    for (let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }
  /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    console.log('article selector: ',articleSelector);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log('Artykul: ', targetArticle);

  /* [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');
  }
  
  
  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

  function generateTitleLinks(){
    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    console.log(titleList);
    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);

    let html = '';
    
    for (let article of articles){
      
      /* get the article id */
      const articleId = article.getAttribute('id');
      /* find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      /* create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      /* insert link into html variable */
      html = html + linkHTML;
     
    }
    titleList.innerHTML = html;
    console.log(titleList);  
    const links = document.querySelectorAll('.titles a');
    console.log(links);
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
  } 
  }
  
  generateTitleLinks();
}