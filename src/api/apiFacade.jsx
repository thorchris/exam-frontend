import SERVER_URL from "../util/Settings";

function getBooks() {
  return fetch(SERVER_URL + "/api/books")
    .then(handleHttpErrors)
    .catch((err) => {
      if (err.status) {
        err.fullError.then((e) => console.log(e.message));
      } else {
        console.log("Network error");
      }
    });
}


function addBook (isbn, title, author, publisher, publishYear){
  const options = makeOptions("POST", {
    isbn: isbn,
    title: title,
    author: author, 
    publisher: publisher,
    publishYear: publishYear
  });
  return fetch(SERVER_URL+ "/api/books/add" ,options)
  .then(handleHttpErrors)
  .catch((err) => {
    if (err.status) {
      err.fullError.then((e) => console.log(e.message));
    } else {
      console.log("Network error");
    }
  });
}

function deleteBook(id){
  const options = makeOptions("DELETE")
  return fetch(SERVER_URL + "/api/books/" + id, options)
  .then(handleHttpErrors)
  .catch((err) => {
    if (err.status) {
      err.fullError.then((e) => console.log(e.message));
    } else {
      console.log("Network error");
    }
  });
}

const apiFacade = {
  getBooks,
  addBook,
  deleteBook,
};

function makeOptions(method, body) {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

export default apiFacade;
