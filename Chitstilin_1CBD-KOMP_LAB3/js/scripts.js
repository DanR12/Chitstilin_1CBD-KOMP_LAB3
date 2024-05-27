    // Swap blocks 3 and 6
    function swapBlocks() {
        const block3 = document.getElementById('block3');
        const block6 = document.getElementById('block6');
        const temp = block3.innerHTML;
        block3.innerHTML = block6.innerHTML;
        block6.innerHTML = temp;
    }

    // Calculate the area of a trapezoid
    function calculateTrapezoidArea() {
        const block5 = document.getElementById('block5');
        block5.innerHTML = `
            <div>
                <label for="base1">Base 1:</label>
                <input type="number" id="base1">
            </div>
            <div>
                <label for="base2">Base 2:</label>
                <input type="number" id="base2">
            </div>
            <div>
                <label for="height">Height:</label>
                <input type="number" id="height">
            </div>
            <button onclick="showTrapezoidArea()">Calculate Area</button>
        `;
    }

    function showTrapezoidArea() {
        const base1 = parseFloat(document.getElementById('base1').value);
        const base2 = parseFloat(document.getElementById('base2').value);
        const height = parseFloat(document.getElementById('height').value);
        const area = ((base1 + base2) / 2) * height;
        const result = document.createElement('div');
        result.innerHTML = `Trapezoid Area: ${area}`;
        document.getElementById('block5').appendChild(result);
    }

    // Create divisors form
    function createDivisorsForm() {
        const block5 = document.getElementById('block5');
        block5.innerHTML = `
            <div>
                <label for="number">Number:</label>
                <input type="number" id="number">
            </div>
            <button onclick="showDivisors()">Find Divisors</button>
        `;
    }

    function showDivisors() {
        const number = parseInt(document.getElementById('number').value);
        const divisors = [];
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                divisors.push(i);
            }
        }
        alert(`Divisors of ${number}: ${divisors.join(', ')}`);
        document.cookie = `divisors=${divisors.join(', ')}; path=/`;
    }

    window.onload = function() {
        const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
            const [name, value] = cookie.split('=');
            acc[name] = value;
            return acc;
        }, {});

        if (cookies.divisors) {
            const keepData = confirm(`Stored divisors: ${cookies.divisors}. Do you want to keep this data?`);
            if (!keepData) {
                document.cookie = 'divisors=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                location.reload();
            } else {
                alert(`Divisors kept: ${cookies.divisors}. Please reload the page.`);
            }
        }
    }
