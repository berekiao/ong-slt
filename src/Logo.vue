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
                <h1 class="page-title">Notre Logo</h1>
        
                <!-- Our Logo Section -->
                <div class="info-section">
                    <h3 class="section-title">Notre Logo</h3>
                    <div class="logo-intro">
                        <p>Le logo de l'ONG SAUVONS LA TERRE représente un arbre inscrit dans un livre et encerclé. Il symbolise la modernisation des droits fonciers ruraux et la cohésion sociale, gage de paix et de prospérité.</p>
                    </div>
                    
                    <div class="logo-elements">
                        <div class="logo-element-card">
                            <h4 class="element-title">L'arbre</h4>
                            <div class="element-description">
                                <p><strong>Symbole de la terre rurale et de son évolution.</strong> Dans les traditions africaines, l'arbre est aussi le lieu du dialogue communautaire.</p>
                                <div class="element-details">
                                    <p><em>Il reflète :</em></p>
                                    <ul>
                                        <li>La reconnaissance des droits coutumiers (ADC)</li>
                                        <li>La participation des populations au processus de sécurisation foncière (SVGF)</li>
                                        <li>Le règlement des conflits fonciers par le dialogue et le consensus</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="logo-element-card">
                            <h4 class="element-title">Le livre</h4>
                            <div class="element-description">
                                <p><strong>Symbole de la législation et des réformes</strong> encadrant les droits fonciers modernes.</p>
                            </div>
                        </div>

                        <div class="logo-element-card">
                            <h4 class="element-title">Le texte « SAUVONS LA TERRE »</h4>
                            <div class="element-description">
                                <p><strong>Identifie l'ONG</strong> et son domaine d'intervention.</p>
                            </div>
                        </div>

                        <div class="logo-element-card">
                            <h4 class="element-title">Les couleurs</h4>
                            <div class="element-description">
                                <div class="color-meanings">
                                    <div class="color-item">
                                        <div class="color-circle black"></div>
                                        <div class="color-text">
                                            <strong>Noir :</strong> Illustre la période d'incertitude juridique où coexistaient droit coutumier et droit moderne.
                                        </div>
                                    </div>
                                    <div class="color-item">
                                        <div class="color-circle white"></div>
                                        <div class="color-text">
                                            <strong>Blanc :</strong> Évoque la clarté juridique instaurée par le Code foncier et domanial de 2013, modifié en 2017.
                                        </div>
                                    </div>
                                    <div class="color-item">
                                        <div class="color-circle green"></div>
                                        <div class="color-text">
                                            <strong>Vert :</strong> Porte l'espérance d'un foncier pacifié et moteur de cohésion nationale.
                                        </div>
                                    </div>
                                </div>
                            </div>
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