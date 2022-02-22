$(function () {

    var FRIEND_NAME = ['Branwin', 'Cody', 'Bailey', 'Hunter', 'Reed'];
    var LOCATION_NAME = ['bathroom', 'pantry', 'pool', 'closet', 'attic', 'bedroom', 'car', 'office', 'garage', 'backyard'];
    var WEAPON_NAME = ['banana', 'Squid Games', 'AVADAKEDAVRA!', 'CRUCIO!', 'vape', 'shoe', 'wire hanger', 'emotional damage', 'guilt', 'Sharingan', 'Death Star', 'chicken sticks', 'katana', 'package', 'bugs', 'CORONAVIIIRUS', 'Tic Tac', 'Reeses Pieces', 'Hobbit', 'DnD dice']

    for (i = 1; i <= 100; i++) {
        var h3 = $(`<h3>Accusation ${i}</h3>`);
        $('body').append(h3);

        var propertyObject = {
            num: i,
            name: FRIEND_NAME[Math.floor(Math.random() * FRIEND_NAME.length)],
            weapon: WEAPON_NAME[Math.floor(Math.random() * WEAPON_NAME.length)],
            location: LOCATION_NAME[Math.floor(Math.random() * LOCATION_NAME.length)]
        }

        $(h3).on('click', function () {
            alert(`Accusation ${propertyObject.num}: I accuse ${propertyObject.name}, with the ${propertyObject.weapon} in the ${propertyObject.location}!`)
        })
    }
})