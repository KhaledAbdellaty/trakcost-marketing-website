export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'digital-transformation-construction',
    title: 'The State of Digital Transformation in MENA Construction',
    excerpt: 'How leading contractors are using cloud ERPs to reduce costs and improve timeline accuracy in 2026.',
    date: '2026-01-15',
    author: 'Ahmed Hassan',
    category: 'Industry Trends',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000'
  },
  {
    slug: 'cost-control-best-practices',
    title: '5 Cost Control Best Practices for Mega Projects',
    excerpt: 'Learn how to prevent budget overruns by implementing real-time tracking and automated approval workflows.',
    date: '2026-01-10',
    author: 'Sarah Johnson',
    category: 'Finance',
    imageUrl: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1000'
  },
  {
    slug: 'procurement-efficiency',
    title: 'Streamlining Procurement: From RFQ to Delivery',
    excerpt: 'A guide to modernizing your supply chain and building stronger relationships with vendors.',
    date: '2026-01-05',
    author: 'Mohammed Ali',
    category: 'Operations',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000'
  }
];
