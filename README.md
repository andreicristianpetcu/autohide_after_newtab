# autohide_after_newtab
This is a WebExtension what auto hides the bookmark bar like Chrome. This also need userChrome.css changes in http://bit.ly/2zZgUGm The icon is created by Muneer A.Safiah and it is CC-BY-SA 3.0 http://bit.ly/2yVwXXY

https://addons.mozilla.org/en-US/firefox/addon/autohideafternewtab/

In order to use this WebExtension you need to open your profile directory (you can find it in about:support ), create a new directory named chrome and inside it create a file named userChrome.css. Put the following contents in this file:

https://vimeo.com/240436456

```css
#main-window #PersonalToolbar {
  visibility: collapse !important;
}
#main-window[title^="about:newtab"] #PersonalToolbar,
#main-window[title^="New Tab"] #PersonalToolbar,
#main-window[title^="Firefox Developer Edition"] #PersonalToolbar,
#main-window[title^="Nightly"] #PersonalToolbar {
  visibility: visible !important;
}
```
