import { readFile, readdir } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import fs from 'fs/promises';

const postsDirectory = path.join(process.cwd(), 'src', '_posts');

interface PostData {
  title: string;
  date: string;
  content: string;
  postId: string;
}

interface MetadataPost {
  title: string;
  date: string;
  postId: string;
  summary: string;
  visible: boolean;
  url: string;
  literalDate: string;
}

export function getLiteralDate(dateString: string) {
  const date = new Date(dateString)

  const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
  };

  const formattedDate = date.toLocaleDateString('en-US', options);

  const day = date.getDate();
  const suffix = (day === 1 || day === 21 || day === 31) ? 'st' :
      (day === 2 || day === 22) ? 'nd' :
      (day === 3 || day === 23) ? 'rd' : 'th';

  return `${formattedDate.replace(day.toString(), `${day}${suffix}`)}`;
}

export async function getAllPostIds() {
  const fileNames = await readdir(postsDirectory);
  return fileNames.map(fileName => ({
    params: {
      postId: fileName.split('.')[0],
    },
  }));
}

export async function getPostData(postId: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${postId}.md`);
  const fileContents = await readFile(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  // Validate and enforce the structure of the front matter data
  if (typeof matterResult.data.title !== 'string' || typeof matterResult.data.date !== 'string') {
    throw new Error(`Invalid front matter in post: ${postId}`);
  }

  return {
    postId,
    title: matterResult.data.title,
    date: matterResult.data.date,
    content: matterResult.content,
  };
}

export async function getMetadataPost(postId: string): Promise<MetadataPost> {
  const fullPath = path.join(postsDirectory, `${postId}.md`);
  const fileContents = await readFile(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  // Validate and enforce the structure of the front matter data
  if (typeof matterResult.data.title !== 'string' || typeof matterResult.data.date !== 'string') {
    throw new Error(`Invalid front matter in post: ${postId}`);
  }

  const urlPage = 'posts/'+postId
  const date = getLiteralDate(matterResult.data.date)

  return {
    postId,
    title: matterResult.data.title,
    date: matterResult.data.date,
    literalDate: date,
    summary: matterResult.data.summary,
    visible: matterResult.data.visible,
    url: urlPage
  };
}

export function countWords(str: string): number {
  const numWords = str.split(" ").length;
  return Math.ceil(numWords/200);
}

export async function getAllPosts(): Promise<MetadataPost[]> {
  try {
    // Read all files in the posts directory
    const fileNames = await fs.readdir(postsDirectory);

    // Filter only markdown files
    const markdownFiles = fileNames.filter(fileName => 
      fileName.endsWith('.md')
    );

    // Read and parse each markdown file
    const posts = await Promise.all(
      markdownFiles.map(async (fileName) => {
        const postId = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        
        // Read file contents
        const fileContents = await fs.readFile(fullPath, 'utf8');

        // Parse front matter
        const matterResult = matter(fileContents);

        // Validate front matter
        if (
          typeof matterResult.data.title !== 'string' || 
          typeof matterResult.data.date !== 'string'
        ) {
          console.warn(`Invalid front matter in post: ${postId}`);
          return null;
        }

        return {
          postId,
          title: matterResult.data.title,
          date: matterResult.data.date,
          summary: matterResult.data.summary,
        };
      })
    );

    // Filter out any null entries (invalid posts)
    return posts.filter((post): post is MetadataPost => post !== null);

  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}