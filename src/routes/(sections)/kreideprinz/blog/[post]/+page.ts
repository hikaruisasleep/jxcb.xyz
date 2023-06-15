export async function load({ params }) {
	const posts = await import.meta.glob('$lib/posts/kreideprinz/blog/*.md');
	let title, date, content;
	for (const path in posts) {
		await posts[path]().then((post) => {
			const link: string = path.split('/').at(-1).replace('.md', '');
			if (link == params.post) {
				title = post.metadata.title;
				date = new Date(post.metadata.datestr);
				content = post.default;
			}
		});
	}
	return {
		title,
		date,
		content
	};
}
