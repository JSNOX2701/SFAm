// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    createFloatingFlowers();
    createBouquet();
    createFlowerGarden();
    addInteractiveEffects();
    initializeAnimations();
    addTitleEffects();
    initializeSurpriseButton();
});

// Crear partículas de fondo
function createParticles() {
    const particlesContainer = document.getElementById('particles-container');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Crear flores flotantes
function createFloatingFlowers() {
    const flowersContainer = document.getElementById('floating-flowers');
    const flowerCount = 12;
    const flowerEmojis = ['🌻', '🌼', '🌺', '🌸', '🌷', '🌹'];
    
    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
        flower.style.left = Math.random() * 100 + '%';
        flower.style.top = Math.random() * 100 + '%';
        flower.style.animationDelay = Math.random() * 8 + 's';
        flower.style.animationDuration = (Math.random() * 4 + 6) + 's';
        flower.style.fontSize = (Math.random() * 15 + 25) + 'px';
        
        flowersContainer.appendChild(flower);
    }
}

// Crear efectos para el ramo de flores
function createBouquet() {
    const bouquetContainer = document.getElementById('bouquet-container');
    if (!bouquetContainer) return;
    
    // Efecto de brillo pulsante
    setInterval(() => {
        const overlay = bouquetContainer.querySelector('.bouquet-overlay');
        if (overlay) {
            overlay.style.opacity = '0.3';
            setTimeout(() => {
                overlay.style.opacity = '0';
            }, 500);
        }
    }, 3000);
    
    // Efecto de corazones flotantes al hacer hover
    bouquetContainer.addEventListener('mouseenter', function() {
        createFloatingHearts();
    });
    
    // Efecto de click
    bouquetContainer.addEventListener('click', function() {
        createConfetti();
        showBouquetMessage();
        createHeartExplosion();
    });
    
    // Efecto de parpadeo suave
    const image = bouquetContainer.querySelector('.bouquet-image');
    if (image) {
        setInterval(() => {
            image.style.filter = 'brightness(1.2) contrast(1.2) saturate(1.3)';
            setTimeout(() => {
                image.style.filter = 'brightness(1.1) contrast(1.1)';
            }, 1000);
        }, 4000);
    }
}

// Crear corazones flotantes
function createFloatingHearts() {
    const heartsContainer = document.getElementById('floating-hearts');
    if (!heartsContainer) return;
    
    const heartCount = 8;
    const hearts = ['💖', '💕', '💗', '💓', '💝', '💘', '💞', '💟'];
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        heartsContainer.appendChild(heart);
        
        // Remover corazón después de la animación
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 4000);
    }
}

// Crear explosión de corazones
function createHeartExplosion() {
    const heartsContainer = document.getElementById('floating-hearts');
    if (!heartsContainer) return;
    
    const heartCount = 15;
    const hearts = ['💖', '💕', '💗', '💓', '💝', '💘', '💞', '💟', '❤️', '🧡', '💛', '💚', '💙', '💜', '🤍'];
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.animationDelay = Math.random() * 0.5 + 's';
        heart.style.animationDuration = '2s';
        heart.style.fontSize = (Math.random() * 1 + 1.5) + 'rem';
        
        // Posición aleatoria desde el centro
        const angle = (Math.PI * 2 * i) / heartCount;
        const distance = 100 + Math.random() * 50;
        heart.style.left = (50 + Math.cos(angle) * distance / 3.5) + '%';
        heart.style.top = (50 + Math.sin(angle) * distance / 4.5) + '%';
        
        heartsContainer.appendChild(heart);
        
        // Remover corazón después de la animación
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 3000);
    }
}

// Mostrar mensaje del ramo
function showBouquetMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.95);
        padding: 40px;
        border-radius: 25px;
        box-shadow: 0 25px 60px rgba(255, 215, 0, 0.6);
        text-align: center;
        z-index: 1000;
        backdrop-filter: blur(15px);
        border: 3px solid rgba(255, 215, 0, 0.4);
        max-width: 400px;
    `;
    
    message.innerHTML = `
        <div style="font-size: 4rem; margin-bottom: 20px;">🌻</div>
        <h3 style="color: #F57F17; margin-bottom: 15px; font-family: 'Dancing Script', cursive; font-size: 2rem;">Mi ramo para ti</h3>
        <p style="color: #666; margin-bottom: 15px; line-height: 1.6;">Un ramo lleno de amor, alegría y esperanza, creado especialmente para ti, mi querida Salomé.</p>
        <p style="font-style: italic; color: #F57F17; font-size: 0.9rem;">Cada flor representa un sentimiento que siento por ti 💛</p>
    `;
    
    document.body.appendChild(message);
    
    // Animación de entrada
    gsap.from(message, {
        duration: 0.5,
        scale: 0.5,
        opacity: 0,
        ease: 'back.out(1.7)'
    });
    
    // Remover mensaje después de 4 segundos
    setTimeout(() => {
        gsap.to(message, {
            duration: 0.3,
            scale: 0.8,
            opacity: 0,
            ease: 'power2.in',
            onComplete: () => {
                document.body.removeChild(message);
            }
        });
    }, 4000);
}

// Crear jardín de flores
function createFlowerGarden() {
    const gardenContainer = document.getElementById('flowers-garden');
    if (!gardenContainer) return;
    
    const flowers = [
        {
            emoji: '🌻',
            name: 'Girasol',
            description: 'Alegría y energía solar'
        },
        {
            emoji: '🌼',
            name: 'Margarita',
            description: 'Inocencia y pureza'
        },
        {
            emoji: '🌹',
            name: 'Rosa',
            description: 'Amor y amistad'
        },
        {
            emoji: '🌷',
            name: 'Tulipán',
            description: 'Elegancia y prosperidad'
        },
        {
            emoji: '🌺',
            name: 'Crisantemo',
            description: 'Longevidad y felicidad'
        },
        {
            emoji: '🌸',
            name: 'Cerezo',
            description: 'Renacimiento y esperanza'
        },
        {
            emoji: '🌿',
            name: 'Hojas',
            description: 'Crecimiento y vida'
        },
        {
            emoji: '🍀',
            name: 'Trébol',
            description: 'Suerte y fortuna'
        }
    ];
    
    flowers.forEach((flower, index) => {
        const flowerItem = document.createElement('div');
        flowerItem.className = 'flower-item';
        flowerItem.style.animationDelay = `${index * 0.1}s`;
        
        flowerItem.innerHTML = `
            <span class="flower-emoji">${flower.emoji}</span>
            <div class="flower-name">${flower.name}</div>
            <div class="flower-description">${flower.description}</div>
        `;
        
        // Efecto de click
        flowerItem.addEventListener('click', () => {
            showFlowerMessage(flower);
        });
        
        gardenContainer.appendChild(flowerItem);
    });
}

// Mostrar mensaje de flor
function showFlowerMessage(flower) {
    // Crear efecto de confeti
    createConfetti();
    
    // Mostrar mensaje temporal
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.95);
        padding: 30px;
        border-radius: 20px;
        box-shadow: 0 20px 50px rgba(255, 215, 0, 0.5);
        text-align: center;
        z-index: 1000;
        backdrop-filter: blur(10px);
        border: 2px solid rgba(255, 215, 0, 0.3);
    `;
    
    message.innerHTML = `
        <div style="font-size: 4rem; margin-bottom: 15px;">${flower.emoji}</div>
        <h3 style="color: #F57F17; margin-bottom: 10px; font-family: 'Dancing Script', cursive; font-size: 1.8rem;">${flower.name}</h3>
        <p style="color: #666; margin-bottom: 15px;">${flower.description}</p>
        <p style="font-style: italic; color: #F57F17; font-size: 0.9rem;">Para mi querida Salomé 💛</p>
    `;
    
    document.body.appendChild(message);
    
    // Remover mensaje después de 3 segundos
    setTimeout(() => {
        message.style.opacity = '0';
        message.style.transform = 'translate(-50%, -50%) scale(0.8)';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 3000);
}

// Añadir efectos interactivos
function addInteractiveEffects() {
    // Efecto de hover en elementos del jardín
    const flowerItems = document.querySelectorAll('.flower-item');
    flowerItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efecto de click en elementos del jardín
    flowerItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// Inicializar animaciones con GSAP
function initializeAnimations() {
    // Animación del título principal
    gsap.from('.title-line', {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.3,
        ease: 'power2.out'
    });
    
    // Animación del mensaje
    gsap.from('.message-card', {
        duration: 1.5,
        y: 30,
        opacity: 0,
        delay: 0.5,
        ease: 'power2.out'
    });
    
    // Animación del jardín
    gsap.from('.flower-item', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        delay: 1,
        ease: 'power2.out'
    });
}

// Efecto de confeti
function createConfetti() {
    const confettiCount = 30;
    const colors = ['#FFD700', '#FFEB3B', '#FFF59D', '#FF6B6B', '#6BCF7F'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '8px';
        confetti.style.height = '8px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

// CSS para la animación de confeti
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Lanzar confeti después de un delay
setTimeout(createConfetti, 2000);

// Efectos especiales para el título
function addTitleEffects() {
    const titleText = document.querySelector('.title-text');
    if (!titleText) return;
    
    // Efecto de brillo pulsante
    setInterval(() => {
        titleText.style.textShadow = '3px 3px 6px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.4)';
        setTimeout(() => {
            titleText.style.textShadow = '3px 3px 6px rgba(0, 0, 0, 0.4)';
        }, 1000);
    }, 3000);
    
    // Efecto de hover con partículas
    titleText.addEventListener('mouseenter', function() {
        createTitleParticles();
        this.style.color = '#FF6B6B';
        this.style.transform = 'scale(1.05) rotate(1deg)';
    });
    
    titleText.addEventListener('mouseleave', function() {
        this.style.color = '#F57F17';
        this.style.transform = 'scale(1) rotate(0deg)';
    });
    
    // Efecto de click con ondas
    titleText.addEventListener('click', function() {
        createRippleEffect(event);
        createTitleConfetti();
    });
    
    // Efecto de escritura gradual
    typeWriterEffect();
}

// Crear partículas alrededor del título
function createTitleParticles() {
    const titleText = document.querySelector('.title-text');
    const rect = titleText.getBoundingClientRect();
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: #FFD700;
            border-radius: 50%;
            pointer-events: none;
            z-index: 999;
            left: ${rect.left + rect.width/2}px;
            top: ${rect.top + rect.height/2}px;
        `;
        
        document.body.appendChild(particle);
        
        // Animación de partícula
        gsap.to(particle, {
            duration: 1.5,
            x: (Math.random() - 0.5) * 200,
            y: (Math.random() - 0.5) * 200,
            scale: 0,
            opacity: 0,
            ease: 'power2.out',
            onComplete: () => {
                document.body.removeChild(particle);
            }
        });
    }
}

// Crear efecto de ondas al hacer click
function createRippleEffect(event) {
    const titleText = document.querySelector('.title-text');
    const rect = titleText.getBoundingClientRect();
    const ripple = document.createElement('div');
    
    ripple.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid #FFD700;
        border-radius: 50%;
        pointer-events: none;
        z-index: 999;
        left: ${event.clientX - 10}px;
        top: ${event.clientY - 10}px;
    `;
    
    document.body.appendChild(ripple);
    
    gsap.to(ripple, {
        duration: 1,
        scale: 10,
        opacity: 0,
        ease: 'power2.out',
        onComplete: () => {
            document.body.removeChild(ripple);
        }
    });
}

// Crear confeti especial para el título
function createTitleConfetti() {
    const titleText = document.querySelector('.title-text');
    const rect = titleText.getBoundingClientRect();
    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];
    
    for (let i = 0; i < 15; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            pointer-events: none;
            z-index: 999;
            left: ${rect.left + rect.width/2}px;
            top: ${rect.top}px;
        `;
        
        document.body.appendChild(confetti);
        
        gsap.to(confetti, {
            duration: 2,
            x: (Math.random() - 0.5) * 300,
            y: Math.random() * 200 + 100,
            rotation: Math.random() * 360,
            scale: 0,
            ease: 'power2.out',
            onComplete: () => {
                document.body.removeChild(confetti);
            }
        });
    }
}

// Efecto de escritura gradual
function typeWriterEffect() {
    const titleText = document.querySelector('.title-text');
    const originalText = titleText.textContent;
    titleText.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            titleText.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 500);
}

// Inicializar botón de sorpresa
function initializeSurpriseButton() {
    const surpriseBtn = document.getElementById('surprise-btn');
    const backgroundMusic = document.getElementById('background-music');
    let isPlaying = false;
    
    if (!surpriseBtn || !backgroundMusic) return;
    
    // Efecto de click en el botón
    surpriseBtn.addEventListener('click', function() {
        if (!isPlaying) {
            // Reproducir música
            backgroundMusic.play().then(() => {
                isPlaying = true;
                updateButtonText('🎵 Reproduciendo...');
                createMusicEffects();
                showMusicMessage();
                createButtonCelebration();
            }).catch(error => {
                console.log('Error al reproducir música:', error);
                showMusicError();
            });
        } else {
            // Pausar música
            backgroundMusic.pause();
            isPlaying = false;
            updateButtonText('🎵 Reproducir Música 🎵');
        }
    });
    
    // Función para actualizar el texto del botón
    function updateButtonText(text) {
        const span = surpriseBtn.querySelector('span');
        if (span) {
            span.textContent = text;
        }
    }
    
    // Crear efectos visuales cuando se reproduce música
    function createMusicEffects() {
        // Efecto de ondas de música
        setInterval(() => {
            if (isPlaying) {
                createMusicWaves();
            }
        }, 2000);
        
        // Efecto de partículas musicales
        setInterval(() => {
            if (isPlaying) {
                createMusicParticles();
            }
        }, 1000);
    }
    
    // Crear ondas de música
    function createMusicWaves() {
        const rect = surpriseBtn.getBoundingClientRect();
        
        for (let i = 0; i < 3; i++) {
            const wave = document.createElement('div');
            wave.style.cssText = `
                position: fixed;
                width: 20px;
                height: 20px;
                border: 2px solid #FF6B6B;
                border-radius: 50%;
                pointer-events: none;
                z-index: 999;
                left: ${rect.left + rect.width/2 - 10}px;
                top: ${rect.top + rect.height/2 - 10}px;
            `;
            
            document.body.appendChild(wave);
            
            gsap.to(wave, {
                duration: 2,
                scale: 8,
                opacity: 0,
                ease: 'power2.out',
                onComplete: () => {
                    document.body.removeChild(wave);
                }
            });
        }
    }
    
    // Crear partículas musicales
    function createMusicParticles() {
        const rect = surpriseBtn.getBoundingClientRect();
        const musicNotes = ['♪', '♫', '♬', '♩', '♭', '♯'];
        
        for (let i = 0; i < 5; i++) {
            const note = document.createElement('div');
            note.style.cssText = `
                position: fixed;
                font-size: 1.5rem;
                color: #FF6B6B;
                pointer-events: none;
                z-index: 999;
                left: ${rect.left + rect.width/2}px;
                top: ${rect.top}px;
            `;
            note.textContent = musicNotes[Math.floor(Math.random() * musicNotes.length)];
            
            document.body.appendChild(note);
            
            gsap.to(note, {
                duration: 3,
                y: -200,
                x: (Math.random() - 0.5) * 200,
                rotation: Math.random() * 360,
                opacity: 0,
                ease: 'power2.out',
                onComplete: () => {
                    document.body.removeChild(note);
                }
            });
        }
    }
    
    // Crear celebración del botón
    function createButtonCelebration() {
        // Efecto de explosión de corazones
        createHeartExplosion();
        
        // Efecto de confetti
        createConfetti();
        
        // Efecto de ondas doradas
        createGoldenWaves();
    }
    
    // Crear ondas doradas
    function createGoldenWaves() {
        const rect = surpriseBtn.getBoundingClientRect();
        
        for (let i = 0; i < 5; i++) {
            const wave = document.createElement('div');
            wave.style.cssText = `
                position: fixed;
                width: 30px;
                height: 30px;
                border: 3px solid #FFD700;
                border-radius: 50%;
                pointer-events: none;
                z-index: 999;
                left: ${rect.left + rect.width/2 - 15}px;
                top: ${rect.top + rect.height/2 - 15}px;
            `;
            
            document.body.appendChild(wave);
            
            gsap.to(wave, {
                duration: 2,
                scale: 12,
                opacity: 0,
                ease: 'power2.out',
                delay: i * 0.2,
                onComplete: () => {
                    document.body.removeChild(wave);
                }
            });
        }
    }
    
    // Efectos de hover
    surpriseBtn.addEventListener('mouseenter', function() {
        createButtonParticles();
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    surpriseBtn.addEventListener('mouseleave', function() {
        if (!isPlaying) {
            this.style.transform = 'translateY(0) scale(1)';
        }
    });
    
    // Función para actualizar el texto del botón
    function updateButtonText(text) {
        const span = surpriseBtn.querySelector('span');
        if (span) {
            span.textContent = text;
        }
    }
    
    // Crear efectos visuales cuando se reproduce música
    function createMusicEffects() {
        // Efecto de ondas de música
        setInterval(() => {
            if (isPlaying) {
                createMusicWaves();
            }
        }, 2000);
        
        // Efecto de partículas musicales
        setInterval(() => {
            if (isPlaying) {
                createMusicParticles();
            }
        }, 1000);
    }
    
    // Crear ondas de música
    function createMusicWaves() {
        const rect = surpriseBtn.getBoundingClientRect();
        
        for (let i = 0; i < 3; i++) {
            const wave = document.createElement('div');
            wave.style.cssText = `
                position: fixed;
                width: 20px;
                height: 20px;
                border: 2px solid #FF6B6B;
                border-radius: 50%;
                pointer-events: none;
                z-index: 999;
                left: ${rect.left + rect.width/2 - 10}px;
                top: ${rect.top + rect.height/2 - 10}px;
            `;
            
            document.body.appendChild(wave);
            
            gsap.to(wave, {
                duration: 2,
                scale: 8,
                opacity: 0,
                ease: 'power2.out',
                onComplete: () => {
                    document.body.removeChild(wave);
                }
            });
        }
    }
    
    // Crear partículas musicales
    function createMusicParticles() {
        const rect = surpriseBtn.getBoundingClientRect();
        const musicNotes = ['♪', '♫', '♬', '♩', '♭', '♯'];
        
        for (let i = 0; i < 5; i++) {
            const note = document.createElement('div');
            note.style.cssText = `
                position: fixed;
                font-size: 1.5rem;
                color: #FF6B6B;
                pointer-events: none;
                z-index: 999;
                left: ${rect.left + rect.width/2}px;
                top: ${rect.top}px;
            `;
            note.textContent = musicNotes[Math.floor(Math.random() * musicNotes.length)];
            
            document.body.appendChild(note);
            
            gsap.to(note, {
                duration: 3,
                y: -200,
                x: (Math.random() - 0.5) * 200,
                rotation: Math.random() * 360,
                opacity: 0,
                ease: 'power2.out',
                onComplete: () => {
                    document.body.removeChild(note);
                }
            });
        }
    }
    
    // Crear partículas del botón
    function createButtonParticles() {
        const rect = surpriseBtn.getBoundingClientRect();
        
        for (let i = 0; i < 6; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: #FFD700;
                border-radius: 50%;
                pointer-events: none;
                z-index: 999;
                left: ${rect.left + rect.width/2}px;
                top: ${rect.top + rect.height/2}px;
            `;
            
            document.body.appendChild(particle);
            
            gsap.to(particle, {
                duration: 1,
                x: (Math.random() - 0.5) * 100,
                y: (Math.random() - 0.5) * 100,
                scale: 0,
                opacity: 0,
                ease: 'power2.out',
                onComplete: () => {
                    document.body.removeChild(particle);
                }
            });
        }
    }
    
    // Mostrar mensaje de música
    function showMusicMessage() {
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 107, 107, 0.9);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            font-weight: bold;
            z-index: 1000;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        `;
        message.textContent = '🎵 Música de fondo activada';
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(message);
            }, 300);
        }, 3000);
    }
    
    // Mostrar error de música
    function showMusicError() {
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 0, 0, 0.9);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            font-weight: bold;
            z-index: 1000;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        `;
        message.textContent = '⚠️ Coloca tu archivo de música como "tu-cancion.mp3"';
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(message);
            }, 300);
        }, 5000);
    }
}
