let coffee = require('./coffee');

window.addEventListener('load', function () {

    // I'm leaving in the vanilla JS for a side-by-side comparison.
    // It's bulky, but useful.
    let $tagNames = ['espresso', 'dairy-free', 'cold', 'lightly sweet',
        'refreshing', 'ginger beer', 'lime', 'coffee',];

    // let menu = document.querySelector('.menu');
    const $menu = $('#menuContent');
    // const addItem = document.querySelector('.addItem');
    const $addItem = $('#addContent');
    // const menadd = document.querySelector('#menuTab');
    //const $menuTab = $('#menuTab');
    // const addTab = document.querySelector('#addTab');
    //const $addTab = $('#addTab');
    // const btn = document.querySelector('button');
    const $btn = $('.submit');
    let counter = 0;

    function addItems() {
        for (let i = counter; i < coffee.length; i++) {
            //let menuItem = document.createElement('ul');
            let $menuItem = $('<ul></ul>');
            //let name = document.createElement('li');
            let $name = $('<li></li>');
            //let title = document.createElement('h2');
            let $title = $('<h2></h2>');
            //let desc = document.createElement('li');
            let $desc = $('<li></li>');
            // let price = document.createElement('li');
            let $price = $('<li></li>');
            // desc.classList.add('desc');
            let $tags = $('<li></li>');
            $desc.addClass('desc');
            // title.textContent = coffee[i].name;
            $title.text(coffee[i].name);
            // desc.textContent = coffee[i].description;
            $desc.text(coffee[i].description);
            // price.textContent = coffee[i].price;
            $price.text(coffee[i].price);
            // menu.appendChild(menuItem);
            $menu.append($menuItem);
            // name.appendChild(title);
            $name.append($title);
            // menuItem.appendChild(name);
            $menuItem.append($name);
            // menuItem.appendChild(desc);
            $menuItem.append($desc);
            // menuItem.appendChild(price);
            $menuItem.append($price);
            $tags.addClass('tags');

            for (let j = 0; j < coffee[i].tags.length; j++) {
                let $tag = $('<p></p>');
                let $close = $('<span></span>');
                $tag.text(coffee[i].tags[j]);
                $close.text('x');
                $tag.prepend($close);
                $menuItem.append($tags);
                $tags.append($tag);
            };

            let $add = $('<p></p>');
            $add.text('+');
            $add.addClass('add');
            $tags.prepend($add);
            let $search = $('<input></input>');
            $search.addClass('search');
            $search.attr('placeholder', 'search tags');
            let $submitTag = $('<button>submit</button>');
            $tags.append($search);
            $tags.append($submitTag);

            $search.autocomplete({
                source: $tagNames,
                position: { of: $search },
                appendTo: $tags,
            });
            $add.on('click', function () {
                $search.removeClass('hidden');
                //$search.autocomplete('search')
            });
            $submitTag.on('click', function() {
                /* Next steps:
                * I. Check how many tags we already have,
                * II. If it is less than the amount after the new one was pushed,
                    * a. create a copy of the existing object, add the value of
                        the search box to it, compare the existing object to the
                        new value.
                * Re-run the code that creates another tag */

                let tagData = coffee[i].tags;
                let newTag = coffee[i].tags.slice(0); //create new array with
                //the same value as coffee[i].tags
                newTag.push($search.val()); //add to that array the value of
                //the textbox.
                newTag.reverse();
                console.log(newTag);

                for (let i = 0; i < newTag.length; i++) {
                    for (let j = 0; j < tagData.length; j++) {
                        console.log(tagData[i], newTag);
                        if (tagData[i] === newTag[j]) {
                            newTag.pop();
                            console.log(newTag);
                        } else {
                            console.log('all good!');
                        }
                    }
                }

                // for (let j = tagData.length; j < newTag.length; j++) {
                //     if (coffee[i].tags[j] === $search.val()) {
                //         console.log("ooops!");
                //     } else {
                //         let $tag = $('<p></p>');
                //         let $close = $('<span></span>');
                //         $tag.text($search.val());
                //         $close.text('x');
                //         $tag.prepend($close);
                //         $menuItem.append($tags);
                //         $tags.append($tag);
                //         $search.addClass('hidden');
                //     };
                // };
            });

            counter++;
        };
    };

    addItems();

    // $menuTab.on('click', function() {
    // //     // if (menu.classList.contains('hidden')) {
    //         $menu.removeClass('hidden');
    //         $addItem.addClass('hidden');
    // //     // }
    //      console.log('candy');
    //  });

    // $addTab.on('click', function() {
    //     // if ($addItem.classList.contains('hidden')) {
    //         $addItem.removeClass('hidden');
    //         $menu.addClass('hidden');
    //     // };
    //     console.log('unicorns');
    // });

    // btn.addEventListener('click', function() {
    $btn.on('click', function () {
        //     let name = document.querySelector('#name');
        let $name = $('#name');
        //     let desc = document.querySelector('#desc');
        let $desc = $('#desc');
        //     let price = document.querySelector('#price');
        let $price = $('#price');
        //     let newCoffee = { name: name.value, description: desc.value, price: `$` + price.value };
        let $newCoffee = { name: $name.val(), description: $desc.val(), price: `$` + $price.val() };
        //     coffee.push(newCoffee);
        coffee.push($newCoffee);
        addItems();
        $name.val("");
        $desc.val("");
        $price.val("");
        console.log('kittens!');
    });

    $('#tabs').tabs({ active: '#menuContent' });

});