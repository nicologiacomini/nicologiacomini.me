import generateRssFeed from '../src/lib/generate-rss.ts';

async function buildRssFeed() {
  try {
    await generateRssFeed();
    console.log('✅ RSS Feed generated successfully');
  } catch (error) {
    console.error('❌ Error generating RSS feed:', error);
    process.exit(1);
  }
}

buildRssFeed();