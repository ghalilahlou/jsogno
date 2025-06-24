require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Sécurité HTTP
app.use(helmet());

// Définir le dossier public pour les fichiers statiques (CSS, images, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Définir EJS comme moteur de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true })); // Pour parser les formulaires

// Exemple de route pour la page d'accueil
app.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, 'data', 'products.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Erreur chargement menu');
    }
    const products = JSON.parse(data);
    res.render('onepage', { title: 'Accueil - Sogno Magasin de Tiramisu', products });
  });
});

// Route pour le menu
app.get('/menu', (req, res) => {
  fs.readFile(path.join(__dirname, 'data', 'products.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Erreur chargement menu');
    }
    const products = JSON.parse(data);
    res.render('menu', { title: 'Notre Menu - Sogno', products });
  });
});

// Route pour la page de contact
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact - Sogno', message: null, error: null });
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.render('contact', { title: 'Contact - Sogno', message: null, error: 'Tous les champs sont obligatoires.' });
  }
  // Ici, tu pourrais envoyer un email ou stocker le message
  res.render('contact', { title: 'Contact - Sogno', message: 'Merci pour votre message, nous vous répondrons rapidement !', error: null });
});

// Route pour les mentions légales
app.get('/legal', (req, res) => {
  res.render('legal', { title: 'Mentions légales - Sogno' });
});

// Route pour les CGV
app.get('/cgv', (req, res) => {
  res.render('cgv', { title: 'CGV - Sogno' });
});

// Route pour la politique de confidentialité
app.get('/privacy', (req, res) => {
  res.render('privacy', { title: 'Politique de confidentialité - Sogno' });
});

// Route pour la page des logos animés
app.get('/logos', (req, res) => {
  const logos = [
    { path: '/images/sogno.jpeg', alt: 'Logo Sogno' },
    { path: '/images/tiramisu-classique.webp', alt: 'Tiramisu Classique' },
    { path: '/images/tiramisu-pistache.webp', alt: 'Tiramisu Pistache' }
  ];
  res.render('logos', { title: 'Logos Animés - Sogno', logos });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
}); 