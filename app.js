require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 4000;

// Sécurité HTTP
app.use(helmet());

// Parser les cookies
app.use(cookieParser());

// Définir le dossier public pour les fichiers statiques (CSS, images, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Définir EJS comme moteur de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true })); // Pour parser les formulaires

// Middleware pour gérer les langues
app.use((req, res, next) => {
  // Récupérer la langue depuis l'URL ou les cookies
  const lang = req.query.lang || req.cookies?.lang || 'fr';
  
  // Lire les traductions
  fs.readFile(path.join(__dirname, 'data', 'translations.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur lecture traductions:', err);
      req.translations = {};
      req.lang = 'fr';
    } else {
      const translations = JSON.parse(data);
      req.translations = translations[lang] || translations['fr'];
      req.lang = lang;
      
      // Définir le cookie de langue
      res.cookie('lang', lang, { maxAge: 365 * 24 * 60 * 60 * 1000 }); // 1 an
    }
    next();
  });
});

// Exemple de route pour la page d'accueil
app.get('/', (req, res) => {
  res.render('index', {
    title: req.translations.home?.title || 'Sogno - Magasin de Tiramisu',
    t: req.translations,
    lang: req.lang
  });
});

// Route pour le menu
app.get('/menu', (req, res) => {
  fs.readFile(path.join(__dirname, 'data', 'products.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Erreur chargement menu');
    }
    const products = JSON.parse(data);
    res.render('menu', { 
      title: 'Notre Menu - Sogno', 
      products,
      t: req.translations,
      lang: req.lang
    });
  });
});

// Route pour la page Notre Histoire
app.get('/histoire', (req, res) => {
  res.render('histoire', { 
    title: req.translations.story?.title || 'Notre Histoire - Sogno',
    t: req.translations,
    lang: req.lang
  });
});

// Route pour la page de contact
app.get('/contact', (req, res) => {
  res.render('contact', { 
    title: 'Contact - Sogno', 
    message: null, 
    error: null,
    t: req.translations,
    lang: req.lang
  });
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.render('contact', { 
      title: 'Contact - Sogno', 
      message: null, 
      error: req.translations.home?.contact_error || 'Tous les champs sont obligatoires.',
      t: req.translations,
      lang: req.lang
    });
  }
  // Ici, tu pourrais envoyer un email ou stocker le message
  res.render('contact', { 
    title: 'Contact - Sogno', 
    message: req.translations.home?.contact_success || 'Merci pour votre message, nous vous répondrons rapidement !', 
    error: null,
    t: req.translations,
    lang: req.lang
  });
});

// Route pour les mentions légales
app.get('/legal', (req, res) => {
  res.render('legal', { 
    title: req.translations.legal?.title || 'Mentions légales - Sogno',
    t: req.translations,
    lang: req.lang
  });
});

// Route pour les CGV
app.get('/cgv', (req, res) => {
  res.render('cgv', { 
    title: req.translations.legal?.cgv_title || 'CGV - Sogno',
    t: req.translations,
    lang: req.lang
  });
});

// Route pour la politique de confidentialité
app.get('/privacy', (req, res) => {
  res.render('privacy', { 
    title: req.translations.legal?.privacy_title || 'Politique de confidentialité - Sogno',
    t: req.translations,
    lang: req.lang
  });
});

// Route pour la page des logos animés
app.get('/logos', (req, res) => {
  const logos = [
    { path: '/images/sogno.jpeg', alt: 'Logo Sogno' },
    { path: '/images/tiramisu-classique.webp', alt: 'Tiramisu Classique' },
    { path: '/images/tiramisu-pistache.webp', alt: 'Tiramisu Pistache' }
  ];
  res.render('logos', { 
    title: 'Logos Animés - Sogno', 
    logos,
    t: req.translations,
    lang: req.lang
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
}); 