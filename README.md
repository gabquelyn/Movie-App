
# MovieApp

This is a movie app that feeds from imdb movie api endpoint. It implements querying and 
 pagination. 


## API Reference

#### Get all items

```http
  GET https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&${api_key}&page=${page_number}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
|`page_number`| `string`| **Optional**. The page number|

#### Get item

```http
  GET 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="${query_params}';

```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `query_params`      | `string` | **Required**. Search term |



## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
 - [Imdb Movie Api](https://www.imdb.com/)


## Demo

Insert gif or link to demo

https://movieresearchapp.netlify.app/
