import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { buttonVariants, Container, Section } from "@/components/ui";
import { formatDate, getPostBySlug, getPosts, localize } from "@/lib/blog";
import { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { localeHref } from "@/lib/i18n/href";
import type { BlogMessages } from "@/lib/i18n/messages";
import { articleJsonLd, breadcrumbJsonLd, buildLocalizedMetadata } from "@/lib/i18n/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

// Pre-render every published post; Next cross-products with each locale. Empty
// while there is no content — the route still 404s cleanly for unknown slugs.
export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const l = locale as Locale;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildLocalizedMetadata({
    locale: l,
    pathname: `/blog/${slug}`,
    title: localize(post.title, l),
    description: localize(post.excerpt, l),
  });
}

export default async function PostPage({ params }: Props) {
  const { locale, slug } = await params;
  const l = locale as Locale;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const t = (await getDictionary(l, "blog")) as unknown as BlogMessages;

  const title = localize(post.title, l);
  const excerpt = localize(post.excerpt, l);
  const postPath = `/blog/${slug}`;

  const breadcrumb = breadcrumbJsonLd(l, [
    { name: t.breadcrumb.home, pathname: "/" },
    { name: t.breadcrumb.blog, pathname: "/blog" },
    { name: title, pathname: postPath },
  ]);
  const article = articleJsonLd(l, {
    headline: title,
    description: excerpt,
    datePublished: post.date,
    pathname: postPath,
  });

  return (
    <>
      <JsonLd data={[breadcrumb, article]} />

      {/* Header */}
      <Section spacing="lg" className="border-b border-border">
        <Container>
          <Breadcrumbs
            locale={l}
            items={[
              { label: t.breadcrumb.home, pathname: "/" },
              { label: t.breadcrumb.blog, pathname: "/blog" },
              { label: title },
            ]}
          />
          <article className="mt-6 max-w-3xl">
            <time
              dateTime={post.date}
              className="text-xs uppercase tracking-wide text-muted-foreground"
            >
              {formatDate(post.date, l)}
            </time>
            <h1 className="mt-3 text-4xl  uppercase tracking-tight sm:text-5xl">{title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-steel-600">{excerpt}</p>
          </article>
        </Container>
      </Section>

      {/* Body */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-3xl space-y-6 text-base leading-relaxed text-steel-700">
            {post.body.map((para, i) => (
              <p key={i}>{localize(para, l)}</p>
            ))}
          </div>
          <div className="mt-12 max-w-3xl border-t border-border pt-8">
            <Link href={localeHref(l, "/blog")} className={buttonVariants({ variant: "link" })}>
              {t.backToBlog}
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
