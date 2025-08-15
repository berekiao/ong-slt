<template>
    <section class="containers">
        <nav class="breadcrumb">
            <router-link to="/" class="home-icon">Accueil</router-link>
            <span class="separator">›</span>
            <span class="current">À Propos</span>
        </nav>

        <!-- Main Content Area -->
        <div class="main-content">
            <!-- Main Content -->
            <main class="content-area">
                <h1 class="page-title">Informations</h1>
                
                <!-- Organization Header -->
                <div class="org-header">
                    <h2 class="org-name">ONG SAUVONS LA TERRE (SLT)</h2>
                    <p class="org-motto"><strong>Devise :</strong> Transparence – Équité – Solidarité</p>
                </div>

                <!-- Legal Information -->
                <div class="info-section">
                    <h3 class="section-title">Coordonnées légales</h3>
                    <ul class="info-list">
                        <li><strong>N° d'enregistrement :</strong> 2020/N°117/MISP/DG/SGM/DAC/SAAP– ASSOC/SA</li>
                        <li><strong>Autorisations :</strong> N° 748/MISP/DC/SAAP/SA du 06 février 2020</li>
                        <li><strong>IFU :</strong> 6 2020 1145 5989</li>
                        <li><strong>Email :</strong> <a href="mailto:ongslt3@gmail.com">ongslt3@gmail.com</a></li>
                        <li><strong>Téléphone :</strong> <a href="tel:+22901977222213">+229 01 97 72 22 13</a></li>
                        <li><strong>Compte bancaire :</strong> [À renseigner]</li>
                        <li><strong>Siège principal :</strong> Parakou, République du Bénin</li>
                        <li><strong>Annexe :</strong> Cotonou, République du Bénin</li>
                        <li><strong>Publication au Journal Officiel :</strong> N°12 du 15/06/2020, page 858</li>
                    </ul>
                </div>

                <!-- Areas of Intervention -->
                <div class="info-section">
                    <h3 class="section-title">Domaines d'intervention</h3>
                    <div class="intervention-cards">
                        <div class="intervention-card">
                            <div class="card-icon">🏞️</div>
                            <h4 class="card-title">Foncier</h4>
                            <p class="card-description">Gestion et conseil en matière de terres et propriétés foncières</p>
                        </div>
                        <div class="intervention-card">
                            <div class="card-icon">🏛️</div>
                            <h4 class="card-title">Domanialité</h4>
                            <p class="card-description">Expertise en droit domanial et gestion du patrimoine public</p>
                        </div>
                        <div class="intervention-card">
                            <div class="card-icon">🏢</div>
                            <h4 class="card-title">Immobilier</h4>
                            <p class="card-description">Développement et conseil en projets immobiliers durables</p>
                        </div>
                        <div class="intervention-card">
                            <div class="card-icon">🤝</div>
                            <h4 class="card-title">Œuvres sociales</h4>
                            <p class="card-description">Actions communautaires et projets de développement social</p>
                        </div>
                    </div>
                </div>
            </main>

            <!-- Sidebar -->
            <aside class="sidebar">
                <nav>
                    <ul class="sidebar-nav">
                        <li><router-link to="/a-propos">Informations</router-link></li>
                        <li><router-link to="/logo">Notre Logo</router-link></li>
                    </ul>
                </nav>
            </aside>
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