export async function load() {
	const posts = await import.meta.glob('$lib/posts/kreideprinz/blog/*.md');
	const ret: { link: string; title: string; date: Date; description: string }[] = [];
	for (const path in posts) {
		await posts[path]().then((post) => {
			const linkstr: string | undefined = path.split('/').at(-1)?.replace('.md', '');
			const link: string = typeof linkstr == 'string' ? linkstr : '';
			const { title } = post.metadata;
			const date = new Date(post.metadata.datestr);
			const description = post.metadata.description ? post.metadata.description : '';
			ret.push({ link, title, date, description });
		});
	}
	ret.sort((a, b) => {
		return b.date.getTime() - a.date.getTime();
	});
	return { ret };
}
