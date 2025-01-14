console.log("main.js actions!")
document.addEventListener('DOMContentLoaded', function () {
    Fancybox.bind('[data-fancybox="gallery"]', {
        buttons: ["close"],
        caption: function (instance, item) {
            return $(this).data('caption') || '';
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Fange alle Klicks auf den Download-Button ab
    document.querySelectorAll(".download-btn").forEach(function(button) {
        button.addEventListener("click", function(e) {
            e.preventDefault();  // Verhindert das Standard-Verhalten (Fancybox schließt)

            // Hole die Bildquelle aus dem data-src Attribut
            const imageUrl = e.target.getAttribute("data-src");
            console.log("Image URL zum Download:", imageUrl);  // Debug-Ausgabe

            if (imageUrl) {
                // Erstelle ein unsichtbares <a>-Element für den Download
                const link = document.createElement("a");
                link.href = imageUrl;
                link.download = imageUrl.split("/").pop();  // Extrahiere den Dateinamen aus der URL
                document.body.appendChild(link);  // Füge den Link ins DOM ein

                // Starte den Download automatisch
                link.click();

                // Entferne den Link nach dem Download
                document.body.removeChild(link);
            } else {
                console.error("Keine Bildquelle im Button gefunden.");
            }
        });
    });
});



