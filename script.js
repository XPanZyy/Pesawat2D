// Inisialisasi canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Ukuran canvas
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// Pesawat
let pesawat = {
 x: canvasWidth / 2,
 y: canvasHeight - 50,
 width: 50,
 height: 50,
 speed: 5
};

// Musuh
let musuh = {
 x: Math.random() * (canvasWidth - 50),
 y: 0,
 width: 50,
 height: 50,
 speed: 2
};

// Peluru
let peluru = {
 x: pesawat.x,
 y: pesawat.y,
 width: 10,
 height: 20,
 speed: 10
};

// Latar belakang
const bg = new Image();
bg.src = 'bg.png';

// Fungsi menggambar
function menggambar() {
 ctx.clearRect(0, 0, canvasWidth, canvasHeight);
 ctx.drawImage(bg, 0, 0);
 ctx.fillStyle = '#fff';
 ctx.fillRect(pesawat.x, pesawat.y, pesawat.width, pesawat.height);
 ctx.fillRect(musuh.x, musuh.y, musuh.width, musuh.height);
 ctx.fillRect(peluru.x, peluru.y, peluru.width, peluru.height);
}

// Fungsi update
function update() {
 musuh.y += musuh.speed;
 peluru.y -= peluru.speed;
 
 if (musuh.y > canvasHeight) {
 musuh.x = Math.random() * (canvasWidth - 50);
 musuh.y = 0;
 }
 
 if (peluru.y < 0) {
 peluru.x = pesawat.x;
 peluru.y = pesawat.y;
 }
}

// Fungsi kontrol
document.addEventListener('keydown', (e) => {
 if (e.key === 'ArrowLeft') {
 pesawat.x -= pesawat.speed;
 } else if (e.key === 'ArrowRight') {
 pesawat.x += pesawat.speed;
 } else if (e.key === ' ') {
 peluru.x = pesawat.x;
 peluru.y = pesawat.y;
 }
});

// Kontrol sentuh untuk Android
canvas.addEventListener('touchstart', (e) => {
 const x = e.touches[0].clientX;
 const y = e.touches[0].clientY;
 
 if (x < canvasWidth / 2) {
 pesawat.x -= pesawat.speed;
 } else {
 pesawat.x += pesawat.speed;
 }
});

// Loop utama
setInterval(() => {
 menggambar();
 update();
}, 1000 / 60);
