function procesar() {
  
    const nivel = parseInt(document.getElementById("nivel").value, 10);
  
    const tipo = document.getElementById("tipo").value.trim();
  
    const ubicacion = document.getElementById("ubicacion").value.trim();
  
    const recreo = document.getElementById("recreo").value;
  
    const qr = document.getElementById("qr").value;

    let mensaje = "<h3>Resultados:</h3>";
  
    mensaje += `<p><strong>Ubicación:</strong> ${ubicacion}</p>`;

    // 1. Detectar si la papelera está llena
  
    if (!isNaN(nivel) && nivel >= 80) {
  
        mensaje += "<p>⚠ <strong>Alerta:</strong> La papelera está llena (nivel ≥ 80%). Notificar al personal de limpieza.</p>";
  
    } else if (!isNaN(nivel)) {
  
        mensaje += "<p>✔ La papelera está en nivel normal.</p>";
  
    } else {
  
        mensaje += "<p>ℹ No se ingresó un nivel válido de papelera.</p>";
  
    }

    // 2. Registrar tipo de residuo
  
    if (tipo) {
  
        mensaje += `<p>🗑 <strong>Residuo registrado:</strong> ${tipo}</p>`;
  
    } else {
  
        mensaje += "<p>ℹ Tipo de residuo no ingresado.</p>";
  
    }

    // 3. Revisar si es recreo
  
    if (recreo === "si") {
  
        mensaje += "<p>⏰ Es horario de recreo: mayor generación de residuos, aumentar revisión.</p>";
  
  
    } else {
  
        mensaje += "<p>⏳ No es recreo: revisión en horario normal.</p>";
  
    }

    // 4. Registro QR / Participación estudiantil
  
    if (qr === "si") {
  
        mensaje += "<p>📲 <strong>Reporte QR recibido:</strong> participación estudiantil registrada.</p>";
  
    } else {
  
        mensaje += "<p>📲 No hubo reporte QR.</p>";
  
    }

    // 5. Mensaje educativo automático
  
    mensaje += "<p>🌱 Mensaje educativo: ¡Recuerda usar la caneca correcta para cada tipo de residuo!</p>";

    document.getElementById("resultado").innerHTML = mensaje;

}
