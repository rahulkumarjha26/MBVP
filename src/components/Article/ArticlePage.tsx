import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useParams, Link } from "react-router-dom";
import { getArticleBySlug, articles } from "@/content/articles";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container px-4 py-20">
          <h2 className="text-2xl font-bold">Article not found</h2>
          <p className="mt-4">
            We couldn't find the article you're looking for.
          </p>
          <Link
            to="/blog"
            className="mt-6 inline-block text-primary font-semibold"
          >
            Back to blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-yellow-100 text-sm">
            {article.categoryDisplay}
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {article.title}
          </h1>

          <div className="flex items-center text-sm text-foreground/60 mb-6 space-x-3">
            <div className="font-semibold">{article.author.name}</div>
            <span>•</span>
            <div>{article.date}</div>
            <span>•</span>
            <div>{article.readTime}</div>
          </div>

          <p className="italic border-l-4 border-orange-300 pl-4 mb-6">
            {article.excerpt}
          </p>

          <div className="mb-6">
            <img
              src={article.featuredImage}
              alt={article.title}
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
            {article.imageCaption && (
              <div className="text-sm text-foreground/70 italic mt-2">
                {article.imageCaption}
              </div>
            )}
          </div>

          {/* Use react-markdown to render markdown sections properly (bold, links, tables, lists) */}
          <article className="prose max-w-none">
            {article.content.sections.map((s, idx) => {
              if (s.type === "heading2")
                return (
                  <h2
                    key={idx}
                    className="text-2xl text-green-800 mt-8 mb-3 border-t pt-4"
                  >
                    {s.text}
                  </h2>
                );
              if (s.type === "heading3")
                return (
                  <h3 key={idx} className="text-lg text-orange-600 mt-6 mb-2">
                    {s.text}
                  </h3>
                );
              if (s.type === "paragraph")
                return (
                  <div key={idx} className="text-base leading-7">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {s.text}
                    </ReactMarkdown>
                  </div>
                );
              if (s.type === "list")
                return (
                  <ul key={idx} className="list-disc ml-6 space-y-2">
                    {s.items.map((it, i) => (
                      <li key={i} className="text-base leading-7">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {it}
                        </ReactMarkdown>
                      </li>
                    ))}
                  </ul>
                );
              if (s.type === "blockquote")
                return (
                  <blockquote
                    key={idx}
                    className="border-l-4 border-orange-300 pl-4 italic my-6"
                  >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {(s as any).text}
                    </ReactMarkdown>
                  </blockquote>
                );
              if (s.type === "highlightBox")
                return (
                  <div
                    key={idx}
                    className="bg-green-50 border-l-4 border-green-300 p-4 my-6"
                  >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {(s as any).text}
                    </ReactMarkdown>
                  </div>
                );
              if (s.type === "table")
                return (
                  <div key={idx} className="overflow-x-auto my-6">
                    <table className="w-full table-auto border-collapse">
                      <thead>
                        <tr className="bg-green-100">
                          {s.headers.map((h, i) => (
                            <th key={i} className="text-left p-2 font-semibold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {s.rows.map((r, ri) => (
                          <tr
                            key={ri}
                            className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}
                          >
                            {r.map((c, ci) => (
                              <td key={ci} className="p-2 align-top">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                  {c}
                                </ReactMarkdown>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );

              return null;
            })}
          </article>

          {/* Related and navigation. Provide UI fallbacks when data is missing. */}
          <div className="mt-10 border-t pt-6 flex flex-col md:flex-row md:justify-between gap-6">
            <div>
              <h4 className="font-semibold mb-2">Related articles</h4>
              <ul className="text-sm space-y-2">
                {// Use provided relatedArticles if present, otherwise pick up to 3 articles from same category
                (article.relatedArticles && article.relatedArticles.length > 0
                  ? article.relatedArticles
                  : articles
                      .filter(
                        (a) =>
                          a.category === article.category &&
                          a.slug !== article.slug
                      )
                      .slice(0, 3)
                      .map((a) => ({ title: a.title, slug: a.slug }))
                ).map((r) => (
                  <li key={r.slug}>
                    <Link
                      to={`/blog/${r.slug}`}
                      className="text-primary hover:underline"
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-sm">
              <div className="mb-2">Navigation</div>
              <div className="flex gap-4">
                {(() => {
                  // Use provided navigation if available; otherwise compute prev/next from articles ordering
                  const idx = articles.findIndex(
                    (a) => a.slug === article.slug
                  );
                  const prev = article.navigation?.previous
                    ? {
                        title: article.navigation.previous.title,
                        slug: article.navigation.previous.slug,
                      }
                    : idx > 0
                    ? {
                        title: articles[idx - 1].title,
                        slug: articles[idx - 1].slug,
                      }
                    : undefined;
                  const next = article.navigation?.next
                    ? {
                        title: article.navigation.next.title,
                        slug: article.navigation.next.slug,
                      }
                    : idx >= 0 && idx < articles.length - 1
                    ? {
                        title: articles[idx + 1].title,
                        slug: articles[idx + 1].slug,
                      }
                    : undefined;

                  return (
                    <>
                      {prev && (
                        <Link
                          to={`/blog/${prev.slug}`}
                          className="text-foreground/80 hover:underline"
                        >
                          ← {prev.title}
                        </Link>
                      )}
                      {next && (
                        <Link
                          to={`/blog/${next.slug}`}
                          className="ml-4 text-foreground/80 hover:underline"
                        >
                          {next.title} →
                        </Link>
                      )}
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
