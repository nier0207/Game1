// Java Challenges with clean code (no comments in code blocks)
const javaChallenges = [
    {
        topic: "Variables",
        code: `public class Main {
    public static void main(String[] args) {
        ____ age = 25;
        System.out.println("Age: " + age);
    }
}`,
        answer: "int",
        hints: [
            "💡 Hint 1: This is a data type for whole numbers like 1, 2, 3...",
            "💡 Hint 2: It starts with the letter 'i' and has 3 letters"
        ],
        explanation: "✅ Correct! 'int' is the data type for integers (whole numbers) in Java."
    },
    {
        topic: "Variables",
        code: `public class Main {
    public static void main(String[] args) {
        ____ name = "Juan";
        System.out.println("Name: " + name);
    }
}`,
        answer: "String",
        hints: [
            "💡 Hint 1: This is a data type for text or words, starts with a capital letter",
            "💡 Hint 2: It's a non-primitive data type from the java.lang package"
        ],
        explanation: "✅ Correct! 'String' is used for text/words in Java."
    },
    {
        topic: "Conditional Statements",
        code: `public class Main {
    public static void main(String[] args) {
        int number = 10;
        
        if (number ____ 0) {
            System.out.println("Positive number");
        } else {
            System.out.println("Negative number");
        }
    }
}`,
        answer: ">",
        hints: [
            "💡 Hint 1: This is a comparison operator meaning 'greater than'",
            "💡 Hint 2: The symbol is an arrow pointing to the right"
        ],
        explanation: "✅ Correct! '>' (greater than) is used to check if a number is greater than 0."
    },
    {
        topic: "Loops",
        code: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i ____ 5; i++) {
            System.out.println(i);
        }
    }
}`,
        answer: "<=",
        hints: [
            "💡 Hint 1: This is a combination of two symbols: less than and equal",
            "💡 Hint 2: Used to include 5 in the loop condition"
        ],
        explanation: "✅ Correct! '<=' (less than or equal) is used to loop up to and including 5."
    },
    {
        topic: "Loops",
        code: `public class Main {
    public static void main(String[] args) {
        int count = 1;
        
        ____ (count <= 3) {
            System.out.println("Count: " + count);
            count++;
        }
    }
}`,
        answer: "while",
        hints: [
            "💡 Hint 1: This loop executes while the condition is true",
            "💡 Hint 2: 5 letters long and starts with the letter 'w'"
        ],
        explanation: "✅ Correct! 'while' is the keyword for a while loop."
    },
    {
        topic: "Methods",
        code: `public class Main {
    ____ int add(int a, int b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        Main obj = new Main();
        System.out.println("Sum: " + obj.add(5, 3));
    }
}`,
        answer: "public",
        hints: [
            "💡 Hint 1: This is an access modifier that allows the method to be called from anywhere",
            "💡 Hint 2: 6 letters long and starts with 'p'"
        ],
        explanation: "✅ Correct! 'public' is the access modifier that makes the method accessible from anywhere."
    },
    {
        topic: "Arrays",
        code: `public class Main {
    public static void main(String[] args) {
        int[] numbers = ____ int[5];
        numbers[0] = 10;
        System.out.println(numbers[0]);
    }
}`,
        answer: "new",
        hints: [
            "💡 Hint 1: This keyword is used to create a new object",
            "💡 Hint 2: 3 letters long and starts with 'n'"
        ],
        explanation: "✅ Correct! 'new' keyword is used to create an array object."
    },
    {
        topic: "OOP - Class",
        code: `class Car {
    String brand;
    
    Car(String brand) {
        ____.brand = brand;
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car("Toyota");
        System.out.println(myCar.brand);
    }
}`,
        answer: "this",
        hints: [
            "💡 Hint 1: This keyword refers to the current object",
            "💡 Hint 2: 4 letters long and starts with 't'"
        ],
        explanation: "✅ Correct! 'this' keyword is used to refer to the current object's instance variable."
    }
];

let currentLevel = 0;
let score = 0;
let answered = false;
let hintsUsed = 0;
let currentChallenges = [];

// DOM Elements
const landingPage = document.getElementById('landingPage');
const gamePage = document.getElementById('gamePage');
const javaBtn = document.getElementById('java');
const backMenu = document.getElementById('backMenu');
const submitBtn = document.getElementById('submit');
const nextBtn = document.getElementById('nextLevel');
const resetBtn = document.getElementById('reset');
const codeInput = document.getElementById('codeInput');
const codeDisplay = document.getElementById('codeDisplay');
const levelDisplay = document.getElementById('levelDisplay');
const scoreDisplay = document.getElementById('scoreDisplay');
const messageArea = document.getElementById('messageArea');
const hintArea = document.getElementById('hintArea');
const hintBtn = document.getElementById('hintBtn');
const hintCount = document.getElementById('hintCount');

// Event Listeners
javaBtn.addEventListener('click', () => selectLanguage('java'));
backMenu.addEventListener('click', backToMenu);
submitBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', nextChallenge);
resetBtn.addEventListener('click', resetGame);
codeInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !answered) {
        checkAnswer();
    }
});
hintBtn.addEventListener('click', showHint);

function selectLanguage(language) {
    if (language === 'java') {
        currentChallenges = [...javaChallenges];
        currentLevel = 0;
        score = 0;
        answered = false;
        hintsUsed = 0;
        loadChallenge();
        showGamePage();
    }
}

function showGamePage() {
    landingPage.style.display = 'none';
    gamePage.style.display = 'flex';
}

function backToMenu() {
    landingPage.style.display = 'flex';
    gamePage.style.display = 'none';
    currentLevel = 0;
    score = 0;
    answered = false;
    hintsUsed = 0;
}

function loadChallenge() {
    if (currentChallenges.length === 0) return;
    
    const challenge = currentChallenges[currentLevel];
    codeDisplay.textContent = challenge.code;
    levelDisplay.textContent = `Level ${currentLevel + 1}/${currentChallenges.length}`;
    scoreDisplay.textContent = `⭐ Score: ${score}`;
    codeInput.value = '';
    messageArea.innerHTML = '';
    hintArea.innerHTML = '';
    
    answered = false;
    hintsUsed = 0;
    hintCount.textContent = '2';
    hintBtn.disabled = false;
    nextBtn.disabled = true;
    codeInput.disabled = false;
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
    
    codeInput.focus();
}

function showHint() {
    if (answered) {
        showMessage('❌ You already answered this challenge! You cannot use hints anymore.', 'error');
        return;
    }
    
    if (hintsUsed >= 2) {
        showMessage('⚠️ You have no remaining hints for this challenge!', 'error');
        return;
    }
    
    const challenge = currentChallenges[currentLevel];
    const hintMessage = challenge.hints[hintsUsed];
    
    hintArea.innerHTML = `<div class="hint-message">${hintMessage}</div>`;
    
    hintsUsed++;
    const remainingHints = 2 - hintsUsed;
    hintCount.textContent = remainingHints;
    
    if (remainingHints === 0) {
        hintBtn.disabled = true;
    }
    
    hintArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function checkAnswer() {
    if (answered) {
        showMessage('✅ You already answered this! Click "Next Level" for the next challenge.', 'error');
        return;
    }
    
    let userAnswer = codeInput.value.trim();
    let correctAnswer = currentChallenges[currentLevel].answer;
    
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        score += 10;
        scoreDisplay.textContent = `⭐ Score: ${score}`;
        showMessage(currentChallenges[currentLevel].explanation, 'success');
        answered = true;
        nextBtn.disabled = false;
        codeInput.disabled = true;
        hintBtn.disabled = true;
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.5';
    } else {
        showMessage(`❌ Wrong! "${userAnswer}" is not the correct answer. Try again.`, 'error');
        codeInput.focus();
    }
}

function showMessage(message, type) {
    messageArea.innerHTML = `<div class="message ${type}">${message}</div>`;
    setTimeout(() => {
        if (messageArea.innerHTML === `<div class="message ${type}">${message}</div>`) {
            // Auto clear after 5 seconds
        }
    }, 5000);
}

function nextChallenge() {
    if (!answered) {
        showMessage('⚠️ You need to answer the current challenge first!', 'error');
        return;
    }
    
    if (currentLevel < currentChallenges.length - 1) {
        currentLevel++;
        loadChallenge();
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
    } else {
        if (score === currentChallenges.length * 10) {
            showMessage('🏆 CONGRATULATIONS! PERFECT SCORE! 🏆<br>You have mastered Java basics!', 'success');
        } else {
            showMessage(`🎯 GAME COMPLETED! Score: ${score}/${currentChallenges.length * 10}<br>Click "Reset Game" to play again.`, 'success');
        }
        nextBtn.disabled = true;
    }
}

function resetGame() {
    currentLevel = 0;
    score = 0;
    answered = false;
    hintsUsed = 0;
    loadChallenge();
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
    showMessage('🔄 Game reset! Starting from Level 1.', 'success');
}