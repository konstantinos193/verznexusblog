// pages/blog/[slug].js
import Head from 'next/head';

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://cms.framer.website/api/posts/${params.slug}`);
  const post = await res.json();
  return { props: { post } };
}

export default function BlogPost({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} | VerzNexus Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://yourdomain.com/blog/${post.slug}`} />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "image": [post.coverImage],
              "author": { "@type": "Person", "name": post.author },
              "datePublished": post.publishedAt,
              "description": post.excerpt,
            }),
          }}
        />
      </Head>
      <main>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </main>
    </>
  );
}