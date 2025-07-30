// Biblioteca JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters to determine the topic
    const urlParams = new URLSearchParams(window.location.search);
    const tema = urlParams.get('tema');
    
    // Topic mapping
    const temaMapping = {
        'alimentacion': {
            title: 'Alimentación y Salud Intestinal',
            subtitle: 'Descubre cómo la nutrición impacta tu longevidad y bienestar digestivo'
        },
        'estres': {
            title: 'Manejo del Estrés y Salud Mental',
            subtitle: 'Técnicas y estrategias para mantener un equilibrio mental saludable'
        },
        'sueno': {
            title: 'Hábitos del Sueño',
            subtitle: 'La importancia del descanso reparador para tu salud integral'
        },
        'ejercicio': {
            title: 'Ejercicio y Actividad Física',
            subtitle: 'Rutinas y consejos para mantener un cuerpo activo y saludable'
        },
        'medicina': {
            title: 'Medicina Integral',
            subtitle: 'Enfoque holístico combinando medicina tradicional y alternativa'
        },
        'guia': {
            title: 'Guía de Salud',
            subtitle: 'Recursos y herramientas para el cuidado personal diario'
        },
        'educacion': {
            title: 'Educación sobre tu Salud',
            subtitle: 'Conocimiento fundamental para tomar decisiones informadas'
        },
        'diagnosticos': {
            title: 'Estudios Diagnósticos',
            subtitle: 'Información sobre exámenes y pruebas médicas especializadas'
        }
    };
    
    // Update page title and subtitle based on topic
    const temaTitle = document.getElementById('temaTitle');
    const temaSubtitle = document.getElementById('temaSubtitle');
    const currentTopic = document.getElementById('currentTopic');
    
    if (tema && temaMapping[tema]) {
        temaTitle.textContent = temaMapping[tema].title;
        temaSubtitle.textContent = temaMapping[tema].subtitle;
        currentTopic.textContent = temaMapping[tema].title.toLowerCase();
    } else {
        currentTopic.textContent = 'este tema';
    }
    
    // Category filter functionality
    const categoryBtns = document.querySelectorAll('.category-btn');
    const articlesGrid = document.getElementById('articlesGrid');
    const emptyState = document.getElementById('emptyState');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // For now, always show empty state since no articles exist yet
            showEmptyState();
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // For now, always show empty state since no articles exist yet
            showEmptyState();
        }
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Function to show empty state
    function showEmptyState() {
        articlesGrid.style.display = 'none';
        emptyState.style.display = 'block';
    }
    
    // Function to show articles (for future use)
    function showArticles(articles) {
        if (articles.length === 0) {
            showEmptyState();
            return;
        }
        
        articlesGrid.innerHTML = '';
        articles.forEach(article => {
            const articleCard = createArticleCard(article);
            articlesGrid.appendChild(articleCard);
        });
        
        articlesGrid.style.display = 'grid';
        emptyState.style.display = 'none';
    }
    
    // Function to create article card (for future use)
    function createArticleCard(article) {
        const card = document.createElement('div');
        card.className = 'article-card';
        card.innerHTML = `
            <div class="article-category">${article.category}</div>
            <h3 class="article-title">${article.title}</h3>
            <p class="article-excerpt">${article.excerpt}</p>
            <div class="article-meta">
                <span class="article-date">${article.date}</span>
                <span class="article-read-time">${article.readTime} min lectura</span>
            </div>
        `;
        
        card.addEventListener('click', function() {
            // Future: Open article detail page
            alert('Funcionalidad de artículo próximamente disponible');
        });
        
        return card;
    }
    
    // Initialize with empty state
    showEmptyState();
    
    // Sample articles data structure for future implementation
    const sampleArticles = [
        {
            id: 1,
            title: 'Los fundamentos de la nutrición para la longevidad',
            excerpt: 'Descubre los principios básicos de una alimentación que promueve la salud a largo plazo...',
            category: 'Artículos',
            date: '15 Mar 2024',
            readTime: 8,
            topic: 'alimentacion'
        },
        {
            id: 2,
            title: 'Técnicas de respiración para reducir el estrés',
            excerpt: 'Aprende métodos efectivos de respiración que puedes usar en cualquier momento...',
            category: 'Guías',
            date: '12 Mar 2024',
            readTime: 5,
            topic: 'estres'
        }
        // More articles can be added here in the future
    ];
});
