var books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  }, {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }
]

let txt = "";
books.forEach();
document.getElementById("list").innerHTML = txt;



//Creates this: <li>[text]</li>
//function createListItem (text) {
//  var li = document.createElement(li);
//  li.textContent = text;
//  return li;
//}

//function appendChildren (parent, children) {
//  children.forEach(function (child) {
//    parent.appendChild(child);
//  })
//}

//var myList = document.getElementById('my-list');
//console.log(myList);

//appendChildren(myList, books);

//const design = document.getElementById('design')


//dis


//const trueBooks = books.filter((books) => {
//  return books.alreadyRead === true
//})

//console.log(trueBooks)

//const falseBooks = books.filter((books) => {
//  return books.alreadyRead === false
//})









//var books = [
//    {
//      title: 'The Design of EveryDay Things',
//      author: 'Don Norman',
//      alreadyRead: false
//      cover: 'https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg'
//    }, {
//      title: 'The Most Human Human',
//      author: 'Brian Christian',
//      alreadyRead: true
//      cover: 'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg'
//    }
//  ];

//  const ul = document.querySelector('#list');
//  let html = '';
//  books.forEach(book => {
//      if (book.alreadyRead == true){
//          html +=
//          '
//          <div class="bCover_wrapper" id="container">
//          <img class="book_Covers" src="$(book.cover)" id=image">
//          <div class="alreadyRead">
//              <h3>Book Read</h3>
//              <p>You already read this book.</p>
//              </div>
//           '
//      }
//  })

//ul.innerHTML = html;