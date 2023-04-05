fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));



  
//   function searchNews() {
//     const searchInput = document.getElementById('searchInput');
//     const newsList = document.getElementById('newsList');
//     const query = searchInput.value;
//     const apiKey = '88b3b1616dba4595a529e22bef95b15e'; // Замените YOUR_API_KEY на ваш API-ключ
  
//     // Отправляем запрос к API новостей
//     fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`)
//       .then(response => response.json())
//       .then(data => {
//         // Очищаем список новостей
//         newsList.innerHTML = '';
  
//         // Добавляем новости в список
//         data.articles.forEach(article => {
//           const li = document.createElement('li');
//           const a = document.createElement('a');
//           a.href = article.url;
//           a.textContent = article.title;
//           li.appendChild(a);
//           newsList.appendChild(li);
//         });
//       })
//       .catch(error => console.error(error));