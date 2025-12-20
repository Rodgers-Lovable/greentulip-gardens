import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noIndex?: boolean;
}

const SEOHead = ({
  title = "GreenTulip Gardens - Premier Garden Venue in Meru, Kenya",
  description = "Premier garden venue in Meru, Kenya offering wedding ceremonies, picnics, accommodation, team building, and photography services in a stunning natural setting.",
  keywords = "garden venue, wedding venue Meru, Kenya events, picnics, accommodation Meru, team building, photography venue",
  image,
  url = "https://greentulip.co.ke/",
  type = "website",
  noIndex = false,
}: SEOHeadProps) => {
  const fullTitle = title.includes("GreenTulip Gardens") ? title : `${title} | GreenTulip Gardens`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="GreenTulip Gardens" />
      <meta property="og:locale" content="en_US" />
      {image && (
        <>
          <meta property="og:image" content={image} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default SEOHead;