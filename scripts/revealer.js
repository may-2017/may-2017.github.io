(function() {
// Fake loading.
  setTimeout(init, 1000);

  function init() {
    document.body.classList.remove('loading');

    //************************ reveal on hero ********************************

    var rev1 = new RevealFx(document.querySelector('#rev-1'), {
      revealSettings : {
        bgcolor: '#6fd6f1',
        onCover: function(contentEl, revealerEl) {
          contentEl.style.opacity = 1;
        }
      }
    });
    rev1.reveal();

    var rev2 = new RevealFx(document.querySelector('#rev-2'), {
      revealSettings : {
        bgcolor: '#161717',
        delay: 800,
        onCover: function(contentEl, revealerEl) {
          contentEl.style.opacity = 1;
        }
      }
    });
    rev2.reveal();
  }
})();
