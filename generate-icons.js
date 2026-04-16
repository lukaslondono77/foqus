import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';

// Crear iconos de diferentes tamaños
const sizes = [192, 512];

sizes.forEach(size => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Fondo verde
  ctx.fillStyle = '#22c55e';
  ctx.fillRect(0, 0, size, size);
  
  // Texto "F" en blanco
  ctx.fillStyle = '#ffffff';
  ctx.font = `bold ${size * 0.6}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('F', size/2, size/2);
  
  // Guardar como PNG
  const buffer = canvas.toBuffer('image/png');
  const filename = `public/icon-${size}x${size}.png`;
  fs.writeFileSync(filename, buffer);
  console.log(`Icono creado: ${filename}`);
});

console.log('Iconos generados exitosamente!'); 