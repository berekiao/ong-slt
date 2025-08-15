<template>
    <section class="containers">
        <nav class="breadcrumb">
            <router-link to="/" class="home-icon">Accueil</router-link>
            <span class="separator">›</span>
            <span class="current">Aides et Actions</span>
        </nav>

        <!-- Main Content Area -->
        <div class="main-content">
            <!-- Main Content -->
            <main class="content-area">
                <h1 class="page-title">Aides et Actions</h1>
                
                <!-- Organization Header -->
                <div class="org-header">
                    <h2 class="org-name">ONG SAUVONS LA TERRE (SLT)</h2>
                    <p class="org-motto"><strong>Devise :</strong> Transparence – Équité – Solidarité</p>
                </div>

                <!-- Introduction -->
                <div class="info-section">
                    <div class="intro-highlight">
                        <div class="intro-icon">
                            <i class="fas fa-hands-helping"></i>
                        </div>
                        <div class="intro-content">
                            <p>L'ONG SAUVONS LA TERRE propose une gamme complète de services d'accompagnement, de formation et d'assistance technique pour renforcer les capacités des acteurs du secteur foncier et immobilier au Bénin.</p>
                        </div>
                    </div>
                </div>

                <!-- Nos Services -->
                <div class="info-section">
                    <h3 class="section-title">Nos Services d'Aide et d'Action</h3>
                    
                    <!-- Service 1: Formations sur le bail d'habitation -->
                    <div class="service-card">
                        <div class="service-header">
                            <div class="service-icon">
                                <i class="fas fa-certificate"></i>
                            </div>
                            <h4>Formations Assorties d'Attestation sur le Bail à Usage d'Habitation</h4>
                        </div>
                        <div class="service-content">
                            <p class="service-description">
                                Nous proposons des formations spécialisées et certifiantes sur la réglementation des baux d'habitation, destinées aux propriétaires, locataires, gestionnaires immobiliers et professionnels du secteur.
                            </p>
                            <div class="service-details">
                                <h5>Contenu de la formation :</h5>
                                <ul>
                                    <li>Cadre juridique du bail d'habitation au Bénin</li>
                                    <li>Droits et obligations des propriétaires et locataires</li>
                                    <li>Rédaction et négociation des contrats de bail</li>
                                    <li>Gestion des conflits locatifs et procédures de résolution</li>
                                    <li>Fiscalité immobilière et obligations déclaratives</li>
                                    <li>Évolutions réglementaires et jurisprudentielles</li>
                                </ul>
                                <div class="service-benefits">
                                    <strong>Bénéfices :</strong> Attestation officielle, support pédagogique, suivi post-formation
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Service 2: Études comparées -->
                    <div class="service-card">
                        <div class="service-header">
                            <div class="service-icon">
                                <i class="fas fa-search"></i>
                            </div>
                            <h4>Études Comparées des Réformes sur la Gouvernance Foncière</h4>
                        </div>
                        <div class="service-content">
                            <p class="service-description">
                                Nous réalisons des analyses approfondies et des études comparatives des politiques foncières entre différents États, permettant d'identifier les meilleures pratiques et d'orienter les réformes.
                            </p>
                            <div class="service-details">
                                <h5>Nos expertises :</h5>
                                <ul>
                                    <li>Analyse comparative des codes fonciers en Afrique de l'Ouest</li>
                                    <li>Évaluation des mécanismes de sécurisation foncière</li>
                                    <li>Étude des systèmes de gouvernance foncière décentralisée</li>
                                    <li>Benchmarking des politiques d'accès au foncier</li>
                                    <li>Analyse des impacts socio-économiques des réformes</li>
                                    <li>Recommandations stratégiques pour les décideurs</li>
                                </ul>
                                <div class="service-benefits">
                                    <strong>Livrables :</strong> Rapports d'expertise, recommandations, présentations aux autorités
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Service 3: Médiation -->
                    <div class="service-card">
                        <div class="service-header">
                            <div class="service-icon">
                                <i class="fas fa-balance-scale"></i>
                            </div>
                            <h4>Médiation et Règlement Amiable des Litiges</h4>
                        </div>
                        <div class="service-content">
                            <p class="service-description">
                                Notre service de médiation offre une alternative efficace et moins coûteuse aux procédures judiciaires pour résoudre les conflits fonciers et immobiliers de manière pacifique et durable.
                            </p>
                            <div class="service-details">
                                <h5>Types de litiges traités :</h5>
                                <ul>
                                    <li>Conflits de propriété et de limites foncières</li>
                                    <li>Litiges entre héritiers sur les successions foncières</li>
                                    <li>Différends entre propriétaires et locataires</li>
                                    <li>Conflits d'usage et d'exploitation des terres</li>
                                    <li>Disputes communautaires sur les ressources foncières</li>
                                    <li>Contentieux liés aux expropriations et déguerpissements</li>
                                </ul>
                                <div class="service-benefits">
                                    <strong>Avantages :</strong> Rapidité, confidentialité, coût réduit, préservation des relations
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Service 4: Formation des agences immobilières -->
                    <div class="service-card">
                        <div class="service-header">
                            <div class="service-icon">
                                <i class="fas fa-building"></i>
                            </div>
                            <h4>Formation des Agences Immobilières</h4>
                        </div>
                        <div class="service-content">
                            <p class="service-description">
                                Nous accompagnons les professionnels de l'immobilier dans le renforcement de leurs compétences techniques, juridiques et commerciales pour une meilleure performance de leurs activités.
                            </p>
                            <div class="service-details">
                                <h5>Modules de formation :</h5>
                                <ul>
                                    <li>Réglementation de l'activité d'agent immobilier</li>
                                    <li>Techniques d'évaluation et d'expertise immobilière</li>
                                    <li>Marketing immobilier et prospection clientèle</li>
                                    <li>Négociation et techniques de vente</li>
                                    <li>Gestion administrative et comptable d'une agence</li>
                                    <li>Éthique professionnelle et déontologie</li>
                                    <li>Outils numériques et digitalisation des services</li>
                                </ul>
                                <div class="service-benefits">
                                    <strong>Certification :</strong> Attestation de formation professionnelle reconnue
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Call to Action -->
                <div class="info-section">
                    <div class="cta-section-page">
                        <h3>Besoin de nos services ?</h3>
                        <p>Contactez-nous pour discuter de vos besoins spécifiques et obtenir un devis personnalisé.</p>
                        <div class="cta-buttons">
                            <a href="#contact" class="btn-primary">Nous contacter</a>
                            <a href="tel:+22901977222213" class="btn-outline">Appeler maintenant</a>
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