jk-nav
======

This bookmarklet allows to navigate images in webpage using J and K keys.

Files
=====
`jknav.src.js` contains uncompressed bookmarklet code with some configurable options at the top

`jknav.js` is the main bookmarklet in compressed form

`jknav-noanim.js` is same bookmarklet, but without animation

Usage
=====
Open bookmarklet (`jknav.js` or `jknav-noanim.js`), copy the code, then create new bookmark in your browser.
Paste copied code into the URL field, add bookmark name and you are set.

Options
=================

There are some options you can change:

    // If false, scrolling to next/previous image will not be animated
    var smooth_scroll = true;

    // If true, always try to position image's top-left corner in browser's top-left corner
    var horizontal_scroll = false;
	  
    // Duration (in ms) of scroll animation. Only used if smooth_scroll = true;
    var duration = 100;
	
    // Pause (in ms) between scroll animation frames. In this particular example animation
    // will always be done in 10 steps (duration / interval)
    var interval = 10;
	  
    // Minimal area (in square-px) of image for it to be included in navigation. By default
    // image must be at least ~333x300 px in size
    var area = 100000;

ToDos
=====
Continuous scrolling when J-K key is held down