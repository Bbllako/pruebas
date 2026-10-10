
const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(`
    <html>
      <head>
        <meta name="viewport"
              content="width=device-width, initial-scale=1">
        <style>
          body {
            background: #101827;
            color: white;
            font-family: Arial;
            text-align: center;
            padding: 60px 20px;
          }
          h1 { color: #38bdf8; }
          button {
            background: #38bdf8;
            padding: 15px 25px;
            border: none;
            border-radius: 10px;
            font-size: 18px;
          }
        </style>
      </head>
      <body>
        <h1>🚀 Hola desde mi iPad</h1>
        <p>Mi servidor Node.js está funcionando.</p>
        <button onclick="alert('¡Funciona, bro! 🔥')">
          Probar código
        </button>
      </body>
    </html>
  `);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("🚀 Servidor corriendo en puerto " + PORT);
});
