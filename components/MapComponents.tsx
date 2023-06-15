import React from 'react';
import { useEffect } from 'react';

const MapComponent = () => {
  const url =
    'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d441.54953600376456!2d85.3286393282418!3d27.70504817949236!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1684654427791!5m2!1sen!2snp';

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d441.54953600376456!2d85.3286393282418!3d27.70504817949236!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1684654427791!5m2!1sen!2snp';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div>
      <iframe
        src={url}
        width="100%"
        height="350"
        style={{ border: '0' }}
        allowFullScreen={false}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapComponent;
