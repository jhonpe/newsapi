import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import useNews from '../hook/useNews';

const CATEGORIAS = [
	{ value: 'general', label: 'General' },
	{ value: 'business', label: 'Negocios' },
	{ value: 'entertainment', label: 'Entretenimiento' },
	{ value: 'health', label: 'Salud' },
	{ value: 'science', label: 'Ciencia' },
	{ value: 'sports', label: 'Deportes' },
	{ value: 'technology', label: 'Tecnología' },
];

const FormNews = () => {
	const { category, handleChangeCategory } = useNews();

	return (
		<form>
			<FormControl fullWidth>
				<InputLabel>Categoría</InputLabel>
				<Select
					label="Categoría"
					onChange={handleChangeCategory}
					value={category}
				>
					{CATEGORIAS.map((itemCategory) => (
						<MenuItem key={itemCategory.value} value={itemCategory.value}>
							{itemCategory.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</form>
	);
};

export default FormNews;
