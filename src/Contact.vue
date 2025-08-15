<template>
    <div class="containers">
    <nav class="breadcrumb">
                    <router-link to="/" class="home-icon">Accueil</router-link>

        <span class="separator">›</span>
        <span class="current">Contact</span>
    </nav>

    <!-- Main Content Area -->
    <div class="main-content">
        <!-- Main Content -->
        <main class="content-area">
            <h1 class="page-title">Contactez-nous</h1>
            
            <!-- Organization Header -->
            <div class="org-header">
                <h2 class="org-name">ONG SAUVONS LA TERRE (SLT)</h2>
                <p class="org-motto"><strong>Devise :</strong> Transparence – Équité – Solidarité</p>
            </div>

            <!-- Contact Info Section -->
            <div class="contact-info-section">
                <div class="contact-cards">
                    <div class="contact-card">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Contact</h4>
                            <p>(+229) 01 97 72 22 13</p>
                        </div>
                    </div>

                    <div class="contact-card">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Adresse email</h4>
                            <p>ongslt3@gmail.com</p>
                        </div>
                    </div>

                    <div class="contact-card">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Adresse</h4>
                            <p>Parakou, République du Bénin</p>
                        </div>
                    </div>
                </div>

                <!-- Social Media -->
                <div class="social-section">
                    <h4>Nous sommes sociable</h4>
                    <div class="social-links">
                        <a href="#" class="social-link tiktok" title="TikTok">
                            <i class="fab fa-tiktok"></i>
                        </a>
                        <a href="#" class="social-link facebook" title="Facebook">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-link twitter" title="Twitter">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="social-link youtube" title="YouTube">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a href="#" class="social-link instagram" title="Instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="social-link linkedin" title="LinkedIn">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Contact Form Section -->
            <div class="contact-form-section">
                <div class="form-intro">
                    <h3>Envoyez-nous un message</h3>
                    <p>Vous avez une question ou un message à nous transmettre ? Utilisez ce formulaire pour entrer en contact avec notre équipe, nous serons heureux de vous répondre.</p>
                </div>

                <div class="contact-form-container">
                    <form class="contact-form" id="contactForm" method="POST" action="#">
                        @csrf
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">Nom et prénoms</label>
                                <input type="text" id="name" name="name" placeholder="Entrez vos noms et prénoms" required>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Entrez votre adresse email" required>
                            </div>
                            <div class="form-group">
                                <label for="phone">Numéro de téléphone</label>
                                <input type="tel" id="phone" name="phone" placeholder="Entrez votre numéro de téléphone">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="subject">Sujet</label>
                                <input type="text" id="subject" name="subject" placeholder="Entrez le sujet" required>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" name="message" rows="6" placeholder="Votre message ici" required></textarea>
                            </div>
                        </div>

                        <div class="form-actions">
                            <button type="submit" class="btn-submit">
                                <i class="fas fa-paper-plane"></i>
                                Soumettre le formulaire
                            </button>
                            <button type="reset" class="btn-reset">
                                <i class="fas fa-undo"></i>
                                Annuler
                            </button>
                        </div>
                    </form>

                    <!-- Map Placeholder -->
                    <div class="map-container">
                        <div class="map-placeholder">
                            <i class="fas fa-map-marked-alt"></i>
                            <p>Carte interactive</p>
                            <small>Localisation : Parakou, République du Bénin</small>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Additional Info -->
            <div class="additional-info">
                <div class="info-card">
                    <div class="info-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <div class="info-content">
                        <h4>Heures d'ouverture</h4>
                        <p><strong>Lundi - Vendredi :</strong> 8h00 - 17h00</p>
                        <p><strong>Samedi :</strong> 8h00 - 12h00</p>
                        <p><strong>Dimanche :</strong> Fermé</p>
                    </div>
                </div>

                <div class="info-card">
                    <div class="info-icon">
                        <i class="fas fa-handshake"></i>
                    </div>
                    <div class="info-content">
                        <h4>Partenariats</h4>
                        <p>Nous sommes ouverts aux collaborations et partenariats pour renforcer notre impact dans la protection de l'environnement et la gestion durable des terres.</p>
                    </div>
                </div>

                <div class="info-card">
                    <div class="info-icon">
                        <i class="fas fa-volunteer-hands"></i>
                    </div>
                    <div class="info-content">
                        <h4>Bénévolat</h4>
                        <p>Rejoignez notre équipe de bénévoles et participez activement à nos missions de préservation de l'environnement et de développement durable.</p>
                    </div>
                </div>
            </div>
        </main>

        
    </div>
</div>
</template>

<script>
import router from './router';

    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>