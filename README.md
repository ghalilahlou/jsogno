# 🍰 Sogno - Magasin de Tiramisu

Un site web moderne et élégant pour Sogno, le paradis du tiramisu à Casablanca.

## ✨ Fonctionnalités

- 🎨 Design moderne et responsive
- 🌍 Support multilingue (Français/Anglais)
- 📱 Interface adaptée mobile
- ⚡ Animations fluides et optimisées
- 🔒 Sécurité renforcée avec Helmet
- ♿ Accessibilité améliorée

## 🚀 Installation

1. **Cloner le projet**
   ```bash
   git clone [url-du-repo]
   cd jsogno
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**
   ```bash
   cp .env.example .env
   # Éditer .env avec vos configurations
   ```

4. **Démarrer le serveur**
   ```bash
   npm start
   # ou pour le développement
   npm run dev
   ```

5. **Accéder au site**
   ```
   http://localhost:4000
   ```

## 📁 Structure du projet

```
jsogno/
├── app.js                 # Serveur Express principal
├── data/                  # Données JSON (produits, traductions)
├── public/                # Fichiers statiques
│   ├── css/              # Styles CSS
│   ├── js/               # Scripts JavaScript
│   └── images/           # Images du site
├── views/                # Templates EJS
│   ├── partials/         # Composants réutilisables
│   └── *.ejs            # Pages principales
└── package.json          # Dépendances et scripts
```

## 🛠️ Technologies utilisées

- **Backend**: Node.js, Express.js
- **Template Engine**: EJS
- **Frontend**: HTML5, CSS3, JavaScript vanilla
- **Sécurité**: Helmet.js
- **Développement**: Nodemon

## 🎯 Pages disponibles

- **Accueil** (`/`) - Page principale avec présentation
- **Menu** (`/menu`) - Catalogue des tiramisus
- **Notre Histoire** (`/histoire`) - Histoire de Sogno
- **Contact** (`/contact`) - Formulaire de contact
- **Mentions légales** (`/legal`) - Informations légales
- **CGV** (`/cgv`) - Conditions générales de vente
- **Confidentialité** (`/privacy`) - Politique de confidentialité

## 🌍 Internationalisation

Le site supporte le français et l'anglais. Les traductions sont stockées dans `data/translations.json`.

## 🔧 Scripts disponibles

- `npm start` - Démarre le serveur de production
- `npm run dev` - Démarre le serveur de développement avec Nodemon
- `npm test` - Lance les tests (à implémenter)

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## ♿ Accessibilité

- Navigation au clavier
- Contraste des couleurs optimisé
- Textes alternatifs pour les images
- Support des lecteurs d'écran
- Respect des préférences de réduction de mouvement

## 🔒 Sécurité

- Headers de sécurité avec Helmet
- Protection contre les injections
- Validation des entrées utilisateur
- Gestion sécurisée des cookies

## 📈 Performance

- Images optimisées (WebP)
- CSS et JS minifiés
- Lazy loading des images
- Animations optimisées

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence ISC.

## 📞 Contact

- **Site web**: [sogno.ma](https://sogno.ma)
- **Email**: contact@sogno.ma
- **Téléphone**: +212 6 00 00 00 00

---

Développé avec ❤️ pour Sogno