import { notFound } from 'next/navigation';
import { blogPosts } from '@/features/blog/data';
import { FinalCTASection } from '@/components/sections/homepage/FinalCTASection';
import { Link } from '@/i18n/routing';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const ArrowIcon = dir === 'rtl' ? ArrowRight : ArrowLeft;

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          
          <div className="mb-10">
            <Link href="/blog" className="flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500">
               <ArrowIcon className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
               Back to Blog
            </Link>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl font-heading">
            {post.title}
          </h1>
          
          <div className="mt-4 flex items-center gap-x-4 text-xs">
             <time dateTime={post.date} className="text-gray-500">
                {post.date}
             </time>
             <span className="relative z-10 rounded-full bg-secondary-50 px-3 py-1.5 font-medium text-secondary-600">
                {post.category}
             </span>
             <span className="text-gray-500">By {post.author}</span>
          </div>

          <img
            src={post.imageUrl}
            alt={post.title}
            className="mt-10 aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
          />

          <div className="mt-10 max-w-2xl">
            <p className="text-lg leading-8 text-secondary-600">
              {/* Mock Content */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-6 text-base leading-7 text-secondary-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h2 className="mt-10 text-2xl font-bold tracking-tight text-primary-900">Key Takeaways</h2>
            <ul className="mt-6 list-disc pl-5 space-y-2 text-base leading-7 text-secondary-600">
               <li>Detailed cost analysis is crucial.</li>
               <li>Automated tools reduce human error by 40%.</li>
               <li>Real-time data enables agile decision making.</li>
            </ul>
             <p className="mt-6 text-base leading-7 text-secondary-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>

        </div>
      </div>
      <FinalCTASection />
    </>
  );
}
