import axios from 'axios';
import { useState, useEffect, createContext } from 'react';

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
	const [category, setCategory] = useState('general');
	const [news, setNews] = useState([]);
	const [page, setPage] = useState(1);
	const [totalNews, setTotalNews] = useState(0);

	useEffect(() => {
		const consultarAPI = async () => {
			const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${category}&apiKey=${
				import.meta.env.VITE_SOME_KEY
			}`;

			const { data } = await axios(url);
			setNews(data.articles);
			setTotalNews(data.totalResults);
			setPage(1);
		};
		consultarAPI();
	}, [category]);

	useEffect(() => {
		const consultarAPI = async () => {
			const url = `https://newsapi.org/v2/top-headlines?country=ve&page=${page}&category=${category}&apiKey=${
				import.meta.env.VITE_SOME_KEY
			}`;

			const { data } = await axios(url);
			setNews(data.articles);
			setTotalNews(data.totalResults);
		};
		consultarAPI();
	}, [page]);

	const handleChangeCategory = (e) => {
		setCategory(e.target.value);
	};

	const handleChangePage = (e, worth) => {
		setPage(worth);
	};

	return (
		<NewsContext.Provider
			value={{
				category,
				handleChangeCategory,
				news,
				totalNews,
				handleChangePage,
				page,
			}}
		>
			{children}
		</NewsContext.Provider>
	);
};

export { NewsProvider };

export default NewsContext;
