# Atticus Pandoc Test Suite

Notes:
- Used Playwright, just a library that's currently top of mind
- I identified that the purpose of the page is to get users to use Pandoc, so making sure the links in the Installing page worked is my priority 
- Given that it's a documentation page I prioritized navigation, element display, and text contents
- Regarding text contents, I did not have time to go through and record all of them but you can see the approach I'd take in the second test in "tests/about.spec.js" and how I'd store the strings in "tests/utility/textContents.js". There might be a more effective and cleaner approach I could come up with down the road but for now this is what I came up with

To setup:
```console
nvm use
npm i
```

To run (headless, all browsers):
```console
npx playwright test 
```

To run (headed, with Chrome):
```console
npx playwright test --headed --project chromium
```

To use Playwright's UI functionality (gives you ability to really drill down on tests):
```console
npx playwright test --ui --project chromium  
```