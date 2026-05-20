document.addEventListener('DOMContentLoaded', () => {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    const form = document.getElementById('predictionForm');
    const clearBtn = document.getElementById('clearBtn');
    const resultSection = document.getElementById('resultSection');
    const predictedPrice = document.getElementById('predictedPrice');
    const loadingOverlay = document.getElementById('loadingOverlay');

    // Handle form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Show loading spinner
        loadingOverlay.classList.remove('d-none');
        resultSection.classList.add('d-none');

        // Gather data
        const data = {
            crim: document.getElementById('crim').value,
            zn: document.getElementById('zn').value,
            indus: document.getElementById('indus').value,
            chas: document.getElementById('chas').value,
            nox: document.getElementById('nox').value,
            rm: document.getElementById('rm').value,
            age: document.getElementById('age').value,
            dis: document.getElementById('dis').value,
            rad: document.getElementById('rad').value,
            tax: document.getElementById('tax').value,
            ptratio: document.getElementById('ptratio').value,
            b: document.getElementById('b').value,
            lstat: document.getElementById('lstat').value
        };

        try {
            const response = await fetch('/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            // Artificial delay for smooth UI experience (optional)
            setTimeout(() => {
                loadingOverlay.classList.add('d-none');
                
                if (result.success) {
                    // Format currency
                    const formattedPrice = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        maximumFractionDigits: 0
                    }).format(result.prediction);

                    predictedPrice.innerText = formattedPrice;
                    
                    // Show result with animation
                    resultSection.classList.remove('d-none');
                    // Scroll to result
                    resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                    alert('Error making prediction: ' + result.error);
                }
            }, 800);

        } catch (error) {
            loadingOverlay.classList.add('d-none');
            alert('Network error occurred.');
            console.error(error);
        }
    });

    // Handle clear button
    clearBtn.addEventListener('click', () => {
        form.reset();
        resultSection.classList.add('d-none');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
