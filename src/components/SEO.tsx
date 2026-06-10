import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  noindex?: boolean;
  jsonLd?: Record<string, any> | Record<string, any>[];
}

export default function SEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "https://www.veneerdigital.co.za/assets/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  noindex = false,
  jsonLd,
}: SEOProps) {
  const currentOgTitle = ogTitle || title;
  const currentOgDescription = ogDescription || description;

  return (
    <Helmet>
      {/* HTML Language & Standard Elements */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Robots meta */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Canonical Link */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={currentOgTitle} />
      <meta property="og:description" content={currentOgDescription} />
      <meta property="og:image" content={ogImage} />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={currentOgTitle} />
      <meta name="twitter:description" content={currentOgDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
