import * as React from 'react';

export const onGalleryTxt =
  'Daiekhi Sewa Samaj is a non-profit organization that is dedicated to improving the lives of people by providing essential services';

export const onMissionHighlight =
  'Our mission is to provide innovative and reliable development and service solutions that exceed customer expectations. We strive to empower businesses and individuals by leveraging the latest technologies and methodologies, while maintaining the highest standards of quality and integrity. Our commitment to excellence is reflected in everything we do, from our products and services to our people and partnerships. At DaileKhi Sewa Samaj, we are dedicated to delivering exceptional value and creating long-lasting relationships with our customers.';

export const onVisionHighlight =
  'Our vision is to become a leading provider of development and service solutions that drive growth, innovation, and success for our customers. We aim to be recognized as a trusted partner and thought leader in the industry, delivering cutting-edge technologies and exceptional service experiences that set new standards for excellence.';

export const onGoalHighlight =
  'As a leading provider of development and service solutions, Dailekhi Sewa Samaj is committed to delivering exceptional value and personalized service to our customers. We prioritize customer needs, maintain high standards of quality and integrity, and foster long-lasting relationships with our clients. Our team of experts works tirelessly to provide innovative and reliable solutions that empower businesses and individuals to achieve their goals, and we are dedicated to becoming a trusted partner and thought leader in the industry.';

export const onNormsHighlight =
  'As a leading development and service provider, Dailekhi Sewa Samaj is committed to staying up-to-date with the latest technologies and methodologies. Our team of experts works tirelessly to provide innovative and reliable solutions that empower businesses and individuals to achieve their goals. We prioritize customer satisfaction by exceeding their expectations with personalized service experiences, and we hold ourselves accountable for maintaining high standards of quality and integrity in everything we do. By adhering to our vision, goals, and norms, we strive to become a trusted partner and thought leader in the industry, driving growth, innovation, and success for our customers.';

// Shakes the input fields with invalid values.
export const shakeInputs = () => {
  const inputs = document.querySelectorAll(
    'input[type="text"], input[type="email"], input[type="password"], textarea'
  );
  inputs.forEach((input) => {
    if (input.value.trim() === '') {
      input.classList.add('animate-shake');
      setTimeout(() => {
        input.classList.remove('animate-shake');
      }, 500);
    }
  });
};
