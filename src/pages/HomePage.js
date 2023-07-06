import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';

const HomePage = () => {
  useEffect(() => {
    const sendEmail = async () => {
      try {
        // Obtenir l'adresse IP du visiteur
        const { ip } = await fetch('https://api.ipify.org?format=json').then(response =>
          response.json()
        );

        // Obtenir les informations sur le pays à partir de l'adresse IP
        const { country } = await fetch(`https://ipapi.co/${ip}/country/`).then(response =>
          response.text()
        );

        const templateParams = {
          to_email: 'emmanuel.elbaz@gmail.com',
          ip: ip,
          country: country
        };

        await emailjs.send(
            'service_1wcvlfs',
            'template_77ojhsk',
            templateParams,
            '0rYsYu-aKtajMEdCw'
          );

        console.log('E-mail sent successfully!');
      } catch (error) {
        console.error('Error sending e-mail:', error);
      }
    };

    sendEmail();
  }, []);

  return (
    <div>
      <h1>Welcome to My Website</h1>
      <p>Thank you for visiting!</p>
    </div>
  );
};

export default HomePage;
