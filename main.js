
   fetch('http://www.omdbapi.com/?i=tt3896198&apikey=99dc027b&s=star&page=10')
  .then(res => res.json())
  .then(function (posts) {
      console.log(posts)
  } )

