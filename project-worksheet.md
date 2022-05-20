# Portfolio Project

## Project Links

[Tarot Reader Homepage](https://shantibetts.github.io/tarot-reader)
[Portfolio Website](https://shantibetts.github.io/Portfolio/)

## Project Schedule

| Day       | Deliverable                             | Status   |
| --------- | --------------------------------------- | -------- |
| Friday    | Project Planning                        | complete |
| Sat/Sun   | Project setup and skeleton              | complete |
| Monday    | Working components                      | complete |
| Tuesday   | Styling & complete MVP                  | complete |
| Wednesday | Celtic cross reading template           | complete |
| Thursday  | Post MVP styling (themes) / other decks | complete |
| Friday    | Present                                 | complete |

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
1. Nav Menu - use @MUI menu
1. About - display a short blurb about app with links to Repo and Portfolio website

#### MVP

| Component                               | Priority | Estimated Time | Actual Time |
| --------------------------------------- | :------: | :------------: | :---------: |
| Routes, API, State, Skeleton Components |    5     |      3hr       |     2hr     |
| Display Cards + Descriptions            |    5     |      2hr       |     3hr     |
| Nav Menu                                |    4     |      2hr       |     1hr     |
| Previews of decks + readings for Home   |    4     |      2hr       |     3hr     |
| Dynamic Styling                         |    3     |      6hr       |    12hr     |
| Total                                   |          |     15hrs      |    21hrs    |

#### PostMVP

| Component                                              | Priority | Estimated Time | Actual Time |
| ------------------------------------------------------ | :------: | :------------: | :---------: |
| Themes / Darkmode                                      |    1     |      6hr       |     hr      |
| Add multiple decks (in progress)                       |    2     |      2hr       |     2hr     |
| Nested Nav menu for Readings                           |   0.5    |      2hr       |     hr      |
| 7 card reading                                         |   2.5    |      2hr       |     hr      |
| 5 card reading                                         |    2     |      2hr       |     2hr     |
| Celtic Cross reading                                   |    1     |      4hr       |     hr      |
| Card fullscreen progression                            |    3     |      6hr       |     4hr     |
| Card animations                                        |   0.5    |      6hr       |     hr      |
| Create and add Favicon                                 |    0     |      3hr       |     hr      |
| ++ Globalization of functions / variables for readings |    3     |       x        |     6hr     |
| ++ MVP Feature styling                                 |    3     |       x        |     4hr     |
| ++ Removal of MUI Grid and many MUI Components         |    5     |       x        |     4hr     |
| Total                                                  |          |     33hrs      |    12hr     |

## Additional Libraries

@MUI for components and themes
Router for navigation

## Code Snippet

This is my handleDeal function. It takes in a lot of variables(functions) so that it can be run by any reading. It takes the first card from the shuffledCards array and replaces the appropriate card in the reading with that card.

```js
const handleDeal = (
	shuffledCards,
	readingCards,
	setShuffledCards,
	setReadingCards,
	setDialogOpen,
	setDescription
) => {
	const newShuffledCards = [...shuffledCards]
	const newCard = newShuffledCards.shift()
	let newReadingCards = { ...readingCards }
	newCard.positionName =
		newReadingCards.reading[newReadingCards.index].positionName
	newCard.positionDescription =
		newReadingCards.reading[newReadingCards.index].positionDescription
	newReadingCards.reading.splice(newReadingCards.index, 1, newCard)
	newReadingCards.index++
	setShuffledCards(newShuffledCards)
	setReadingCards(newReadingCards)
	setDescription(newCard)
	setDialogOpen(true)
}
```

## Issues and Resolutions

### MUI Card Warning:

I'm getting a warning with my current TarotCard component:

```js
Warning: Failed prop type: MUI: Either `children`, `image`, `src` or `component` prop must be specified.
    at CardMedia (http://localhost:3000/static/js/bundle.js:7757:82)
    at TarotCard (http://localhost:3000/static/js/bundle.js:1071:13)
    at div
    at http://localhost:3000/static/js/bundle.js:2277:66
    at Grid (http://localhost:3000/static/js/bundle.js:8887:87)
    at div
    at http://localhost:3000/static/js/bundle.js:2277:66
    at Container (http://localhost:3000/static/js/bundle.js:7992:82)
    at ThreeCardBasic (http://localhost:3000/static/js/bundle.js:1226:86)
    at Routes (http://localhost:3000/static/js/bundle.js:60672:5)
    at div
    at App (http://localhost:3000/static/js/bundle.js:60:82)
    at Router (http://localhost:3000/static/js/bundle.js:60605:15)
    at BrowserRouter (http://localhost:3000/static/js/bundle.js:59414:5)
printWarning	@	react-jsx-dev-runtime.development.js:97
error	@	react-jsx-dev-runtime.development.js:71
checkPropTypes	@	react-jsx-dev-runtime.development.js:629
validatePropTypes	@	react-jsx-dev-runtim…development.js:1162
jsxWithValidation	@	react-jsx-dev-runtim…development.js:1282
TarotCard	@	TarotCard.js:26
renderWithHooks	@	react-dom.development.js:16175
mountIndeterminateComponent	@	react-dom.development.js:20913
beginWork	@	react-dom.development.js:22416
beginWork$1	@	react-dom.development.js:27381
performUnitOfWork	@	react-dom.development.js:26513
workLoopSync	@	react-dom.development.js:26422
renderRootSync	@	react-dom.development.js:26390
performConcurrentWorkOnRoot	@	react-dom.development.js:25694
workLoop	@	scheduler.development.js:266
flushWork	@	scheduler.development.js:239
performWorkUntilDeadline	@	scheduler.development.js:533
```

Following the trail to TarotCard:13 (and later :26):

```js
if (props.card.name !== 'emptyCard') {
	return (
		<Grid item xs={props.span}>
			<Card sx={{ width: props.width, height: props.height }}>
				<CardActionArea onClick={() => props.handleDescription(props.card)}>
					<CardMedia
						component="img"
						image={props.card.url}
						alt={props.card.name}
					/>
				</CardActionArea>
			</Card>
		</Grid>
	)
} else {
	return (
		<Grid item xs={props.span}>
			<Card sx={{ width: props.width, height: props.height }}>
				<CardActionArea onClick={() => props.handleDescription(props.card)}>
					<CardContent />
				</CardActionArea>
			</Card>
		</Grid>
	)
}
```

We see that TarotCard is using logic to write either a card with an image or a blank one. Line 13 is defining CardMedia, which does contain an image prop, or if the card is empty, line 26 is defining CardActionArea, which does not have a prop of "children, image, src or component." I think this is the source of the error, but I'm not sure how to solve it, as I want the card to display an empty image, but still have the on-click functionality to allow for the description for that position.

### Resolution

I added a blank card of appropriate dimensions to a CardMedia component. It solved two issues: first the blank card makes sure the blank card spaces show at the correct aspect ratio before the picture is populated, and it also provides the child necessary for the card object. The too-short still shows momentarily before getting replaced with the Tarot image, so I would like to find a better way to determine the card-object's height.

### Final Resolution

I removed the cards entirely, and just wrapped the image in a MUI Button. This gave me the functionality I really wanted - the image of a blank / populated card, plus the highlighting and ripple of the button. By removing all the MUI Card, CardActionArea, CardContent, Grid container, Grid items, etc, I gained a lot of control over margins, padding, and how the card image would appear, which I was able to leverage with CSS Grid and responsive CSS media calls.
