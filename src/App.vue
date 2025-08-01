<template>
  <body>
    <!-- Header --> 
    <header class="header">
        <div class="top-bar">
            <div class="container">
                <div class="contact-info">
                    <span><i class="fas fa-phone"></i> +229 01 97 72 22 13</span>
                    <span><i class="fas fa-envelope"></i>ongslt3@gmail.com</span>
                </div>
                <!-- <div class="social-links">
                    <a href="#"><i class="fab fa-tiktok"></i></a>
                    <a href="#"><i class="fab fa-x-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div> -->
                <div class="language-selector">
                    <select>
                        <option>Français</option>
                        <option>FR</option>
                    </select>
                </div>
            </div>
        </div>
        
        <nav class="navbar">
            <div class="container">
                <div class="logo">
                    <img src="https://via.placeholder.com/150x50/2E8B57/FFFFFF?text=ONG SLT" alt="ONG_SLT ">
                </div>
                <ul class="nav-menu">
                    <li><a href="#decouvrir">Accueil</a></li>
                    <li><a href="#activites">À propos</a></li>
                    <li><a href="#publications">Objectifs</a></li>
                    <li><a href="#opportunites">Missions</a></li>
                    <li><a href="#contact">Activités & Services</a></li>
                    <li><a href="#contact">Galerie</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                
            </div>
        </nav>
    </header>

    <!-- Hero Slider Section -->
    <section class="hero-slider">
        <div class="slider-container">
            <!-- Slide 1 -->
            <!-- <div class="slide active" style="background-image: url('https://via.placeholder.com/1920x600/2E8B57/FFFFFF?text=ONG SLT+Slider+1')">
                <div class="slide-content">
                    <div class="slide-text">
                        <h2>La Compagnie Béninoise de Production de Polypropylène (CBPP) met à disposition de la ONG SLT un lot de poubelles pour appuyer le tri dans les ecoles</h2>
                        <p>Le 30 janvier 2024, la ONG SLT SA a reçu un lot important de poubelles de la Compagnie béninoise de production de polypropylène (CBPP), dans le cadre du Programme d'éducation à l'écocitoyenneté en milieu scolaire (PEEMS).</p>
                        <a href="#" class="btn-primary">Voir l'évènement <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div> -->

            <div class="slide active" :style="{ backgroundImage: `url(${slide1})` }">
                <div class="slide-content">
                    <div class="slide-text">
                        <h2>La Compagnie Béninoise de Production de Polypropylène (CBPP) met à disposition de la ONG SLT un lot de poubelles pour appuyer le tri dans les ecoles</h2>
                        <p>Le 30 janvier 2024, la ONG SLT SA a reçu un lot important de poubelles de la Compagnie béninoise de production de polypropylène (CBPP), dans le cadre du Programme d'éducation à l'écocitoyenneté en milieu scolaire (PEEMS).</p>
                        <a href="#" class="btn-primary">Lire l'article <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>

            <!-- Slide 2 -->
            <div class="slide" :style="{ backgroundImage: `url(${slide2})` }">
                <div class="slide-content">
                    <div class="slide-text">
                        <h2>Journées Portes Ouvertes de la ONG SLT</h2>
                        <p>Du 30 janvier au 1er février 2025, la Société de gestion des déchets et de la salubrité (ONG SLT) a organisé des Journées Portes Ouvertes à l'Esplanade de l'Amazone, visant à sensibiliser le public à la gestion des déchets.</p>
                        <a href="#" class="btn-primary">Lire l'article <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>

            <!-- Slide 3 -->
            <div class="slide" :style="{ backgroundImage: `url(${slide3})` }">
                <div class="slide-content">
                    <div class="slide-text">
                        <h2>Octobre Rose: Ensemble contre le cancer du sein</h2>
                        <p>🩺 Le dépistage précoce est essentiel. Il augmente considérablement les chances de guérison. Prenez soin de vous en contactant un centre de santé pour un dépistage.</p>
                        <a href="#" class="btn-primary">Lire l'article <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>

            
        </div>

        <!-- Navigation Arrows -->
        <button class="slider-nav prev" id="prevBtn">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button class="slider-nav next" id="nextBtn">
            <i class="fas fa-chevron-right"></i>
        </button>

        <!-- Slider Indicators -->
        <div class="slider-indicators">
            <span class="indicator active" data-slide="0"></span>
            <span class="indicator" data-slide="1"></span>
            <span class="indicator" data-slide="2"></span>
        </div>
    </section>

    <!-- A propos -->
    <section class="about-section-new">
        <div class="container">
            <div class="about-grid">
                <!-- Colonne gauche - Contenu texte -->
                <div class="about-content-new">
                    <div class="about-badge">A PROPOS</div>
                    <div class="about-heading">
                        <div class="heading-line"></div>
                        <h2>ONG SAUVONS LA TERRE (SLT)</h2>
                    </div>
                    <p>L'ONG SAUVONS LA TERRE (SLT) œuvre pour la sécurisation foncière, l’équité sociale et le développement durable au Bénin. À travers des actions concrètes, nous luttons contre l’accaparement des terres, appuyons les populations locales, et renforçons la gouvernance foncière.</p>
                    <div class="about-buttons">
                        <a href="#" class="btn-outline">En savoir plus <i class="fas fa-arrow-right"></i></a>
                        <a href="#" class="btn-filled">Nous rejoindre</a>
                    </div>
                </div>
                
                <!-- Colonne droite - Image -->
                <div class="about-image">
                    <img src="@/assets/img/71531-removebg-preview.png" alt="Employé ONG SLT avec casque de sécurité">
                </div>
            </div>
        </div>
    </section>

    <!-- Objectifs -->
    <section class="objectives-section">
        <div class="container">
            <div class="objectives-header">
                <h2>NOS OBJECTIFS</h2>
                <div class="title-underline"></div>
            </div>
            
            <div class="objectives-grid">
                <!-- Objectif 1 -->
                <div class="objective-card">
                    <div class="objective-icon">👨‍🌾</div>
                    <h3>Accès à la propriété foncière</h3>
                    <p>Garantir l'accès équitable à la propriété foncière pour les femmes</p>
                </div>
                
                <!-- Objectif 2 -->
                <div class="objective-card">
                    <div class="objective-icon">🛡️</div>
                    <h3>Lutte contre l'accaparement</h3>
                    <p>Protéger les communautés locales contre l'accaparement des terres</p>
                </div>
                
                <!-- Objectif 3 -->
                <div class="objective-card">
                    <div class="objective-icon">📋</div>
                    <h3>Schémas directeurs</h3>
                    <p>Application rigoureuse des schémas directeurs d'aménagement</p>
                </div>
                
                <!-- Objectif 4 -->
                <div class="objective-card">
                    <div class="objective-icon">🤝</div>
                    <h3>Médiation foncière</h3>
                    <p>Faciliter la résolution pacifique des conflits fonciers</p>
                </div>
                
                <!-- Objectif 5 -->
                <div class="objective-card">
                    <div class="objective-icon">💭</div>
                    <h3>Système 3C</h3>
                    <p>Communication et changement de comportement</p>
                </div>
                
                <!-- Objectif 6 -->
                <div class="objective-card">
                    <div class="objective-icon">🎓</div>
                    <h3>Formations</h3>
                    <p>Formations nationales & internationales</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Nos évènements -->
    <section class="events-section">
        <div class="container">
            <div class="events-header">
                <h2>Nos évènements</h2>
                <a href="#" class="btn-view-all">Voir la liste <i class="fas fa-arrow-right"></i></a>
            </div>
            
            <div class="events-layout">
                <!-- Événement principal -->
                <article class="main-event">
                    <div class="event-image-container">
                        <img src="@/assets/img/13631.jpg" alt="Journée de nettoyage">
                        <div class="event-badges">
                            <span class="badge category">Séminaires et Formation</span>
                            <span class="badge status">Terminé</span>
                        </div>
                    </div>
                    <div class="event-details">
                        <div class="event-meta">
                            <span><i class="fas fa-calendar"></i> 03 Mars 2025</span>
                            <span><i class="fas fa-map-marker-alt"></i> Ahouanleko</span>
                        </div>
                        <h3>Journée de nettoyage des points noirs et des rues insalubres à Ahouanleko</h3>
                        <p>Dans le cadre de sa mission de lutte contre l'insalubrité, la ONG SLT SA a organisé, le samedi 11 mai 2024, une journée de nettoyage à Ahouanleko, en réponse à la prolifération des dépotoirs sauvages dans le 12e arrondissement de Cotonou. L'initiative a mobilisé environ 530 volontaires...</p>
                        <div class="event-actions">
                            <a href="#" class="read-more">Lire la suite <i class="fas fa-arrow-right"></i></a>
                            <button class="share-btn"><i class="fas fa-share-alt"></i></button>
                        </div>
                    </div>
                </article>
                
                <!-- Petits événements -->
                <div class="small-events">
                    <article class="small-event">
                        <div class="event-image-container">
                            <img src="@/assets/img/african.jpg" alt="Campagne recyclage">
                            <div class="event-badges">
                                <span class="badge category">Séminaires et Formation</span>
                                <span class="badge status">Terminé</span>
                            </div>
                        </div>
                        <div class="event-details">
                            <div class="event-meta">
                                <span><i class="fas fa-calendar"></i> 03 Avril 2025</span>
                                <span><i class="fas fa-map-marker-alt"></i> Cotonou</span>
                            </div>
                            <h4>Campagne mensuelle de recyclage</h4>
                            <div class="event-actions">
                                <a href="#" class="read-more">Lire la suite <i class="fas fa-arrow-right"></i></a>
                                <button class="share-btn"><i class="fas fa-share-alt"></i></button>
                            </div>
                        </div>
                    </article>
                    
                    <article class="small-event">
                        <div class="event-image-container">
                            <img src="@/assets/img/13631.jpg" alt="Femmes vaillantes">
                            <div class="event-badges">
                                <span class="badge category">Séminaires et Formation</span>
                                <span class="badge status">Terminé</span>
                            </div>
                        </div>
                        <div class="event-details">
                            <div class="event-meta">
                                <span><i class="fas fa-calendar"></i> 02 Juin 2025</span>
                                <span><i class="fas fa-map-marker-alt"></i> Cotonou</span>
                            </div>
                            <h4>La ONG SLT SA renforce les capacités des femmes vaillantes qui assurent la propreté de nos villes</h4>
                            <div class="event-actions">
                                <a href="#" class="read-more">Lire la suite <i class="fas fa-arrow-right"></i></a>
                                <button class="share-btn"><i class="fas fa-share-alt"></i></button>
                            </div>
                        </div>
                    </article>
                    
                    <article class="small-event">
                        <div class="event-image-container">
                            <img src="@/assets/img/african.jpg" alt="Femmes vaillantes">
                            <div class="event-badges">
                                <span class="badge category">Séminaires et Formation</span>
                                <span class="badge status">Terminé</span>
                            </div>
                        </div>
                        <div class="event-details">
                            <div class="event-meta">
                                <span><i class="fas fa-calendar"></i> 02 Juin 2025</span>
                                <span><i class="fas fa-map-marker-alt"></i> Cotonou</span>
                            </div>
                            <h4>La ONG SLT SA renforce les capacités des femmes vaillantes qui assurent la propreté de nos villes</h4>
                            <div class="event-actions">
                                <a href="#" class="read-more">Lire la suite <i class="fas fa-arrow-right"></i></a>
                                <button class="share-btn"><i class="fas fa-share-alt"></i></button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <!-- <section class="about-section">
        <div class="container">
            <div class="about-content">
                <h2>La <strong>ONG SLT SA</strong> en bref</h2>
                <h3>Société de Gestion des Déchets et de la Salubrité</h3>
                <p>La Société de Gestion des Déchets et de la Salubrité (ONG SLT SA) a été créée en novembre 2018 pour mettre en œuvre le projet de modernisation de la gestion des déchets solides ménagers dans les cinq communes du Grand Nokoué (Porto-Novo ; Cotonou ; Sèmè-Podji ; Ouidah ; Abomey-Calavi) et dans la commune de Parakou.</p>
                <a href="#" class="btn-primary">Lire la suite</a>
            </div>
        </div>
    </section> -->

    <!-- Seminars Section -->
    <!-- <section class="seminars-section">
        <div class="container">
            <h2>Séminaires et Formation</h2>
            <div class="seminars-grid">
                <article class="seminar-card">
                    <div class="seminar-status">Terminé</div>
                    <div class="seminar-image">
                        <img src="https://placehold.co/300x200/32CD32/FFFFFF?text=Recyclage" alt="Campagne recyclage">
                    </div>
                    <div class="seminar-content">
                        <h3>Campagne mensuelle de recyclage</h3>
                        <p class="seminar-date">03 avril 2025 - Cotonou</p>
                        <p>La gestion des déchets est un enjeu majeur pour la préservation de notre environnement et la santé publique. En effet, la quantité de déchets produits dans nos sociétés modernes ne cesse d'augmenter...</p>
                        <a href="#" class="btn-secondary">Lire la suite</a>
                    </div>
                </article>

                <article class="seminar-card">
                    <div class="seminar-status">Terminé</div>
                    <div class="seminar-image">
                        <img src="https://placehold.co/300x200/FFD700/FFFFFF?text=Femmes+Vaillantes" alt="Femmes vaillantes">
                    </div>
                    <div class="seminar-content">
                        <h3>La ONG SLT SA renforce les capacités des femmes vaillantes</h3>
                        <p class="seminar-date">02 juin 2025 - Cotonou</p>
                        <p>Le 8 mars 2024, la ONG SLT SA a célébré la Journée Internationale des Droits des Femmes en organisant un atelier de formation sur le thème « Concilier vie professionnelle et obligations familiales »...</p>
                        <a href="#" class="btn-secondary">Lire la suite</a>
                    </div>
                </article>

                
            </div>
        </div>
    </section> -->

    <!-- News Section -->
    <section class="news-section">
        <div class="container">
            <h2>Nos actualités</h2>
            <div class="news-grid">
                <article class="news-card">
                    <div class="news-image">
                        <img src="@/assets/img/13631.jpg" alt="Femmes bâtisseuses">
                    </div>
                    <div class="news-content">
                        <span class="news-category">Actualités</span>
                        <h3>Parcours de 20 femmes bâtisseuses du Bénin</h3>
                        <p class="news-date">04 avril 2025</p>
                        <div class="news-actions">
                            <a href="#" class="btn-link">Lire la suite</a>
                            <a href="#" class="btn-link">Compte Rendu</a>
                        </div>
                    </div>
                </article>

                <article class="news-card">
                    <div class="news-image">
                        <img src="@/assets/img/2150950182.jpg" alt="Octobre Rose">
                    </div>
                    <div class="news-content">
                        <span class="news-category">Actualités</span>
                        <h3>Octobre Rose: Ensemble contre le cancer du sein</h3>
                        <p class="news-date">06 mars 2025</p>
                        <div class="news-actions">
                            <a href="#" class="btn-link">Lire la suite</a>
                            <a href="#" class="btn-link">Compte Rendu</a>
                        </div>
                    </div>
                </article>

                <article class="news-card">
                    <div class="news-image">
                        <img src="@/assets/img/2151763093.jpg" alt="Nouveau site">
                    </div>
                    <div class="news-content">
                        <span class="news-category">Actualités</span>
                        <h3>Venez découvrir notre site</h3>
                        <p class="news-date">27 février 2025</p>
                        <div class="news-actions">
                            <a href="#" class="btn-link">Lire la suite</a>
                            <a href="#" class="btn-link">Publication</a>
                        </div>
                    </div>
                </article>
            </div>
            <div class="news-footer">
                <a href="#" class="btn-primary">Voir toutes les actualités</a>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="container">
            <div class="cta-grid">
                <div class="cta-card">
                    <div class="cta-icon">
                        <i class="fas fa-newspaper"></i>
                    </div>
                    <h3>Newsletter</h3>
                    <p>Abonnez-vous à notre newsletter pour recevoir des informations sur l'actualité de la ONG SLT SA</p>
                    <form class="newsletter-form">
                        <input type="email" placeholder="Votre email" required>
                        <button type="submit" class="btn-primary">S'abonner</button>
                    </form>
                </div>

                <div class="cta-card">
                    <div class="cta-icon">
                        <i class="fas fa-hand-holding-usd"></i>
                    </div>
                    <h3>Faites un don</h3>
                    <p>Soutenez nos actions pour la protection de l'environnement et le développement durable au Bénin</p>
                    <a href="#" class="btn-primary">Faites un don</a>
                </div>
            </div>
        </div>
    </section>

    

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="footer-logo">
                        <img src="https://placehold.co/120x40/FFFFFF/2E8B57?text=ONG SLT" alt="ONG SLT Logo">
                    </div>
                    <div class="contact-info-footer">
                        <p><i class="fas fa-phone"></i> +229 01 97 72 22 13</p>
                        <p><i class="fas fa-envelope"></i> ongslt3@gmail.com</p>
                        <p><i class="fas fa-map-marker-alt"></i> Parakou, République du Bénin</p>
                    </div> <br>
                    <div class="social-links-footer">
                        <p><strong>Suivez nous :</strong></p>
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-tiktok"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>

                <div class="footer-section">
                    <h4>ONG SLT</h4>
                    <ul>
                        <li><a href="#">Histoire</a></li>
                        <li><a href="#">Mission</a></li>
                        <li><a href="#">Gouvernance</a></li>
                    </ul>
                </div>

                <!-- <div class="footer-section">
                    <h4>Nos services</h4>
                    <ul>
                        <li><a href="#">Collectes de déchets</a></li>
                        <li><a href="#">Traitements de déchets</a></li>
                        <li><a href="#">Salubrité urbaine</a></li>
                    </ul>
                </div> -->

                <div class="footer-section">
                    <h4>Publications</h4>
                    <ul>
                        <li><a href="#">Documentations</a></li>
                        <li><a href="#">Mediathèque</a></li>
                        <li><a href="#">Projets</a></li>
                        <li><a href="#">Opportunités</a></li>
                        <li><a href="#">Actualités</a></li>
                        <li><a href="#">Évènements</a></li>
                        <li><a href="#">Recrutement</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Lien utiles</h4>
                    <ul>
                        <li><a href="#">Gouvernement du Bénin</a></li>
<!--                         <li><a href="#">Ministère du cadre de vie</a></li>
 -->                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2025 ONG SLT SA. Tous droits réservés. | <a href="#">Politique de confidentialités</a> | <a href="#">Mentions légales</a></p>
            </div>
        </div>
    </footer>

</body>
</template>

<script>
import slide1 from '@/assets/img/2150950182.jpg'
import slide2 from '@/assets/img/2151763093.jpg'
import slide3 from '@/assets/img/5047.jpg'

export default {
  name: 'App',
  data() {
    return {
      slide1,
      slide2,
      slide3
    }
  }
}
</script>