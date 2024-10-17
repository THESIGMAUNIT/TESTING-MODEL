document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('backBtn').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    const questions = [
        {
            question: "What is Pythagoras Theorem?",
            answers: ["a^2+b^2=c^2", "a^2/b^2=c^2", "4x4=16"],
            correctAnswer: "a^2+b^2=c^2",
            solution: "The Pythagorean theorem states that in a right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides."
        },
        {
            question: "What is the formula for the area of a circle?",
            answers: ["2πr", "πr^2", "πd^2/4"],
            correctAnswer: "πr^2",
            solution: "The area of a circle is calculated using the formula πr^2, where r is the radius of the circle."
        },
        {
            question: "What is the formula for speed?",
            answers: ["distance / time", "time / distance", "distance x time"],
            correctAnswer: "distance / time",
            solution: "Speed is calculated as the distance traveled divided by the time taken."
        },
        {
            question: "What is the formula for acceleration?",
            answers: ["(final velocity - initial velocity) / time", "distance / time", "force / mass"],
            correctAnswer: "(final velocity - initial velocity) / time",
            solution: "Acceleration is the change in velocity divided by the time taken."
        },
        {
            question: "What is the formula for the area of a triangle?",
            answers: ["base x height", "1/2 x base x height", "base^2 x height"],
            correctAnswer: "1/2 x base x height",
            solution: "The area of a triangle is given by 1/2 x base x height."
        },
        {
            question: "What is Newton's second law?",
            answers: ["F = m + a", "F = m x a", "F = m / a"],
            correctAnswer: "F = m x a",
            solution: "Newton's second law states that force equals mass times acceleration."
        },
        {
            question: "What is the formula for density?",
            answers: ["mass x volume", "mass / volume", "volume / mass"],
            correctAnswer: "mass / volume",
            solution: "Density is defined as mass divided by volume."
        },
        {
            question: "What is the formula for kinetic energy?",
            answers: ["1/2 m v^2", "m v^2", "1/2 m v"],
            correctAnswer: "1/2 m v^2",
            solution: "Kinetic energy is calculated as 1/2 times mass times velocity squared."
        },
        {
            question: "What is the formula for gravitational potential energy?",
            answers: ["mgh", "1/2 mv^2", "mg/h"],
            correctAnswer: "mgh",
            solution: "Gravitational potential energy is calculated using the formula mgh, where m is mass, g is gravitational acceleration, and h is height."
        },
        {
            question: "What is the formula for momentum?",
            answers: ["force x time", "mass x velocity", "velocity / mass"],
            correctAnswer: "mass x velocity",
            solution: "Momentum is the product of mass and velocity."
        },
        {
            question: "What is Ohm's Law?",
            answers: ["V = IR", "V = I/R", "V = R/I"],
            correctAnswer: "V = IR",
            solution: "Ohm's law states that voltage equals current times resistance (V = IR)."
        },
        {
            question: "What is the formula for power in an electrical circuit?",
            answers: ["P = IV", "P = I^2R", "P = IR"],
            correctAnswer: "P = IV",
            solution: "Electrical power is the product of current and voltage (P = IV)."
        },
        {
            question: "What is the formula for pressure?",
            answers: ["force / area", "force x area", "mass x area"],
            correctAnswer: "force / area",
            solution: "Pressure is calculated as force divided by area."
        },
        {
            question: "What is the formula for work done?",
            answers: ["force / distance", "force x distance", "distance / force"],
            correctAnswer: "force x distance",
            solution: "Work done is the product of force and the distance over which it is applied."
        },
        {
            question: "What is the value of acceleration due to gravity on Earth?",
            answers: ["9.8 m/s^2", "10.8 m/s^2", "8.9 m/s^2"],
            correctAnswer: "9.8 m/s^2",
            solution: "The acceleration due to gravity on Earth is approximately 9.8 m/s^2."
        },
        {
            question: "What is the formula for voltage?",
            answers: ["V = I x R", "V = P / I", "V = I^2 x R"],
            correctAnswer: "V = I x R",
            solution: "Voltage is the product of current and resistance."
        },
        {
            question: "What is the formula for wave speed?",
            answers: ["frequency x wavelength", "frequency / wavelength", "wavelength / frequency"],
            correctAnswer: "frequency x wavelength",
            solution: "Wave speed is the product of frequency and wavelength."
        },
        {
            question: "What is the formula for the volume of a cylinder?",
            answers: ["πr^2h", "πd^2h", "πr^3h"],
            correctAnswer: "πr^2h",
            solution: "The volume of a cylinder is calculated as πr^2h, where r is the radius and h is the height."
        },
        {
            question: "What is the formula for the refractive index?",
            answers: ["sin i / sin r", "sin r / sin i", "cos i / cos r"],
            correctAnswer: "sin i / sin r",
            solution: "The refractive index is the ratio of the sine of the angle of incidence to the sine of the angle of refraction."
        },
        {
            question: "What is the formula for electrical resistance?",
            answers: ["V / I", "V x I", "I / V"],
            correctAnswer: "V / I",
            solution: "Resistance is calculated by dividing voltage by current (R = V / I)."
        },
        {
            question: "What is the formula for the circumference of a circle?",
            answers: ["2πr", "πr^2", "πd^2"],
            correctAnswer: "2πr",
            solution: "The circumference of a circle is calculated as 2πr, where r is the radius."
        },
        {
            question: "What is the unit of force?",
            answers: ["Newton", "Joule", "Watt"],
            correctAnswer: "Newton",
            solution: "The SI unit of force is the Newton (N)."
        },
        {
            question: "What is the formula for the frequency of a wave?",
            answers: ["1 / period", "period / 1", "wavelength / speed"],
            correctAnswer: "1 / period",
            solution: "Frequency is calculated as the reciprocal of the period (f = 1 / T)."
        },
        {
            question: "What is the formula for Hooke's law?",
            answers: ["F = kx", "F = x / k", "F = k / x"],
            correctAnswer: "F = kx",
            solution: "Hooke's law states that force is directly proportional to the extension of the spring (F = kx)."
        },
        {
            question: "What is the formula for the gravitational force between two masses?",
            answers: ["G(m1m2) / r^2", "G(m1 + m2) / r^2", "G(m1m2) / r"],
            correctAnswer: "G(m1m2) / r^2",
            solution: "The gravitational force between two masses is calculated using Newton's law of universal gravitation, F = G(m1m2) / r^2."
        }
    ];
    

    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
        const questionElement = document.getElementById('question');
        const answersElement = document.getElementById('answers');

        answersElement.innerHTML = '';

        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.classList.add('answerBtn');
            button.addEventListener('click', () => checkAnswer(answer));
            answersElement.appendChild(button);
        });
    }

    function checkAnswer(selectedAnswer) {
        const currentQuestion = questions[currentQuestionIndex];
        const correctAnswer = currentQuestion.correctAnswer;
        if (selectedAnswer === correctAnswer) {
            score++;
            document.getElementById('score').textContent = `Score: ${score}`;
        } else {
            alert(`Incorrect Answer. Solution: ${currentQuestion.solution}`);
            score--;
            document.getElementById('score').textContent = `Score: ${score}`;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            endQuiz();
        }
    }

    function endQuiz() {
        document.getElementById('question').textContent = "Quiz Over!";
        document.getElementById('answers').innerHTML = '';
        document.getElementById('retakeBtn').style.display = 'block';
        console.log("Quiz ended, retake button displayed");
    }

    function resetQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        document.getElementById('score').textContent = `Score: ${score}`;
        document.getElementById('retakeBtn').style.display = 'none';
        loadQuestion();
    }

    document.getElementById('retakeBtn').addEventListener('click', resetQuiz);

    loadQuestion();
});
