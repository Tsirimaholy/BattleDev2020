# Cheating in pogemon card game

## The rules

<center>

|**Card1** |**Card2**|**Winner card**|
|----------|---------|---------------|
| Feu | Eau | Eau |
|Feu | Plante   | Feu  |
|Feu | Glace    | Feu |
|Eau | Plante   | Plante |
|Eau | Sol      | Sol |
|Plante | Poison | Plante |
|Plante | Sol    | Sol |
|Plante | Vol    | Plante |
</center>

[Visit this link for more info about this game](https://www.isograd-testingservices.com/FR/solutions-challenges-de-code?cts_id=63&reg_typ_id=2&que_str_id=&rtn_pag=https%3A%2F%2Fwww.isograd-testingservices.com%2F%2FFR%2Fsolutions-challenges-de-code%3Fcts_id%3D82#)
The Level 4

> Implementing this game was pretty handy but cool.

# Test

## requirements

+ mocha
+ chai

```
npm i -D mocha
npm i -D chai
npx mocha
```
⚠️**Notice**: Notice that i'm using ES6 modules(not `commonjs`) across all my code, but you can change it at your own risk😉🤞

# Some help are Welcome

## That's said, I need help to fix some issues and maybe enhance this game

1. Performance issues
    >The runtime complexity of this game is `horrible`
    + his is probably caused by the permutation generator function

2. Build a friendly User interface
    > At this state only programmer, or some user can use this game
    As on of my friends said when he saw me using the terminal to run some command:
    " You're a Hacker ?? "
