import { Helmet } from 'react-helmet-async';
import { umamiConfig, umami } from '@/config/umami';
import { useEffect } from 'react';
import companyData from '@/data/company.json';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  noIndex?: boolean;
}

const SEOHead = ({
  title = companyData.company.seo.title,
  description = companyData.company.seo.description,
  keywords = companyData.company.seo.keywords.join(', '),
  url = companyData.company.contact.website,
  noIndex = false,
}: SEOHeadProps) => {
  const fullTitle = title.includes("GreenTulip Gardens") ? title : `${title} | GreenTulip Gardens`;

  // Initialize Umami when script loads
  useEffect(() => {
    if (umamiConfig.enabled) {
      const handleUmamiLoad = () => {
        umami.initialize();
      };

      // Check if Umami is already loaded
      if (window.umami) {
        handleUmamiLoad();
      } else {
        // Listen for script load
        window.addEventListener('umami:ready', handleUmamiLoad);
        return () => window.removeEventListener('umami:ready', handleUmamiLoad);
      }
    }
  }, []);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={url} />

      {/* Umami Analytics Script */}
      {umamiConfig.enabled && (
        <script
          async
          src={umamiConfig.scriptSrc}
          data-website-id={umamiConfig.websiteId}
          data-auto-track="true"
          onLoad={() => window.dispatchEvent(new Event('umami:ready'))}
        />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={companyData.company.seo.openGraph.title} />
      <meta property="og:description" content={companyData.company.seo.openGraph.description} />
      <meta property="og:type" content={companyData.company.seo.openGraph.type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={companyData.company.seo.openGraph.siteName} />
      <meta property="og:locale" content={companyData.company.seo.openGraph.locale} />
      <meta property="og:image" content={companyData.company.seo.openGraph.image} />
      <meta property="og:image:alt" content={companyData.company.seo.openGraph.imageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content={companyData.company.seo.twitter.card} />
      <meta name="twitter:title" content={companyData.company.seo.twitter.title} />
      <meta name="twitter:description" content={companyData.company.seo.twitter.description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={companyData.company.seo.twitter.image} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(companyData.company.seo.jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEOHead;