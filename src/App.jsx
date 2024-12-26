import { useEffect, useState } from "react";

import { fetchArticles } from "./service/api";

import Loader from "./components/Loader/Loader";
import Articles from "./components/Articles/Articles";
import SearchBar from "./components/SearchBar/SearchBar";
import toast from "react-hot-toast";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');

  useEffect(
    () => {
      

      const getArticlesData = async () => {
        try {
          setIsLoading(true);
          setIsError(false);
          const { hits } = await fetchArticles(query, page);
          setArticles(prev => [...prev, ...hits]);

        } catch (error) {
          console.log(error);
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      };

getArticlesData();

    }, [page, query]);
  
  const handlePageChange = () => {
    setPage(prev => prev + 1);
    toast.success(`Page changed to: ${page + 1}`)
  };

  const handleChangeQuery = (newQuery) => {
    if (newQuery === query) {
      toast.error('Please change query');
    };

    setQuery(newQuery);
    setArticles([]);
    setPage(0);
  };

  return (
    <div className="main">
      <h2>Articles</h2>
      <SearchBar onSearchChanged={handleChangeQuery} />
      {articles.length > 0 && <Articles articles={articles} />}
      <button onClick={handlePageChange}>Load more</button>
      {isLoading && <Loader />}
      {isError && <h2>Something went wrong! Try again...</h2>}
    </div>
  );
};


export default App;
  

