const lists = [

  `Champ,
  Fact:
  Everybody says
  Dang...
  Check it:
  Just saying...
  Superstar,
  Tiger,
  Self,
  Know this:
  News alert:
  Girl,
  Ace,
  Excuse me but
  Experts agree:
  In my opinion,
  Hear ye, hear ye:
  Okay, listen up:`,

  `the mere idea of you
  your soul
  your hair today
  every little thing you do
  your personal style
  every thought you have
  that sparkle in your eye
  your presence here
  what you got going on
  the essential you
  your life's journey
  that saucy personality
  your DNA
  that brain of yours
  your choice of attire
  whatever your secret is
  all of y'all`,

  `has serious game,
  rains magic,
  deserves the Nobel Prize,
  raises the roof,
  breeds miracles,
  is paying off big time,
  shows mad skills,
  just shimmers,
  is a national treasure,
  gets the party hopping,
  is the next big thing,
  roars like a lion,
  is a rainbow factory,
  is made of diamonds,
  makes birds sing,
  mkes my world go 'round,
  is 100% legit,`,

  `24/7.
  Can I get an amen?
  And that's a fact.
  So treat yourself.
  You feel me?
  That's just science.
  Would I lie?
  For reals.
  Mic drop.
  You hidden gem.
  Snuggle bear.
  Period.
  Now let's dance.
  High five.
  Say it again!
  According to CNN.
  So get used to it.`].

map(n => n.split('\n'));


const listElements = lists.map((list, i) => {

  const root = document.createElement('ul');

  list.forEach(n => {

      const ele = document.createElement('li');

      ele.textContent = n;

      root.append(ele);

  });

  lists_container.append(root);

  return root;

});


subtitle.textContent = subtitle.textContent.replace('COMBOS', listElements.reduce((p, n) => p * n.childElementCount * 2, 1).toLocaleString());


button.addEventListener('click', () => pick());


pick();


function pick() {

  listElements.forEach(n => {

      const count = n.childElementCount;

      const i = Math.floor(Math.random() * count);

      n.style.setProperty('--i', i);

  });

}


