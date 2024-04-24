export async function load({ params }) {
	console.log(params);
	const posts = await import.meta.glob('$lib/posts/obsidian-vaults/kreideprinz/**/*.md');
	let content, title, folder;

	for (const path in posts) {
		await posts[path]().then((post) => {
			title = path.split('/').at(-1)?.replace('.md', '');
			folder = path.split('/').at(-2);
			if (title == params.post) {
				content = post.default;
			}
		});
	}
	return { title, folder, content };
}
