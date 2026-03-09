    import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { blogPosts } from '@/features/blog/data';
import { FinalCTASection } from '@/components/sections/homepage/FinalCTASection';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.blog' });

  return {
    title: t('title'),
    description: t('desc'),
  };
}

export default async function BlogListingPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'BlogPage'});
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl font-heading">
              {t('title')}
            </h2>
            <p className="mt-2 text-lg leading-8 text-secondary-600">
              {t('subtitle')}
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {t('publishedOn')} {post.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-secondary-50 px-3 py-1.5 font-medium text-secondary-600 hover:bg-secondary-100">
                      {post.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-primary-900 group-hover:text-gray-600 font-heading">
                      <Link href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-secondary-600">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <FinalCTASection />
    </>
  );
}
