# Portfolio Project

## Project Links

## Project Schedule

| Day       | Deliverable                             | Status      |
| --------- | --------------------------------------- | ----------- |
| Friday    | Project Planning                        | in progress |
| Sat/Sun   | Project setup and skeleton              | incomplete  |
| Monday    | Working components                      | incomplete  |
| Tuesday   | Styling & complete MVP                  | incomplete  |
| Wednesday | Celtic cross reading template           | incomplete  |
| Thursday  | Post MVP styling (themes) / other decks | incomplete  |
| Friday    | Present                                 | incomplete  |

## Project Description

### Design:

I want to create an interactive app that will do simple, and then not so simple Tarot readings. Included will be descriptions of each position the card can land in, and the meaning of the card. It will be up to the user to interpret the results.

- a home page to show what options the app has, including multiple reading layouts, (Post MVP) multiple Tarot decks.

  1.  Show a preview of what the deck looks like front & back
  1.  Show a preview of what each reading layout looks like, plus a short description
  1.  use a header + drop down menu that dissapears until scroll to top of page to minimize clutter
  1.  Use an unobtrusive theme throughout to highlight the cards

- UI/UX should be simple and straitforward, and hide as much as possible to clear space for the "table"

- A soft theme that doesn't take away from the content, light / dark mode as post MVP goals

### Inspirations:

[Learn Religions](https://www.learnreligions.com/tarot-card-spreads-2562807) Has a really nice introduction of the different reading layouts, and short descriptions of their strengths and uses. I do something similar but use screenshots of the app to show the different reading layouts.

- slots are shown populated with cards
- cards are shown face-up
- layouts are presented from most-simple to most complex

[HowICode Tarot API](https://github.com/howlCode/tarot_api) Presents a really streamlined API to serve some basic spreads. They also use the public-domain Rider-Waite tarot deck, which will be my default deck.

[Ekelen Tarot API](https://github.com/ekelen/tarot-api) Presents a really simple tarot API to serve cards, including a search function. Also uses the Rider-Waite tarot deck. I plan to use this API to get an array of all the cards, then manage the cards myself using state.

## Wireframes

[Mobile and Desktop wireframes](https://photos.app.goo.gl/MJTVCVTyPTvy3o9Q8)

## Time/Priority Matrix

[See Time/Priority Matrix](https://photos.app.goo.gl/MJTVCVTyPTvy3o9Q8)

### MVP

- React App that includes
  - navigation (home, about, decks 3 card spread, 7 card spread)
  - component for each navigation location (Home, About, Decks, ThreeCardReading, SevenCardReading)
  - an API call to fetch the initial cards list and store it as a state
  - states to manage displayed cards and cards that can still be drawn.

#### PostMVP

- Create a cohesive theme to tie the app together in light / darkmode (plus toggle)
- Add additional decks (contact artists for permissions to use decks under copyright in return for credit + a link to buy the deck)
- Nested nav bar for different reading styles
- Progression when a new card is chosen, where the card first displays full screen and greys everything out behind + description, then populates proper slot.
- Animate progression so card expands from deal pile & shrinks into proper slot at end.

## Functional Components

1. Home - displays welcome message, available decks, available layouts
1. Decks - displays only decks, with longer descriptions, copyright, links to buy
1. ThreeCardReading - displays empty slots for cards, onClick (mobile) onHover + onClick (desktop) shows descriptions. Deal button for mobile, show back of cards for desktop, onClick adds card to next slot.
1. SevenCardReading - same as ThreeCardReading, but with 7 slots
1. Nav Menu - use @MUI menu
1. About - display a short blurb about app with links to Repo and Portfolio website

#### MVP

| Component                               | Priority | Estimated Time | Actual Time |
| --------------------------------------- | :------: | :------------: | :---------: |
| Routes, API, State, Skeleton Components |    5     |      3hr       |     hr      |
| Display Cards + Descriptions            |    5     |      2hr       |     hr      |
| Nav Menu                                |    4     |      2hr       |     hr      |
| Previews of decks + readings for Home   |    4     |      2hr       |     hr      |
| Dynamic Styling                         |    3     |      6hr       |     hr      |
| Total                                   |          |     15hrs      |     hrs     |

#### PostMVP

| Component                    | Priority | Estimated Time | Actual Time |
| ---------------------------- | :------: | :------------: | :---------: |
| Themes / Darkmode            |    1     |      6hr       |     hrs     |
| Add multiple decks           |    2     |      2hr       |     hr      |
| Nested Nav menu for Readings |   0.5    |      2hr       |     hr      |
| Card fullscreen progression  |    3     |      6hr       |     hr      |
| Card animations              |   0.5    |      6hr       |     hr      |
| Create and add Favicon       |    0     |      3hr       |     hr      |
| Total                        |          |     25hrs      |     hrs     |

## Additional Libraries

@MUI for components and themes
Router for navigation

## Code Snippet

This is my working API call, it querries the API and returns an array of objects which hold the card data.

```js
useEffect(() => {
	fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/')
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
		})
		.catch(() => console.log('Problem with Tarot Cards API fetch'))
}, [])
```

## Issues and Resolutions
