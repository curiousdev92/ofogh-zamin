import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge, buttonVariants, Card, Container, Section } from "@/components/ui";
import { formatDate, getPosts, localize, type Post } from "@/lib/blog";
import { Locale } from "@/lib/i18n/config";
import { getDictionaries } from "@/lib/i18n/getDictionary";
import { localeHref } from "@/lib/i18n/href";
import type { BlogMessages, CommonMessages } from "@/lib/i18n/messages";
import { breadcrumbJsonLd, buildLocalizedMetadata } from "@/lib/i18n/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const t = (await getDictionaries(l, ["blog"])).blog as unknown as BlogMessages;
  return buildLocalizedMetadata({
    locale: l,
    pathname: "/blog",
    title: t.meta.title,
    description: t.meta.description,
  });
}

/** Article summary card. Renders once the client publishes posts. */
function PostCard({ post, locale, readMore }: { post: Post; locale: Locale; readMore: string }) {
  const title = localize(post.title, locale);
  const excerpt = localize(post.excerpt, locale);
  return (
    <Link
      href={localeHref(locale, `/blog/${post.slug}`)}
      className="group block focus-visible:outline-none"
    >
      <Card interactive className="flex h-full flex-col p-6 group-focus-visible:border-navy-900">
        <time
          dateTime={post.date}
          className="text-xs uppercase tracking-wide text-muted-foreground"
        >
          {formatDate(post.date, locale)}
        </time>
        <h2 className="mt-3 text-lg font-semibold text-foreground">{title}</h2>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-600">{excerpt}</p>
        <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold-700">
          {readMore}
        </span>
      </Card>
    </Link>
  );
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;
  const dicts = await getDictionaries(l, ["common", "blog"]);
  const common = dicts.common as unknown as CommonMessages;
  const t = dicts.blog as unknown as BlogMessages;

  const posts = getPosts();

  const breadcrumb = breadcrumbJsonLd(l, [
    { name: t.breadcrumb.home, pathname: "/" },
    { name: t.breadcrumb.blog, pathname: "/blog" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* Header */}
      <Section spacing="lg" className="border-b border-border">
        <Container>
          <Breadcrumbs
            locale={l}
            items={[{ label: t.breadcrumb.home, pathname: "/" }, { label: t.breadcrumb.blog }]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-700">
              {t.landing.eyebrow}
            </span>
            <h1 className="mt-2 text-4xl  uppercase tracking-tight sm:text-5xl">
              {t.landing.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-steel-600">{t.landing.subtitle}</p>
          </div>
        </Container>
      </Section>

      {/* Posts or coming-soon */}
      <Section spacing="lg">
        <Container>
          {posts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <PostCard key={p.slug} post={p} locale={l} readMore={t.readMore} />
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-xl border border-border bg-surface-muted p-10 text-center">
              <Badge variant="outline" className="mx-auto">
                {t.landing.eyebrow}
              </Badge>
              <h2 className="mt-5 text-2xl  uppercase tracking-tight">{t.empty.title}</h2>
              <p className="mt-4 text-steel-600">{t.empty.subtitle}</p>
              <Link
                href={localeHref(l, "/contact")}
                className={buttonVariants({ variant: "outline", className: "mt-8" })}
              >
                {common.actions.contactUs}
              </Link>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
