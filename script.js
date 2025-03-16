function startCamera() {
    const heroSection = document.querySelector('.hero-content');
    const imagePlaceholder = document.querySelector('.image-placeholder');

    // Show a message when capturing starts
    heroSection.innerHTML = '<h1>Smile! Capturing your moment...</h1>';

    // Simulate a delay for capturing
    setTimeout(() => {
        heroSection.innerHTML = '<h1>Capture Memories Instantly</h1><p>Step into our interactive photobooth for unforgettable moments.</p><button onclick="startPhotobooth()">Capture</button>';

        // Show a placeholder for the captured image
        imagePlaceholder.innerHTML = '<img src="placeholder.jpg" alt="Captured Photo" style="width:300px;height:400px;border-radius:12px;">';
    }, 2000);
} 
