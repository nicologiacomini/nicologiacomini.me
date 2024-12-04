// src/lib/generate-rss.ts
import RSS from 'rss';
import fs from 'fs/promises';
import path from 'path';
import { getAllPosts } from './posts'; // Make sure this matches exactly

export default async function generateRssFeed() {
  const site_url = 'https://nicologiacomini.me';

  const feedOptions = {
    title: 'Your Blog Name',
    description: 'Latest blog posts and updates',
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    language: 'en',
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  // Fetch all posts
  const posts = await getAllPosts();

  // Add items to the feed
  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.summary, // Or summary if you prefer
      date: post.date,
      url: `${site_url}/posts/${post.postId}`,
    });
  });

  // Ensure public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  await fs.mkdir(publicDir, { recursive: true });

  // Write RSS feed to file
  const rssXml = feed.xml({ indent: true });
  await fs.writeFile(path.join(publicDir, 'rss.xml'), rssXml);

  console.log('RSS feed generated successfully');
}