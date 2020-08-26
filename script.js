const quotes = [
  {
    name: "Napoleon Hill",
    quote:
      "Patience, persistence and perspiration make an unbeatable combination for success.",
  },
  {
    name: "Napoleon Hill",
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
  },
  {
    name: "Napoleon Hill",
    quote: "A goal is a dream with a deadline.",
  },
  {
    name: "Napoleon Hill",
    quote:
      "Every adversity, every failure, and every heartache, carries with it the Seed of an equivalent or greater Benefit.",
  },
  {
    name: "Napoleon Hill",
    quote:
      "Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements.",
  },
  {
    name: "Jim Rohn",
    quote:
      "Formal education will make you a living; self-education will make you a fortune.",
  },
  {
    name: "Jim Rohn",
    quote: "Never wish life were easier, wish that you were better.",
  },
  {
    name: "Jim Rohn",
    quote: "Discipline is the bridge between goals and accomplishment.",
  },
  {
    name: "Jim Rohn",
    quote: "Either you run the day, or the day runs you.",
  },
  {
    name: "Jim Rohn",
    quote:
      "If you are not willing to risk the unusual, you will have to settle for the ordinary.",
  },
  {
    name: "Jim Rohn",
    quote:
      "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
  },
  {
    name: "Jim Rohn",
    quote:
      "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
  },
  {
    name: "Jim Rohn",
    quote:
      "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
  },
  {
    name: "Jim Rohn",
    quote:
      "Success is nothing more than a few simple disciplines, practiced every day.",
  },
  {
    name: "Jim Rohn",
    quote: "Work harder on yourself than you do on your job.",
  },
  {
    name: "Jim Rohn",
    quote:
      "Motivation is what gets you started. Habit is what keeps you going.",
  },
  {
    name: "Jim Rohn",
    quote:
      "We must all suffer one of two things: the pain of discipline or the pain of regret or disappointment.",
  },
  {
    name: "Henry Ford",
    quote:
      "If you think you can do a thing or think you can't do a thing, you're right.",
  },
  {
    name: "Henry Ford",
    quote:
      "Failure is simply the opportunity to begin again, this time more intelligently.",
  },
  {
    name: "Henry Ford",
    quote: "Don't find fault, find a remedy.",
  },
  {
    name: "Henry Ford",
    quote:
      "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
  },
  {
    name: "Henry Ford",
    quote:
      "Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young.",
  },
  {
    name: "Henry Ford",
    quote:
      "Obstacles are those frightful things you see when you take your eyes off your goal.",
  },
  {
    name: "Thomas Edison",
    quote:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
  },
  {
    name: "Thomas Edison",
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
  },
  {
    name: "Thomas Edison",
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
  },
  {
    name: "Thomas Edison",
    quote:
      "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
  },
  {
    name: "Thomas Edison",
    quote:
      "If we did all the things we are capable of, we would literally astound ourselves.",
  },
  {
    name: "Thomas Edison",
    quote: "There is no substitute for hard work.",
  },
  {
    name: "Thomas Edison",
    quote: "There's a way to do it better - find it.",
  },
  {
    name: "Muhammad Ali Jinnah",
    quote:
      "With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.",
  },
  {
    name: "Muhammad Ali Jinnah",
    quote: "Failure is a word unknown to me.",
  },
  {
    name: "Muhammad Ali Jinnah",
    quote:
      "Think 100 times before you take a decision, But once that decision is taken, stand by it as one man.",
  },
  {
    name: "Muhammad Ali Jinnah",
    quote: "Expect the best, Prepare for the worst.",
  },
  {
    name: "Darren Hardy",
    quote:
      "There is a one thing that 99 percent of “failures” and “successful” folks have in common — they all hate doing the same things. The difference is successful people do them anyway.",
  },
  {
    name: "Darren Hardy",
    quote:
      "When it comes to breaking old habits and starting new ones, remember to be patient with yourself. You’ve got to expect it’s going to take time and effort before you see lasting results.",
  },
  {
    name: "Darren Hardy",
    quote:
      "Once-dominant empires have failed for this very reason. People get to a certain level of success and get too comfortable.",
  },
  {
    name: "Darren Hardy",
    quote: "Consistency is the key to achieving and maintaining momentum.",
  },
  {
    name: "Darren Hardy",
    quote:
      "Choices are at the root of every one of your results. Each choice starts a behavior that over time becomes a habit.",
  },
  {
    name: "Darren Hardy",
    quote:
      "It’s not enough to choose to be successful. You have to dig deeper than that to find your core motivation, to activate your superpower. Your why-power.",
  },
  {
    name: "Darren Hardy",
    quote:
      "Everyone is affected by three kinds of influences: input (what you feed your mind), associations (the people with whom you spend time), and environment (your surroundings).",
  },
  {
    name: "Darren Hardy",
    quote: "In essence, you make your choices, and then your choices make you.",
  },
  {
    name: "Darren Hardy",
    quote:
      "You will never change your life until you change something you do daily. The secret of your success is found in your daily routine.",
  },
  {
    name: "Darren Hardy",
    quote:
      "When you define your goals, you give your brain something new to look for and focus on.",
  },
  {
    name: "Darren Hardy",
    quote: "Start your day with why, then get on with your what.",
  },
  {
    name: "Darren Hardy",
    quote:
      "Unsuccessful people carry their goals around in their head like marbles rattling around in a can, and we say a goal that is not in writing is merely a fantasy.",
  },
  {
    name: "David Goggins",
    quote:
      "The reason it’s important to push hardest when you want to quit the most is because it helps you callous your mind.  It’s the same reason why you have to do your best work when you are the least motivated.",
  },
  {
    name: "David Goggins",
    quote:
      "Life will always be the most grueling endurance sport, and when you train hard, get uncomfortable, and callous your mind, you will become a more versatile competitor, trained to find a way forward no matter what.",
  },
  {
    name: "David Goggins",
    quote:
      "We know life can be hard, and yet we feel sorry for ourselves when it isn’t fair.  From this point forward, accept that, You will be made fun of.  You will feel insecure.  You may not be the best all the time. There will be times when you feel alone.  Get over it!  Our minds are very strong, they are our most powerful weapon, but we have stopped using them.",
  },
  {
    name: "Jordan B. Peterson",
    quote:
      "You're going to pay a price for every bloody thing you do and everything you don't do. You don't get to choose to not pay a price. You get to choose which poison you're going to take. That's it.",
  },
  {
    name: "Jordan B. Peterson",
    quote:
      "Don’t underestimate the power of vision and direction. These are irresistible forces, able to transform what might appear to be unconquerable obstacles into traversable pathways and expanding opportunities. Strengthen the individual. Start with yourself. Take care with yourself. Define who you are. Refine your personality. Choose your destination and articulate your Being. As the great nineteenth-century German philosopher Friedrich Nietzsche so brilliantly noted, “He whose life has a why can bear almost any how.",
  },
  {
    name: "Jordan B. Peterson",
    quote:
      "You cannot be protected from the things that frighten you and hurt you, but if you identify with the part of your being that is responsible for transformation, then you aare always the equal, or more than the equal of the things that frighten you.",
  },
  {
    name: "Jordan B. Peterson",
    quote:
      "You're going to pay a price for every bloody thing you do and everything you don't do. You don't get to choose to not pay a price. You get to choose which poison you're going to take. That's it.",
  },
  {
    name: "Imran Khan",
    quote:
      "It is not defeat that destroys you,it is being demoralized by defeat that destroy you.",
  },
  {
    name: "Imran Khan",
    quote: "The more you study, the more you know; how less you know.",
  },
  {
    name: "Imran Khan",
    quote:
      "I have always believed that one should not be scared of losing,I think that really is the key.",
  },
  {
    name: "Imran Khan",
    quote:
      "Never give up, no matter how hard life gets no matter how much pain you feel. Pain will eventually subside, nothing remains forever, so keep going and don't give up.",
  },
  {
    name: "Imran Khan",
    quote: "Leader leads people. Leader does not follow public opinion",
  },
  {
    name: "Imran Khan",
    quote:
      "The reason I refuse to look back (albums, videos from my past) is because I feel it stops your evolutionary process. You don't grow if you keep living in your past.",
  },
  {
    name: "Imran Khan",
    quote: "I always believed I could win.",
  },
  {
    name: "Imran Khan",
    quote:
      "I was always a dreamer. I knew at the age of nine that I will one day play for the Pakistani cricket team. It was only a question of when.",
  },
  {
    name: "Imran Khan",
    quote: "When you're scared to lose, you don't learn how to win.",
  },
  {
    name: "Imran Khan",
    quote:
      "When I started off my cricket career, I thought talent was everything. As I went on with life, I realised mental strength is the key to success. You can have all the talent but if you don't have the character to translate that talent into performance, it is wasted.",
  },
  {
    name: "Imran Khan",
    quote: "If you can handle defeat, you'll go higher in life.",
  },
  {
    name: "Imran Khan",
    quote:
      "I've always looked at all my life as a struggle. There were ups and there were downs. It also strengthened me as a person. No university teaches you what adversity can.",
  },
  {
    name: "Imran Khan",
    quote:
      "I have always been motivated by some sort of passion. That, solely, has been my focus in life. Everything else is peripheral.",
  },
  {
    name: "Imran Khan",
    quote: "Generosity has nothing to do with one's bank balance.",
  },
  {
    name: "Imran Khan",
    quote:
      "Failure teaches you more than winning. It completely exposes your weaknesses.",
  },
];
