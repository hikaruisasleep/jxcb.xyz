import { error } from '@sveltejs/kit';
import type { Component } from 'svelte';

export async function load({ params }) {
	const posts = await import.meta.glob<{ default: Component }>(
		'#lib/posts/obsidian-vaults/kreideprinz/**/*.md'
	);
	let content, title, folder;

	for (const path in posts) {
		await posts[path]().then((post) => {
			title = path.split('/').at(-1)?.replace('.md', '') ?? '';
			folder = path.split('/').at(-2) ?? '';
			if (title == params.post) {
				content = post.default;
			}
		});
	}
	if (!content) throw error(404, 'Note not found');
	return { title, folder, content };
}
