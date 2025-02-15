document.addEventListener("DOMContentLoaded", function () {
  // Restore checkbox states from localStorage
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    const checkedState = localStorage.getItem(checkbox.id);
    if (checkedState === "true") {
      checkbox.checked = true;
    }
  });

  // Save checkbox state changes to localStorage
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      localStorage.setItem(checkbox.id, checkbox.checked);
    });
  });

  // Hide all pages except the start page on load
  const pages = document.querySelectorAll('.fadeIn');
  pages.forEach(page => page.classList.add('hidden'));
  document.getElementById('start-page').classList.remove('hidden');
});

// Navigation functions for main sections
function openMenu() {
  document.getElementById('start-page').classList.add('hidden');
  document.getElementById('menu-page').classList.remove('hidden');
}
function animeSection() {
  document.getElementById('menu-page').classList.add('hidden');
  document.getElementById('recommendations-page').classList.remove('hidden');
}
function msaSection() {
  document.getElementById('menu-page').classList.add('hidden');
  document.getElementById('msa-page').classList.remove('hidden');
}
function KdramaSection() {
  document.getElementById('menu-page').classList.add('hidden');
  document.getElementById('Kdrama-page').classList.remove('hidden');
}
function returnToHome() {
  document.getElementById('menu-page').classList.add('hidden');
  document.getElementById('start-page').classList.remove('hidden');
}
function returnToMenu() {
  document.getElementById('recommendations-page').classList.add('hidden');
  document.getElementById('msa-page').classList.add('hidden');
  document.getElementById('Kdrama-page').classList.add('hidden');
  document.getElementById('menu-page').classList.remove('hidden');
}

// Navigation functions for Anime Detail Pages
function openFruitsBasketPage() {
  document.getElementById('recommendations-page').classList.add('hidden');
  document.getElementById('fruitsbasket-page').classList.remove('hidden');
}
function openYourLiePage() {
  document.getElementById('recommendations-page').classList.add('hidden');
  document.getElementById('yourlie-page').classList.remove('hidden');
}
function openOrangePage() {
  document.getElementById('recommendations-page').classList.add('hidden');
  document.getElementById('orange-page').classList.remove('hidden');
}
function openBlueSpringRidePage() {
  document.getElementById('recommendations-page').classList.add('hidden');
  document.getElementById('bluespring-page').classList.remove('hidden');
}
function openWotokaoiPage() {
  document.getElementById('recommendations-page').classList.add('hidden');
  document.getElementById('wotokaoi-page').classList.remove('hidden');
}
function openHorimiyaPage() {
  document.getElementById('recommendations-page').classList.add('hidden');
  document.getElementById('horimiya-page').classList.remove('hidden');
}
function returnToRecommendations() {
  // Hide all anime detail pages and return to the recommendations page
  document.getElementById('fruitsbasket-page').classList.add('hidden');
  document.getElementById('yourlie-page').classList.add('hidden');
  document.getElementById('orange-page').classList.add('hidden');
  document.getElementById('bluespring-page').classList.add('hidden');
  document.getElementById('wotokaoi-page').classList.add('hidden');
  document.getElementById('horimiya-page').classList.add('hidden');
  document.getElementById('recommendations-page').classList.remove('hidden');
}

// Navigation functions for MSA Detail Pages
function openConSistersPage() {
  document.getElementById('msa-page').classList.add('hidden');
  document.getElementById('con-sisters-page').classList.remove('hidden');
}
function openVampirePage() {
  document.getElementById('msa-page').classList.add('hidden');
  document.getElementById('vampire-page').classList.remove('hidden');
}
function openArtistPage() {
  document.getElementById('msa-page').classList.add('hidden');
  document.getElementById('artist-page').classList.remove('hidden');
}
function openEarn10Page() {
  document.getElementById('msa-page').classList.add('hidden');
  document.getElementById('earn10-page').classList.remove('hidden');
}
function openMetFatherPage() {
  document.getElementById('msa-page').classList.add('hidden');
  document.getElementById('metfather-page').classList.remove('hidden');
}
function openPrincessPage() {
  document.getElementById('msa-page').classList.add('hidden');
  document.getElementById('princess-page').classList.remove('hidden');
}
function returnToMsa() {
  // Hide all MSA detail pages and return to the MSA section
  document.getElementById('con-sisters-page').classList.add('hidden');
  document.getElementById('vampire-page').classList.add('hidden');
  document.getElementById('artist-page').classList.add('hidden');
  document.getElementById('earn10-page').classList.add('hidden');
  document.getElementById('metfather-page').classList.add('hidden');
  document.getElementById('princess-page').classList.add('hidden');
  document.getElementById('msa-page').classList.remove('hidden');
}

// Navigation functions for Kdrama Detail Pages
function openLovelyRunnerPage() {
  document.getElementById('Kdrama-page').classList.add('hidden');
  document.getElementById('lovelyrunner-page').classList.remove('hidden');
}
function openOurBelovedPage() {
  document.getElementById('Kdrama-page').classList.add('hidden');
  document.getElementById('ourbeloved-page').classList.remove('hidden');
}
function openWeightliftingPage() {
  document.getElementById('Kdrama-page').classList.add('hidden');
  document.getElementById('weightlifting-page').classList.remove('hidden');
}
function openStrongWomanPage() {
  document.getElementById('Kdrama-page').classList.add('hidden');
  document.getElementById('strongwoman-page').classList.remove('hidden');
}
function openTalePage() {
  document.getElementById('Kdrama-page').classList.add('hidden');
  document.getElementById('tale-page').classList.remove('hidden');
}
function openTwinklingPage() {
  document.getElementById('Kdrama-page').classList.add('hidden');
  document.getElementById('twinkling-page').classList.remove('hidden');
}
function returnToKdrama() {
  // Hide all Kdrama detail pages and return to the Kdrama section
  document.getElementById('lovelyrunner-page').classList.add('hidden');
  document.getElementById('ourbeloved-page').classList.add('hidden');
  document.getElementById('weightlifting-page').classList.add('hidden');
  document.getElementById('strongwoman-page').classList.add('hidden');
  document.getElementById('tale-page').classList.add('hidden');
  document.getElementById('twinkling-page').classList.add('hidden');
  document.getElementById('Kdrama-page').classList.remove('hidden');
}

// Close and minimize functions
function minimizePage() {
  window.blur();
}
function closePage() {
  window.close();
}
