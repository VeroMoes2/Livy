// Livy Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header background on scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Login Modal functionality
    const loginModal = document.getElementById('loginModal');
    const btnPrimary = document.querySelector('.btn-primary');
    const btnSecondary = document.querySelector('.btn-secondary');
    const closeLoginBtn = document.querySelector('.close-login');
    const loginForm = document.getElementById('loginForm');
    const userTypeTabs = document.querySelectorAll('.user-type-tab');
    
    // Open login modal when clicking "Iniciar sesión" button
    btnSecondary.addEventListener('click', function() {
        loginModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    // Close login modal when clicking X
    closeLoginBtn.addEventListener('click', function() {
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close login modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // User type tab switching
    userTypeTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            userTypeTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show/hide specific fields based on user type
            const userType = this.getAttribute('data-type');
            const medicoField = document.querySelector('.medico-field');
            const pacienteField = document.querySelector('.paciente-field');
            const cedulaInput = document.getElementById('loginCedula');
            const curpInput = document.getElementById('loginCurp');
            
            if (userType === 'medico') {
                medicoField.style.display = 'block';
                pacienteField.style.display = 'none';
                cedulaInput.required = true;
                curpInput.required = false;
            } else if (userType === 'paciente') {
                medicoField.style.display = 'none';
                pacienteField.style.display = 'block';
                cedulaInput.required = false;
                curpInput.required = true;
            }
        });
    });
    
    // Handle login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(loginForm);
        const activeTab = document.querySelector('.user-type-tab.active');
        const userType = activeTab.getAttribute('data-type');
        
        const loginData = {
            userType: userType,
            email: formData.get('email'),
            password: formData.get('password')
        };
        
        // Add specific field based on user type
        if (userType === 'medico') {
            loginData.cedula = formData.get('cedula');
        } else if (userType === 'paciente') {
            loginData.curp = formData.get('curp');
        }
        
        // For now, just show success message
        const specificField = userType === 'medico' ? 'cédula' : 'CURP';
        alert(`¡Inicio de sesión exitoso como ${userType}! Bienvenido de vuelta a Livy.`);
        
        // Close modal and reset form
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        loginForm.reset();
        
        // Reset to default tab (Médico) and show appropriate field
        userTypeTabs.forEach(t => t.classList.remove('active'));
        userTypeTabs[0].classList.add('active');
        
        // Reset field visibility
        const medicoField = document.querySelector('.medico-field');
        const pacienteField = document.querySelector('.paciente-field');
        const cedulaInput = document.getElementById('loginCedula');
        const curpInput = document.getElementById('loginCurp');
        
        medicoField.style.display = 'block';
        pacienteField.style.display = 'none';
        cedulaInput.required = true;
        curpInput.required = false;
        
        // In a real application, you would send this data to your server
        console.log('Datos de inicio de sesión:', loginData);
    });
    
    // Register button functionality - scroll to cards section
    btnPrimary.addEventListener('click', function() {
        const cardsSection = document.querySelector('.priority-section');
        if (cardsSection) {
            cardsSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
    
    // Register link in login modal
    const registerLinkText = document.querySelector('.register-link-text');
    if (registerLinkText) {
        registerLinkText.addEventListener('click', function(e) {
            e.preventDefault();
            // Close login modal
            loginModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            // Show register options
            alert('Usa las tarjetas "Para médicos" o "Para pacientes" en la página principal para registrarte.');
        });
    }
    
    // Forgot password link
    const forgotPasswordLink = document.querySelector('.forgot-password');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Funcionalidad de recuperación de contraseña próximamente disponible.');
        });
    }

    // Chatbot widget interaction
    const chatbotWidget = document.querySelector('.chatbot-widget');
    
    chatbotWidget.addEventListener('click', function() {
        alert('Chatbot de Livy próximamente disponible para asistencia médica personalizada');
    });

    // Footer chatbot widget interaction
    const footerChatbotWidget = document.querySelector('.footer-chatbot-widget');
    
    if (footerChatbotWidget) {
        footerChatbotWidget.addEventListener('click', function() {
            alert('Chatbot de Livy próximamente disponible para asistencia médica personalizada');
        });
    }

    // Modal functionality
    const modal = document.getElementById('pacientesModal');
    const pacientesCard = document.querySelectorAll('.priority-card')[1]; // Segunda tarjeta (Para pacientes)
    const closeBtn = document.querySelector('.close');
    const form = document.getElementById('pacientesForm');

    // Open modal when clicking "Para pacientes" card
    pacientesCard.addEventListener('click', function() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });

    // Close modal when clicking X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const objetivos = [];
        
        // Get all checked objectives
        const checkboxes = form.querySelectorAll('input[name="objetivos"]:checked');
        checkboxes.forEach(checkbox => {
            objetivos.push(checkbox.value);
        });
        
        // Create data object
        const userData = {
            nombreCompleto: formData.get('nombreCompleto'),
            fechaNacimiento: formData.get('fechaNacimiento'),
            genero: formData.get('genero'),
            correoElectronico: formData.get('correoElectronico'),
            telefonoCelular: formData.get('telefonoCelular'),
            direccion: formData.get('direccion'),
            curp: formData.get('curp'),
            fotoPerfil: formData.get('fotoPerfil'),
            contrasena: formData.get('contrasena'),
            objetivos: objetivos
        };
        
        // For now, just show success message
        alert('¡Formulario enviado exitosamente! Bienvenido a Livy. Pronto recibirás información sobre tu sesión gratuita.');
        
        // Close modal and reset form
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        form.reset();
        
        // In a real application, you would send this data to your server
        console.log('Datos del usuario:', userData);
    });

    // Médicos Modal functionality
    const medicosModal = document.getElementById('medicosModal');
    const medicosCard = document.querySelectorAll('.priority-card')[0]; // Primera tarjeta (Para médicos)
    const closeMedicosBtn = document.querySelector('.close-medicos');
    const medicosForm = document.getElementById('medicosForm');

    // Open médicos modal when clicking "Para médicos" card
    medicosCard.addEventListener('click', function() {
        medicosModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });

    // Close médicos modal when clicking X
    closeMedicosBtn.addEventListener('click', function() {
        medicosModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close médicos modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === medicosModal) {
            medicosModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Handle médicos form submission
    medicosForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(medicosForm);
        const consentimientos = [];
        const intereses = [];
        const idiomas = [];
        const areasInteres = [];
        
        // Get all checked consentimientos
        const consentimientosCheckboxes = medicosForm.querySelectorAll('input[name="consentimientos"]:checked');
        consentimientosCheckboxes.forEach(checkbox => {
            consentimientos.push(checkbox.value);
        });
        
        // Get all checked intereses
        const interesesCheckboxes = medicosForm.querySelectorAll('input[name="intereses"]:checked');
        interesesCheckboxes.forEach(checkbox => {
            intereses.push(checkbox.value);
        });
        
        // Get selected idiomas
        const idiomasSelect = document.getElementById('idiomasDomina');
        for (let option of idiomasSelect.selectedOptions) {
            idiomas.push(option.value);
        }
        
        // Get selected areas de interes
        const areasSelect = document.getElementById('areasInteres');
        for (let option of areasSelect.selectedOptions) {
            areasInteres.push(option.value);
        }
        
        // Create data object
        const medicoData = {
            nombreCompleto: formData.get('nombreCompleto'),
            fechaNacimiento: formData.get('fechaNacimiento'),
            genero: formData.get('genero'),
            correoElectronico: formData.get('correoElectronico'),
            telefono: formData.get('telefono'),
            fotoPerfil: formData.get('fotoPerfil'),
            especialidad: formData.get('especialidad'),
            numeroCedula: formData.get('numeroCedula'),
            paisEmision: formData.get('paisEmision'),
            idiomas: idiomas,
            areasInteres: areasInteres,
            cedulaProfesional: formData.get('cedulaProfesional'),
            identificacionOficial: formData.get('identificacionOficial'),
            consentimientos: consentimientos,
            intereses: intereses
        };
        
        // For now, just show success message
        alert('¡Registro de médico exitoso! Bienvenido a Livy. Tu perfil será revisado y activado pronto.');
        
        // Close modal and reset form
        medicosModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        medicosForm.reset();
        
        // In a real application, you would send this data to your server
        console.log('Datos del médico:', medicoData);
    });

    // Intersection Observer for section highlighting
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                const correspondingLink = document.querySelector(`a[href="#${sectionId}"]`);
                
                if (correspondingLink) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    correspondingLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        const rate = scrolled * -0.5;
        
        if (heroSection) {
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });

    // Mobile menu toggle (for future mobile optimization)
    const createMobileMenu = function() {
        const navbar = document.querySelector('.navbar');
        const navMenu = document.querySelector('.nav-menu');
        
        // This will be expanded in future phases for mobile responsiveness
        if (window.innerWidth <= 768) {
            navbar.classList.add('mobile');
        } else {
            navbar.classList.remove('mobile');
        }
    };

    window.addEventListener('resize', createMobileMenu);
    createMobileMenu();
});

// Utility functions for future development
const LivyUtils = {
    // Function to handle form submissions (for future use)
    handleFormSubmission: function(formData) {
        console.log('Form submission will be handled in future phases:', formData);
    },
    
    // Function to manage user authentication (for future use)
    handleAuthentication: function(action) {
        console.log(`Authentication ${action} will be implemented in future phases`);
    },
    
    // Function to load dynamic content (for future use)
    loadContent: function(section) {
        console.log(`Dynamic content loading for ${section} will be implemented in future phases`);
    }
};
