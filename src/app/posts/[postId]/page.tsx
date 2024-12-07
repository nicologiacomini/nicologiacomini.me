import { getPostData, getLiteralDate, countWords } from '@/lib/posts';
import ClientMarkdown from '@/components/client-markdown';
import BackButton from '@/components/back-button';
import NameTab from '@/components/page-name';


export default async function PostPage(props: { params: Promise<{ postId: string }> }) {
    const params = await props.params;
    const { postId } = params;
    const post = await getPostData(postId);
    const nameTab = "Nicolò Giacomini | " + post.title

    return (
        <div>
            <NameTab nameTab={nameTab} />
            <BackButton/>
            <div className='text-4xl font-[Onest-Black] mt-10 mb-2 max-md:mx-4'>{post.title}</div>
            <div className="flex mt-4 flex-col space-y-3 text-md font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                <div className="mr-auto font-[Onest-Regular] rounded-full bg-background-date px-2 py-0.5 text-date-color mb-2 max-md:ml-4">{getLiteralDate(post.date)} - {countWords(post.content)} minutes</div>
            </div>
            <ClientMarkdown content={post.content}/>
        </div>
    );
}