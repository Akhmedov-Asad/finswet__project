const hamburgerMenu = document.querySelector('.hamburger');
const hamburgerList = document.querySelector('.hamburger__list');
hamburgerMenu.addEventListener('click', (e) => {
  e.preventDefault();
  hamburgerList.classList.toggle('active')
});

const key = "88b3b1616dba4595a529e22bef95b15e";
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;
const businesUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`
fetch(url)
  .then(response => response.json())
  .then((data) => {
    const newsContainer = document.getElementById('popular__blocks');

    data.articles.slice(5, 8).map(article => {
      const card = document.createElement('div');
      card.classList.add('card');

      const img = document.createElement('img');
      img.classList.add('card-img-top');
      img.src = article.urlToImage;

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const publishedAt = document.createElement('h5');
      publishedAt.classList.add('card-title');
      publishedAt.textContent = article.publishedAt;

      const title = document.createElement('p');
      title.classList.add('card-text');
      title.textContent = article.title;

      const content = document.createElement('h6');
      content.classList.add('content');
      content.textContent = article.content;

      cardBody.appendChild(publishedAt);
      cardBody.appendChild(title);
      cardBody.appendChild(content);

      card.appendChild(img);
      card.appendChild(cardBody);

      newsContainer.appendChild(card);
    });
  })
  .catch(error => console.log(error));



  // function searchNews() {
  //   const searchInput = document.getElementById('searchInput');
  //   const newsList = document.getElementById('newsList');
  //   const query = searchInput.value;
  //   const apiKey = '88b3b1616dba4595a529e22bef95b15e'; // Замените YOUR_API_KEY на ваш API-ключ
  
  //   // Отправляем запрос к API новостей
  //   fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       // Очищаем список новостей
  //       newsList.innerHTML = '';
  
  //       // Добавляем новости в список
  //       data.articles.forEach(article => {
  //         const li = document.createElement('li');
  //         const a = document.createElement('a');
  //         a.href = article.url;
  //         a.textContent = article.title;
  //         li.appendChild(a);
  //         newsList.appendChild(li);
  //       });
  //     })
  //     .catch(error => console.error(error));
  // }
