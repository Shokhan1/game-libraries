$(document).ready(function () {
    $(".slider").bxSlider({
        minSlides: 2,
        maxSlides: 4,
        slideWidth: 240,
        slideMargin: 20,
        moveSlides: 1,
        infiniteLoop: true,
        pager: false,
        nextText: '<i class="fa-solid fa-chevron-right"></i>',
        prevText: '<i class="fa-solid fa-chevron-left"></i>'
    });

    $('.card').on('click', function () {
        const gameId = $(this).data('game-id');

        if (gameId) {
            window.location.href = `game.html?id=${gameId}`;
        }
    });

});

$('#searchIcon').on('click', function(e) {
    e.stopPropagation();
    $('#searchDropdown').toggleClass('active');
    if ($('#searchDropdown').hasClass('active')) {
        $('#searchInput').focus();
    }
});


$(document).on('click', function(e) {
    if (!$(e.target).closest('.search-container').length) {
        $('#searchDropdown').removeClass('active');
    }
});


const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('resultsList');


const gamesData = {
    1: { title: "Elden Ring" },
    2: { title: "Ведьмак" },
    3: { title: "RUST"},
    4: { title: "Hearts of Iron IV" },
    5: { title: "CS:GO"},
    6: { title: "PUBG: BATTLEGROUNDS"},
    7: { title: "DayZ"},
    8: { title: "DARK SOULS™ II"},
    9: { title: "Red Dead Redemption 2"},
    10: { title: "Grand Theft Auto V и Grand Theft Auto Online"},
    11: { title: "Skyrim"},
    12: { title: "Cyberpunk 2077"},
    13: { title: "FROSTPUNK"},
    14: { title: "Metro Exodus"},
    15: { title: "DOTA 2"},
    16: { title: "Team Fortress 2"},
};

searchInput.addEventListener('input', function () {
    const inputValue = searchInput.value.toLowerCase().trim();
    resultsList.innerHTML = ''; 

    if (inputValue === "") return;

    for (let id in gamesData) {
        const title = gamesData[id].title;
        const lowerTitle = title.toLowerCase();

        // Проверяем, содержит ли название игры введенную строку
        if (lowerTitle.includes(inputValue) || id === inputValue) {
            const li = document.createElement('li');
            
            // Красивая подсветка совпадения
            const startIdx = lowerTitle.indexOf(inputValue);
            const endIdx = startIdx + inputValue.length;
            
            let highlightedTitle = title;
            if (startIdx >= 0) {
                highlightedTitle = title.substring(0, startIdx) + 
                    `<mark>${title.substring(startIdx, endIdx)}</mark>` + 
                    title.substring(endIdx);
            }

            li.innerHTML = `[ID: ${id}] ${highlightedTitle}`;
            li.addEventListener('click', () => {
                window.location.href = `game.html?id=${id}`;
            });
            resultsList.appendChild(li);
        }
    }
});

