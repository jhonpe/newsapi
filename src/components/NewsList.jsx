import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNews from '../hook/useNews';
import NewsItem from './NewsItem';

const NewsList = () => {
	const { news, totalNews, handleChangePage, page } = useNews();

	const totalPage = Math.ceil(totalNews / 20);

	return (
		<>
			<Typography
				textAlign={'center'}
				marginY={5}
				variant="h3"
				component={'h2'}
			>
				Últimas Noticias
			</Typography>

			<Grid container spacing={2}>
				{news.map((itemNews) => (
					<NewsItem key={itemNews.url} itemNews={itemNews} />
				))}
			</Grid>

			<Stack
				sx={{
					marginY: 5,
				}}
				spacing={2}
				direction={'row'}
				justifyContent="center"
				alignItems="center"
			>
				<Pagination
					count={totalPage}
					color="primary"
					onChange={handleChangePage}
					page={page}
				/>
			</Stack>
		</>
	);
};

export default NewsList;
