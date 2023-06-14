export async function load() {
	const posts = await import.meta.glob('$lib/posts/kreideprinz/blog/*.md');
	let ret = [];
	for (const path in posts) {
		await posts[path]().then((post) => {
			const link: string = path.split('/').at(-1).replace('.md', '');
			let { title, description } = post.metadata;
			description = description ? description : 'post';
			ret.push({ link, title, description });
		});
	}
	return { ret };
}
