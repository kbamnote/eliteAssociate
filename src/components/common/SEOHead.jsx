import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "Best Training and Placement Institute | Elite Associate - 100% Job Placement",
  description = "Elite Associate is the top IT training and placement institute offering job-ready courses with 100% placement assistance. Join India's best training institute for guaranteed career success.",
  keywords = "Best Training and Placement Institute, Job Ready Courses, Elite Placement, Top IT Training Institute, 100% Placement Assistance",
  image = "https://www.eliteassociate.in/og-image.jpg",
  url = "https://www.eliteassociate.in/",
  type = "website",
  structuredData = null
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Elite Associate" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;