fetch("https://jsonplaceholder.typicode.com/posts")
     .then(response =>response.json())
     .then(dataa =>console.log(data.id))
     .catch(error =>console.error(error));