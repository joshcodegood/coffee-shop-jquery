# coffee-shop-jquery
A remake of the coffee shop from cms-esque using jQuery.

### Modify your recipe app to add some advanced features with jQuery.

Modify your menu app to include some new features enabled by jQuery. See the sample code at the bottom for all the scripts you'll need to include. I'd suggest starting with step 1, then doing step 3, then doing step 2.

- [x] Complete your menu app (jQuery: optional).

- [ ] Add a new property to each food, which includes a set of strings describing categories for the food. Potential categories include vegetarian, low-cal, and gluten-free. You should be able to add one of these categories to a new food using jQuery autocomplete [(documentation here)](http://api.jqueryui.com/autocomplete/). Show the properties in the DOM with the food.

- [x] Instead of using class="hidden" to show/hide multiple views, use jQuery tabs instead. Here's the documentation. You should also add a third tab, which should display vegetarian-friendly food only ('vegetarian' being one of the categories).

## Using jQuery

We'll be using jQuery and jQuery UI (a popular plugin to jQuery) for this assignment. You'll need to include these JS files to get both libraries:
``` html
<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
<script
  src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
  integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
  crossorigin="anonymous"></script>
  ```
  Plugins just add additional features to jQuery. jQuery UI adds a a collection of user interface-related features listed on the [left-hand side of their page](jqueryui.com). In this case, the most important resource will be the documentation pages on autocomplete and tabs; in particular click the 'view source' link in each page to see examples.

## Hard mode

Make it possible to add any number of properties to each food.

## Log:
* It is considered good form to prefix your jQuery-reliant variables with `$`, i.e., `let $input = $('input');`
* In jQuery, you can add tags to a declaration to create an element, i.e.,: `let $title = $('<h2></h2>');`
* Event listeners in jQuery are executed using `.on()`
* To get the value of a textbox in jQuery, you must use `.val` as a function, i.e., `$input.val();`. It feels weird to me, but such is life.
* App completely switched over to jQuery.
* Tab switching is now handled by jQuery Tabs. It, of course, would have been easier to build the page from the ground up using Tabs than switching it over, but nonetheless, it feels less intuitive to me than vanilla JS in 2017.
* Page currently renders strings from JS as tags on objects, however there is no current logical impact to the page.
* Had to add `.find('search')` to autocomplete function due to a weird initialization error. Not sure why, I'll have to look into it. The error has gone away, but I'm not sure the function is working properly. Still testing.
* By simplifying the 'autocomplete' function, I was able to observe some changes; the suggested results will now appear about a half screen away from the actual input (which creates a horizontal scroll when active on the right-most column), as well as a notification that results are found at the bottom of the screen (where it is unreadable if one is at the top of the page). It's not ideal, but it is movement.
  * Upon further inspection, it appears what is happening is `autocomplete` is adding a number of hidden divs/uls (corresponding to the supplied source) to the bottom of the page. As results in the input box are matched, the divs are "un-hidden". So, these divs need to be associated with the input box, somehow. The answer might be in the APIs Extension Points.

## Next Steps:
### Step 2:
* Create a new property for each object that includes individual strings, like a 'tag' system. This sounds like an array of strings.
* Determine the criteria for tags, since I departed slightly from the "food" approach. Possibly "dairy-free", "vegan", "sugar free", or "espresso"?
* Give users ability to add one of these tags to new items and display them in the DOM
* Re-work the 'vegetarian' page to display results of items filtered down to a particular tag.