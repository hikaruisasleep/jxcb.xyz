import { error } from '@sveltejs/kit';
import type { Component } from 'svelte';

export async function load({ params }) {
	const posts = await import.meta.glob<{
		metadata: { title: string; datestr: string; description: string };
		default: Component;
	}>('#lib/posts/kreideprinz/blog/*.md');
	let title, date, content;
	for (const path in posts) {
		await posts[path]().then((post) => {
			const link: string = path.split('/').at(-1)?.replace('.md', '') ?? '';
			if (link == params.post) {
				title = post.metadata.title;
				date = new Date(post.metadata.datestr);
				content = post.default;
			}
		});
	}
	if (!content) throw error(404, 'Post not found');
	return {
		title,
		date,
		content
	};
}
