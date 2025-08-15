<template>
    <section class="containers">
        <nav class="breadcrumb">
            <router-link to="/" class="home-icon">Accueil</router-link>
            <span class="separator">›</span>
            <span class="current">Missions</span>
        </nav>

        <!-- Main Content Area -->
        <div class="main-content">
            <!-- Main Content -->
            <main class="content-area">
                <h1 class="page-title">Missions – Vision – Engagements</h1>
                
                <!-- Organization Header -->
                <div class="org-header">
                    <h2 class="org-name">ONG SAUVONS LA TERRE (SLT)</h2>
                    <p class="org-motto"><strong>Devise :</strong> Transparence – Équité – Solidarité</p>
                </div>

                <!-- Notre Mission -->
                <div class="info-section">
                    <h3 class="section-title">Notre Mission</h3>
                    <div class="mission-highlight">
                        <div class="mission-icon">
                            <i class="fas fa-seedling"></i>
                        </div>
                        <div class="mission-content">
                            <p>L'ONG SAUVONS LA TERRE s'engage pour une gestion durable, équitable et inclusive du foncier au Bénin.</p>
                        </div>
                    </div>
                </div>

                <!-- Nos Engagements -->
                <div class="info-section">
                    <h3 class="section-title">Nos Engagements</h3>
                    <div class="engagements-grid">
                        <div class="engagement-item">
                            <div class="engagement-icon">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <div class="engagement-content">
                                <h4>Sécurisation foncière</h4>
                                <p>Accompagner les initiatives de sécurisation foncière</p>
                            </div>
                        </div>

                        <div class="engagement-item">
                            <div class="engagement-icon">
                                <i class="fas fa-handshake"></i>
                            </div>
                            <div class="engagement-content">
                                <h4>Investissements responsables</h4>
                                <p>Soutenir les investissements responsables</p>
                            </div>
                        </div>

                        <div class="engagement-item">
                            <div class="engagement-icon">
                                <i class="fas fa-balance-scale"></i>
                            </div>
                            <div class="engagement-content">
                                <h4>Démocratie foncière</h4>
                                <p>Promouvoir la démocratie foncière et les droits fondamentaux</p>
                            </div>
                        </div>

                        <div class="engagement-item">
                            <div class="engagement-icon">
                                <i class="fas fa-dove"></i>
                            </div>
                            <div class="engagement-content">
                                <h4>Résolution pacifique</h4>
                                <p>Faciliter la résolution des litiges par des méthodes pacifiques et participatives</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Nos Domaines d'Intervention -->
                <div class="info-section">
                    <h3 class="section-title">Nos Domaines d'Intervention</h3>
                    <div class="interventions-list">
                        <div class="intervention-category">
                            <div class="category-header">
                                <i class="fas fa-file-alt"></i>
                                <h4>Appui et Élaboration de Projets</h4>
                            </div>
                            <ul class="intervention-items">
                                <li>Appui à la rédaction de projets de mise en valeur foncière</li>
                                <li>Élaboration de projets d'intérêt général avec étude de rentabilité</li>
                            </ul>
                        </div>

                        <div class="intervention-category">
                            <div class="category-header">
                                <i class="fas fa-certificate"></i>
                                <h4>Accompagnement à l'Obtention</h4>
                            </div>
                            <ul class="intervention-items">
                                <li>du Titre Foncier</li>
                                <li>des actes de présomption de propriété :
                                    <ul class="sub-items">
                                        <li>mutation</li>
                                        <li>enregistrement</li>
                                        <li>attestation de détention coutumière</li>
                                        <li>attestation de recasement, etc.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div class="intervention-category">
                            <div class="category-header">
                                <i class="fas fa-user-tie"></i>
                                <h4>Conseil et Assistance</h4>
                            </div>
                            <ul class="intervention-items">
                                <li>l'acquisition ou la cession de biens immobiliers et de terres</li>
                                <li>la gestion des conflits fonciers</li>
                            </ul>
                        </div>

                        <div class="intervention-category">
                            <div class="category-header">
                                <i class="fas fa-graduation-cap"></i>
                                <h4>Formation et Projets Sociaux</h4>
                            </div>
                            <ul class="intervention-items">
                                <li>Formations sur le foncier, la domanialité et la fiscalité foncière</li>
                                <li>Réalisation de projets sociaux au service des communautés</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            
        </div>
    </section>
</template>

<script>
import router from './router';

    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>