import React from "react";
import ReactMarkdown from 'react-markdown'
// import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
// import rehypeSlug from 'rehype-slug';
import 'katex/dist/katex.min.css';
import rehypePrism from "rehype-prism-plus";
import '../style/code-style.css'
import { url } from "inspector";

export default function ClientMarkdown({ content }: { content: string }) {
    // const colorList: string = localStorage.getItem('theme') === 'light' ? '#1e88e5' : '#7fff00'
    return (
        <section>
        <div className='markdown leading-relaxed font-[Onest-Regular] text-justify max-md:mx-4'>
            <ReactMarkdown
                components={{
                    // ul: ({node, ...props}) => <ul style={{listStyleType: 'disc', listStylePosition: 'inside', paddingLeft: '10px'}} {...props} />,
                    // ol: ({node, ...props}) => <ol style={{listStyleType: 'decimal', listStylePosition: 'inside', paddingLeft: '10px'}} {...props} />
                }}
                remarkPlugins={[
                    // remarkGfm,
                    remarkMath
                ]}
                rehypePlugins={[
                    rehypeRaw,
                    rehypeKatex,
                    // rehypeSlug,
                    rehypePrism
                ]}
            >   
                    {content}
            </ReactMarkdown>
        </div>
        </section>
    )
}