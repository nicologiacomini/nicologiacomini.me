import { getAllPostIds, getMetadataPost } from "@/lib/posts";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nicolò Giacomini | Posts'
}

export async function generateStaticParams(): Promise<{ postId: string }[]> {
  const postIds = await getAllPostIds();
  return postIds.map(({ params }) => ({ postId: params.postId })); // Extract postId from params
}

export default async function Posts() {
  // Get an array of { postId: string }
  const fileList = await generateStaticParams();

  // Fetch all post data
  let postList = await Promise.all(
    fileList.map(async (param) => {
      const post = await getMetadataPost(param.postId);
      return post;
    })
  );

  postList = postList.filter((post) => post.visible);
  postList.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div>
      <h1 className="my-10 mx-2 max-md:mx-4 font-[Onest-Black]">Posts</h1>
      {/* <hr className="h-px mx-1 max-md:mx-4 bg-gray-200 border-0 dark:bg-gray-500 mb-5 mt-2" /> */}

      {postList.map((post) => (
        <div key={post.title}>
          <a
            href={post.url}
            className="card block max-width max-md:mx-4 p-6 bg-background-button border border-border-card rounded-lg shadow-sm shadow-shadow-card hover:bg-hover-button mb-2 text-text-button"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              {post.title}
            </h5>
            {/* <p className="underline font-[Onest-Regular] text-text-subtitle underline-offset-4 decoration-[0.5px] mb-2">
              {post.literalDate}
            </p> */}
            <div className="flex mt-2 flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                <div className="mr-auto font-[Onest-Regular] rounded-full bg-background-date px-2 py-0.5 text-date-color mb-2">{post.literalDate}</div>
            </div>
            <p className="summary font-[Onest-Regular] text-text-subtitle">
              {post.summary}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
}
