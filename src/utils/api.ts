/**
 * API utility for inxt-website
 * Handles communication with the backend for blogs, news, white papers, webinars, and newsletters.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5002/api';

interface ApiResponse<T> {
  success: boolean;
  data: T;
  pagination?: {
    total: number;
    page: number;
    pages: number;
    limit: number;
  };
  message?: string;
}

/**
 * Generic fetch wrapper
 */
async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      next: { revalidate: 3600, ...options.next }, // Default revalidation
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const contentType = response.headers.get('content-type');
    let result: any = {};

    if (contentType && contentType.includes('application/json')) {
      const text = await response.text();
      result = text ? JSON.parse(text) : {};
    } else if (!response.ok) {
      // Handle non-JSON error response
      throw new Error(`API returned ${response.status}: ${response.statusText}`);
    }

    if (!response.ok) {
      throw new Error(result.message || `API request failed with status ${response.status}`);
    }

    return result;
  } catch (error: any) {
    // Check if it's a connection error (common during build)
    const isConnRefused = error.message?.includes('ECONNREFUSED') || error.cause?.code === 'ECONNREFUSED';
    
    if (isConnRefused) {
      console.warn(`[API Warning] Connection refused to ${url}. This usually happens when the backend server is not running during build. Returning empty response.`);
      // Return a "success: false" but valid response structure to prevent crashing the build
      return { 
        success: false, 
        data: null as unknown as T, 
        message: 'Connection refused' 
      } as ApiResponse<T>;
    } else {
      console.error(`API Error (${endpoint}):`, error.message);
    }
    
    throw error;
  }
}

/**
 * Resolve media URL from backend
 */
export const resolveMediaUrl = (path?: string) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  
  // Backend serves static files from /uploads
  const baseUrl = API_BASE_URL.replace('/api', '');
  return `${baseUrl}${path.startsWith('/') ? '' : '/'}${path}`;
};

export interface BaseContent {
  _id: string;
  title: string;
  slug: string;
  featuredImage?: string;
  content?: string;
  excerpt?: string;
  blocks?: any[];
  category?: string;
  tags?: string[];
  author?: string;
  status: 'draft' | 'published';
  publishDate: string;
  languageId?: any;
  createdAt: string;

  // SEO
  seoMetaTitle?: string;
  seoMetaDescription?: string;
  seoKeywords?: string[];
  canonicalUrl?: string;
}

// --- Blogs ---

export interface Blog extends BaseContent {
  readingTime?: number;
}

export const getBlogs = (lang: string = 'en', params: string = '') => 
  fetchAPI<Blog[]>(`/${lang}/blogs${params ? `?${params}` : ''}`);

export const getBlogById = (lang: string = 'en', id: string) => 
  fetchAPI<Blog>(`/${lang}/blogs/${id}`);

// --- News & Events ---

export interface NewsItem extends BaseContent {
  eventDate?: string;
  eventLocation?: string;
  category: 'news' | 'event';
}

export const getNews = (lang: string = 'en', params: string = '') => 
  fetchAPI<NewsItem[]>(`/${lang}/news${params ? `?${params}` : ''}`);

export const getNewsById = (lang: string = 'en', id: string) => 
  fetchAPI<NewsItem>(`/${lang}/news/${id}`);

// --- White Papers ---

export type WhitePaper = BaseContent;

export const getWhitePapers = (lang: string = 'en', params: string = '') => 
  fetchAPI<WhitePaper[]>(`/${lang}/white-papers${params ? `?${params}` : ''}`);

export const getWhitePaperById = (lang: string = 'en', id: string) => 
  fetchAPI<WhitePaper>(`/${lang}/white-papers/${id}`);

// --- Webinars ---

export type Webinar = BaseContent;

export const getWebinars = (lang: string = 'en', params: string = '') => 
  fetchAPI<Webinar[]>(`/${lang}/webinars${params ? `?${params}` : ''}`);

export const getWebinarById = (lang: string = 'en', id: string) => 
  fetchAPI<Webinar>(`/${lang}/webinars/${id}`);

// --- Newsletter ---

export interface NewsletterIssue {
  _id: string;
  title: string;
  featuredImage?: string;
  author?: string;
  description?: string;
  issueDate: string;
  documents?: {
    name: string;
    url: string;
    size: number;
    mimeType: string;
  }[];
  createdAt: string;
}

export const getNewsletterIssues = (lang: string = 'en', params: string = '') => 
  fetchAPI<NewsletterIssue[]>(`/${lang}/newsletter-issues/public${params ? `?${params}` : ''}`);

export const subscribeNewsletter = (lang: string = 'en', data: { name?: string; email: string; designation?: string; companyName?: string; languageId?: string }) => 
  fetchAPI<any>(`/${lang}/newsletter/subscribe`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
