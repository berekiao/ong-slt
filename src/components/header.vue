<template>
    <div class="header">
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
                    <img src="@/assets/img/logo.png" alt="ONG_SLT " >
                </div>
                <button class="mobile-menu-toggle" id="mobileMenuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-menu" id="navMenu">
                    <li><router-link to="/">Accueil</router-link></li>
                     <li><a href="#about-section">À propos</a></li>
                     <li><router-link to="/objectif">Objectif</router-link></li>
                   <li><router-link to="/missions">Missions</router-link></li>
                    <li><router-link to="/aides-actions">Aides & Actions</router-link></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle">Nos Publications</a>
                        <ul class="dropdown-menu">
                            <li><a href="#evenements">Événements</a></li>
                            <li><a href="#actualites">Actualités</a></li>
                            <li><a href="#emissions-formations">Émissions / Formations</a></li>
                            <li><a href="#documents">Documents</a></li>
                            <li><a href="#galerie-photos">Galerie Photos</a></li>
                            <li><a href="#videos">Vidéos</a></li>
                        </ul>
                    </li>
                    <li><router-link to="/contact">Contact</router-link></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import router from '@/router';

    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>