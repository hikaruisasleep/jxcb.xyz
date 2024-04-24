export async function load() {
	const posts = await import.meta.glob('$lib/posts/obsidian-vaults/kreideprinz/**/*.md');
	const ret: { link: string; title: string; date: Date; description: string }[] = [];
	for (const path in posts) {
		await posts[path]().then((post) => {
			const linkstr: string | undefined = `${path.split('/').at(-2)}/${path
				.split('/')
				.at(-1)
				?.replace('.md', '')}`;
			const link: string = typeof linkstr == 'string' ? linkstr : '';
			const title = path.split('/').at(-1)?.replace('.md', '');
			ret.push({ link, title });
		});
	}
	return { ret };
}
