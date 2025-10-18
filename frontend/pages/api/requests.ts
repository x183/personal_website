export const getFromApi = async (path: string) => {
	const res = await fetch(`api/` + path, {
		method: 'GET',
	});
	if (!res.ok) {
		console.error(`The path ${path} is not accessible`);
		return '';
	}
	const jsonData = await res.json();
	return jsonData;
};
