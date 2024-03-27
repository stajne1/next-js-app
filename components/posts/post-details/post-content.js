import ReactMarkdown from "react-markdown";
import { Prism } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import Image from "next/image";

export default function PostContent({ title, image, content, slug }) {
  const customRenderers = {
    img(image) {
      return (
        <div className={classes.image}>
          <Image
            src={`/images/posts/${slug}/${image.src}`}
            alt={image.alt}
            width={600}
            height={400}
          />
        </div>
      );
    },
    code(code) {
      const { language, children } = code;
      return (
        <Prism language={language} style={darcula}>
          {children}
        </Prism>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={`/images/posts/${slug}/${image}`} />
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  );
}
