'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';
import { subscribeNewsletter } from '@/utils/api';
import { toast } from 'react-hot-toast';

interface NewsletterAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  newsletterId: string;
  newsletterTitle: string;
  pdfUrl?: string;
}

const NewsletterAccessModal = ({ isOpen, onClose, newsletterId, newsletterTitle, pdfUrl }: NewsletterAccessModalProps) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    companyName: '',
    email: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await subscribeNewsletter('en', {
        ...formData,
        // We can pass newsletterId if we want to track which one they accessed
      });
      
      toast.success('Thank you! The newsletter has been sent to your email.');
      
      // Optionally trigger download immediately too
      if (pdfUrl) {
          const link = document.createElement('a');
          link.href = pdfUrl;
          link.download = newsletterTitle + '.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      }
      
      onClose();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-secondary/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-[540px] overflow-hidden rounded-[30px] bg-white p-8 shadow-2xl sm:p-10"
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 text-secondary/40 transition-colors hover:text-secondary"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="mb-8">
              <h2 className="mb-2 text-secondary">
                Access Newsletter
              </h2>
              <p className="text-tagline-1 text-secondary/60 font-normal">
                Please provide your details to access the newsletter:
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-secondary">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-[14px] border border-stroke-1 bg-white px-5 py-4 text-secondary outline-none transition-all focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 placeholder:text-secondary/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-secondary">
                  Designation <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter your designation"
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  className="w-full rounded-[14px] border border-stroke-1 bg-white px-5 py-4 text-secondary outline-none transition-all focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 placeholder:text-secondary/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-secondary">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter your company name"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full rounded-[14px] border border-stroke-1 bg-white px-5 py-4 text-secondary outline-none transition-all focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 placeholder:text-secondary/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-secondary">
                  Company Email ID <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="email"
                  placeholder="Enter your company email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-[14px] border border-stroke-1 bg-white px-5 py-4 text-secondary outline-none transition-all focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 placeholder:text-secondary/30"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full px-8 py-3.5 text-sm font-medium text-secondary/60 transition-all hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  disabled={loading}
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-full bg-primary-500 px-10 py-3.5 text-sm font-normal text-white transition-all hover:bg-primary-600 disabled:opacity-70 dark:bg-primary-500"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterAccessModal;
