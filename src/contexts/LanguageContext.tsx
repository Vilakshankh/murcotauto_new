'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Navigation
    'nav.home': 'HOME',
    'nav.aboutUs': 'ABOUT US',
    'nav.benefits': 'BENEFITS',
    'nav.howItWorks': 'HOW IT WORKS',
    'nav.blog': 'BLOG',
    'nav.contactUs': 'CONTACT US',
    'nav.sellNow': 'SELL NOW',
    'nav.readyToSell': 'Ready to sell!',
    'nav.home.mobile': 'Home',
    'nav.howItWorks.mobile': 'How it Works?',
    'nav.aboutUs.mobile': 'About Us',
    'nav.faqs.mobile': 'FAQs',
    'nav.blog.mobile': 'Blog',

    // Hero Section
    'hero.title': 'Selling your car,\nmade easy!',
    'hero.description': 'Ready to sell your car? Get a fast, no-obligation quote from Murcot Auto in just minutes. Whether it\'s financed, leased, or needs a little work — we make it easy.',
    'hero.getStarted': 'Get Started',

    // About Section
    'about.title': 'About Us',
    'about.description': 'Murcot Auto was founded in 1993, starting in the heart of the used car wholesale world — buying and selling vehicles through auctions and between dealers across Canada. Over time, we built strong ties with dealerships, exporters, and buyers, becoming a trusted name nationwide.\n\nIn the last 10+ years, we expanded to buy directly from the public, helping thousands of sellers get top value without the pressure, trade-in tactics, or wasted time of private sales.\n\n',
    'about.tagline': 'Straightforward. Experienced. Trusted since 1993.',

    // Benefits Section
    'benefits.title': 'Our Benefits',
    'benefits.efficient.title': 'Efficient',
    'benefits.efficient.description': 'Get a firm offer in minutes and complete the sale quickly — no long waits, no drawn-out negotiations.',
    'benefits.secure.title': 'Secure',
    'benefits.secure.description': 'Get paid safely with no risk — no dealing with strangers or unreliable payment methods. We handle everything, including paperwork and loan payoffs. You just hand us the keys!',
    'benefits.hassleFree.title': 'Hassle-Free',
    'benefits.hassleFree.description': 'We come to you, pick up the vehicle, and take care of everything — no stress, no pressure.',

    // How It Works Section
    'howItWorks.title': 'Selling Your Vehicle to Murcot Auto is Easy',
    'howItWorks.step1.title': 'Tell Us About Your Vehicle',
    'howItWorks.step1.description': 'Fill out our quick online form with your vehicle\'s details. It only takes a minute — and the more info and photos you provide, the more accurate our offer will be.',
    'howItWorks.step2.title': 'Get a Cash Offer Fast',
    'howItWorks.step2.description': 'We review your submission and send you a competitive, no-obligation offer — usually within the hour. No pressure, no games.',
    'howItWorks.step3.title': 'Free Pickup or Dealership Coordination',
    'howItWorks.step3.description': 'We\'ll come to you — at home, work, or even your dealership if you\'re trading in for a new car.',

    // Vehicle Intake Section
    'vehicleIntake.title': 'Get a quote for your vehicle today!',
    'vehicleIntake.vehicleInfo': 'Vehicle information',
    'vehicleIntake.contactInfo': 'Contact information',
    'vehicleIntake.year': 'YEAR',
    'vehicleIntake.make': 'MAKE',
    'vehicleIntake.model': 'MODEL',
    'vehicleIntake.kilometers': 'KILOMETER',
    'vehicleIntake.vin': 'VIN',
    'vehicleIntake.fullName': 'FULL NAME',
    'vehicleIntake.phoneNumber': 'PHONE NUMBER',
    'vehicleIntake.emailAddress': 'EMAIL ADDRESS',
    'vehicleIntake.selectOption': 'Select an option',
    'vehicleIntake.select': 'Select',
    'vehicleIntake.typeHere': 'type here',
    'vehicleIntake.km': 'KM',
    'vehicleIntake.submitForm': 'Submit form',
    'vehicleIntake.submitting': 'Submitting...',
    'vehicleIntake.successMessage': 'Thank you! Your vehicle quote request has been submitted successfully. We\'ll contact you soon!',
    'vehicleIntake.errorMessage': 'Failed to submit form. Please try again.',
    'vehicleIntake.networkError': 'Network error. Please check your connection and try again.',

    // Why Sell Section
    'whySell.title': 'Why sell to\nMurcot Auto?',
    'whySell.sellWithConfidence': 'Sell with Confidence',
    'whySell.trustedSince': 'Trusted by Sellers Since 1993',
    'whySell.experience': 'Over 30 years of proven experience in vehicle buying.',
    'whySell.servingRegions': 'Serving All of Quebec and Ontario',
    'whySell.localEverywhere': 'We\'re local, and we\'re everywhere you need us to be.',
    'whySell.getStarted': 'Get Started',

    // Video Section
    'video.howItWorks': 'How it Works?',
    'video.watchOurVideo': 'Watch Our Video',

    // Reviews Section
    'reviews.title': 'What they say about us!',
    'reviews.viewMore': 'View More Reviews',

    // Contact Section
    'contact.dropUsALine': 'Drop Us a Line',
    'contact.description': 'We are always looking to buy your vehicle!',
    'contact.getInTouch': 'Get in Touch',
    'contact.treatLikeFamily': 'Murcot Auto treats you like family — that\'s why so many trust us to sell their car with ease.',
    'contact.followUs': 'Follow Us',
    'contact.email': 'Email *',
    'contact.name': 'Name *',
    'contact.message': 'Message *',
    'contact.emailPlaceholder': 'Your email',
    'contact.namePlaceholder': 'Your name',
    'contact.messagePlaceholder': 'Drop us a line',
    'contact.send': 'Send',
    'contact.sending': 'Sending...',
    'contact.successMessage': 'Thank you! Your message has been sent successfully. We\'ll get back to you soon!',
    'contact.errorMessage': 'Failed to send message. Please try again.',
    'contact.networkError': 'Network error. Please check your connection and try again.',
    'contact.emailRequired': 'Email is required',
    'contact.emailInvalid': 'Please enter a valid email address',
    'contact.nameRequired': 'Name is required',
    'contact.nameMinLength': 'Name must be at least 2 characters',
    'contact.messageRequired': 'Message is required',
    'contact.messageMinLength': 'Message must be at least 10 characters',
    'contact.phone': '+1 514 927 1539',
    'contact.emailAddress': 'info@murcotauto.com',
    'contact.linkedin': 'LinkedIn',
    'contact.instagram': 'Instagram',
    'contact.facebook': 'Facebook',

    // FAQ Section
    'faq.title': '🙋‍♂️ Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know about selling your vehicle with Murcot Auto — fast, fair, and fully transparent.',
    'faq.howItWorks': '🔄 How It Works',
    'faq.paymentLoans': '💰 Payment & Loans',
    'faq.registrationPaperwork': '🛑 Registration & Paperwork',
    'faq.vehicleTypesLocations': '🚗 Vehicle Types & Locations',
    'faq.canadaWideDistribution': '🌎 Canada-Wide Distribution & U.S. Export',
    'faq.whyWePayMore': '📈 Why We Can Pay More',

    // Footer Section
    'footer.satisfiedCustomers': '200,000\nsatisfied customers\nsince 1993',
    'footer.description': 'We\'ve tailored our services to provide the best experience for our customers since day 1.',
    'footer.emailPlaceholder': 'Your email',
    'footer.subscribe': 'Subscribe',
    'footer.about': 'About',
    'footer.benefits': 'Benefits',
    'footer.contact': 'Contact',
    'footer.resources': 'Resources',
    'footer.howItWorks': 'How it works',
    'footer.faq': 'FAQ',
    'footer.blog': 'Blog',
    'footer.sellNow': 'SELL NOW',

    // Blog Section
    'blog.title': 'Murcot Auto Blog',
    'blog.subtitle': 'Expert tips, industry insights, and helpful guides for selling your car with ease and confidence.',
    'blog.featured': 'FEATURED',
    'blog.readFullArticle': 'Read Full Article →',
    'blog.allArticles': 'All Articles',
    'blog.mostRecent': 'Most Recent',
    'blog.mostPopular': 'Most Popular',
    'blog.oldestFirst': 'Oldest First',
    'blog.readMore': 'Read More →',
    'blog.stayUpdated': 'Stay Updated with Car Selling Tips',
    'blog.newsletterDescription': 'Get the latest articles, market insights, and expert tips delivered straight to your inbox.',
    'blog.enterEmail': 'Enter your email',
    'blog.subscribeNewsletter': 'Subscribe',

    // Recent Posts
    'recentPosts.title': 'Recent Posts',
    'recentPosts.subtitle': 'Stay up to date with the latest car selling tips, market insights, and industry news.',
    'recentPosts.seeAllPosts': 'See All Posts',
  },
  fr: {
    // Navigation
    'nav.home': 'ACCUEIL',
    'nav.aboutUs': 'À PROPOS',
    'nav.benefits': 'AVANTAGES',
    'nav.howItWorks': 'COMMENT ÇA MARCHE',
    'nav.blog': 'BLOG',
    'nav.contactUs': 'CONTACTEZ-NOUS',
    'nav.sellNow': 'VENDEZ MAINTENANT',
    'nav.readyToSell': 'Prêt à vendre!',
    'nav.home.mobile': 'Accueil',
    'nav.howItWorks.mobile': 'Comment ça marche?',
    'nav.aboutUs.mobile': 'À propos',
    'nav.faqs.mobile': 'FAQ',
    'nav.blog.mobile': 'Blog',

    // Hero Section
    'hero.title': 'Vendre votre voiture,\nrendu facile!',
    'hero.description': 'Prêt à vendre votre voiture? Obtenez une soumission rapide et sans obligation de Murcot Auto en quelques minutes seulement. Qu\'elle soit financée, louée ou qu\'elle ait besoin de réparations — nous rendons les choses faciles.',
    'hero.getStarted': 'Commencer',

    // About Section
    'about.title': 'À Propos de Nous',
    'about.description': 'Murcot Auto a été fondée en 1993, commençant au cœur du monde de la vente en gros de voitures usagées — achetant et vendant des véhicules par le biais d\'enchères et entre concessionnaires à travers le Canada. Au fil du temps, nous avons établi des liens solides avec les concessionnaires, les exportateurs et les acheteurs, devenant un nom de confiance à l\'échelle nationale.\n\nAu cours des 10+ dernières années, nous avons élargi nos services pour acheter directement du public, aidant des milliers de vendeurs à obtenir la meilleure valeur sans la pression, les tactiques d\'échange ou le temps perdu des ventes privées.\n\n',
    'about.tagline': 'Direct. Expérimenté. De confiance depuis 1993.',

    // Benefits Section
    'benefits.title': 'Nos Avantages',
    'benefits.efficient.title': 'Efficace',
    'benefits.efficient.description': 'Obtenez une offre ferme en quelques minutes et complétez la vente rapidement — pas d\'attentes prolongées, pas de négociations interminables.',
    'benefits.secure.title': 'Sécurisé',
    'benefits.secure.description': 'Soyez payé en toute sécurité sans risque — pas besoin de traiter avec des étrangers ou des méthodes de paiement peu fiables. Nous nous occupons de tout, y compris la paperasserie et le remboursement des prêts. Vous n\'avez qu\'à nous remettre les clés!',
    'benefits.hassleFree.title': 'Sans Tracas',
    'benefits.hassleFree.description': 'Nous venons à vous, récupérons le véhicule et nous occupons de tout — aucun stress, aucune pression.',

    // How It Works Section
    'howItWorks.title': 'Vendre Votre Véhicule à Murcot Auto est Facile',
    'howItWorks.step1.title': 'Parlez-nous de Votre Véhicule',
    'howItWorks.step1.description': 'Remplissez notre formulaire en ligne rapide avec les détails de votre véhicule. Cela ne prend qu\'une minute — et plus vous fournissez d\'informations et de photos, plus notre offre sera précise.',
    'howItWorks.step2.title': 'Obtenez une Offre en Espèces Rapidement',
    'howItWorks.step2.description': 'Nous examinons votre soumission et vous envoyons une offre compétitive et sans obligation — généralement dans l\'heure. Aucune pression, aucun jeu.',
    'howItWorks.step3.title': 'Ramassage Gratuit ou Coordination avec Concessionnaire',
    'howItWorks.step3.description': 'Nous venons à vous — à la maison, au travail, ou même chez votre concessionnaire si vous échangez pour une nouvelle voiture.',

    // Vehicle Intake Section
    'vehicleIntake.title': 'Obtenez une soumission pour votre véhicule aujourd\'hui!',
    'vehicleIntake.vehicleInfo': 'Informations du véhicule',
    'vehicleIntake.contactInfo': 'Informations de contact',
    'vehicleIntake.year': 'ANNÉE',
    'vehicleIntake.make': 'MARQUE',
    'vehicleIntake.model': 'MODÈLE',
    'vehicleIntake.kilometers': 'KILOMÈTRE',
    'vehicleIntake.vin': 'NIV',
    'vehicleIntake.fullName': 'NOM COMPLET',
    'vehicleIntake.phoneNumber': 'NUMÉRO DE TÉLÉPHONE',
    'vehicleIntake.emailAddress': 'ADRESSE COURRIEL',
    'vehicleIntake.selectOption': 'Sélectionnez une option',
    'vehicleIntake.select': 'Sélectionner',
    'vehicleIntake.typeHere': 'tapez ici',
    'vehicleIntake.km': 'KM',
    'vehicleIntake.submitForm': 'Soumettre le formulaire',
    'vehicleIntake.submitting': 'Soumission en cours...',
    'vehicleIntake.successMessage': 'Merci! Votre demande de soumission de véhicule a été soumise avec succès. Nous vous contacterons bientôt!',
    'vehicleIntake.errorMessage': 'Échec de la soumission du formulaire. Veuillez réessayer.',
    'vehicleIntake.networkError': 'Erreur réseau. Veuillez vérifier votre connexion et réessayer.',

    // Why Sell Section
    'whySell.title': 'Pourquoi vendre à\nMurcot Auto?',
    'whySell.sellWithConfidence': 'Vendez en Toute Confiance',
    'whySell.trustedSince': 'Approuvé par les Vendeurs Depuis 1993',
    'whySell.experience': 'Plus de 30 ans d\'expérience éprouvée dans l\'achat de véhicules.',
    'whySell.servingRegions': 'Desservant Tout le Québec et l\'Ontario',
    'whySell.localEverywhere': 'Nous sommes locaux, et nous sommes partout où vous avez besoin de nous.',
    'whySell.getStarted': 'Commencer',

    // Video Section
    'video.howItWorks': 'Comment ça marche?',
    'video.watchOurVideo': 'Regardez Notre Vidéo',

    // Reviews Section
    'reviews.title': 'Ce qu\'ils disent de nous!',
    'reviews.viewMore': 'Voir Plus d\'Avis',

    // Contact Section
    'contact.dropUsALine': 'Écrivez-nous',
    'contact.description': 'Nous cherchons toujours à acheter votre véhicule!',
    'contact.getInTouch': 'Contactez-nous',
    'contact.treatLikeFamily': 'Murcot Auto vous traite comme de la famille — c\'est pourquoi tant de personnes nous font confiance pour vendre leur voiture facilement.',
    'contact.followUs': 'Suivez-nous',
    'contact.email': 'Courriel *',
    'contact.name': 'Nom *',
    'contact.message': 'Message *',
    'contact.emailPlaceholder': 'Votre courriel',
    'contact.namePlaceholder': 'Votre nom',
    'contact.messagePlaceholder': 'Écrivez-nous',
    'contact.send': 'Envoyer',
    'contact.sending': 'Envoi en cours...',
    'contact.successMessage': 'Merci! Votre message a été envoyé avec succès. Nous vous répondrons bientôt!',
    'contact.errorMessage': 'Échec de l\'envoi du message. Veuillez réessayer.',
    'contact.networkError': 'Erreur réseau. Veuillez vérifier votre connexion et réessayer.',
    'contact.emailRequired': 'Le courriel est requis',
    'contact.emailInvalid': 'Veuillez entrer une adresse courriel valide',
    'contact.nameRequired': 'Le nom est requis',
    'contact.nameMinLength': 'Le nom doit contenir au moins 2 caractères',
    'contact.messageRequired': 'Le message est requis',
    'contact.messageMinLength': 'Le message doit contenir au moins 10 caractères',
    'contact.phone': '+1 514 927 1539',
    'contact.emailAddress': 'info@murcotauto.com',
    'contact.linkedin': 'LinkedIn',
    'contact.instagram': 'Instagram',
    'contact.facebook': 'Facebook',

    // FAQ Section
    'faq.title': '🙋‍♂️ Questions Fréquemment Posées',
    'faq.subtitle': 'Tout ce que vous devez savoir sur la vente de votre véhicule avec Murcot Auto — rapide, équitable et entièrement transparente.',
    'faq.howItWorks': '🔄 Comment Ça Marche',
    'faq.paymentLoans': '💰 Paiement et Prêts',
    'faq.registrationPaperwork': '🛑 Immatriculation et Paperasserie',
    'faq.vehicleTypesLocations': '🚗 Types de Véhicules et Emplacements',
    'faq.canadaWideDistribution': '🌎 Distribution Pan-Canadienne et Exportation É.-U.',
    'faq.whyWePayMore': '📈 Pourquoi Nous Payons Plus',

    // Footer Section
    'footer.satisfiedCustomers': '200 000\nclients satisfaits\ndepuis 1993',
    'footer.description': 'Nous avons adapté nos services pour offrir la meilleure expérience à nos clients depuis le premier jour.',
    'footer.emailPlaceholder': 'Votre courriel',
    'footer.subscribe': 'S\'abonner',
    'footer.about': 'À Propos',
    'footer.benefits': 'Avantages',
    'footer.contact': 'Contact',
    'footer.resources': 'Ressources',
    'footer.howItWorks': 'Comment ça marche',
    'footer.faq': 'FAQ',
    'footer.blog': 'Blog',
    'footer.sellNow': 'VENDEZ MAINTENANT',

    // Blog Section
    'blog.title': 'Blog Murcot Auto',
    'blog.subtitle': 'Conseils d\'experts, aperçus de l\'industrie et guides utiles pour vendre votre voiture avec facilité et confiance.',
    'blog.featured': 'VEDETTE',
    'blog.readFullArticle': 'Lire l\'Article Complet →',
    'blog.allArticles': 'Tous les Articles',
    'blog.mostRecent': 'Plus Récents',
    'blog.mostPopular': 'Plus Populaires',
    'blog.oldestFirst': 'Plus Anciens d\'Abord',
    'blog.readMore': 'Lire Plus →',
    'blog.stayUpdated': 'Restez Informé des Conseils de Vente d\'Auto',
    'blog.newsletterDescription': 'Recevez les derniers articles, aperçus du marché et conseils d\'experts directement dans votre boîte de réception.',
    'blog.enterEmail': 'Entrez votre courriel',
    'blog.subscribeNewsletter': 'S\'abonner',

    // Recent Posts
    'recentPosts.title': 'Articles Récents',
    'recentPosts.subtitle': 'Restez à jour avec les derniers conseils de vente d\'automobile, aperçus du marché et nouvelles de l\'industrie.',
    'recentPosts.seeAllPosts': 'Voir Tous les Articles',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
