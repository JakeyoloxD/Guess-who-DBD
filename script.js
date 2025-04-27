// Make all cards clickable to toggle "fade" class
const cards = document.querySelectorAll('.card');

// Load the WRONG.mp3 sound
const wrongSound = new Audio('WRONG.ogg');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('fade');
    wrongSound.currentTime = 0; // rewind to start
    wrongSound.play();
  });
});

// Reset button functionality
function resetGrid() {
  cards.forEach(card => {
    card.classList.remove('fade');
  });
}
// List of all character names
const characterNames = [
    "Dwight Fairfield", "Meg Thomas", "Claudette Morel", "Jake Park", "Nea Karlsson", "David King", "Feng Min", "Kate Denson",
    "Quentin Smith", "Laurie Strode", "Ace Visconti", "Bill Overbeck", "Ashley J. Williams", "Jane Romero", "Jeff Johansen", "Yui Kimura",
    "Zarina Kassir", "Steve Harrington", "Nancy Wheeler", "Felix Richter", "Elodie Rakoto", "Yun-Jin Lee", "Jill Valentine", "David Tapp",
    "Leon S. Kennedy", "Mikaela Reid", "Sable Ward", "Aestri", "Lara Croft", "Trevor Belmont", "Taurie Cain", "Cheryl Mason", "Jonah Vasquez",
    "Haddie Kaur", "Vittorio Toscano", "Ada Wong", "Adam Francis", "Rebecca Chambers", "Thalita Lyra", "Renato Lyra", "Gabriel Soma",
    "Nicolas Cage", "Ellen Ripley", "Alan Wake", "Yoichi Asakawa",
    "Trapper", "Wraith", "Hillbilly", "Nurse", "Huntress", "Myers", "Hag", "Doctor", "Cannibal", "Nightmare", "Pig",
    "Clown", "Spirit", "Legion", "Plague", "Ghost Face", "Demogorgon", "Oni", "Deathslinger", "Pyramid Head", "Blight",
    "Twins", "Trickster", "Nemesis", "Pinhead", "Artist", "Onryō", "Dredge", "Wesker", "Knight", "Skull Merchant",
    "Singularity", "Xenomorph", "Chucky", "Unknown", "Hound Master", "Dark Lord", "Ghoul", "Lich"
  ];
  
  // Generate random character and display
  function generateCharacter() {
    const randomIndex = Math.floor(Math.random() * characterNames.length);
    const randomCharacter = characterNames[randomIndex];
    document.getElementById('random-character').textContent = randomCharacter;
  }