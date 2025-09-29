import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import BlogContent from '@/components/BlogContent';
import RecentPosts from '@/components/RecentPosts';

export default function SellingCarTips() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navigation />
      <div className="pt-32">
        <BlogContent />
        <RecentPosts />
      </div>
      <FooterSection />
    </div>
  );
}
