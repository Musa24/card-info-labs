// Typing effects in the card
const words = ['Developer', 'Student', 'Beliver', 'Thinker', 'Friend'];

document.addEventListener('DOMContentLoaded', init);

class TypeWriterEffect {
  constructor(words, txtElement) {
    this.words = words;
    this.txtElement = txtElement;
    this.textToWrite = '';
    this.wordIndex = 0;
    this.isDeleting = false;
    this.Typing();
  }

  Typing() {
    let typingSpeed = 500;
    if (this.wordIndex === this.words.length) {
      this.wordIndex = 0;
    }
    const currentWord = words[this.wordIndex];

    if (this.isDeleting) {
      typingSpeed /= 3;
      this.textToWrite = currentWord.substring(0, this.textToWrite.length - 1);
      if (this.textToWrite === '') {
        this.isDeleting = false;
        this.wordIndex++;
        typingSpeed = 1000;
      }
    } else {
      this.textToWrite = currentWord.substring(0, this.textToWrite.length + 1);
      if (this.textToWrite === currentWord) {
        this.isDeleting = true;

        typingSpeed = 2000;
      }
    }
    this.txtElement.innerHTML = `<span class="writingText-cursor">${this.textToWrite}</span>`;
    setTimeout(() => this.Typing(), typingSpeed);
  }
}

function init() {
  const txtElement = document.querySelector('.typing-effect');
  new TypeWriterEffect(words, txtElement);
}

// Flipping card
const btn = document.querySelector('button');
const goBackBtn = document.querySelector('.go-back');

const card = document.querySelector('.card');
const cardContainer = document.querySelector('.card-container');

btn.addEventListener('click', () => {
  cardContainer.style.transform = 'rotateY(180deg)';
});

goBackBtn.addEventListener('click', () => {
  cardContainer.style.transform = 'rotateY(0deg)';
});
