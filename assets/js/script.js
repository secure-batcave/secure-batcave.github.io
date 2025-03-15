// This is a minimal JavaScript file for the A.T.L.A.S prototype
// It doesn't have any functionality yet, but can be expanded later

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the panels
    initializePanels();
    
    // Add event listeners to the send buttons
    const sendButtons = document.querySelectorAll('.chat-input button');
    sendButtons.forEach(button => {
        button.addEventListener('click', function() {
            // This would send the message in a real implementation
            const textarea = this.previousElementSibling;
            if (textarea.value.trim() !== '') {
                console.log('Message would be sent:', textarea.value);
                textarea.value = '';
            }
        });
    });
    
    // Add event listeners for Enter key in textareas
    const textareas = document.querySelectorAll('.chat-input textarea');
    textareas.forEach(textarea => {
        textarea.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                const button = this.nextElementSibling;
                button.click();
            }
        });
    });
});

function initializePanels() {
    // This function would initialize the panels with any default content
    console.log('A.T.L.A.S panels initialized');
    
    // Fix for Font Awesome chart-network icon which might not exist in free version
    const analysisIcon = document.querySelector('.panel-header i.fas.fa-chart-network');
    if (analysisIcon) {
        // Replace with chart-line if chart-network is not available
        analysisIcon.classList.remove('fa-chart-network');
        analysisIcon.classList.add('fa-chart-line');
    }
}
