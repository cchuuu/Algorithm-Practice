```js
  if (input == 0) {
    output = "rock";
  } else if (input == 1) {
    output = "paper";
  } else
```

```js
if (i % 3 == 0) {
      opponentChoice = "rock";
    } else if (i % 2 == 0) {
      opponentChoice = "paper";
    } else {
```

```js
 if (opponentChoice == "rock") {
    if (input == 1) {
      outcome = "win";
    } else if (input == 2) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  } else if (opponentChoice == "paper") {
    if (input == 2) {
      outcome = "win";
    } else if (input == 0) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  } else {
    if (input == 0) {
      outcome = "win";
    } else if (input == 1) {
      outcome = "lose";
    } else {
```

```js
if (history[i] == "win") {
      win++;
    } else if (history[i] == "lose") {
      lose++;
    } else {
      draw++;
```
