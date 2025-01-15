console.log("main.js actions!")
document.addEventListener('DOMContentLoaded', function () {
    Fancybox.bind('[data-fancybox="gallery"]', {
        Toolbar: {
            display: {
                left: ["infobar"],
                middle: [],
                right: ["download", "close"], // Download-Button hinzufügen
            },
        },
        thumbs: {
            autoStart: true,
        },
        download: function (instance, item) {
            // Der Download-Button greift auf das "data-download-src"-Attribut zu
            return item.$trigger.getAttribute('data-src');
        },
    });
});


