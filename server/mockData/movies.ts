import { Genres, IMovie } from '../../shared/interfaces/movies.model';

const movies: Array<IMovie> = [
  {
    title: 'alice in wonderland',
    genre: [Genres.Drama],
    releaseDate: '2010-09-17',
    imagePath: '../assets/images/alice in wonderland.jpg',
    url: 'aliceinwonderland.com',
    id: 1,
    duration: 108,
    rating: 6.4,
    description: 'Alice, now 19 years old, follows a rabbit in a blue coat to a magical wonderland from her dreams where she is reunited with her friends who make her realize her true destiny.',
  },
  {
    title: 'back to the future',
    genre: [Genres.Comedy],
    releaseDate: '1985-09-17',
    imagePath: '../assets/images/back to the future.jpg',
    url: 'backtothefuture.com',
    id: 2,
    duration: 116,
    rating: 8.5,
    description: 'Marty travels back in time using an eccentric scientist\'s time machine. However, he must make his high-school-aged parents fall in love in order to return to the present.',
  },
  {
    title: 'django unchained',
    genre: [Genres.Action, Genres.Comedy],
    releaseDate: '2012-09-17',
    imagePath: '../assets/images/django.jpg',
    url: 'djangounchained.com',
    id: 3,
    duration: 165,
    rating: 8.4,
    description: 'When Django, a slave, is freed, he joins forces with a bounty hunter to rescue his wife, who has been captured by a hard-hearted plantation owner.',
  },
  {
    title: 'fight club',
    genre: [Genres.Action, Genres.Drama],
    releaseDate: '1999-09-17',
    imagePath: '../assets/images/fight club.jpg',
    url: 'fightclub.com',
    id: 4,
    duration: 151,
    rating: 8.8,
    description: 'Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.',
  },
  {
    title: 'first blood',
    genre: [Genres.Action],
    releaseDate: '1982-09-17',
    imagePath: '../assets/images/first blood.jpg',
    url: 'firstblood.com',
    id: 5,
    duration: 93,
    rating: 7.7,
    description: 'John Rambo, a former US soldier traumatised by memories of the Vietnam War, gets into trouble when an incident with a small-town sheriff triggers his violent side.',
  },
  {
    title: 'harry potter',
    genre: [Genres.Action],
    releaseDate: '2001-09-17',
    imagePath: '../assets/images/harry potter.jpg',
    url: 'harrypotter.com',
    id: 6,
    duration: 159,
    rating: 7.6,
    description: 'Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.',
  },
  {
    title: 'home alone',
    genre: [Genres.Comedy],
    releaseDate: '1990-09-17',
    imagePath: '../assets/images/home alone.jpg',
    url: 'homealone.com',
    id: 7,
    duration: 103,
    rating: 7.6,
    description: 'Eight-year-old Kevin is accidentally left behind when his family leaves for France. At first, he is happy to be in charge, but when thieves try to break into his home, he tries to put up a fight.',
  },
  {
    title: 'jurassic park',
    genre: [Genres.Action],
    releaseDate: '1993-09-17',
    imagePath: '../assets/images/jurassic park.jpg',
    url: 'jurassicpark.com',
    id: 8,
    duration: 127,
    rating: 8.1,
    description: 'John Hammond, an entrepreneur, opens a wildlife park containing cloned dinosaurs. However, a breakdown of the island\'s security system causes the creatures to escape and bring about chaos.',
  },
  {
    title: 'legally blonde',
    genre: [Genres.Comedy],
    releaseDate: '2001-09-17',
    imagePath: '../assets/images/legally blonde.jpg',
    url: 'legallyblonde.com',
    id: 9,
    duration: 97,
    rating: 6.3,
    description: 'Elle\'s boyfriend breaks up with her for a smarter girl as he plans to become a politician and joins Harward law school. Elle gets enrolled in the same school in an effort to teach him a lesson.',
  },
  {
    title: 'leon',
    genre: [Genres.Action, Genres.Drama],
    releaseDate: '1994-09-17',
    imagePath: '../assets/images/leon.jpg',
    url: 'leon.com',
    id: 10,
    duration: 110,
    rating: 8.5,
    description: 'When 12-year-old Mathilda\'s family is killed, her neighbour Leon, who is a professional assassin, reluctantly takes her under his wing and teaches her the secrets of his trade.',
  },
  {
    title: 'little women',
    genre: [Genres.Drama],
    releaseDate: '2019-09-17',
    imagePath: '../assets/images/little women.jpg',
    url: 'littlewomen.com',
    id: 11,
    duration: 135,
    rating: 7.8,
    description: 'In the years after the Civil War, Jo March lives in New York and makes her living as a writer, while her sister Amy studies painting in Paris. Amy has a chance encounter with Theodore, a childhood crush who proposed to Jo but was ultimately rejected. Their oldest sibling, Meg, is married to a schoolteacher, while shy sister Beth develops a devastating illness that brings the family back together.',
  },
  {
    title: 'once upon a time in hollywood',
    genre: [Genres.Comedy, Genres.Drama],
    releaseDate: '2019-09-17',
    imagePath: '../assets/images/once upon a time in hollywood.jpg',
    url: 'onceuponatimeinhollywood.com',
    id: 12,
    duration: 160,
    rating: 7.6,
    description: 'Rick, a washed-out actor, and Cliff, his stunt double, struggle to recapture fame and success in 1960s Los Angeles. Meanwhile, living next door to Rick is Sharon Tate and her husband Roman Polanski.',
  },
  {
    title: 'parasite',
    genre: [Genres.Comedy, Genres.Drama],
    releaseDate: '2019-09-17',
    imagePath: '../assets/images/parasite.jpg',
    url: 'parasite.com',
    id: 13,
    duration: 132,
    rating: 8.6,
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
  },
  {
    title: 'pennywise the dancing clown',
    genre: [Genres.Horror],
    releaseDate: '2017-09-17',
    imagePath: '../assets/images/pennywise the dancing clown.jpg',
    url: 'pennywisethedancingclown.com',
    id: 14,
    duration: 135,
    rating: 7.3,
    description: 'Seven helpless and bullied children are forced to face their worst nightmares when Pennywise, a shape-shifting clown, reappears. The clown, an ancient evil torments children before feeding on them.',
  },
  {
    title: 'ratatouille',
    genre: [Genres.Comedy, Genres.Drama],
    releaseDate: '2007-09-17',
    imagePath: '../assets/images/ratatouille.jpg',
    url: 'ratatouille.com',
    id: 15,
    duration: 111,
    rating: 8,
    description: 'Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.',
  },
  {
    title: 'shining',
    genre: [Genres.Horror],
    releaseDate: '1980-09-17',
    imagePath: '../assets/images/shining.jpg',
    url: 'shining.com',
    id: 16,
    duration: 146,
    rating: 8.4,
    description: 'Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members.',
  },
  {
    title: 'star wars',
    genre: [Genres.Action],
    releaseDate: '1977-09-17',
    imagePath: '../assets/images/star wars.jpg',
    url: 'starwars.com',
    id: 17,
    duration: 125,
    rating: 8.6,
    description: 'After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.',
  },
  {
    title: 'the invisible man',
    genre: [Genres.Horror],
    releaseDate: '2020-09-17',
    imagePath: '../assets/images/the invisible man.jpg',
    url: 'theinvisibleman.com',
    id: 18,
    duration: 125,
    rating: 7.1,
    description: 'After staging his own suicide, a crazed scientist uses his power to become invisible to stalk and terrorize his ex-girlfriend. When the police refuse to believe her story, she decides to take matters into her own hands and fight back.',
  },
  {
    title: 'the matrix',
    genre: [Genres.Action],
    releaseDate: '1999-09-17',
    imagePath: '../assets/images/the matrix.jpg',
    url: 'thematrix.com',
    id: 19,
    duration: 150,
    rating: 8.7,
    description: 'Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.',
  },
  {
    title: 'willy wonka and the chocolate factory',
    genre: [Genres.Comedy],
    releaseDate: '1971-09-17',
    imagePath: '../assets/images/willy wonka and the chocolate factory.jpg',
    url: 'willywonkaandthechocolatefactory.com',
    id: 20,
    duration: 89,
    rating: 7.8,
    description: 'A factory owner gives 5 children a chance to win a lifetime supply of sweets. Charlie, along with four odious children enter the factory. Disasters befall each of the children. Will Charlie survive?',
  },
  {
    id: 337167,
    title: "Fifty Shades Freed",
    rating: 6.1,
    releaseDate: "2018-02-07",
    imagePath: "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
    url: "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
    description: "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
    genre: [
      Genres.Drama
    ],
    duration: 106
  },
  {
    id: 269149,
    title: "Zootopia",
    rating: 7.7,
    releaseDate: "2016-02-11",
    imagePath: "https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
    url: "https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
    description: "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
    genre: [
      Genres.Comedy
    ],
    duration: 108
  },
  {
    id: 181808,
    title: "Star Wars: The Last Jedi",
    rating: 7.1,
    releaseDate: "2017-12-13",
    imagePath: "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
    url: "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
    description: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
    genre: [
      Genres.Drama
    ],
    duration: 152
  },
  {
    id: 284054,
    title: "Black Panther",
    rating: 7.3,
    releaseDate: "2018-02-13",
    imagePath: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    url: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    description: "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war.",
    genre: [
      Genres.Drama
    ],
    duration: 134
  },
  {
    id: 354912,
    title: "Coco",
    rating: 7.8,
    releaseDate: "2017-10-27",
    imagePath: "https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
    url: "https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
    description: "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
    genre: [
      Genres.Comedy,
    ],
    duration: 105
  },
  {
    id: 333339,
    title: "Ready Player One",
    rating: 8.1,
    releaseDate: "2018-03-28",
    imagePath: "https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
    url: "https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
    description: "When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.",
    genre: [
      Genres.Action
    ],
    duration: 140
  },
  {
    id: 338970,
    title: "Tomb Raider",
    rating: 6.2,
    releaseDate: "2018-03-08",
    imagePath: "https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg",
    url: "https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg",
    description: "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
    genre: [
      Genres.Action
    ],
    duration: 118
  },
  {
    id: 284053,
    title: "Thor: Ragnarok",
    rating: 7.4,
    releaseDate: "2017-10-25",
    imagePath: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    url: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    description: "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
    genre: [
      Genres.Drama
    ],
    duration: 130
  },
  {
    id: 321612,
    title: "Beauty and the Beast",
    rating: 6.8,
    releaseDate: "2017-03-16",
    imagePath: "https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg",
    url: "https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg",
    description: "A live-action adaptation of Disney's version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.",
    genre: [
      Genres.Drama
    ],
    duration: 129
  },
  {
    id: 399055,
    title: "The Shape of Water",
    rating: 7.3,
    releaseDate: "2017-12-01",
    imagePath: "https://image.tmdb.org/t/p/w500/k4FwHlMhuRR5BISY2Gm2QZHlH5Q.jpg",
    url: "https://image.tmdb.org/t/p/w500/k4FwHlMhuRR5BISY2Gm2QZHlH5Q.jpg",
    description: "An other-worldly story, set against the backdrop of Cold War era America circa 1962, where a mute janitor working at a lab falls in love with an amphibious man being held captive there and devises a plan to help him escape.",
    genre: [
      Genres.Drama
    ],
    duration: 123
  },
  {
    id: 198663,
    title: "The Maze Runner",
    rating: 7,
    releaseDate: "2014-09-10",
    imagePath: "https://image.tmdb.org/t/p/w500/coss7RgL0NH6g4fC2s5atvf3dFO.jpg",
    url: "https://image.tmdb.org/t/p/w500/coss7RgL0NH6g4fC2s5atvf3dFO.jpg",
    description: "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape.",
    genre: [
      Genres.Horror
    ],
    duration: 113
  },
  {
    id: 141052,
    title: "Justice League",
    rating: 6.4,
    releaseDate: "2017-11-15",
    imagePath: "https://image.tmdb.org/t/p/w500/eifGNCSDuxJeS1loAXil5bIGgvC.jpg",
    url: "https://image.tmdb.org/t/p/w500/eifGNCSDuxJeS1loAXil5bIGgvC.jpg",
    description: "Fuelled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne and Diana Prince assemble a team of metahumans consisting of Barry Allen, Arthur Curry and Victor Stone to face the catastrophic threat of Steppenwolf and the Parademons who are on the hunt for three Mother Boxes on Earth.",
    genre: [
      Genres.Drama
    ],
    duration: 120
  },
  {
    id: 268896,
    title: "Pacific Rim: Uprising",
    rating: 6,
    releaseDate: "2018-03-21",
    imagePath: "https://image.tmdb.org/t/p/w500/v5HlmJK9bdeHxN2QhaFP1ivjX3U.jpg",
    url: "https://image.tmdb.org/t/p/w500/v5HlmJK9bdeHxN2QhaFP1ivjX3U.jpg",
    description: "It has been ten years since The Battle of the Breach and the oceans are still, but restless. Vindicated by the victory at the Breach, the Jaeger program has evolved into the most powerful global defense force in human history. The PPDC now calls upon the best and brightest to rise up and become the next generation of heroes when the Kaiju threat returns.",
    genre: [
      Genres.Drama
    ],
    duration: 111
  },
  {
    id: 24428,
    title: "The Avengers",
    rating: 7.5,
    releaseDate: "2012-04-25",
    imagePath: "https://image.tmdb.org/t/p/w500/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
    url: "https://image.tmdb.org/t/p/w500/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
    description: "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
    genre: [
      Genres.Action
    ],
    duration: 143
  },
  {
    id: 118340,
    title: "Guardians of the Galaxy",
    rating: 7.9,
    releaseDate: "2014-07-30",
    imagePath: "https://image.tmdb.org/t/p/w500/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg",
    url: "https://image.tmdb.org/t/p/w500/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg",
    description: "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
    genre: [
      Genres.Action
    ],
    duration: 121
  },
  {
    id: 335984,
    title: "Blade Runner 2049",
    rating: 7.3,
    releaseDate: "2017-10-04",
    imagePath: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    url: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    description: "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
    genre: [
      Genres.Horror
    ],
    duration: 163
  },
  {
    id: 347882,
    title: "Sleight",
    rating: 5.2,
    releaseDate: "2017-04-28",
    imagePath: "https://image.tmdb.org/t/p/w500/wridRvGxDqGldhzAIh3IcZhHT5F.jpg",
    url: "https://image.tmdb.org/t/p/w500/wridRvGxDqGldhzAIh3IcZhHT5F.jpg",
    description: "A young street magician is left to take care of his little sister after his mother's passing and turns to drug dealing in the Los Angeles party scene to keep a roof over their heads. When he gets into trouble with his supplier, his sister is kidnapped and he is forced to rely on both his sleight of hand and brilliant mind to save her.",
    genre: [
      Genres.Horror,
    ],
    duration: 89
  },
  {
    id: 300668,
    title: "Annihilation",
    rating: 6.4,
    releaseDate: "2018-02-22",
    imagePath: "https://image.tmdb.org/t/p/w500/d3qcpfNwbAMCNqWDHzPQsUYiUgS.jpg",
    url: "https://image.tmdb.org/t/p/w500/d3qcpfNwbAMCNqWDHzPQsUYiUgS.jpg",
    description: "A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don't apply.",
    genre: [
      Genres.Drama
    ],
    duration: 115
  },
  {
    id: 353486,
    title: "Jumanji: Welcome to the Jungle",
    rating: 6.5,
    releaseDate: "2017-12-09",
    imagePath: "https://image.tmdb.org/t/p/w500/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg",
    url: "https://image.tmdb.org/t/p/w500/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg",
    description: "The tables are turned as four teenagers are sucked into Jumanji's world - pitted against rhinos, black mambas and an endless variety of jungle traps and puzzles. To survive, they'll play as characters from the game.",
    genre: [
      Genres.Comedy,
    ],
    duration: 119
  },
  {
    id: 245891,
    title: "John Wick",
    rating: 7,
    releaseDate: "2014-10-22",
    imagePath: "https://image.tmdb.org/t/p/w500/5vHssUeVe25bMrof1HyaPyWgaP.jpg",
    url: "https://image.tmdb.org/t/p/w500/5vHssUeVe25bMrof1HyaPyWgaP.jpg",
    description: "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
    genre: [
      Genres.Horror
    ],
    duration: 101
  },
  {
    id: 131631,
    title: "The Hunger Games: Mockingjay - Part 1",
    rating: 6.7,
    releaseDate: "2014-11-18",
    imagePath: "https://image.tmdb.org/t/p/w500/gj282Pniaa78ZJfbaixyLXnXEDI.jpg",
    url: "https://image.tmdb.org/t/p/w500/gj282Pniaa78ZJfbaixyLXnXEDI.jpg",
    description: "Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autocratic Capitol.",
    genre: [
      Genres.Horror
    ],
    duration: 123
  },
  {
    id: 353616,
    title: "Pitch Perfect 3",
    rating: 6.4,
    releaseDate: "2017-12-21",
    imagePath: "https://image.tmdb.org/t/p/w500/fchHLsLjFvzAFSQykiMwdF1051.jpg",
    url: "https://image.tmdb.org/t/p/w500/fchHLsLjFvzAFSQykiMwdF1051.jpg",
    description: "After the highs of winning the world championships, the Bellas find themselves split apart and discovering there aren't job prospects for making music with your mouth. But when they get the chance to reunite for an overseas USO tour, this group of awesome nerds will come together to make some music, and some questionable decisions, one last time.",
    genre: [
      Genres.Comedy,
    ],
    duration: 93
  },
  {
    id: 99861,
    title: "Avengers: Age of Ultron",
    rating: 7.3,
    releaseDate: "2015-04-22",
    imagePath: "https://image.tmdb.org/t/p/w500/t90Y3G8UGQp0f0DrP60wRu9gfrH.jpg",
    url: "https://image.tmdb.org/t/p/w500/t90Y3G8UGQp0f0DrP60wRu9gfrH.jpg",
    description: "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
    genre: [
      Genres.Action
    ],
    duration: 141
  },
  {
    id: 45054,
    title: "There Be Dragons",
    rating: 4.9,
    releaseDate: "2011-03-25",
    imagePath: "https://image.tmdb.org/t/p/w500/dKgPtWZkHkTeYQRvLTsO0RBYaQZ.jpg",
    url: "https://image.tmdb.org/t/p/w500/dKgPtWZkHkTeYQRvLTsO0RBYaQZ.jpg",
    description: "Arising out of the horror of the Spanish Civil War, a candidate for canonization is investigated by a journalist who discovers his own estranged father had a deep, dark and devastating connection to the saint's life.While researching the life of Josemaria Escriva, the controversial founder of Opus Dei, the young journalist Robert uncovers hidden stories of his estranged father Manolo, and is taken on a journey through the dark, terrible secrets of his family’s past.",
    genre: [
      Genres.Drama
    ],
    duration: 112
  },
  {
    id: 22,
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    rating: 7.5,
    releaseDate: "2003-07-09",
    imagePath: "https://image.tmdb.org/t/p/w500/tkt9xR1kNX5R9rCebASKck44si2.jpg",
    url: "https://image.tmdb.org/t/p/w500/tkt9xR1kNX5R9rCebASKck44si2.jpg",
    description: "Jack Sparrow, a freewheeling 17th-century pirate, quarrels with a rival pirate bent on pillaging Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her.",
    genre: [
      Genres.Drama
    ],
    duration: 143
  },
  {
    id: 122917,
    title: "The Hobbit: The Battle of the Five Armies",
    rating: 7.2,
    releaseDate: "2014-12-10",
    imagePath: "https://image.tmdb.org/t/p/w500/9zRzFJuaj0CHIOhAkcCcFTvyu2X.jpg",
    url: "https://image.tmdb.org/t/p/w500/9zRzFJuaj0CHIOhAkcCcFTvyu2X.jpg",
    description: "Immediately after the events of The Desolation of Smaug, Bilbo and the dwarves try to defend Erebor's mountain of treasure from others who claim it: the men of the ruined Laketown and the elves of Mirkwood. Meanwhile an army of Orcs led by Azog the Defiler is marching on Erebor, fueled by the rise of the dark lord Sauron. Dwarves, elves and men must unite, and the hope for Middle-Earth falls into Bilbo's hands.",
    genre: [
      Genres.Drama
    ],
    duration: 144
  },
  {
    id: 209112,
    title: "Batman v Superman: Dawn of Justice",
    rating: 5.8,
    releaseDate: "2016-03-23",
    imagePath: "https://image.tmdb.org/t/p/w500/cGOPbv9wA5gEejkUN892JrveARt.jpg",
    url: "https://image.tmdb.org/t/p/w500/cGOPbv9wA5gEejkUN892JrveARt.jpg",
    description: "Fearing the actions of a god-like Super Hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before.",
    genre: [
      Genres.Drama
    ],
    duration: 151
  },
  {
    id: 499772,
    title: "Meet Me In St. Gallen",
    rating: 4.9,
    releaseDate: "2018-02-07",
    imagePath: "https://image.tmdb.org/t/p/w500/uGntNjUx6YAzbVy7RDgxWnWsdet.jpg",
    url: "https://image.tmdb.org/t/p/w500/uGntNjUx6YAzbVy7RDgxWnWsdet.jpg",
    description: "The story of Jesse and Celeste who meets at an unexpected time in their lives. They then realize their names are the same as the characters in the popular break-up romantic comedy, Celeste and Jesse Forever.",
    genre: [
      Genres.Drama
    ],
    duration: null
  },
  {
    id: 228150,
    title: "Fury",
    rating: 7.4,
    releaseDate: "2014-10-15",
    imagePath: "https://image.tmdb.org/t/p/w500/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg",
    url: "https://image.tmdb.org/t/p/w500/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg",
    description: "Last months of World War II in April 1945. As the Allies make their final push in the European Theater, a battle-hardened U.S. Army sergeant in the 2nd Armored Division named Wardaddy commands a Sherman tank called \"Fury\" and its five-man crew on a deadly mission behind enemy lines. Outnumbered and outgunned, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
    genre: [
      Genres.Drama
    ],
    duration: 135
  },
  {
    id: 98566,
    title: "Teenage Mutant Ninja Turtles",
    rating: 5.8,
    releaseDate: "2014-08-07",
    imagePath: "https://image.tmdb.org/t/p/w500/oDL2ryJ0sV2bmjgshVgJb3qzvwp.jpg",
    url: "https://image.tmdb.org/t/p/w500/oDL2ryJ0sV2bmjgshVgJb3qzvwp.jpg",
    description: "The city needs heroes. Darkness has settled over New York City as Shredder and his evil Foot Clan have an iron grip on everything from the police to the politicians. The future is grim until four unlikely outcast brothers rise from the sewers and discover their destiny as Teenage Mutant Ninja Turtles. The Turtles must work with fearless reporter April and her wise-cracking cameraman Vern Fenwick to save the city and unravel Shredder's diabolical plan.",
    genre: [
      Genres.Comedy
    ],
    duration: 101
  },
  {
    id: 400617,
    title: "Phantom Thread",
    rating: 7.3,
    releaseDate: "2017-12-25",
    imagePath: "https://image.tmdb.org/t/p/w500/6jsqmMgR75VYC9AM6eToMJh3RxF.jpg",
    url: "https://image.tmdb.org/t/p/w500/6jsqmMgR75VYC9AM6eToMJh3RxF.jpg",
    description: "In the glamour of 1950s post-war London, renowned dressmaker Reynolds Woodcock and his sister Cyril are at the center of British fashion. Women come and go through Woodcock’s life, providing the confirmed bachelor with inspiration and companionship, until he comes across a young, strong-willed woman, Alma, who soon becomes a fixture in his life as his muse and lover. Once controlled and planned, he finds his carefully tailored life disrupted by love.",
    genre: [
      Genres.Drama
    ],
    duration: 130
  },
  {
    id: 210577,
    title: "Gone Girl",
    rating: 7.9,
    releaseDate: "2014-10-01",
    imagePath: "https://image.tmdb.org/t/p/w500/gdiLTof3rbPDAmPaCf4g6op46bj.jpg",
    url: "https://image.tmdb.org/t/p/w500/gdiLTof3rbPDAmPaCf4g6op46bj.jpg",
    description: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
    genre: [
      Genres.Horror,
    ],
    duration: 145
  },
  {
    id: 483877,
    title: "15+ IQ Krachoot",
    rating: 3.3,
    releaseDate: "2017-08-03",
    imagePath: "https://image.tmdb.org/t/p/w500/1RxnEJzXYv5GgPszbHNsWTXPC6M.jpg",
    url: "https://image.tmdb.org/t/p/w500/1RxnEJzXYv5GgPszbHNsWTXPC6M.jpg",
    description: "A teenage comedy film about a young Yorkie. \"Rising\" opened the first movie on screen.  The story of fun gangs of teenage age 15+ hormones gurgling at the curiosity to try on their love and sex has spread out.",
    genre: [
      Genres.Comedy
    ],
    duration: 104
  },
  {
    id: 76338,
    title: "Thor: The Dark World",
    rating: 6.7,
    releaseDate: "2013-10-29",
    imagePath: "https://image.tmdb.org/t/p/w500/bnX5PqAdQZRXSw3aX3DutDcdso5.jpg",
    url: "https://image.tmdb.org/t/p/w500/bnX5PqAdQZRXSw3aX3DutDcdso5.jpg",
    description: "Thor fights to restore order across the cosmos… but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.",
    genre: [
      Genres.Drama
    ],
    duration: 112
  },
  {
    id: 206647,
    title: "Spectre",
    rating: 6.3,
    releaseDate: "2015-10-26",
    imagePath: "https://image.tmdb.org/t/p/w500/hE24GYddaxB9MVZl1CaiI86M3kp.jpg",
    url: "https://image.tmdb.org/t/p/w500/hE24GYddaxB9MVZl1CaiI86M3kp.jpg",
    description: "A cryptic message from Bond’s past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
    genre: [
      Genres.Drama
    ],
    duration: 148
  },
  {
    id: 87101,
    title: "Terminator Genisys",
    rating: 5.8,
    releaseDate: "2015-06-23",
    imagePath: "https://image.tmdb.org/t/p/w500/5JU9ytZJyR3zmClGmVm9q4Geqbd.jpg",
    url: "https://image.tmdb.org/t/p/w500/5JU9ytZJyR3zmClGmVm9q4Geqbd.jpg",
    description: "The year is 2029. John Connor, leader of the resistance continues the war against the machines. At the Los Angeles offensive, John's fears of the unknown future begin to emerge when TECOM spies reveal a new plot by SkyNet that will attack him from both fronts; past and future, and will ultimately change warfare forever.",
    genre: [
      Genres.Horror,
    ],
    duration: 126
  },
  {
    id: 76341,
    title: "Mad Max: Fury Road",
    rating: 7.3,
    releaseDate: "2015-05-13",
    imagePath: "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
    url: "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
    description: "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
    genre: [
      Genres.Horror
    ],
    duration: 120
  },
  {
    id: 150540,
    title: "Inside Out",
    rating: 8,
    releaseDate: "2015-06-09",
    imagePath: "https://image.tmdb.org/t/p/w500/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg",
    url: "https://image.tmdb.org/t/p/w500/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg",
    description: "Growing up can be a bumpy road, and it's no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Like all of us, Riley is guided by her emotions - Joy, Fear, Anger, Disgust and Sadness. The emotions live in Headquarters, the control center inside Riley's mind, where they help advise her through everyday life. As Riley and her emotions struggle to adjust to a new life in San Francisco, turmoil ensues in Headquarters. Although Joy, Riley's main and most important emotion, tries to keep things positive, the emotions conflict on how best to navigate a new city, house and school.",
    genre: [
      Genres.Comedy,
    ],
    duration: 94
  },
  {
    id: 10195,
    title: "Thor",
    rating: 6.6,
    releaseDate: "2011-04-21",
    imagePath: "https://image.tmdb.org/t/p/w500/bIuOWTtyFPjsFDevqvF3QrD1aun.jpg",
    url: "https://image.tmdb.org/t/p/w500/bIuOWTtyFPjsFDevqvF3QrD1aun.jpg",
    description: "Against his father Odin's will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth.",
    genre: [
      Genres.Drama
    ],
    duration: 115
  },
  {
    id: 78,
    title: "Blade Runner",
    rating: 7.9,
    releaseDate: "1982-06-25",
    imagePath: "https://image.tmdb.org/t/p/w500/p64TtbZGCElxQHpAMWmDHkWJlH2.jpg",
    url: "https://image.tmdb.org/t/p/w500/p64TtbZGCElxQHpAMWmDHkWJlH2.jpg",
    description: "In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",
    genre: [
      Genres.Horror
    ],
    duration: 117
  },
  {
    id: 399035,
    title: "The Commuter",
    rating: 5.8,
    releaseDate: "2018-01-11",
    imagePath: "https://image.tmdb.org/t/p/w500/rDeGK6FIUfVcXmuBdEORPAGPMNg.jpg",
    url: "https://image.tmdb.org/t/p/w500/rDeGK6FIUfVcXmuBdEORPAGPMNg.jpg",
    description: "A businessman on his daily commute home gets unwittingly caught up in a criminal conspiracy that threatens not only his life but the lives of those around him.",
    genre: [
      Genres.Drama
    ],
    duration: 104
  },
  {
    id: 272,
    title: "Batman Begins",
    rating: 7.5,
    releaseDate: "2005-06-10",
    imagePath: "https://image.tmdb.org/t/p/w500/dr6x4GyyegBWtinPBzipY02J2lV.jpg",
    url: "https://image.tmdb.org/t/p/w500/dr6x4GyyegBWtinPBzipY02J2lV.jpg",
    description: "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
    genre: [
      Genres.Drama
    ],
    duration: 140
  },
  {
    id: 119450,
    title: "Dawn of the Planet of the Apes",
    rating: 7.2,
    releaseDate: "2014-06-26",
    imagePath: "https://image.tmdb.org/t/p/w500/qL0w9X1dVT3dnkZg3SrYtPFUHMs.jpg",
    url: "https://image.tmdb.org/t/p/w500/qL0w9X1dVT3dnkZg3SrYtPFUHMs.jpg",
    description: "A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes.",
    genre: [
      Genres.Horror
    ],
    duration: 130
  },
  {
    id: 76757,
    title: "Jupiter Ascending",
    rating: 5.2,
    releaseDate: "2015-02-04",
    imagePath: "https://image.tmdb.org/t/p/w500/aMEsvTUklw0uZ3gk3Q6lAj6302a.jpg",
    url: "https://image.tmdb.org/t/p/w500/aMEsvTUklw0uZ3gk3Q6lAj6302a.jpg",
    description: "In a universe where human genetic material is the most precious commodity, an impoverished young Earth woman becomes the key to strategic maneuvers and internal strife within a powerful dynasty…",
    genre: [
      Genres.Drama
    ],
    duration: 124
  },
  {
    id: 166426,
    title: "Pirates of the Caribbean: Dead Men Tell No Tales",
    rating: 6.5,
    releaseDate: "2017-05-23",
    imagePath: "https://image.tmdb.org/t/p/w500/xbpSDU3p7YUGlu9Mr6Egg2Vweto.jpg",
    url: "https://image.tmdb.org/t/p/w500/xbpSDU3p7YUGlu9Mr6Egg2Vweto.jpg",
    description: "Thrust into an all-new adventure, a down-on-his-luck Capt. Jack Sparrow feels the winds of ill-fortune blowing even more strongly when deadly ghost sailors led by his old nemesis, the evil Capt. Salazar, escape from the Devil's Triangle. Jack's only hope of survival lies in seeking out the legendary Trident of Poseidon, but to find it, he must forge an uneasy alliance with a brilliant and beautiful astronomer and a headstrong young man in the British navy.",
    genre: [
      Genres.Comedy
    ],
    duration: 129
  },
  {
    id: 271110,
    title: "Captain America: Civil War",
    rating: 7.2,
    releaseDate: "2016-04-27",
    imagePath: "https://image.tmdb.org/t/p/w500/kSBXou5Ac7vEqKd97wotJumyJvU.jpg",
    url: "https://image.tmdb.org/t/p/w500/kSBXou5Ac7vEqKd97wotJumyJvU.jpg",
    description: "Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
    genre: [
      Genres.Action
    ],
    duration: 147
  },
  {
    id: 254128,
    title: "San Andreas",
    rating: 6,
    releaseDate: "2015-05-27",
    imagePath: "https://image.tmdb.org/t/p/w500/qey0tdcOp9kCDdEZuJ87yE3crSe.jpg",
    url: "https://image.tmdb.org/t/p/w500/qey0tdcOp9kCDdEZuJ87yE3crSe.jpg",
    description: "In the aftermath of a massive earthquake in California, a rescue-chopper pilot makes a dangerous journey across the state in order to rescue his estranged daughter.",
    genre: [
      Genres.Horror
    ],
    duration: 114
  },
  {
    id: 392044,
    title: "Murder on the Orient Express",
    rating: 6.7,
    releaseDate: "2017-11-03",
    imagePath: "https://image.tmdb.org/t/p/w500/iBlfxlw8qwtUS0R8YjIU7JtM6LM.jpg",
    url: "https://image.tmdb.org/t/p/w500/iBlfxlw8qwtUS0R8YjIU7JtM6LM.jpg",
    description: "Genius Belgian detective Hercule Poirot investigates the murder of an American tycoon aboard the Orient Express train.",
    genre: [
      Genres.Drama
    ],
    duration: 114
  },
  {
    id: 316029,
    title: "The Greatest Showman",
    rating: 8,
    releaseDate: "2017-12-20",
    imagePath: "https://image.tmdb.org/t/p/w500/dfhztJRiElqmYW4kpvjYe1gENsD.jpg",
    url: "https://image.tmdb.org/t/p/w500/dfhztJRiElqmYW4kpvjYe1gENsD.jpg",
    description: "The story of American showman P.T. Barnum, founder of the circus that became the famous traveling Ringling Bros. and Barnum & Bailey Circus.",
    genre: [
      Genres.Drama
    ],
    duration: 105
  },
  {
    id: 263115,
    title: "Logan",
    rating: 7.7,
    releaseDate: "2017-02-28",
    imagePath: "https://image.tmdb.org/t/p/w500/gGBu0hKw9BGddG8RkRAMX7B6NDB.jpg",
    url: "https://image.tmdb.org/t/p/w500/gGBu0hKw9BGddG8RkRAMX7B6NDB.jpg",
    description: "In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.",
    genre: [
      Genres.Drama
    ],
    duration: 137
  },
  {
    id: 150689,
    title: "Cinderella",
    rating: 6.6,
    releaseDate: "2015-03-12",
    imagePath: "https://image.tmdb.org/t/p/w500/o1F2aloaOUufHHOsV0laA9aw9N0.jpg",
    url: "https://image.tmdb.org/t/p/w500/o1F2aloaOUufHHOsV0laA9aw9N0.jpg",
    description: "When her father unexpectedly passes away, young Ella finds herself at the mercy of her cruel stepmother and her daughters. Never one to give up hope, Ella's fortunes begin to change after meeting a dashing stranger in the woods.",
    genre: [
    ],
    duration: 105
  },
  {
    id: 127585,
    title: "X-Men: Days of Future Past",
    rating: 7.5,
    releaseDate: "2014-05-15",
    imagePath: "https://image.tmdb.org/t/p/w500/giUK8ppRbfistadVzHtpainkhq4.jpg",
    url: "https://image.tmdb.org/t/p/w500/giUK8ppRbfistadVzHtpainkhq4.jpg",
    description: "The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past – to save our future.",
    genre: [
      Genres.Drama
    ],
    duration: 131
  },
  {
    id: 374720,
    title: "Dunkirk",
    rating: 7.4,
    releaseDate: "2017-07-19",
    imagePath: "https://image.tmdb.org/t/p/w500/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg",
    url: "https://image.tmdb.org/t/p/w500/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg",
    description: "The story of the miraculous evacuation of Allied soldiers from Belgium, Britain, Canada and France, who were cut off and surrounded by the German army from the beaches and harbour of Dunkirk between May 26th and June 4th 1940 during World War II.",
    genre: [
      Genres.Horror,
    ],
    duration: 107
  },
  {
    id: 120,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    rating: 8.1,
    releaseDate: "2001-12-18",
    imagePath: "https://image.tmdb.org/t/p/w500/bi9JddwTwBt3ixGLAiMAF7OXMbV.jpg",
    url: "https://image.tmdb.org/t/p/w500/bi9JddwTwBt3ixGLAiMAF7OXMbV.jpg",
    description: "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
    genre: [
      Genres.Drama
    ],
    duration: 178
  },
  {
    id: 299536,
    title: "Avengers: Infinity War",
    rating: 0,
    releaseDate: "2018-04-25",
    imagePath: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    url: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    description: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    genre: [
      Genres.Drama
    ],
    duration: 156
  },
  {
    id: 8966,
    title: "Twilight",
    rating: 5.8,
    releaseDate: "2008-11-20",
    imagePath: "https://image.tmdb.org/t/p/w500/nlvPMLCdum7bkHKmDSMnNLGztmW.jpg",
    url: "https://image.tmdb.org/t/p/w500/nlvPMLCdum7bkHKmDSMnNLGztmW.jpg",
    description: "When Bella Swan moves to a small town in the Pacific Northwest to live with her father, she starts school and meets the reclusive Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire. Despite Edward's repeated cautions, Bella can't help but fall in love with him, a fatal move that endangers her own life when a coven of bloodsuckers try to challenge the Cullen clan.",
    genre: [
      Genres.Drama
    ],
    duration: 122
  },
  {
    id: 194662,
    title: "Birdman",
    rating: 7.4,
    releaseDate: "2014-08-27",
    imagePath: "https://image.tmdb.org/t/p/w500/rSZs93P0LLxqlVEbI001UKoeCQC.jpg",
    url: "https://image.tmdb.org/t/p/w500/rSZs93P0LLxqlVEbI001UKoeCQC.jpg",
    description: "A fading actor best known for his portrayal of a popular superhero attempts to mount a comeback by appearing in a Broadway play. As opening night approaches, his attempts to become more altruistic, rebuild his career, and reconnect with friends and family prove more difficult than expected.",
    genre: [
      Genres.Comedy
    ],
    duration: 119
  },
  {
    id: 260346,
    title: "Taken 3",
    rating: 6.1,
    releaseDate: "2014-12-16",
    imagePath: "https://image.tmdb.org/t/p/w500/ikDwR3i2bczqnRf1urJTy77YTFf.jpg",
    url: "https://image.tmdb.org/t/p/w500/ikDwR3i2bczqnRf1urJTy77YTFf.jpg",
    description: "Ex-government operative Bryan Mills finds his life is shattered when he's falsely accused of a murder that hits close to home. As he's pursued by a savvy police inspector, Mills employs his particular set of skills to track the real killer and exact his unique brand of justice.",
    genre: [
      Genres.Horror,
    ],
    duration: 109
  },
  {
    id: 198184,
    title: "Chappie",
    rating: 6.7,
    releaseDate: "2015-03-04",
    imagePath: "https://image.tmdb.org/t/p/w500/saF3HtAduvrP9ytXDxSnQJP3oqx.jpg",
    url: "https://image.tmdb.org/t/p/w500/saF3HtAduvrP9ytXDxSnQJP3oqx.jpg",
    description: "Every child comes into the world full of promise, and none more so than Chappie: he is gifted, special, a prodigy. Like any child, Chappie will come under the influence of his surroundings—some good, some bad—and he will rely on his heart and soul to find his way in the world and become his own man. But there's one thing that makes Chappie different from any one else: he is a robot.",
    genre: [
      Genres.Drama
    ],
    duration: 120
  },
  {
    id: 102899,
    title: "Ant-Man",
    rating: 7,
    releaseDate: "2015-07-14",
    imagePath: "https://image.tmdb.org/t/p/w500/D6e8RJf2qUstnfkTslTXNTUAlT.jpg",
    url: "https://image.tmdb.org/t/p/w500/D6e8RJf2qUstnfkTslTXNTUAlT.jpg",
    description: "Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
    genre: [
      Genres.Action
    ],
    duration: 117
  },
  {
    id: 205596,
    title: "The Imitation Game",
    rating: 8,
    releaseDate: "2014-11-14",
    imagePath: "https://image.tmdb.org/t/p/w500/noUp0XOqIcmgefRnRZa1nhtRvWO.jpg",
    url: "https://image.tmdb.org/t/p/w500/noUp0XOqIcmgefRnRZa1nhtRvWO.jpg",
    description: "Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britain's top-secret Government Code and Cypher School at Bletchley Park, during the darkest days of World War II.",
    genre: [
      Genres.Horror,
    ],
    duration: 113
  },
  {
    id: 68721,
    title: "Iron Man 3",
    rating: 6.8,
    releaseDate: "2013-04-18",
    imagePath: "https://image.tmdb.org/t/p/w500/1Ilv6ryHUv6rt9zIsbSEJUmmbEi.jpg",
    url: "https://image.tmdb.org/t/p/w500/1Ilv6ryHUv6rt9zIsbSEJUmmbEi.jpg",
    description: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    genre: [
      Genres.Action
    ],
    duration: 130
  },
  {
    id: 19995,
    title: "Avatar",
    rating: 7.3,
    releaseDate: "2009-12-10",
    imagePath: "https://image.tmdb.org/t/p/w500/kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg",
    url: "https://image.tmdb.org/t/p/w500/kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg",
    description: "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
    genre: [
      Genres.Drama
    ],
    duration: 162
  },
  {
    id: 396371,
    title: "Molly's Game",
    rating: 6.9,
    releaseDate: "2017-12-21",
    imagePath: "https://image.tmdb.org/t/p/w500/83k7FXpyV3xyOwyq1W7hBO6GVJA.jpg",
    url: "https://image.tmdb.org/t/p/w500/83k7FXpyV3xyOwyq1W7hBO6GVJA.jpg",
    description: "Molly Bloom, a young skier and former Olympic hopeful becomes a successful entrepreneur (and a target of an FBI investigation) when she establishes a high-stakes, international poker game.",
    genre: [
      Genres.Drama
    ],
    duration: 140
  },
  {
    id: 359940,
    title: "Three Billboards Outside Ebbing, Missouri",
    rating: 8.2,
    releaseDate: "2017-11-10",
    imagePath: "https://image.tmdb.org/t/p/w500/vgvw6w1CtcFkuXXn004S5wQsHRl.jpg",
    url: "https://image.tmdb.org/t/p/w500/vgvw6w1CtcFkuXXn004S5wQsHRl.jpg",
    description: "After seven months have passed without a culprit in her daughter's murder case, Mildred Hayes makes a bold move, painting three signs leading into her town with a controversial message directed at Bill Willoughby, the town's revered chief of police. When his second-in-command Officer Jason Dixon, an immature mother's boy with a penchant for violence, gets involved, the battle between Mildred and Ebbing's law enforcement is only exacerbated.",
    genre: [
      Genres.Drama
    ],
    duration: 115
  },
  {
    id: 281338,
    title: "War for the Planet of the Apes",
    rating: 6.8,
    releaseDate: "2017-07-11",
    imagePath: "https://image.tmdb.org/t/p/w500/3vYhLLxrTtZLysXtIWktmd57Snv.jpg",
    url: "https://image.tmdb.org/t/p/w500/3vYhLLxrTtZLysXtIWktmd57Snv.jpg",
    description: "Caesar and his apes are forced into a deadly conflict with an army of humans led by a ruthless Colonel. After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind. As the journey finally brings them face to face, Caesar and the Colonel are pitted against each other in an epic battle that will determine the fate of both their species and the future of the planet.",
    genre: [
      Genres.Drama
    ],
    duration: 140
  },
  {
    id: 49026,
    title: "The Dark Knight Rises",
    rating: 7.6,
    releaseDate: "2012-07-16",
    imagePath: "https://image.tmdb.org/t/p/w500/dEYnvnUfXrqvqeRSqvIEtmzhoA8.jpg",
    url: "https://image.tmdb.org/t/p/w500/dEYnvnUfXrqvqeRSqvIEtmzhoA8.jpg",
    description: "Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.",
    genre: [
      Genres.Horror
    ],
    duration: 165
  },
  {
    id: 339964,
    title: "Valerian and the City of a Thousand Planets",
    rating: 6.6,
    releaseDate: "2017-07-20",
    imagePath: "https://image.tmdb.org/t/p/w500/jfIpMh79fGRqYJ6PwZLCntzgxlF.jpg",
    url: "https://image.tmdb.org/t/p/w500/jfIpMh79fGRqYJ6PwZLCntzgxlF.jpg",
    description: "In the 28th century, Valerian and Laureline are special operatives charged with keeping order throughout the human territories. On assignment from the Minister of Defense, the two undertake a mission to Alpha, an ever-expanding metropolis where species from across the universe have converged over centuries to share knowledge, intelligence, and cultures. At the center of Alpha is a mysterious dark force which threatens the peaceful existence of the City of a Thousand Planets, and Valerian and Laureline must race to identify the menace and safeguard not just Alpha, but the future of the universe.",
    genre: [
      Genres.Action
    ],
    duration: 136
  },
  {
    id: 184315,
    title: "Hercules",
    rating: 5.6,
    releaseDate: "2014-07-23",
    imagePath: "https://image.tmdb.org/t/p/w500/wGAWxOnVjwXqvoiKX7Pf6XOWnPJ.jpg",
    url: "https://image.tmdb.org/t/p/w500/wGAWxOnVjwXqvoiKX7Pf6XOWnPJ.jpg",
    description: "Fourteen hundred years ago, a tormented soul walked the earth that was neither man nor god. Hercules was the powerful son of the god king Zeus, for this he received nothing but suffering his entire life. After twelve arduous labors and the loss of his family, this dark, world-weary soul turned his back on the gods finding his only solace in bloody battle. Over the years he warmed to the company of six similar souls, their only bond being their love of fighting and presence of death. These men and woman never question where they go to fight or why or whom, just how much they will be paid. Now the King of Thrace has hired these mercenaries to train his men to become the greatest army of all time. It is time for this bunch of lost souls to finally have their eyes opened to how far they have fallen when they must train an army to become as ruthless and blood thirsty as their reputation has become.",
    genre: [
      Genres.Action
    ],
    duration: 99
  },
  {
    id: 1865,
    title: "Pirates of the Caribbean: On Stranger Tides",
    rating: 6.4,
    releaseDate: "2011-05-14",
    imagePath: "https://image.tmdb.org/t/p/w500/wNUDAq5OUMOtxMlz64YaCp7gZma.jpg",
    url: "https://image.tmdb.org/t/p/w500/wNUDAq5OUMOtxMlz64YaCp7gZma.jpg",
    description: "Captain Jack Sparrow crosses paths with a woman from his past, and he's not sure if it's love -- or if she's a ruthless con artist who's using him to find the fabled Fountain of Youth. When she forces him aboard the Queen Anne's Revenge, the ship of the formidable pirate Blackbeard, Jack finds himself on an unexpected adventure in which he doesn't know who to fear more: Blackbeard or the woman from his past.",
    genre: [
      Genres.Drama
    ],
    duration: 136
  },
  {
    id: 262500,
    title: "Insurgent",
    rating: 6.2,
    releaseDate: "2015-03-18",
    imagePath: "https://image.tmdb.org/t/p/w500/6w1VjTPTjTaA5oNvsAg0y4H6bou.jpg",
    url: "https://image.tmdb.org/t/p/w500/6w1VjTPTjTaA5oNvsAg0y4H6bou.jpg",
    description: "Beatrice Prior must confront her inner demons and continue her fight against a powerful alliance which threatens to tear her society apart.",
    genre: [
      Genres.Horror
    ],
    duration: 119
  },
  {
    id: 259316,
    title: "Fantastic Beasts and Where to Find Them",
    rating: 7.3,
    releaseDate: "2016-11-16",
    imagePath: "https://image.tmdb.org/t/p/w500/1M91Bt3oGspda75H9eLqYZkJzgO.jpg",
    url: "https://image.tmdb.org/t/p/w500/1M91Bt3oGspda75H9eLqYZkJzgO.jpg",
    description: "In 1926, Newt Scamander arrives at the Magical Congress of the United States of America with a magically expanded briefcase, which houses a number of dangerous creatures and their habitats. When the creatures escape from the briefcase, it sends the American wizarding authorities after Newt, and threatens to strain even further the state of magical and non-magical relations.",
    genre: [
      Genres.Drama
    ],
    duration: 133
  },
  {
    id: 109445,
    title: "Frozen",
    rating: 7.3,
    releaseDate: "2013-11-27",
    imagePath: "https://image.tmdb.org/t/p/w500/jIjdFXKUNtdf1bwqMrhearpyjMj.jpg",
    url: "https://image.tmdb.org/t/p/w500/jIjdFXKUNtdf1bwqMrhearpyjMj.jpg",
    description: "Young princess Anna of Arendelle dreams about finding true love at her sister Elsa’s coronation. Fate takes her on a dangerous journey in an attempt to end the eternal winter that has fallen over the kingdom. She's accompanied by ice delivery man Kristoff, his reindeer Sven, and snowman Olaf. On an adventure where she will find out what friendship, courage, family, and true love really means.",
    genre: [
      Genres.Action
    ],
    duration: 102
  },
  {
    id: 339403,
    title: "Baby Driver",
    rating: 7.4,
    releaseDate: "2017-06-28",
    imagePath: "https://image.tmdb.org/t/p/w500/dN9LbVNNZFITwfaRjl4tmwGWkRg.jpg",
    url: "https://image.tmdb.org/t/p/w500/dN9LbVNNZFITwfaRjl4tmwGWkRg.jpg",
    description: "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
    genre: [
      Genres.Drama
    ],
    duration: 113
  },
  {
    id: 807,
    title: "Se7en",
    rating: 8.2,
    releaseDate: "1995-09-22",
    imagePath: "https://image.tmdb.org/t/p/w500/8zw8IL4zEPjkh8Aysdcd0FwGMb0.jpg",
    url: "https://image.tmdb.org/t/p/w500/8zw8IL4zEPjkh8Aysdcd0FwGMb0.jpg",
    description: "Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the \"seven deadly sins\" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer's mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.",
    genre: [
      Genres.Horror
    ],
    duration: 127
  },
  {
    id: 297762,
    title: "Wonder Woman",
    rating: 7.2,
    releaseDate: "2017-05-30",
    imagePath: "https://image.tmdb.org/t/p/w500/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg",
    url: "https://image.tmdb.org/t/p/w500/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg",
    description: "An Amazon princess comes to the world of Man in the grips of the First World War to confront the forces of evil and bring an end to human conflict.",
    genre: [
      Genres.Action
    ],
    duration: 141
  },
  {
    id: 343668,
    title: "Kingsman: The Golden Circle",
    rating: 7,
    releaseDate: "2017-09-20",
    imagePath: "https://image.tmdb.org/t/p/w500/34xBL6BXNYFqtHO9zhcgoakS4aP.jpg",
    url: "https://image.tmdb.org/t/p/w500/34xBL6BXNYFqtHO9zhcgoakS4aP.jpg",
    description: "When an attack on the Kingsman headquarters takes place and a new villain rises, Eggsy and Merlin are forced to work together with the American agency known as the Statesman to save the world.",
    genre: [
      Genres.Comedy
    ],
    duration: 141
  },
  {
    id: 270303,
    title: "It Follows",
    rating: 6.6,
    releaseDate: "2014-11-13",
    imagePath: "https://image.tmdb.org/t/p/w500/4MrwJZr0R9LbyOgZqwLNmtzzxbu.jpg",
    url: "https://image.tmdb.org/t/p/w500/4MrwJZr0R9LbyOgZqwLNmtzzxbu.jpg",
    description: "For 19-year-old Jay, fall should be about school, boys and weekends out at the lake. But a seemingly innocent physical encounter turns sour and gives her the inescapable sense that someone, or something, is following her. Faced with this burden, Jay and her teenage friends must find a way to escape the horror that seems to be only a few steps behind.",
    genre: [
      Genres.Horror
    ],
    duration: 100
  },
  {
    id: 158852,
    title: "Tomorrowland",
    rating: 6.2,
    releaseDate: "2015-05-19",
    imagePath: "https://image.tmdb.org/t/p/w500/69Cz9VNQZy39fUE2g0Ggth6SBTM.jpg",
    url: "https://image.tmdb.org/t/p/w500/69Cz9VNQZy39fUE2g0Ggth6SBTM.jpg",
    description: "Bound by a shared destiny, a bright, optimistic teen bursting with scientific curiosity and a former boy-genius inventor jaded by disillusionment embark on a danger-filled mission to unearth the secrets of an enigmatic place somewhere in time and space that exists in their collective memory as \"Tomorrowland.\"",
    genre: [
      Genres.Drama
    ],
    duration: 130
  },
  {
    id: 58,
    title: "Pirates of the Caribbean: Dead Man's Chest",
    rating: 7.1,
    releaseDate: "2006-06-20",
    imagePath: "https://image.tmdb.org/t/p/w500/waFr5RVKaQ9dzOt3nQuIVB1FiPu.jpg",
    url: "https://image.tmdb.org/t/p/w500/waFr5RVKaQ9dzOt3nQuIVB1FiPu.jpg",
    description: "Captain Jack Sparrow works his way out of a blood debt with the ghostly Davey Jones, he also attempts to avoid eternal damnation.",
    genre: [
      Genres.Drama
    ],
    duration: 151
  },
  {
    id: 177677,
    title: "Mission: Impossible - Rogue Nation",
    rating: 7.1,
    releaseDate: "2015-07-23",
    imagePath: "https://image.tmdb.org/t/p/w500/z2sJd1OvAGZLxgjBdSnQoLCfn3M.jpg",
    url: "https://image.tmdb.org/t/p/w500/z2sJd1OvAGZLxgjBdSnQoLCfn3M.jpg",
    description: "Ethan and team take on their most impossible mission yet, eradicating the Syndicate - an International rogue organization as highly skilled as they are, committed to destroying the IMF.",
    genre: [
      Genres.Horror
    ],
    duration: 131
  },
  {
    id: 264660,
    title: "Ex Machina",
    rating: 7.6,
    releaseDate: "2015-01-21",
    imagePath: "https://image.tmdb.org/t/p/w500/btbRB7BrD887j5NrvjxceRDmaot.jpg",
    url: "https://image.tmdb.org/t/p/w500/btbRB7BrD887j5NrvjxceRDmaot.jpg",
    description: "Caleb, a 26 year old coder at the world's largest internet company, wins a competition to spend a week at a private mountain retreat belonging to Nathan, the reclusive CEO of the company. But when Caleb arrives at the remote location he finds that he will have to participate in a strange and fascinating experiment in which he must interact with the world's first true artificial intelligence, housed in the body of a beautiful robot girl.",
    genre: [
      Genres.Drama
    ],
    duration: 108
  },
  {
    id: 8587,
    title: "The Lion King",
    rating: 8.1,
    releaseDate: "1994-06-23",
    imagePath: "https://image.tmdb.org/t/p/w500/bKPtXn9n4M4s8vvZrbw40mYsefB.jpg",
    url: "https://image.tmdb.org/t/p/w500/bKPtXn9n4M4s8vvZrbw40mYsefB.jpg",
    description: "A young lion cub named Simba can't wait to be king. But his uncle craves the title for himself and will stop at nothing to get it.",
    genre: [
      Genres.Drama
    ],
    duration: 89
  },
  {
    id: 122,
    title: "The Lord of the Rings: The Return of the King",
    rating: 8.3,
    releaseDate: "2003-12-01",
    imagePath: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    url: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    description: "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam bring the ring closer to the heart of Mordor, the dark lord's realm.",
    genre: [
      Genres.Drama
    ],
    duration: 201
  },
  {
    id: 425,
    title: "Ice Age",
    rating: 7.2,
    releaseDate: "2002-03-10",
    imagePath: "https://image.tmdb.org/t/p/w500/zpaQwR0YViPd83bx1e559QyZ35i.jpg",
    url: "https://image.tmdb.org/t/p/w500/zpaQwR0YViPd83bx1e559QyZ35i.jpg",
    description: "With the impending ice age almost upon them, a mismatched trio of prehistoric critters – Manny the woolly mammoth, Diego the saber-toothed tiger and Sid the giant sloth – find an orphaned infant and decide to return it to its human parents. Along the way, the unlikely allies become friends but, when enemies attack, their quest takes on far nobler aims.",
    genre: [
      Genres.Comedy,
    ],
    duration: 81
  },
  {
    id: 1726,
    title: "Iron Man",
    rating: 7.4,
    releaseDate: "2008-04-30",
    imagePath: "https://image.tmdb.org/t/p/w500/848chlIWVT41VtAAgyh9bWymAYb.jpg",
    url: "https://image.tmdb.org/t/p/w500/848chlIWVT41VtAAgyh9bWymAYb.jpg",
    description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    genre: [
      Genres.Action
    ],
    duration: 126
  },
  {
    id: 324786,
    title: "Hacksaw Ridge",
    rating: 8,
    releaseDate: "2016-10-07",
    imagePath: "https://image.tmdb.org/t/p/w500/bndiUFfJxNd2fYx8XO610L9a07m.jpg",
    url: "https://image.tmdb.org/t/p/w500/bndiUFfJxNd2fYx8XO610L9a07m.jpg",
    description: "WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first Conscientious Objector in American history to receive the Congressional Medal of Honor.",
    genre: [
      Genres.Drama
    ],
    duration: 140
  },
  {
    id: 105,
    title: "Back to the Future",
    rating: 8.1,
    releaseDate: "1985-07-03",
    imagePath: "https://image.tmdb.org/t/p/w500/pTpxQB1N0waaSc3OSn0e9oc8kx9.jpg",
    url: "https://image.tmdb.org/t/p/w500/pTpxQB1N0waaSc3OSn0e9oc8kx9.jpg",
    description: "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
    genre: [
      Genres.Comedy,
    ],
    duration: 116
  },
  {
    id: 140607,
    title: "Star Wars: The Force Awakens",
    rating: 7.4,
    releaseDate: "2015-12-15",
    imagePath: "https://image.tmdb.org/t/p/w500/weUSwMdQIa3NaXVzwUoIIcAi85d.jpg",
    url: "https://image.tmdb.org/t/p/w500/weUSwMdQIa3NaXVzwUoIIcAi85d.jpg",
    description: "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
    genre: [
      Genres.Drama
    ],
    duration: 136
  },
  {
    id: 20352,
    title: "Despicable Me",
    rating: 7.2,
    releaseDate: "2010-07-08",
    imagePath: "https://image.tmdb.org/t/p/w500/4zHJhBSY4kNZXfhTlmy2TzXD51M.jpg",
    url: "https://image.tmdb.org/t/p/w500/4zHJhBSY4kNZXfhTlmy2TzXD51M.jpg",
    description: "Villainous Gru lives up to his reputation as a despicable, deplorable and downright unlikable guy when he hatches a plan to steal the moon from the sky. But he has a tough time staying on task after three orphans land in his care.",
    genre: [
      Genres.Action
    ],
    duration: 95
  },
  {
    id: 294254,
    title: "Maze Runner: The Scorch Trials",
    rating: 6.5,
    releaseDate: "2015-09-09",
    imagePath: "https://image.tmdb.org/t/p/w500/vlTPQANjLYTebzFJM1G4KeON0cb.jpg",
    url: "https://image.tmdb.org/t/p/w500/vlTPQANjLYTebzFJM1G4KeON0cb.jpg",
    description: "Thomas and his fellow Gladers face their greatest challenge yet: searching for clues about the mysterious and powerful organization known as WCKD. Their journey takes them to the Scorch, a desolate landscape filled with unimaginable obstacles. Teaming up with resistance fighters, the Gladers take on WCKD’s vastly superior forces and uncover its shocking plans for them all.",
    genre: [
      Genres.Horror
    ],
    duration: 132
  },
  {
    id: 242582,
    title: "Nightcrawler",
    rating: 7.7,
    releaseDate: "2014-10-23",
    imagePath: "https://image.tmdb.org/t/p/w500/8oPY6ULFOTbAEskySNhgsUIN4fW.jpg",
    url: "https://image.tmdb.org/t/p/w500/8oPY6ULFOTbAEskySNhgsUIN4fW.jpg",
    description: "When Lou Bloom, desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story. Aiding him in his effort is Nina, a TV-news veteran.",
    genre: [
      Genres.Horror
    ],
    duration: 117
  },
  {
    id: 285,
    title: "Pirates of the Caribbean: At World's End",
    rating: 7,
    releaseDate: "2007-05-19",
    imagePath: "https://image.tmdb.org/t/p/w500/bXb00CkHqx7TPchTGG131sWV59y.jpg",
    url: "https://image.tmdb.org/t/p/w500/bXb00CkHqx7TPchTGG131sWV59y.jpg",
    description: "Captain Barbossa, long believed to be dead, has come back to life and is headed to the edge of the Earth with Will Turner and Elizabeth Swann. But nothing is quite as it seems.",
    genre: [
      Genres.Drama
    ],
    duration: 169
  },
  {
    id: 862,
    title: "Toy Story",
    rating: 7.8,
    releaseDate: "1995-10-30",
    imagePath: "https://image.tmdb.org/t/p/w500/rhIRbceoE9lR4veEXuwCC2wARtG.jpg",
    url: "https://image.tmdb.org/t/p/w500/rhIRbceoE9lR4veEXuwCC2wARtG.jpg",
    description: "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
    genre: [
      Genres.Comedy,
    ],
    duration: 81
  },
  {
    id: 156022,
    title: "The Equalizer",
    rating: 7.1,
    releaseDate: "2014-09-24",
    imagePath: "https://image.tmdb.org/t/p/w500/2eQfjqlvPAxd9aLDs8DvsKLnfed.jpg",
    url: "https://image.tmdb.org/t/p/w500/2eQfjqlvPAxd9aLDs8DvsKLnfed.jpg",
    description: "In The Equalizer, Denzel Washington plays McCall, a man who believes he has put his mysterious past behind him and dedicated himself to beginning a new, quiet life. But when McCall meets Teri (Chloë Grace Moretz), a young girl under the control of ultra-violent Russian gangsters, he can’t stand idly by – he has to help her. Armed with hidden skills that allow him to serve vengeance against anyone who would brutalize the helpless, McCall comes out of his self-imposed retirement and finds his desire for justice reawakened. If someone has a problem, if the odds are stacked against them, if they have nowhere else to turn, McCall will help. He is The Equalizer.",
    genre: [
      Genres.Horror,
    ],
    duration: 132
  },
  {
    id: 122342,
    title: "Finding Nemo",
    rating: 7.7,
    releaseDate: "2003-05-30",
    imagePath: "https://image.tmdb.org/t/p/w500/syPWyeeqzTQIxjIUaIFI7d0TyEY.jpg",
    url: "https://image.tmdb.org/t/p/w500/syPWyeeqzTQIxjIUaIFI7d0TyEY.jpg",
    description: "Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist's office aquarium. It's up to his worrisome father Marlin and a friendly but forgetful fish Dory to bring Nemo home -- meeting vegetarian sharks, surfer dude turtles, hypnotic jellyfish, hungry seagulls, and more along the way.",
    genre: [
      Genres.Action
    ],
    duration: 100
  },
  {
    id: 37724,
    title: "Skyfall",
    rating: 7,
    releaseDate: "2012-10-25",
    imagePath: "https://image.tmdb.org/t/p/w500/uVALAeLEMGMf3oYpvdVi4uuaNOo.jpg",
    url: "https://image.tmdb.org/t/p/w500/uVALAeLEMGMf3oYpvdVi4uuaNOo.jpg",
    description: "When Bond's latest assignment goes gravely wrong and agents around the world are exposed, MI6 is attacked forcing M to relocate the agency. These events cause her authority and position to be challenged by Gareth Mallory, the new Chairman of the Intelligence and Security Committee. With MI6 now compromised from both inside and out, M is left with one ally she can trust: Bond. 007 takes to the shadows - aided only by field agent, Eve - following a trail to the mysterious Silva, whose lethal and hidden motives have yet to reveal themselves.",
    genre: [
      Genres.Horror
    ],
    duration: 143
  },
  {
    id: 189,
    title: "Sin City: A Dame to Kill For",
    rating: 6.3,
    releaseDate: "2014-08-20",
    imagePath: "https://image.tmdb.org/t/p/w500/k80qKrJ0qQ6ocVo5N932stNSg6j.jpg",
    url: "https://image.tmdb.org/t/p/w500/k80qKrJ0qQ6ocVo5N932stNSg6j.jpg",
    description: "Some of Sin City's most hard-boiled citizens cross paths with a few of its more reviled inhabitants.",
    genre: [
      Genres.Horror
    ],
    duration: 102
  },
  {
    id: 112131,
    title: "Star Wars",
    rating: 8.1,
    releaseDate: "1977-05-25",
    imagePath: "https://image.tmdb.org/t/p/w500/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg",
    url: "https://image.tmdb.org/t/p/w500/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg",
    description: "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
    genre: [
      Genres.Action
    ],
    duration: 121
  },
  {
    id: 315635,
    title: "Spider-Man: Homecoming",
    rating: 7.3,
    releaseDate: "2017-07-05",
    imagePath: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
    url: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
    description: "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
    genre: [
      Genres.Comedy,
    ],
    duration: 133
  },
  {
    id: 283995,
    title: "Guardians of the Galaxy Vol. 2",
    rating: 7.6,
    releaseDate: "2017-04-19",
    imagePath: "https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
    url: "https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
    description: "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
    genre: [
      Genres.Comedy,
    ],
    duration: 137
  },
  {
    id: 87827,
    title: "Life of Pi",
    rating: 7.2,
    releaseDate: "2012-11-20",
    imagePath: "https://image.tmdb.org/t/p/w500/sLYdcz7easaS7CmJGwQcVVYZqiF.jpg",
    url: "https://image.tmdb.org/t/p/w500/sLYdcz7easaS7CmJGwQcVVYZqiF.jpg",
    description: "The story of an Indian boy named Pi, a zookeeper's son who finds himself in the company of a hyena, zebra, orangutan, and a Bengal tiger after a shipwreck sets them adrift in the Pacific Ocean.",
    genre: [
      Genres.Drama
    ],
    duration: 127
  },
  {
    id: 479363,
    title: "Kamen Rider Heisei Generations FINAL: Build & Ex-Aid with Legend Riders",
    rating: 1.5,
    releaseDate: "2017-12-09",
    imagePath: "https://image.tmdb.org/t/p/w500/cGhdduplj8YdAwg7iPCeGjO1YvZ.jpg",
    url: "https://image.tmdb.org/t/p/w500/cGhdduplj8YdAwg7iPCeGjO1YvZ.jpg",
    description: "Kamen Riders Build and Ex-Aid team up with the legendary heroes of the Heisei Generation - OOO, Fourze, Gaim, and Ghost.",
    genre: [
      Genres.Action
    ],
    duration: 80
  },
  {
    id: 10138,
    title: "Iron Man 2",
    rating: 6.7,
    releaseDate: "2010-04-28",
    imagePath: "https://image.tmdb.org/t/p/w500/ArqpkNYGfcTIA6umWt6xihfIZZv.jpg",
    url: "https://image.tmdb.org/t/p/w500/ArqpkNYGfcTIA6umWt6xihfIZZv.jpg",
    description: "With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony Stark faces pressure from the government, the press and the public to share his technology with the military. Unwilling to let go of his invention, Stark, with Pepper Potts and James 'Rhodey' Rhodes at his side, must forge new alliances – and confront powerful enemies.",
    genre: [
      Genres.Action
    ],
    duration: 124
  },
  {
    id: 49051,
    title: "The Hobbit: An Unexpected Journey",
    rating: 7.1,
    releaseDate: "2012-11-26",
    imagePath: "https://image.tmdb.org/t/p/w500/ysX7vDmSh5O19vFjAi56WL7l4nk.jpg",
    url: "https://image.tmdb.org/t/p/w500/ysX7vDmSh5O19vFjAi56WL7l4nk.jpg",
    description: "Bilbo Baggins, a hobbit enjoying his quiet life, is swept into an epic quest by Gandalf the Grey and thirteen dwarves who seek to reclaim their mountain home from Smaug, the dragon.",
    genre: [
      Genres.Drama
    ],
    duration: 169
  },
  {
    id: 121,
    title: "The Lord of the Rings: The Two Towers",
    rating: 8.1,
    releaseDate: "2002-12-18",
    imagePath: "https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
    url: "https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
    description: "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
    genre: [
      Genres.Drama
    ],
    duration: 179
  },
  {
    id: 238,
    title: "The Godfather",
    rating: 8.5,
    releaseDate: "1972-03-14",
    imagePath: "https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
    url: "https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
    description: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    genre: [
      Genres.Drama
    ],
    duration: 175
  },
  {
    id: 381288,
    title: "Split",
    rating: 7,
    releaseDate: "2017-01-19",
    imagePath: "https://image.tmdb.org/t/p/w500/rXMWOZiCt6eMX22jWuTOSdQ98bY.jpg",
    url: "https://image.tmdb.org/t/p/w500/rXMWOZiCt6eMX22jWuTOSdQ98bY.jpg",
    description: "Though Kevin has evidenced 23 personalities to his trusted psychiatrist, Dr. Fletcher, there remains one still submerged who is set to materialize and dominate all the others. Compelled to abduct three teenage girls led by the willful, observant Casey, Kevin reaches a war for survival among all of those contained within him — as well as everyone around him — as the walls between his compartments shatter apart.",
    genre: [
      Genres.Horror
    ],
    duration: 117
  },
  {
    id: 324552,
    title: "John Wick: Chapter 2",
    rating: 6.8,
    releaseDate: "2017-02-08",
    imagePath: "https://image.tmdb.org/t/p/w500/zkXnKIwX5pYorKJp2fjFSfNyKT0.jpg",
    url: "https://image.tmdb.org/t/p/w500/zkXnKIwX5pYorKJp2fjFSfNyKT0.jpg",
    description: "John Wick is forced out of retirement by a former associate looking to seize control of a shadowy international assassins’ guild. Bound by a blood oath to aid him, Wick travels to Rome and does battle against some of the world’s most dangerous killers.",
    genre: [
      Genres.Horror,
    ],
    duration: 122
  },
  {
    id: 68718,
    title: "Django Unchained",
    rating: 7.9,
    releaseDate: "2012-12-25",
    imagePath: "https://image.tmdb.org/t/p/w500/5WJnxuw41sddupf8cwOxYftuvJG.jpg",
    url: "https://image.tmdb.org/t/p/w500/5WJnxuw41sddupf8cwOxYftuvJG.jpg",
    description: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
    genre: [
      Genres.Drama
    ],
    duration: 165
  },
  {
    id: 49017,
    title: "Dracula Untold",
    rating: 6.2,
    releaseDate: "2014-10-01",
    imagePath: "https://image.tmdb.org/t/p/w500/4oy4e0DP6LRwRszfx8NY8EYBj8V.jpg",
    url: "https://image.tmdb.org/t/p/w500/4oy4e0DP6LRwRszfx8NY8EYBj8V.jpg",
    description: "Vlad Tepes is a great hero, but when he learns the Sultan is preparing for battle and needs to form an army of 1,000 boys, including Vlad's son, he vows to find a way to protect his family. Vlad turns to dark forces in order to get the power to destroy his enemies and agrees to go from hero to monster as he's turned into the mythological vampire Dracula.",
    genre: [
      Genres.Drama
    ],
    duration: 92
  },
  {
    id: 550,
    title: "Fight Club",
    rating: 8.3,
    releaseDate: "1999-10-15",
    imagePath: "https://image.tmdb.org/t/p/w500/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg",
    url: "https://image.tmdb.org/t/p/w500/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg",
    description: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    genre: [
      Genres.Drama
    ],
    duration: 139
  },
  {
    id: 68726,
    title: "Pacific Rim",
    rating: 6.7,
    releaseDate: "2013-07-11",
    imagePath: "https://image.tmdb.org/t/p/w500/sCJEwEShZvruTpQ2a4yiX3Q9EyZ.jpg",
    url: "https://image.tmdb.org/t/p/w500/sCJEwEShZvruTpQ2a4yiX3Q9EyZ.jpg",
    description: "When legions of monstrous creatures, known as Kaiju, started rising from the sea, a war began that would take millions of lives and consume humanity's resources for years on end. To combat the giant Kaiju, a special type of weapon was devised: massive robots, called Jaegers, which are controlled simultaneously by two pilots whose minds are locked in a neural bridge. But even the Jaegers are proving nearly defenseless in the face of the relentless Kaiju. On the verge of defeat, the forces defending mankind have no choice but to turn to two unlikely heroes—a washed-up former pilot (Charlie Hunnam) and an untested trainee (Rinko Kikuchi)—who are teamed to drive a legendary but seemingly obsolete Jaeger from the past. Together, they stand as mankind's last hope against the mounting apocalypse.",
    genre: [
      Genres.Action
    ],
    duration: 131
  },
  {
    id: 12445,
    title: "Harry Potter and the Deathly Hallows: Part 2",
    rating: 7.9,
    releaseDate: "2011-07-07",
    imagePath: "https://image.tmdb.org/t/p/w500/fTplI1NCSuEDP4ITLcTps739fcC.jpg",
    url: "https://image.tmdb.org/t/p/w500/fTplI1NCSuEDP4ITLcTps739fcC.jpg",
    description: "Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to rival Voldemort's formidable skills.",
    genre: [
      Genres.Drama
    ],
    duration: 130
  },
  {
    id: 510,
    title: "One Flew Over the Cuckoo's Nest",
    rating: 8.3,
    releaseDate: "1975-11-18",
    imagePath: "https://image.tmdb.org/t/p/w500/2Sns5oMb356JNdBHgBETjIpRYy9.jpg",
    url: "https://image.tmdb.org/t/p/w500/2Sns5oMb356JNdBHgBETjIpRYy9.jpg",
    description: "While serving time for insanity at a state mental hospital, implacable rabble-rouser, Randle Patrick McMurphy inspires his fellow patients to rebel against the authoritarian rule of head nurse, Mildred Ratched.",
    genre: [
      Genres.Drama
    ],
    duration: 133
  },
  {
    id: 85,
    title: "Raiders of the Lost Ark",
    rating: 7.8,
    releaseDate: "1981-06-12",
    imagePath: "https://image.tmdb.org/t/p/w500/44sKJOGP3fTm4QXBcIuqu0RkdP7.jpg",
    url: "https://image.tmdb.org/t/p/w500/44sKJOGP3fTm4QXBcIuqu0RkdP7.jpg",
    description: "When Dr. Indiana Jones – the tweed-suited professor who just happens to be a celebrated archaeologist – is hired by the government to locate the legendary Ark of the Covenant, he finds himself up against the entire Nazi regime.",
    genre: [
      Genres.Action
    ],
    duration: 115
  },
  {
    id: 82702,
    title: "How to Train Your Dragon 2",
    rating: 7.6,
    releaseDate: "2014-06-12",
    imagePath: "https://image.tmdb.org/t/p/w500/lRjOR4uclMQijUav4OjeZprlehu.jpg",
    url: "https://image.tmdb.org/t/p/w500/lRjOR4uclMQijUav4OjeZprlehu.jpg",
    description: "The thrilling second chapter of the epic How To Train Your Dragon trilogy brings back the fantastical world of Hiccup and Toothless five years later. While Astrid, Snotlout and the rest of the gang are challenging each other to dragon races (the island's new favorite contact sport), the now inseparable pair journey through the skies, charting unmapped territories and exploring new worlds. When one of their adventures leads to the discovery of a secret ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.",
    genre: [
      Genres.Comedy,
    ],
    duration: 102
  },
  {
    id: 10020,
    title: "Beauty and the Beast",
    rating: 7.6,
    releaseDate: "1991-11-13",
    imagePath: "https://image.tmdb.org/t/p/w500/b9QJr2oblOu1grgOMUZF1xkUJdh.jpg",
    url: "https://image.tmdb.org/t/p/w500/b9QJr2oblOu1grgOMUZF1xkUJdh.jpg",
    description: "Follow the adventures of Belle, a bright young woman who finds herself in the castle of a prince who's been turned into a mysterious beast. With the help of the castle's enchanted staff, Belle soon learns the most important lesson of all -- that true beauty comes from within.",
    genre: [
      Genres.Drama
    ],
    duration: 84
  },
  {
    id: 278927,
    title: "The Jungle Book",
    rating: 6.8,
    releaseDate: "2016-04-07",
    imagePath: "https://image.tmdb.org/t/p/w500/vOipe2myi26UDwP978hsYOrnUWC.jpg",
    url: "https://image.tmdb.org/t/p/w500/vOipe2myi26UDwP978hsYOrnUWC.jpg",
    description: "A man-cub named Mowgli fostered by wolves. After a threat from the tiger Shere Khan, Mowgli is forced to flee the jungle, by which he embarks on a journey of self discovery with the help of the panther, Bagheera and the free-spirited bear, Baloo.",
    genre: [
    ],
    duration: 106
  },
  {
    id: 62,
    title: "2001: A Space Odyssey",
    rating: 7.9,
    releaseDate: "1968-04-09",
    imagePath: "https://image.tmdb.org/t/p/w500/90T7b2LIrL07ndYQBmSm09yqVEH.jpg",
    url: "https://image.tmdb.org/t/p/w500/90T7b2LIrL07ndYQBmSm09yqVEH.jpg",
    description: "Humanity finds a mysterious object buried beneath the lunar surface and sets off to find its origins with the help of HAL 9000, the world's most advanced super computer.",
    genre: [
      Genres.Drama
    ],
    duration: 149
  },
  {
    id: 14160,
    title: "Up",
    rating: 7.8,
    releaseDate: "2009-05-13",
    imagePath: "https://image.tmdb.org/t/p/w500/nk11pvocdb5zbFhX5oq5YiLPYMo.jpg",
    url: "https://image.tmdb.org/t/p/w500/nk11pvocdb5zbFhX5oq5YiLPYMo.jpg",
    description: "Carl Fredricksen spent his entire life dreaming of exploring the globe and experiencing life to its fullest. But at age 78, life seems to have passed him by, until a twist of fate (and a persistent 8-year old Wilderness Explorer named Russell) gives him a new lease on life.",
    genre: [
      Genres.Comedy,
    ],
    duration: 96
  },
  {
    id: 240832,
    title: "Lucy",
    rating: 6.2,
    releaseDate: "2014-07-25",
    imagePath: "https://image.tmdb.org/t/p/w500/rwn876MeqienhOVSSjtUPnwxn0Z.jpg",
    url: "https://image.tmdb.org/t/p/w500/rwn876MeqienhOVSSjtUPnwxn0Z.jpg",
    description: "A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior evolved beyond human logic.",
    genre: [
      Genres.Action
    ],
    duration: 89
  },
  {
    id: 176,
    title: "Saw",
    rating: 7.3,
    releaseDate: "2004-10-01",
    imagePath: "https://image.tmdb.org/t/p/w500/dHYvIgsax8ZFgkz1OslE4V6Pnf5.jpg",
    url: "https://image.tmdb.org/t/p/w500/dHYvIgsax8ZFgkz1OslE4V6Pnf5.jpg",
    description: "Obsessed with teaching his victims the value of life, a deranged, sadistic serial killer abducts the morally wayward. Once captured, they must face impossible choices in a horrific game of survival. The victims must fight to win their lives back, or die trying...",
    genre: [
      Genres.Drama
    ],
    duration: 103
  },
  {
    id: 218,
    title: "The Terminator",
    rating: 7.4,
    releaseDate: "1984-10-26",
    imagePath: "https://image.tmdb.org/t/p/w500/q8ffBuxQlYOHrvPniLgCbmKK4Lv.jpg",
    url: "https://image.tmdb.org/t/p/w500/q8ffBuxQlYOHrvPniLgCbmKK4Lv.jpg",
    description: "In the post-apocalyptic future, reigning tyrannical supercomputers teleport a cyborg assassin known as the \"Terminator\" back to 1984 to kill Sarah Connor, whose unborn son is destined to lead insurgents against 21st century mechanical hegemony. Meanwhile, the human-resistance movement dispatches a lone warrior to safeguard Sarah. Can he stop the virtually indestructible killing machine?",
    genre: [
      Genres.Horror,
    ],
    duration: 108
  },
  {
    id: 50620,
    title: "The Twilight Saga: Breaking Dawn - Part 2",
    rating: 6.1,
    releaseDate: "2012-11-13",
    imagePath: "https://image.tmdb.org/t/p/w500/kJQPygYB8aNEevZZHRifyYrAdU9.jpg",
    url: "https://image.tmdb.org/t/p/w500/kJQPygYB8aNEevZZHRifyYrAdU9.jpg",
    description: "After the birth of Renesmee, the Cullens gather other vampire clans in order to protect the child from a false allegation that puts the family in front of the Volturi.",
    genre: [
      Genres.Drama
    ],
    duration: 115
  },
  {
    id: 9738,
    title: "Fantastic Four",
    rating: 5.6,
    releaseDate: "2005-06-29",
    imagePath: "https://image.tmdb.org/t/p/w500/aJwUBmUA11lkNVSJ3if3h3xHSFd.jpg",
    url: "https://image.tmdb.org/t/p/w500/aJwUBmUA11lkNVSJ3if3h3xHSFd.jpg",
    description: "During a space voyage, four scientists are altered by cosmic rays: Reed Richards gains the ability to stretch his body; Sue Storm can become invisible; Johnny Storm controls fire; and Ben Grimm is turned into a super-strong … thing. Together, these \"Fantastic Four\" must now thwart the evil plans of Dr. Doom and save the world from certain destruction.",
    genre: [
      Genres.Drama
    ],
    duration: 106
  },
  {
    id: 27205,
    title: "Inception",
    rating: 8.2,
    releaseDate: "2010-07-14",
    imagePath: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    url: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    description: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
    genre: [
      Genres.Horror,
    ],
    duration: 148
  },
  {
    id: 93456,
    title: "Despicable Me 2",
    rating: 7,
    releaseDate: "2013-06-25",
    imagePath: "https://image.tmdb.org/t/p/w500/kQrYyZQHkwkUg2KlUDyvymj9FAp.jpg",
    url: "https://image.tmdb.org/t/p/w500/kQrYyZQHkwkUg2KlUDyvymj9FAp.jpg",
    description: "Gru is recruited by the Anti-Villain League to help deal with a powerful new super criminal.",
    genre: [
      Genres.Comedy,
    ],
    duration: 98
  },
  {
    id: 168259,
    title: "Furious 7",
    rating: 7.2,
    releaseDate: "2015-04-01",
    imagePath: "https://image.tmdb.org/t/p/w500/dCgm7efXDmiABSdWDHBDBx2jwmn.jpg",
    url: "https://image.tmdb.org/t/p/w500/dCgm7efXDmiABSdWDHBDBx2jwmn.jpg",
    description: "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
    genre: [
      Genres.Horror
    ],
    duration: 137
  },
  {
    id: 348,
    title: "Alien",
    rating: 8,
    releaseDate: "1979-05-25",
    imagePath: "https://image.tmdb.org/t/p/w500/2h00HrZs89SL3tXB4nbkiM7BKHs.jpg",
    url: "https://image.tmdb.org/t/p/w500/2h00HrZs89SL3tXB4nbkiM7BKHs.jpg",
    description: "During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.",
    genre: [
      Genres.Drama
    ],
    duration: 117
  },
  {
    id: 216015,
    title: "Fifty Shades of Grey",
    rating: 5.3,
    releaseDate: "2015-02-11",
    imagePath: "https://image.tmdb.org/t/p/w500/jV8wnk3Jgz6f7degmT3lHNGI2tK.jpg",
    url: "https://image.tmdb.org/t/p/w500/jV8wnk3Jgz6f7degmT3lHNGI2tK.jpg",
    description: "When college senior Anastasia Steele steps in for her sick roommate to interview prominent businessman Christian Grey for their campus paper, little does she realize the path her life will take. Christian, as enigmatic as he is rich and powerful, finds himself strangely drawn to Ana, and she to him. Though sexually inexperienced, Ana plunges headlong into an affair -- and learns that Christian's true sexual proclivities push the boundaries of pain and pleasure.",
    genre: [
      Genres.Horror
    ],
    duration: 125
  },
  {
    id: 280,
    title: "Terminator 2: Judgment Day",
    rating: 7.8,
    releaseDate: "1991-07-03",
    imagePath: "https://image.tmdb.org/t/p/w500/2y4dmgWYRMYXdD1UyJVcn2HSd1D.jpg",
    url: "https://image.tmdb.org/t/p/w500/2y4dmgWYRMYXdD1UyJVcn2HSd1D.jpg",
    description: "Nearly 10 years have passed since Sarah Connor was targeted for termination by a cyborg from the future. Now her son, John, the future leader of the resistance, is the target for a newer, more deadly terminator. Once again, the resistance has managed to send a protector back to attempt to save John and his mother Sarah.",
    genre: [
      Genres.Horror,
    ],
    duration: 137
  },
  {
    id: 680,
    title: "Pulp Fiction",
    rating: 8.3,
    releaseDate: "1994-09-10",
    imagePath: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
    url: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
    description: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    genre: [
      Genres.Horror,
    ],
    duration: 154
  },
  {
    id: 86834,
    title: "Noah",
    rating: 5.5,
    releaseDate: "2014-03-20",
    imagePath: "https://image.tmdb.org/t/p/w500/5wioUjzwr91fvq7ydunxK2CPSxi.jpg",
    url: "https://image.tmdb.org/t/p/w500/5wioUjzwr91fvq7ydunxK2CPSxi.jpg",
    description: "A man who suffers visions of an apocalyptic deluge takes measures to protect his family from the coming flood.",
    genre: [
      Genres.Drama
    ],
    duration: 139
  },
  {
    id: 1771,
    title: "Captain America: The First Avenger",
    rating: 6.7,
    releaseDate: "2011-07-22",
    imagePath: "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
    url: "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
    description: "Predominantly set during World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort. Rogers must stop the Red Skull – Adolf Hitler's ruthless head of weaponry, and the leader of an organization that intends to use a mysterious device of untold powers for world domination.",
    genre: [
      Genres.Action
    ],
    duration: 124
  },
  {
    id: 315837,
    title: "Ghost in the Shell",
    rating: 5.9,
    releaseDate: "2017-03-29",
    imagePath: "https://image.tmdb.org/t/p/w500/myRzRzCxdfUWjkJWgpHHZ1oGkJd.jpg",
    url: "https://image.tmdb.org/t/p/w500/myRzRzCxdfUWjkJWgpHHZ1oGkJd.jpg",
    description: "In the near future, Major is the first of her kind: a human saved from a terrible crash, then cyber-enhanced to be a perfect soldier devoted to stopping the world's most dangerous criminals.",
    genre: [
      Genres.Horror
    ],
    duration: 107
  },
  {
    id: 1930,
    title: "The Amazing Spider-Man",
    rating: 6.5,
    releaseDate: "2012-06-27",
    imagePath: "https://image.tmdb.org/t/p/w500/eA2D86Y6VPWuUzZyatiLBwpTilQ.jpg",
    url: "https://image.tmdb.org/t/p/w500/eA2D86Y6VPWuUzZyatiLBwpTilQ.jpg",
    description: "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents' disappearance – leading him directly to Oscorp and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is set on a collision course with Connors' alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
    genre: [
      Genres.Drama
    ],
    duration: 136
  },
  {
    id: 36557,
    title: "Casino Royale",
    rating: 7.3,
    releaseDate: "2006-11-14",
    imagePath: "https://image.tmdb.org/t/p/w500/zlWBxz2pTA9p45kUTrI8AQiKrHm.jpg",
    url: "https://image.tmdb.org/t/p/w500/zlWBxz2pTA9p45kUTrI8AQiKrHm.jpg",
    description: "Le Chiffre, a banker to the world's terrorists, is scheduled to participate in a high-stakes poker game in Montenegro, where he intends to use his winnings to establish his financial grip on the terrorist market. M sends Bond – on his maiden mission as a 00 Agent – to attend this game and prevent Le Chiffre from winning. With the help of Vesper Lynd and Felix Leiter, Bond enters the most important poker game in his already dangerous career.",
    genre: [
      Genres.Horror
    ],
    duration: 144
  },
  {
    id: 9806,
    title: "The Incredibles",
    rating: 7.5,
    releaseDate: "2004-11-05",
    imagePath: "https://image.tmdb.org/t/p/w500/huGDgQRB24IzkJLNqe5zq1pdvEE.jpg",
    url: "https://image.tmdb.org/t/p/w500/huGDgQRB24IzkJLNqe5zq1pdvEE.jpg",
    description: "Bob Parr has given up his superhero days to log in time as an insurance adjuster and raise his three children with his formerly heroic wife in suburbia. But when he receives a mysterious assignment, it's time to get back into costume.",
    genre: [
      Genres.Action
    ],
    duration: 115
  },
  {
    id: 671,
    title: "Harry Potter and the Philosopher's Stone",
    rating: 7.6,
    releaseDate: "2001-11-16",
    imagePath: "https://image.tmdb.org/t/p/w500/dCtFvscYcXQKTNvyyaQr2g2UacJ.jpg",
    url: "https://image.tmdb.org/t/p/w500/dCtFvscYcXQKTNvyyaQr2g2UacJ.jpg",
    description: "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
    genre: [
      Genres.Drama
    ],
    duration: 152
  },
  {
    id: 293167,
    title: "Kong: Skull Island",
    rating: 6.3,
    releaseDate: "2017-03-08",
    imagePath: "https://image.tmdb.org/t/p/w500/r2517Vz9EhDhj88qwbDVj8DCRZN.jpg",
    url: "https://image.tmdb.org/t/p/w500/r2517Vz9EhDhj88qwbDVj8DCRZN.jpg",
    description: "Explore the mysterious and dangerous home of the king of the apes as a team of explorers ventures deep inside the treacherous, primordial island.",
    genre: [
      Genres.Drama
    ],
    duration: 118
  },
  {
    id: 49047,
    title: "Gravity",
    rating: 7.2,
    releaseDate: "2013-09-27",
    imagePath: "https://image.tmdb.org/t/p/w500/uPxtxhB2Fy9ihVqtBtNGHmknJqV.jpg",
    url: "https://image.tmdb.org/t/p/w500/uPxtxhB2Fy9ihVqtBtNGHmknJqV.jpg",
    description: "Dr. Ryan Stone, a brilliant medical engineer on her first Shuttle mission, with veteran astronaut Matt Kowalsky in command of his last flight before retiring. But on a seemingly routine spacewalk, disaster strikes. The Shuttle is destroyed, leaving Stone and Kowalsky completely alone-tethered to nothing but each other and spiraling out into the blackness of space. The deafening silence tells them they have lost any link to Earth and any chance for rescue. As fear turns to panic, every gulp of air eats away at what little oxygen is left. But the only way home may be to go further out into the terrifying expanse of space.",
    genre: [
      Genres.Horror,
    ],
    duration: 91
  },
  {
    id: 61791,
    title: "Rise of the Planet of the Apes",
    rating: 7.1,
    releaseDate: "2011-08-03",
    imagePath: "https://image.tmdb.org/t/p/w500/ddWSWgAjAhksNhMeeBTSqY6otIA.jpg",
    url: "https://image.tmdb.org/t/p/w500/ddWSWgAjAhksNhMeeBTSqY6otIA.jpg",
    description: "Scientist Will Rodman is determined to find a cure for Alzheimer's, the disease which has slowly consumed his father. Will feels certain he is close to a breakthrough and tests his latest serum on apes, noticing dramatic increases in intelligence and brain activity in the primate subjects – especially Caesar, his pet chimpanzee.",
    genre: [
      Genres.Horror,
    ],
    duration: 105
  },
  {
    id: 147441,
    title: "Exodus: Gods and Kings",
    rating: 5.6,
    releaseDate: "2014-12-03",
    imagePath: "https://image.tmdb.org/t/p/w500/ycDcPCpWM7hSdIR6tFkOzQPkve2.jpg",
    url: "https://image.tmdb.org/t/p/w500/ycDcPCpWM7hSdIR6tFkOzQPkve2.jpg",
    description: "The defiant leader Moses rises up against the Egyptian Pharaoh Ramses, setting 400,000 slaves on a monumental journey of escape from Egypt and its terrifying cycle of deadly plagues.",
    genre: [
      Genres.Drama
    ],
    duration: 150
  },
  {
    id: 468202,
    title: "The Girl in the Fog",
    rating: 7,
    releaseDate: "2017-10-26",
    imagePath: "https://image.tmdb.org/t/p/w500/eWINXglQ9JVxUuzouYK7arm9YT1.jpg",
    url: "https://image.tmdb.org/t/p/w500/eWINXglQ9JVxUuzouYK7arm9YT1.jpg",
    description: "Based on the bestselling novel by Donato Carrisi, THE GIRL IN THE FOG is a gripping and chilling thriller that brings us to a hazy mountain village where enigmatic Detective Vogel is investigating on the sudden disappearance of fifteen-year-old Anna Lou. But with the case at the heart of a media storm, the fine line between the police and criminals begins to blur and soon everyone becomes a suspect.",
    genre: [
      Genres.Horror
    ],
    duration: 128
  },
  {
    id: 91314,
    title: "Transformers: Age of Extinction",
    rating: 5.8,
    releaseDate: "2014-06-25",
    imagePath: "https://image.tmdb.org/t/p/w500/ykIZB9dYBIKV13k5igGFncT5th6.jpg",
    url: "https://image.tmdb.org/t/p/w500/ykIZB9dYBIKV13k5igGFncT5th6.jpg",
    description: "As humanity picks up the pieces, following the conclusion of \"Transformers: Dark of the Moon,\" Autobots and Decepticons have all but vanished from the face of the planet. However, a group of powerful, ingenious businessman and scientists attempt to learn from past Transformer incursions and push the boundaries of technology beyond what they can control - all while an ancient, powerful Transformer menace sets Earth in his cross-hairs.",
    genre: [
      Genres.Action
    ],
    duration: 165
  },
  {
    id: 157336,
    title: "Interstellar",
    rating: 8.1,
    releaseDate: "2014-11-05",
    imagePath: "https://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
    url: "https://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
    description: "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    genre: [
      Genres.Drama
    ],
    duration: 169
  },
  {
    id: 585,
    title: "Monsters, Inc.",
    rating: 7.6,
    releaseDate: "2001-11-01",
    imagePath: "https://image.tmdb.org/t/p/w500/93Y9BGx8blzmZOPSoivkFfaifqU.jpg",
    url: "https://image.tmdb.org/t/p/w500/93Y9BGx8blzmZOPSoivkFfaifqU.jpg",
    description: "James Sullivan and Mike Wazowski are monsters, they earn their living scaring children and are the best in the business... even though they're more afraid of the children than they are of them. When a child accidentally enters their world, James and Mike suddenly find that kids are not to be afraid of and they uncover a conspiracy that could threaten all children across the world.",
    genre: [
      Genres.Comedy,
    ],
    duration: 92
  },
  {
    id: 293660,
    title: "Deadpool",
    rating: 7.5,
    releaseDate: "2016-02-09",
    imagePath: "https://image.tmdb.org/t/p/w500/inVq3FRqcYIRl2la8iZikYYxFNR.jpg",
    url: "https://image.tmdb.org/t/p/w500/inVq3FRqcYIRl2la8iZikYYxFNR.jpg",
    description: "Deadpool tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
    genre: [
      Genres.Comedy
    ],
    duration: 108
  },
  {
    id: 557,
    title: "Spider-Man",
    rating: 6.9,
    releaseDate: "2002-05-01",
    imagePath: "https://image.tmdb.org/t/p/w500/rZd0y1X1Gw4t5B3f01Qzj8DYY66.jpg",
    url: "https://image.tmdb.org/t/p/w500/rZd0y1X1Gw4t5B3f01Qzj8DYY66.jpg",
    description: "After being bitten by a genetically altered spider, nerdy high school student Peter Parker is endowed with amazing powers.",
    genre: [
      Genres.Drama
    ],
    duration: 121
  },
  {
    id: 206487,
    title: "Predestination",
    rating: 7.3,
    releaseDate: "2014-08-28",
    imagePath: "https://image.tmdb.org/t/p/w500/kDdUtDsGMQ3OYwoBtEQyJIGPz4V.jpg",
    url: "https://image.tmdb.org/t/p/w500/kDdUtDsGMQ3OYwoBtEQyJIGPz4V.jpg",
    description: "Predestination chronicles the life of a Temporal Agent sent on an intricate series of time-travel journeys designed to prevent future killers from committing their crimes. Now, on his final assignment, the Agent must stop the one criminal that has eluded him throughout time and prevent a devastating attack in which thousands of lives will be lost.",
    genre: [
      Genres.Horror
    ],
    duration: 97
  },
  {
    id: 129,
    title: "Spirited Away",
    rating: 8.4,
    releaseDate: "2001-07-20",
    imagePath: "https://image.tmdb.org/t/p/w500/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg",
    url: "https://image.tmdb.org/t/p/w500/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg",
    description: "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    genre: [
      Genres.Drama
    ],
    duration: 125
  },
  {
    id: 390043,
    title: "The Hitman's Bodyguard",
    rating: 6.7,
    releaseDate: "2017-08-16",
    imagePath: "https://image.tmdb.org/t/p/w500/5CGjlz2vyBhW5xHW4eNOZIdgzYq.jpg",
    url: "https://image.tmdb.org/t/p/w500/5CGjlz2vyBhW5xHW4eNOZIdgzYq.jpg",
    description: "The world's top bodyguard gets a new client, a hit man who must testify at the International Court of Justice. They must put their differences aside and work together to make it to the trial on time.",
    genre: [
      Genres.Comedy
    ],
    duration: 118
  },
  {
    id: 283366,
    title: "Miss Peregrine's Home for Peculiar Children",
    rating: 6.6,
    releaseDate: "2016-09-28",
    imagePath: "https://image.tmdb.org/t/p/w500/tzYkC0vqX8Dokuwynhz1lnWWgWT.jpg",
    url: "https://image.tmdb.org/t/p/w500/tzYkC0vqX8Dokuwynhz1lnWWgWT.jpg",
    description: "A teenager finds himself transported to an island where he must help protect a group of orphans with special powers from creatures intent on destroying them.",
    genre: [
      Genres.Drama
    ],
    duration: 127
  },
  {
    id: 863,
    title: "Toy Story 2",
    rating: 7.4,
    releaseDate: "1999-10-30",
    imagePath: "https://image.tmdb.org/t/p/w500/3CmK3XurcLeUyMifCR28ibzupbB.jpg",
    url: "https://image.tmdb.org/t/p/w500/3CmK3XurcLeUyMifCR28ibzupbB.jpg",
    description: "Andy heads off to Cowboy Camp, leaving his toys to their own devices. Things shift into high gear when an obsessive toy collector named Al McWhiggen, owner of Al's Toy Barn kidnaps Woody. Andy's toys mount a daring rescue mission, Buzz Lightyear meets his match and Woody has to decide where he and his heart truly belong.",
    genre: [
      Genres.Comedy,
    ],
    duration: 92
  },
  {
    id: 559,
    title: "Spider-Man 3",
    rating: 6,
    releaseDate: "2007-05-01",
    imagePath: "https://image.tmdb.org/t/p/w500/rLwhewWypBL88VFGf6haSdnNj2U.jpg",
    url: "https://image.tmdb.org/t/p/w500/rLwhewWypBL88VFGf6haSdnNj2U.jpg",
    description: "The seemingly invincible Spider-Man goes up against an all-new crop of villain – including the shape-shifting Sandman. While Spider-Man’s superpowers are altered by an alien organism, his alter ego, Peter Parker, deals with nemesis Eddie Brock and also gets caught up in a love triangle.",
    genre: [
      Genres.Drama
    ],
    duration: 139
  },
  {
    id: 675,
    title: "Harry Potter and the Order of the Phoenix",
    rating: 7.5,
    releaseDate: "2007-06-28",
    imagePath: "https://image.tmdb.org/t/p/w500/4YnLxYLHhT4UQ8i9jxAXWy46Xuw.jpg",
    url: "https://image.tmdb.org/t/p/w500/4YnLxYLHhT4UQ8i9jxAXWy46Xuw.jpg",
    description: "Returning for his fifth year of study at Hogwarts, Harry is stunned to find that his warnings about the return of Lord Voldemort have been ignored. Left with no choice, Harry takes matters into his own hands, training a small group of students – dubbed 'Dumbledore's Army' – to defend themselves against the dark arts.",
    genre: [
      Genres.Drama
    ],
    duration: 138
  },
  {
    id: 100402,
    title: "Captain America: The Winter Soldier",
    rating: 7.6,
    releaseDate: "2014-03-20",
    imagePath: "https://image.tmdb.org/t/p/w500/5TQ6YDmymBpnF005OyoB7ohZps9.jpg",
    url: "https://image.tmdb.org/t/p/w500/5TQ6YDmymBpnF005OyoB7ohZps9.jpg",
    description: "After the cataclysmic events in New York with The Avengers, Steve Rogers, aka Captain America is living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy—the Winter Soldier.",
    genre: [
      Genres.Action
    ],
    duration: 136
  },
  {
    id: 70981,
    title: "Prometheus",
    rating: 6.3,
    releaseDate: "2012-05-30",
    imagePath: "https://image.tmdb.org/t/p/w500/ng8ALjSDhUmwLl7vtjUWIZNQSlt.jpg",
    url: "https://image.tmdb.org/t/p/w500/ng8ALjSDhUmwLl7vtjUWIZNQSlt.jpg",
    description: "A team of explorers discover a clue to the origins of mankind on Earth, leading them on a journey to the darkest corners of the universe. There, they must fight a terrifying battle to save the future of the human race.",
    genre: [
      Genres.Drama
    ],
    duration: 124
  },
  {
    id: 10193,
    title: "Toy Story 3",
    rating: 7.6,
    releaseDate: "2010-06-16",
    imagePath: "https://image.tmdb.org/t/p/w500/AqYmOBxLjASrj5UtybIh7Axyv77.jpg",
    url: "https://image.tmdb.org/t/p/w500/AqYmOBxLjASrj5UtybIh7Axyv77.jpg",
    description: "Woody, Buzz, and the rest of Andy's toys haven't been played with in years. With Andy about to go to college, the gang find themselves accidentally left at a nefarious day care center. The toys must band together to escape and return home to Andy.",
    genre: [
      Genres.Comedy
    ],
    duration: 103
  },
  {
    id: 49521,
    title: "Man of Steel",
    rating: 6.5,
    releaseDate: "2013-06-12",
    imagePath: "https://image.tmdb.org/t/p/w500/xWlaTLnD8NJMTT9PGOD9z5re1SL.jpg",
    url: "https://image.tmdb.org/t/p/w500/xWlaTLnD8NJMTT9PGOD9z5re1SL.jpg",
    description: "A young boy learns that he has extraordinary powers and is not of this earth. As a young man, he journeys to discover where he came from and what he was sent here to do. But the hero in him must emerge if he is to save the world from annihilation and become the symbol of hope for all mankind.",
    genre: [
      Genres.Drama
    ],
    duration: 143
  },
  {
    id: 296,
    title: "Terminator 3: Rise of the Machines",
    rating: 5.9,
    releaseDate: "2003-07-02",
    imagePath: "https://image.tmdb.org/t/p/w500/lz4xYdF1n09lyiCfZWtWT44SZiG.jpg",
    url: "https://image.tmdb.org/t/p/w500/lz4xYdF1n09lyiCfZWtWT44SZiG.jpg",
    description: "It's been 10 years since John Connor saved Earth from Judgment Day, and he's now living under the radar, steering clear of using anything Skynet can trace. That is, until he encounters T-X, a robotic assassin ordered to finish what T-1000 started. Good thing Connor's former nemesis, the Terminator, is back to aid the now-adult Connor … just like he promised.",
    genre: [
      Genres.Horror,
    ],
    duration: 109
  },
  {
    id: 336843,
    title: "Maze Runner: The Death Cure",
    rating: 7.2,
    releaseDate: "2018-01-17",
    imagePath: "https://image.tmdb.org/t/p/w500/7GgZ6DGezkh3szFdvskH5XD4V0t.jpg",
    url: "https://image.tmdb.org/t/p/w500/7GgZ6DGezkh3szFdvskH5XD4V0t.jpg",
    description: "Thomas leads his group of escaped Gladers on their final and most dangerous mission yet. To save their friends, they must break into the legendary Last City, a WCKD-controlled labyrinth that may turn out to be the deadliest maze of all. Anyone who makes it out alive will get answers to the questions the Gladers have been asking since they first arrived in the maze.",
    genre: [
      Genres.Horror,
    ],
    duration: 142
  },
  {
    id: 273481,
    title: "Sicario",
    rating: 7.2,
    releaseDate: "2015-09-17",
    imagePath: "https://image.tmdb.org/t/p/w500/p2SdfGmQRaw8xhFbexlHL7srMM8.jpg",
    url: "https://image.tmdb.org/t/p/w500/p2SdfGmQRaw8xhFbexlHL7srMM8.jpg",
    description: "A young female FBI agent joins a secret CIA operation to take down a Mexican cartel boss, a job that ends up pushing her ethical and moral values to the limit.",
    genre: [
      Genres.Horror
    ],
    duration: 121
  },
  {
    id: 278,
    title: "The Shawshank Redemption",
    rating: 8.6,
    releaseDate: "1994-09-23",
    imagePath: "https://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
    url: "https://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
    description: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    genre: [
      Genres.Drama
    ],
    duration: 142
  },
  {
    id: 578,
    title: "Jaws",
    rating: 7.5,
    releaseDate: "1975-06-18",
    imagePath: "https://image.tmdb.org/t/p/w500/l1yltvzILaZcx2jYvc5sEMkM7Eh.jpg",
    url: "https://image.tmdb.org/t/p/w500/l1yltvzILaZcx2jYvc5sEMkM7Eh.jpg",
    description: "An insatiable great white shark terrorizes the townspeople of Amity Island, The police chief, an oceanographer and a grizzled shark hunter seek to destroy the bloodthirsty beast.",
    genre: [
      Genres.Horror,
    ],
    duration: 124
  },
  {
    id: 127380,
    title: "Finding Dory",
    rating: 6.9,
    releaseDate: "2016-06-16",
    imagePath: "https://image.tmdb.org/t/p/w500/z09QAf8WbZncbitewNk6lKYMZsh.jpg",
    url: "https://image.tmdb.org/t/p/w500/z09QAf8WbZncbitewNk6lKYMZsh.jpg",
    description: "Dory is reunited with her friends Nemo and Marlin in the search for answers about her past. What can she remember? Who are her parents? And where did she learn to speak Whale?",
    genre: [
      Genres.Comedy,
    ],
    duration: 97
  },
  {
    id: 124905,
    title: "Godzilla",
    rating: 6.1,
    releaseDate: "2014-05-14",
    imagePath: "https://image.tmdb.org/t/p/w500/szVwkB4H5yyOJBVuQ432b9boO0N.jpg",
    url: "https://image.tmdb.org/t/p/w500/szVwkB4H5yyOJBVuQ432b9boO0N.jpg",
    description: "Ford Brody, a Navy bomb expert, has just reunited with his family in San Francisco when he is forced to go to Japan to help his estranged father, Joe. Soon, both men are swept up in an escalating crisis when Godzilla, King of the Monsters, arises from the sea to combat malevolent adversaries that threaten the survival of humanity. The creatures leave colossal destruction in their wake, as they make their way toward their final battleground: San Francisco.",
    genre: [
      Genres.Drama
    ],
    duration: 123
  },
  {
    id: 313369,
    title: "La La Land",
    rating: 7.9,
    releaseDate: "2016-11-29",
    imagePath: "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
    url: "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
    description: "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
    genre: [
      Genres.Comedy,
    ],
    duration: 128
  },
  {
    id: 188927,
    title: "Star Trek Beyond",
    rating: 6.6,
    releaseDate: "2016-07-07",
    imagePath: "https://image.tmdb.org/t/p/w500/mLrQMqyZgLeP8FrT5LCobKAiqmK.jpg",
    url: "https://image.tmdb.org/t/p/w500/mLrQMqyZgLeP8FrT5LCobKAiqmK.jpg",
    description: "The USS Enterprise crew explores the furthest reaches of uncharted space, where they encounter a mysterious new enemy who puts them and everything the Federation stands for to the test.",
    genre: [
      Genres.Action
    ],
    duration: 122
  },
  {
    id: 562,
    title: "Die Hard",
    rating: 7.5,
    releaseDate: "1988-07-15",
    imagePath: "https://image.tmdb.org/t/p/w500/mc7MubOLcIw3MDvnuQFrO9psfCa.jpg",
    url: "https://image.tmdb.org/t/p/w500/mc7MubOLcIw3MDvnuQFrO9psfCa.jpg",
    description: "NYPD cop, John McClane's plan to reconcile with his estranged wife is thrown for a serious loop when minutes after he arrives at her office, the entire building is overtaken by a group of terrorists. With little help from the LAPD, wisecracking McClane sets out to single-handedly rescue the hostages and bring the bad guys down.",
    genre: [
      Genres.Horror
    ],
    duration: 131
  },
  {
    id: 18239,
    title: "The Twilight Saga: New Moon",
    rating: 5.6,
    releaseDate: "2009-03-15",
    imagePath: "https://image.tmdb.org/t/p/w500/4O6OCHVrXie2Th8asDn5utvlTwC.jpg",
    url: "https://image.tmdb.org/t/p/w500/4O6OCHVrXie2Th8asDn5utvlTwC.jpg",
    description: "Forks, Washington resident Bella Swan is reeling from the departure of her vampire love, Edward Cullen, and finds comfort in her friendship with Jacob Black, a werewolf. But before she knows it, she's thrust into a centuries-old conflict, and her desire to be with Edward at any cost leads her to take greater and greater risks.",
    genre: [
      Genres.Drama
    ],
    duration: 130
  },
  {
    id: 27578,
    title: "The Expendables",
    rating: 6,
    releaseDate: "2010-08-03",
    imagePath: "https://image.tmdb.org/t/p/w500/y2qJoYxOhzyidsA60Mqn29H38Lk.jpg",
    url: "https://image.tmdb.org/t/p/w500/y2qJoYxOhzyidsA60Mqn29H38Lk.jpg",
    description: "Barney Ross leads a band of highly skilled mercenaries including knife enthusiast Lee Christmas, a martial arts expert, heavy weapons specialist, demolitionist, and a loose-cannon sniper. When the group is commissioned by the mysterious Mr. Church to assassinate the dictator of a small South American island, Barney and Lee visit the remote locale to scout out their opposition and discover the true nature of the conflict engulfing the city.",
    genre: [
      Genres.Horror,
    ],
    duration: 103
  },
  {
    id: 10764,
    title: "Quantum of Solace",
    rating: 6.1,
    releaseDate: "2008-10-30",
    imagePath: "https://image.tmdb.org/t/p/w500/6mlNx0Jiqhg3D7NlANT9pidsgPJ.jpg",
    url: "https://image.tmdb.org/t/p/w500/6mlNx0Jiqhg3D7NlANT9pidsgPJ.jpg",
    description: "Quantum of Solace continues the adventures of James Bond after Casino Royale. Betrayed by Vesper, the woman he loved, 007 fights the urge to make his latest mission personal. Pursuing his determination to uncover the truth, Bond and M interrogate Mr. White, who reveals that the organization that blackmailed Vesper is far more complex and dangerous than anyone had imagined.",
    genre: [
      Genres.Horror,
    ],
    duration: 106
  },
  {
    id: 8355,
    title: "Ice Age: Dawn of the Dinosaurs",
    rating: 6.5,
    releaseDate: "2009-06-29",
    imagePath: "https://image.tmdb.org/t/p/w500/crAf8b9gFpcdvY7majL8xWzTbem.jpg",
    url: "https://image.tmdb.org/t/p/w500/crAf8b9gFpcdvY7majL8xWzTbem.jpg",
    description: "Times are changing for Manny the moody mammoth, Sid the motor mouthed sloth and Diego the crafty saber-toothed tiger. Life heats up for our heroes when they meet some new and none-too-friendly neighbors – the mighty dinosaurs.",
    genre: [
      Genres.Comedy,
    ],
    duration: 94
  },
  {
    id: 38757,
    title: "Tangled",
    rating: 7.5,
    releaseDate: "2010-11-24",
    imagePath: "https://image.tmdb.org/t/p/w500/re6AOJbhBk9FIK3knwU6rYlbPDx.jpg",
    url: "https://image.tmdb.org/t/p/w500/re6AOJbhBk9FIK3knwU6rYlbPDx.jpg",
    description: "When the kingdom's most wanted-and most charming-bandit Flynn Rider hides out in a mysterious tower, he's taken hostage by Rapunzel, a beautiful and feisty tower-bound teen with 70 feet of magical, golden hair. Flynn's curious captor, who's looking for her ticket out of the tower where she's been locked away for years, strikes a deal with the handsome thief and the unlikely duo sets off on an action-packed escapade, complete with a super-cop horse, an over-protective chameleon and a gruff gang of pub thugs.",
    genre: [
      Genres.Action
    ],
    duration: 100
  },
  {
    id: 228967,
    title: "The Interview",
    rating: 6.1,
    releaseDate: "2014-12-25",
    imagePath: "https://image.tmdb.org/t/p/w500/2uWb0aSm5cFmRCHP95OdA6hvTEs.jpg",
    url: "https://image.tmdb.org/t/p/w500/2uWb0aSm5cFmRCHP95OdA6hvTEs.jpg",
    description: "Dave Skylark and his producer Aaron Rapoport run the celebrity tabloid show \"Skylark Tonight\". When they land an interview with a surprise fan, North Korean dictator Kim Jong-un, they are recruited by the CIA to turn their trip to Pyongyang into an assassination mission.",
    genre: [
      Genres.Comedy
    ],
    duration: 112
  },
  {
    id: 346364,
    title: "It",
    rating: 7.1,
    releaseDate: "2017-09-05",
    imagePath: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
    url: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
    description: "In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",
    genre: [
      Genres.Horror
    ],
    duration: 134
  },
  {
    id: 950,
    title: "Ice Age: The Meltdown",
    rating: 6.5,
    releaseDate: "2006-03-23",
    imagePath: "https://image.tmdb.org/t/p/w500/isRuztu5Ch7FJdtSBLcG8QSOpEI.jpg",
    url: "https://image.tmdb.org/t/p/w500/isRuztu5Ch7FJdtSBLcG8QSOpEI.jpg",
    description: "Diego, Manny and Sid return in this sequel to the hit animated movie Ice Age. This time around, the deep freeze is over, and the ice-covered earth is starting to melt, which will destroy the trio's cherished valley. The impending disaster prompts them to reunite and warn all the other beasts about the desperate situation.",
    genre: [
      Genres.Comedy,
    ],
    duration: 91
  },
  {
    id: 857,
    title: "Saving Private Ryan",
    rating: 8,
    releaseDate: "1998-07-24",
    imagePath: "https://image.tmdb.org/t/p/w500/miDoEMlYDJhOCvxlzI0wZqBs9Yt.jpg",
    url: "https://image.tmdb.org/t/p/w500/miDoEMlYDJhOCvxlzI0wZqBs9Yt.jpg",
    description: "As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home.",
    genre: [
      Genres.Drama
    ],
    duration: 169
  },
  {
    id: 394823,
    title: "Robby and Toby's Fantastic Voyager",
    rating: 4.6,
    releaseDate: "2016-12-01",
    imagePath: "https://image.tmdb.org/t/p/w500/x97gjhJW6X2fus5Q4zhgCe48LYr.jpg",
    url: "https://image.tmdb.org/t/p/w500/x97gjhJW6X2fus5Q4zhgCe48LYr.jpg",
    description: "One day, robot Robby enters into a life of the most creative little boy, Toby. Robby had been separated from his robot parents when his spaceship crashed. Toby decides to offer his help and the two of them become friends.",
    genre: [
      Genres.Action
    ],
    duration: 106
  },
  {
    id: 2105,
    title: "American Pie",
    rating: 6.4,
    releaseDate: "1999-07-09",
    imagePath: "https://image.tmdb.org/t/p/w500/k40WFAXMRekWEqsjURO3jiWob67.jpg",
    url: "https://image.tmdb.org/t/p/w500/k40WFAXMRekWEqsjURO3jiWob67.jpg",
    description: "At a high-school party, four friends find that losing their collective virginity isn't as easy as they had thought. But they still believe that they need to do so before college. To motivate themselves, they enter a pact to all \"score.\" by their senior prom.",
    genre: [
      Genres.Comedy,
    ],
    duration: 95
  },
  {
    id: 353491,
    title: "The Dark Tower",
    rating: 5.6,
    releaseDate: "2017-08-03",
    imagePath: "https://image.tmdb.org/t/p/w500/i9GUSgddIqrroubiLsvvMRYyRy0.jpg",
    url: "https://image.tmdb.org/t/p/w500/i9GUSgddIqrroubiLsvvMRYyRy0.jpg",
    description: "The last Gunslinger, Roland Deschain, has been locked in an eternal battle with Walter O’Dim, also known as the Man in Black, determined to prevent him from toppling the Dark Tower, which holds the universe together. With the fate of the worlds at stake, good and evil will collide in the ultimate battle as only Roland can defend the Tower from the Man in Black.",
    genre: [
      Genres.Drama
    ],
    duration: 95
  },
  {
    id: 10681,
    title: "WALL·E",
    rating: 7.9,
    releaseDate: "2008-06-22",
    imagePath: "https://image.tmdb.org/t/p/w500/9cJETuLMc6R0bTWRA5i7ctY9bxk.jpg",
    url: "https://image.tmdb.org/t/p/w500/9cJETuLMc6R0bTWRA5i7ctY9bxk.jpg",
    description: "WALL·E is the last robot left on an Earth that has been overrun with garbage and all humans have fled to outer space. For 700 years he has continued to try and clean up the mess, but has developed some rather interesting human-like qualities. When a ship arrives with a sleek new type of robot, WALL·E thinks he's finally found a friend and stows away on the ship when it leaves.",
    genre: [
      Genres.Action
    ],
    duration: 98
  },
  {
    id: 47964,
    title: "A Good Day to Die Hard",
    rating: 5.2,
    releaseDate: "2013-02-06",
    imagePath: "https://image.tmdb.org/t/p/w500/c2SQMd00CCGTiDxGXVqA2J9lmzF.jpg",
    url: "https://image.tmdb.org/t/p/w500/c2SQMd00CCGTiDxGXVqA2J9lmzF.jpg",
    description: "Iconoclastic, take-no-prisoners cop John McClane, finds himself for the first time on foreign soil after traveling to Moscow to help his wayward son Jack - unaware that Jack is really a highly-trained CIA operative out to stop a nuclear weapons heist. With the Russian underworld in pursuit, and battling a countdown to war, the two McClanes discover that their opposing methods make them unstoppable heroes.",
    genre: [
      Genres.Horror
    ],
    duration: 98
  },
  {
    id: 110415,
    title: "Snowpiercer",
    rating: 6.7,
    releaseDate: "2013-08-01",
    imagePath: "https://image.tmdb.org/t/p/w500/oP0ZWr6MsaQ1TV7xvnZJMKSfz0H.jpg",
    url: "https://image.tmdb.org/t/p/w500/oP0ZWr6MsaQ1TV7xvnZJMKSfz0H.jpg",
    description: "In a future where a failed global-warming experiment kills off most life on the planet, a class system evolves aboard the Snowpiercer, a train that travels around the globe via a perpetual-motion engine.",
    genre: [
      Genres.Drama
    ],
    duration: 126
  },
  {
    id: 307081,
    title: "Southpaw",
    rating: 7.3,
    releaseDate: "2015-06-15",
    imagePath: "https://image.tmdb.org/t/p/w500/50d0XQQETSyg3bwBXhC7K33pKgc.jpg",
    url: "https://image.tmdb.org/t/p/w500/50d0XQQETSyg3bwBXhC7K33pKgc.jpg",
    description: "Billy \"The Great\" Hope, the reigning junior middleweight boxing champion, has an impressive career, a loving wife and daughter, and a lavish lifestyle. However, when tragedy strikes, Billy hits rock bottom, losing his family, his house and his manager. He soon finds an unlikely savior in Tick Willis, a former fighter who trains the city's toughest amateur boxers. With his future on the line, Hope fights to reclaim the trust of those he loves the most.",
    genre: [
      Genres.Drama
    ],
    duration: 123
  },
  {
    id: 446791,
    title: "All the Money in the World",
    rating: 6.3,
    releaseDate: "2017-12-21",
    imagePath: "https://image.tmdb.org/t/p/w500/q6nE9Hf0ezszjI4DbCxwzQ73MMy.jpg",
    url: "https://image.tmdb.org/t/p/w500/q6nE9Hf0ezszjI4DbCxwzQ73MMy.jpg",
    description: "The story of the kidnapping of 16-year-old John Paul Getty III and the desperate attempt by his devoted mother to convince his billionaire grandfather Jean Paul Getty to pay the ransom.",
    genre: [
      Genres.Horror
    ],
    duration: 132
  },
  {
    id: 24,
    title: "Kill Bill: Vol. 1",
    rating: 7.8,
    releaseDate: "2003-10-10",
    imagePath: "https://image.tmdb.org/t/p/w500/97fNAi62HawGjWru7PvVmF7RAbU.jpg",
    url: "https://image.tmdb.org/t/p/w500/97fNAi62HawGjWru7PvVmF7RAbU.jpg",
    description: "An assassin is shot at the altar by her ruthless employer, Bill and other members of their assassination circle – but 'The Bride' lives to plot her vengeance. Setting out for some payback, she makes a death list and hunts down those who wronged her, saving Bill for last.",
    genre: [
      Genres.Drama
    ],
    duration: 111
  },
  {
    id: 954,
    title: "Mission: Impossible",
    rating: 6.7,
    releaseDate: "1996-05-22",
    imagePath: "https://image.tmdb.org/t/p/w500/vmj2PzTLC6xJvshpq8SlaYE3gbd.jpg",
    url: "https://image.tmdb.org/t/p/w500/vmj2PzTLC6xJvshpq8SlaYE3gbd.jpg",
    description: "When Ethan Hunt, the leader of a crack espionage team whose perilous operation has gone awry with no explanation, discovers that a mole has penetrated the CIA, he's surprised to learn that he's the No. 1 suspect. To clear his name, Hunt now must ferret out the real double agent and, in the process, even the score.",
    genre: [
      Genres.Horror
    ],
    duration: 110
  },
  {
    id: 607,
    title: "Men in Black",
    rating: 6.9,
    releaseDate: "1997-07-02",
    imagePath: "https://image.tmdb.org/t/p/w500/f24UVKq3UiQWLqGWdqjwkzgB8j8.jpg",
    url: "https://image.tmdb.org/t/p/w500/f24UVKq3UiQWLqGWdqjwkzgB8j8.jpg",
    description: "Men in Black follows the exploits of agents Kay and Jay, members of a top-secret organization established to monitor and police alien activity on Earth. The two Men in Black find themselves in the middle of the deadly plot by an intergalactic terrorist who has arrived on Earth to assassinate two ambassadors from opposing galaxies. In order to prevent worlds from colliding, the MiB must track down the terrorist and prevent the destruction of Earth. It's just another typical day for the Men in Black.",
    genre: [
      Genres.Comedy,
    ],
    duration: 98
  },
  {
    id: 63,
    title: "Twelve Monkeys",
    rating: 7.5,
    releaseDate: "1995-12-29",
    imagePath: "https://image.tmdb.org/t/p/w500/6Sj9wDu3YugthXsU0Vry5XFAZGg.jpg",
    url: "https://image.tmdb.org/t/p/w500/6Sj9wDu3YugthXsU0Vry5XFAZGg.jpg",
    description: "In the year 2035, convict James Cole reluctantly volunteers to be sent back in time to discover the origin of a deadly virus that wiped out nearly all of the earth's population and forced the survivors into underground communities. But when Cole is mistakenly sent to 1990 instead of 1996, he's arrested and locked up in a mental hospital. There he meets psychiatrist Dr. Kathryn Railly, and patient Jeffrey Goines, the son of a famous virus expert, who may hold the key to the mysterious rogue group, the Army of the 12 Monkeys, thought to be responsible for unleashing the killer disease.",
    genre: [
      Genres.Horror,
    ],
    duration: 129
  },
  {
    id: 679,
    title: "Aliens",
    rating: 7.8,
    releaseDate: "1986-07-18",
    imagePath: "https://image.tmdb.org/t/p/w500/nORMXEkYEbzkU5WkMWMgRDJwjSZ.jpg",
    url: "https://image.tmdb.org/t/p/w500/nORMXEkYEbzkU5WkMWMgRDJwjSZ.jpg",
    description: "When Ripley's lifepod is found by a salvage crew over 50 years later, she finds that terra-formers are on the very planet they found the alien species. When the company sends a family of colonists out to investigate her story, all contact is lost with the planet and colonists. They enlist Ripley and the colonial marines to return and search for answers.",
    genre: [
      Genres.Horror,
    ],
    duration: 137
  },
  {
    id: 608,
    title: "Men in Black II",
    rating: 6.1,
    releaseDate: "2002-07-03",
    imagePath: "https://image.tmdb.org/t/p/w500/qWjRfBwr4VculczswwojXgoU0mq.jpg",
    url: "https://image.tmdb.org/t/p/w500/qWjRfBwr4VculczswwojXgoU0mq.jpg",
    description: "Kay and Jay reunite to provide our best, last and only line of defense against a sinister seductress who levels the toughest challenge yet to the MIB's untarnished mission statement – protecting Earth from the scum of the universe. It's been four years since the alien-seeking agents averted an intergalactic disaster of epic proportions. Now it's a race against the clock as Jay must convince Kay – who not only has absolutely no memory of his time spent with the MIB, but is also the only living person left with the expertise to save the galaxy – to reunite with the MIB before the earth submits to ultimate destruction.",
    genre: [
      Genres.Comedy,
    ],
    duration: 88
  },
  {
    id: 694,
    title: "The Shining",
    rating: 8.1,
    releaseDate: "1980-05-22",
    imagePath: "https://image.tmdb.org/t/p/w500/9fgh3Ns1iRzlQNYuJyK0ARQZU7w.jpg",
    url: "https://image.tmdb.org/t/p/w500/9fgh3Ns1iRzlQNYuJyK0ARQZU7w.jpg",
    description: "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
    genre: [
      Genres.Horror
    ],
    duration: 144
  },
  {
    id: 603,
    title: "The Matrix",
    rating: 8,
    releaseDate: "1999-03-30",
    imagePath: "https://image.tmdb.org/t/p/w500/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg",
    url: "https://image.tmdb.org/t/p/w500/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg",
    description: "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    genre: [
      Genres.Action
    ],
    duration: 136
  },
  {
    id: 745,
    title: "The Sixth Sense",
    rating: 7.8,
    releaseDate: "1999-08-06",
    imagePath: "https://image.tmdb.org/t/p/w500/imps263dHNe3SuoaAJORZyNTdDT.jpg",
    url: "https://image.tmdb.org/t/p/w500/imps263dHNe3SuoaAJORZyNTdDT.jpg",
    description: "A psychological thriller about an eight year old boy named Cole Sear who believes he can see into the world of the dead. A child psychologist named Malcolm Crowe comes to Cole to help him deal with his problem, learning that he really can see ghosts of dead people.",
    genre: [
      Genres.Horror,
    ],
    duration: 107
  },
  {
    id: 27576,
    title: "Salt",
    rating: 6.2,
    releaseDate: "2010-07-21",
    imagePath: "https://image.tmdb.org/t/p/w500/956xMjH4sPoqimqoLOP6AI19mjm.jpg",
    url: "https://image.tmdb.org/t/p/w500/956xMjH4sPoqimqoLOP6AI19mjm.jpg",
    description: "As a CIA officer, Evelyn Salt swore an oath to duty, honor and country. Her loyalty will be tested when a defector accuses her of being a Russian spy. Salt goes on the run, using all her skills and years of experience as a covert operative to elude capture. Salt's efforts to prove her innocence only serve to cast doubt on her motives, as the hunt to uncover the truth behind her identity continues and the question remains: \"Who is Salt?\"",
    genre: [
      Genres.Horror
    ],
    duration: 100
  },
  {
    id: 106646,
    title: "The Wolf of Wall Street",
    rating: 7.9,
    releaseDate: "2013-12-25",
    imagePath: "https://image.tmdb.org/t/p/w500/vK1o5rZGqxyovfIhZyMELhk03wO.jpg",
    url: "https://image.tmdb.org/t/p/w500/vK1o5rZGqxyovfIhZyMELhk03wO.jpg",
    description: "A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking world and mob infiltration. Based on Jordan Belfort's autobiography.",
    genre: [
      Genres.Comedy
    ],
    duration: 180
  },
  {
    id: 87,
    title: "Indiana Jones and the Temple of Doom",
    rating: 7.1,
    releaseDate: "1984-05-23",
    imagePath: "https://image.tmdb.org/t/p/w500/f2nTRKk2zGdUTE7tLJ5EGGSuKA6.jpg",
    url: "https://image.tmdb.org/t/p/w500/f2nTRKk2zGdUTE7tLJ5EGGSuKA6.jpg",
    description: "After arriving in India, Indiana Jones is asked by a desperate village to find a mystical stone. He agrees – and stumbles upon a secret cult plotting a terrible plan in the catacombs of an ancient palace.",
    genre: [
      Genres.Action
    ],
    duration: 118
  },
  {
    id: 56292,
    title: "Mission: Impossible - Ghost Protocol",
    rating: 6.8,
    releaseDate: "2011-12-07",
    imagePath: "https://image.tmdb.org/t/p/w500/s58mMsgIVOFfoXPtwPWJ3hDYpXf.jpg",
    url: "https://image.tmdb.org/t/p/w500/s58mMsgIVOFfoXPtwPWJ3hDYpXf.jpg",
    description: "In the 4th installment of the Mission Impossible series, Ethan Hunt (Cruise) and his team are racing against time to track down a dangerous terrorist named Hendricks (Nyqvist), who has gained access to Russian nuclear launch codes and is planning a strike on the United States. An attempt to stop him ends in an explosion causing severe destruction to the Kremlin and the IMF to be implicated in the bombing, forcing the President to disavow them. No longer being aided by the government, Ethan and his team chase Hendricks around the globe, although they might still be too late to stop a disaster.",
    genre: [
      Genres.Horror,
    ],
    duration: 133
  },
  {
    id: 157350,
    title: "Divergent",
    rating: 6.9,
    releaseDate: "2014-03-14",
    imagePath: "https://image.tmdb.org/t/p/w500/yTtx2ciqk4XdN1oKhMMDy3f5ue3.jpg",
    url: "https://image.tmdb.org/t/p/w500/yTtx2ciqk4XdN1oKhMMDy3f5ue3.jpg",
    description: "In a world divided into factions based on personality types, Tris learns that she's been classified as Divergent and won't fit in. When she discovers a plot to destroy Divergents, Tris and the mysterious Four must find out what makes Divergents dangerous before it's too late.",
    genre: [
      Genres.Action
    ],
    duration: 139
  },
  {
    id: 10191,
    title: "How to Train Your Dragon",
    rating: 7.6,
    releaseDate: "2010-03-05",
    imagePath: "https://image.tmdb.org/t/p/w500/hIXX3IRFy0InUOmYeWjvhCAgQNj.jpg",
    url: "https://image.tmdb.org/t/p/w500/hIXX3IRFy0InUOmYeWjvhCAgQNj.jpg",
    description: "As the son of a Viking leader on the cusp of manhood, shy Hiccup Horrendous Haddock III faces a rite of passage: he must kill a dragon to prove his warrior mettle. But after downing a feared dragon, he realizes that he no longer wants to destroy it, and instead befriends the beast – which he names Toothless – much to the chagrin of his warrior father",
    genre: [
      Genres.Drama
    ],
    duration: 98
  },
  {
    id: 80321,
    title: "Madagascar 3: Europe's Most Wanted",
    rating: 6.4,
    releaseDate: "2012-06-06",
    imagePath: "https://image.tmdb.org/t/p/w500/wd7NcMifnuf66gD2Fm7Tzz3yJ54.jpg",
    url: "https://image.tmdb.org/t/p/w500/wd7NcMifnuf66gD2Fm7Tzz3yJ54.jpg",
    description: "Animal pals Alex, Marty, Melman, and Gloria are still trying to make it back to New York's Central Park Zoo. They are forced to take a detour to Europe to find the penguins and chimps who broke the bank at a Monte Carlo casino. When French animal-control officer Capitaine Chantel DuBois picks up their scent, Alex and company are forced to hide out in a traveling circus.",
    genre: [
      Genres.Action
    ],
    duration: 93
  },
  {
    id: 246655,
    title: "X-Men: Apocalypse",
    rating: 6.4,
    releaseDate: "2016-05-18",
    imagePath: "https://image.tmdb.org/t/p/w500/zSouWWrySXshPCT4t3UKCQGayyo.jpg",
    url: "https://image.tmdb.org/t/p/w500/zSouWWrySXshPCT4t3UKCQGayyo.jpg",
    description: "After the re-emergence of the world's first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.",
    genre: [
      Genres.Drama
    ],
    duration: 144
  },
  {
    id: 710,
    title: "GoldenEye",
    rating: 6.7,
    releaseDate: "1995-11-16",
    imagePath: "https://image.tmdb.org/t/p/w500/5c0ovjT41KnYIHYuF4AWsTe3sKh.jpg",
    url: "https://image.tmdb.org/t/p/w500/5c0ovjT41KnYIHYuF4AWsTe3sKh.jpg",
    description: "James Bond must unmask the mysterious head of the Janus Syndicate and prevent the leader from utilizing the GoldenEye weapons system to inflict devastating revenge on Britain.",
    genre: [
      Genres.Horror
    ],
    duration: 130
  },
  {
    id: 111,
    title: "Scarface",
    rating: 8,
    releaseDate: "1983-12-08",
    imagePath: "https://image.tmdb.org/t/p/w500/zr2p353wrd6j3wjLgDT4TcaestB.jpg",
    url: "https://image.tmdb.org/t/p/w500/zr2p353wrd6j3wjLgDT4TcaestB.jpg",
    description: "After getting a green card in exchange for assassinating a Cuban government official, Tony Montana stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami. But increased pressure from the police, wars with Colombian drug cartels and his own drug-fueled paranoia serve to fuel the flames of his eventual downfall.",
    genre: [
      Genres.Horror
    ],
    duration: 170
  },
  {
    id: 98,
    title: "Gladiator",
    rating: 8,
    releaseDate: "2000-05-01",
    imagePath: "https://image.tmdb.org/t/p/w500/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg",
    url: "https://image.tmdb.org/t/p/w500/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg",
    description: "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos.  Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor.  As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed.  He escapes, but is captured by slave traders.  Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences.",
    genre: [
      Genres.Drama
    ],
    duration: 155
  },
  {
    id: 49013,
    title: "Cars 2",
    rating: 5.8,
    releaseDate: "2011-06-11",
    imagePath: "https://image.tmdb.org/t/p/w500/AblhtULOVtrkSnFxRPQ8gBemxw9.jpg",
    url: "https://image.tmdb.org/t/p/w500/AblhtULOVtrkSnFxRPQ8gBemxw9.jpg",
    description: "Star race car Lightning McQueen and his pal Mater head overseas to compete in the World Grand Prix race. But the road to the championship becomes rocky as Mater gets caught up in an intriguing adventure of his own: international espionage.",
    genre: [
      Genres.Comedy
    ],
    duration: 106
  },
  {
    id: 82690,
    title: "Wreck-It Ralph",
    rating: 7.1,
    releaseDate: "2012-11-01",
    imagePath: "https://image.tmdb.org/t/p/w500/93FsllrXXWncp7BQYTdOU1XMRXo.jpg",
    url: "https://image.tmdb.org/t/p/w500/93FsllrXXWncp7BQYTdOU1XMRXo.jpg",
    description: "Wreck-It Ralph is the 9-foot-tall, 643-pound villain of an arcade video game named Fix-It Felix Jr., in which the game's titular hero fixes buildings that Ralph destroys. Wanting to prove he can be a good guy and not just a villain, Ralph escapes his game and lands in Hero's Duty, a first-person shooter where he helps the game's hero battle against alien invaders. He later enters Sugar Rush, a kart racing game set on tracks made of candies, cookies and other sweets. There, Ralph meets Vanellope von Schweetz who has learned that her game is faced with a dire threat that could affect the entire arcade, and one that Ralph may have inadvertently started.",
    genre: [
      Genres.Comedy,
    ],
    duration: 108
  },
  {
    id: 301337,
    title: "Downsizing",
    rating: 5.1,
    releaseDate: "2017-12-22",
    imagePath: "https://image.tmdb.org/t/p/w500/uLlmtN33rMuimRq6bu0OoNzCGGs.jpg",
    url: "https://image.tmdb.org/t/p/w500/uLlmtN33rMuimRq6bu0OoNzCGGs.jpg",
    description: "A kindly occupational therapist undergoes a new procedure to be shrunken to four inches tall so that he and his wife can help save the planet and afford a nice lifestyle at the same time.",
    genre: [
      Genres.Comedy,
    ],
    duration: 135
  },
  {
    id: 68724,
    title: "Elysium",
    rating: 6.4,
    releaseDate: "2013-08-07",
    imagePath: "https://image.tmdb.org/t/p/w500/tHkjoAxmhp3Eau1h0Ir7maKMwUz.jpg",
    url: "https://image.tmdb.org/t/p/w500/tHkjoAxmhp3Eau1h0Ir7maKMwUz.jpg",
    description: "In the year 2159, two classes of people exist: the very wealthy who live on a pristine man-made space station called Elysium, and the rest, who live on an overpopulated, ruined Earth. Secretary Rhodes (Jodie Foster), a hard line government ofﬁcial, will stop at nothing to enforce anti-immigration laws and preserve the luxurious lifestyle of the citizens of Elysium. That doesn’t stop the people of Earth from trying to get in, by any means they can. When unlucky Max (Matt Damon) is backed into a corner, he agrees to take on a daunting mission that, if successful, will not only save his life, but could bring equality to these polarized worlds.",
    genre: [
      Genres.Horror
    ],
    duration: 109
  },
  {
    id: 601,
    title: "E.T. the Extra-Terrestrial",
    rating: 7.4,
    releaseDate: "1982-04-03",
    imagePath: "https://image.tmdb.org/t/p/w500/8htLKK03TJjKZOXJgihZCu8v0P.jpg",
    url: "https://image.tmdb.org/t/p/w500/8htLKK03TJjKZOXJgihZCu8v0P.jpg",
    description: "After a gentle alien becomes stranded on Earth, the being is discovered and befriended by a young boy named Elliott. Bringing the extraterrestrial into his suburban California house, Elliott introduces E.T., as the alien is dubbed, to his brother and his little sister, Gertie, and the children decide to keep its existence a secret. Soon, however, E.T. falls ill, resulting in government intervention and a dire situation for both Elliott and the alien.",
    genre: [
      Genres.Drama
    ],
    duration: 115
  },
  {
    id: 1422,
    title: "The Departed",
    rating: 8,
    releaseDate: "2006-10-05",
    imagePath: "https://image.tmdb.org/t/p/w500/tGLO9zw5ZtCeyyEWgbYGgsFxC6i.jpg",
    url: "https://image.tmdb.org/t/p/w500/tGLO9zw5ZtCeyyEWgbYGgsFxC6i.jpg",
    description: "To take down South Boston's Irish Mafia, the police send in one of their own to infiltrate the underworld, not realizing the syndicate has done likewise. While an undercover cop curries favor with the mob kingpin, a career criminal rises through the police ranks. But both sides soon discover there's a mole among them.",
    genre: [
      Genres.Horror,
    ],
    duration: 151
  },
  {
    id: 497,
    title: "The Green Mile",
    rating: 8.3,
    releaseDate: "1999-12-10",
    imagePath: "https://image.tmdb.org/t/p/w500/3yJUlOtVa09CYJocwBU8eAryja0.jpg",
    url: "https://image.tmdb.org/t/p/w500/3yJUlOtVa09CYJocwBU8eAryja0.jpg",
    description: "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cellblock's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
    genre: [
      Genres.Drama
    ],
    duration: 189
  },
  {
    id: 769,
    title: "GoodFellas",
    rating: 8.3,
    releaseDate: "1990-09-12",
    imagePath: "https://image.tmdb.org/t/p/w500/hAPeXBdGDGmXRPj4OZZ0poH65Iu.jpg",
    url: "https://image.tmdb.org/t/p/w500/hAPeXBdGDGmXRPj4OZZ0poH65Iu.jpg",
    description: "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
    genre: [
      Genres.Drama
    ],
    duration: 145
  },
  {
    id: 2048,
    title: "I, Robot",
    rating: 6.8,
    releaseDate: "2004-07-15",
    imagePath: "https://image.tmdb.org/t/p/w500/2mkFzf168xJrV6Leqq0bjqOlJCK.jpg",
    url: "https://image.tmdb.org/t/p/w500/2mkFzf168xJrV6Leqq0bjqOlJCK.jpg",
    description: "In 2035, where robots are common-place and abide by the three laws of robotics, a techno-phobic cop investigates an apparent suicide. Suspecting that a robot may be responsible for the death, his investigation leads him to believe that humanity may be in danger.",
    genre: [
      Genres.Action
    ],
    duration: 115
  },
  {
    id: 399404,
    title: "Darkest Hour",
    rating: 7.2,
    releaseDate: "2017-11-22",
    imagePath: "https://image.tmdb.org/t/p/w500/fZTSczW0G4erMf1tttrc88ioTO7.jpg",
    url: "https://image.tmdb.org/t/p/w500/fZTSczW0G4erMf1tttrc88ioTO7.jpg",
    description: "A thrilling and inspiring true story begins on the eve of World War II as, within days of becoming Prime Minister of Great Britain, Winston Churchill must face one of his most turbulent and defining trials: exploring a negotiated peace treaty with Nazi Germany, or standing firm to fight for the ideals, liberty and freedom of a nation. As the unstoppable Nazi forces roll across Western Europe and the threat of invasion is imminent, and with an unprepared public, a skeptical King, and his own party plotting against him, Churchill must withstand his darkest hour, rally a nation, and attempt to change the course of world history.",
    genre: [
      Genres.Drama
    ],
    duration: 125
  },
  {
    id: 57800,
    title: "Ice Age: Continental Drift",
    rating: 6.2,
    releaseDate: "2012-06-26",
    imagePath: "https://image.tmdb.org/t/p/w500/u30xsZd3mijrdBKA6CeDsozx48g.jpg",
    url: "https://image.tmdb.org/t/p/w500/u30xsZd3mijrdBKA6CeDsozx48g.jpg",
    description: "Manny, Diego, and Sid embark upon another adventure after their continent is set adrift. Using an iceberg as a ship, they encounter sea creatures and battle pirates as they explore a new world.",
    genre: [
      Genres.Comedy,
    ],
    duration: 88
  },
  {
    id: 567,
    title: "Rear Window",
    rating: 8.2,
    releaseDate: "1954-08-01",
    imagePath: "https://image.tmdb.org/t/p/w500/qitnZcLP7C9DLRuPpmvZ7GiEjJN.jpg",
    url: "https://image.tmdb.org/t/p/w500/qitnZcLP7C9DLRuPpmvZ7GiEjJN.jpg",
    description: "Professional photographer L.B. \"Jeff\" Jeffries breaks his leg while getting an action shot at an auto race. Confined to his New York apartment, he spends his time looking out of the rear window observing the neighbors. He begins to suspect that a man across the courtyard may have murdered his wife. Jeff enlists the help of his high society fashion-consultant girlfriend Lisa Freemont and his visiting nurse Stella to investigate.",
    genre: [
      Genres.Horror
    ],
    duration: 112
  },
  {
    id: 240,
    title: "The Godfather: Part II",
    rating: 8.4,
    releaseDate: "1974-12-20",
    imagePath: "https://image.tmdb.org/t/p/w500/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg",
    url: "https://image.tmdb.org/t/p/w500/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg",
    description: "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
    genre: [
      Genres.Drama
    ],
    duration: 200
  },
  {
    id: 1892,
    title: "Return of the Jedi",
    rating: 7.9,
    releaseDate: "1983-05-23",
    imagePath: "https://image.tmdb.org/t/p/w500/jx5p0aHlbPXqe3AH9G15NvmWaqQ.jpg",
    url: "https://image.tmdb.org/t/p/w500/jx5p0aHlbPXqe3AH9G15NvmWaqQ.jpg",
    description: "As Rebel leaders map their strategy for an all-out attack on the Emperor's newer, bigger Death Star. Han Solo remains frozen in the cavernous desert fortress of Jabba the Hutt, the most loathsome outlaw in the universe, who is also keeping Princess Leia as a slave girl. Now a master of the Force, Luke Skywalker rescues his friends, but he cannot become a true Jedi Knight until he wages his own crucial battle against Darth Vader, who has sworn to win Luke over to the dark side of the Force.",
    genre: [
      Genres.Action
    ],
    duration: 135
  },
  {
    id: 77338,
    title: "The Intouchables",
    rating: 8.2,
    releaseDate: "2011-11-02",
    imagePath: "https://image.tmdb.org/t/p/w500/4mFsNQwbD0F237Tx7gAPotd0nbJ.jpg",
    url: "https://image.tmdb.org/t/p/w500/4mFsNQwbD0F237Tx7gAPotd0nbJ.jpg",
    description: "A true story of two men who should never have met – a quadriplegic aristocrat who was injured in a paragliding accident and a young man from the projects.",
    genre: [
      Genres.Comedy
    ],
    duration: 112
  },
  {
    id: 18785,
    title: "The Hangover",
    rating: 7.2,
    releaseDate: "2009-06-05",
    imagePath: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
    url: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
    description: "When three friends finally come to after a raucous night of bachelor-party revelry, they find a baby in the closet and a tiger in the bathroom. But they can't seem to locate their best friend, Doug – who's supposed to be tying the knot. Launching a frantic search for Doug, the trio perseveres through a nasty hangover to try to make it to the church on time.",
    genre: [
      Genres.Comedy
    ],
    duration: 100
  },
  {
    id: 920,
    title: "Cars",
    rating: 6.6,
    releaseDate: "2006-06-08",
    imagePath: "https://image.tmdb.org/t/p/w500/5damnMcRFKSjhCirgX3CMa88MBj.jpg",
    url: "https://image.tmdb.org/t/p/w500/5damnMcRFKSjhCirgX3CMa88MBj.jpg",
    description: "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
    genre: [
      Genres.Comedy,
    ],
    duration: 117
  },
  {
    id: 32657,
    title: "Percy Jackson & the Olympians: The Lightning Thief",
    rating: 6,
    releaseDate: "2010-02-01",
    imagePath: "https://image.tmdb.org/t/p/w500/5NhyXkodMzDRW8uqtPqlxJsoBhf.jpg",
    url: "https://image.tmdb.org/t/p/w500/5NhyXkodMzDRW8uqtPqlxJsoBhf.jpg",
    description: "Accident prone teenager, Percy discovers he's actually a demi-God, the son of Poseidon, and he is needed when Zeus' lightning is stolen. Percy must master his new found skills in order to prevent a war between the Gods that could devastate the entire world.",
    genre: [
      Genres.Drama
    ],
    duration: 118
  },
  {
    id: 296098,
    title: "Bridge of Spies",
    rating: 7.2,
    releaseDate: "2015-10-15",
    imagePath: "https://image.tmdb.org/t/p/w500/xPCNA8zJxyyFKTj47QpvkXHukzB.jpg",
    url: "https://image.tmdb.org/t/p/w500/xPCNA8zJxyyFKTj47QpvkXHukzB.jpg",
    description: "During the Cold War, the Soviet Union captures U.S. pilot Francis Gary Powers after shooting down his U-2 spy plane. Sentenced to 10 years in prison, Powers' only hope is New York lawyer James Donovan, recruited by a CIA operative to negotiate his release. Donovan boards a plane to Berlin, hoping to win the young man's freedom through a prisoner exchange. If all goes well, the Russians would get Rudolf Abel, the convicted spy who Donovan defended in court.",
    genre: [
      Genres.Horror,
    ],
    duration: 141
  },
  {
    id: 10386,
    title: "The Iron Giant",
    rating: 7.7,
    releaseDate: "1999-08-06",
    imagePath: "https://image.tmdb.org/t/p/w500/rdN6IjV4xlDDhrT8ewkkJfPvp2e.jpg",
    url: "https://image.tmdb.org/t/p/w500/rdN6IjV4xlDDhrT8ewkkJfPvp2e.jpg",
    description: "In the small town of Rockwell, Maine in October 1957, a giant metal machine befriends a nine-year-old boy and ultimately finds its humanity by unselfishly saving people from their own fears and prejudices.",
    genre: [
      Genres.Drama
    ],
    duration: 86
  },
  {
    id: 49519,
    title: "The Croods",
    rating: 6.8,
    releaseDate: "2013-03-20",
    imagePath: "https://image.tmdb.org/t/p/w500/eHi3Nbgh6Cs2KiIyEMF4Ig4CdjX.jpg",
    url: "https://image.tmdb.org/t/p/w500/eHi3Nbgh6Cs2KiIyEMF4Ig4CdjX.jpg",
    description: "The Croods is a prehistoric comedy adventure that follows the world's first family as they embark on a journey of a lifetime when the cave that has always shielded them from danger is destroyed. Traveling across a spectacular landscape, the Croods discover an incredible new world filled with fantastic creatures -- and their outlook is changed forever.",
    genre: [
      Genres.Comedy,
    ],
    duration: 98
  },
  {
    id: 89,
    title: "Indiana Jones and the Last Crusade",
    rating: 7.7,
    releaseDate: "1989-05-24",
    imagePath: "https://image.tmdb.org/t/p/w500/4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg",
    url: "https://image.tmdb.org/t/p/w500/4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg",
    description: "When Dr. Henry Jones Sr. suddenly goes missing while pursuing the Holy Grail, eminent archaeologist Indiana must team up with Marcus Brody, Sallah and Elsa Schneider to follow in his father's footsteps and stop the Nazis from recovering the power of eternal life.",
    genre: [
      Genres.Action
    ],
    duration: 127
  },
  {
    id: 1995,
    title: "Lara Croft: Tomb Raider",
    rating: 5.7,
    releaseDate: "2001-06-11",
    imagePath: "https://image.tmdb.org/t/p/w500/m6aodY7SrvlTRiUFkxClaNAIQT.jpg",
    url: "https://image.tmdb.org/t/p/w500/m6aodY7SrvlTRiUFkxClaNAIQT.jpg",
    description: "English aristocrat Lara Croft is skilled in hand-to-hand combat and in the middle of a battle with a secret society. The shapely archaeologist moonlights as a tomb raider to recover lost antiquities and meets her match in the evil Powell, who's in search of a powerful relic.",
    genre: [
      Genres.Horror
    ],
    duration: 100
  },
  {
    id: 406563,
    title: "Insidious: The Last Key",
    rating: 6,
    releaseDate: "2018-01-03",
    imagePath: "https://image.tmdb.org/t/p/w500/nb9fc9INMg8kQ8L7sE7XTNsZnUX.jpg",
    url: "https://image.tmdb.org/t/p/w500/nb9fc9INMg8kQ8L7sE7XTNsZnUX.jpg",
    description: "Parapsychologist Elise Rainier and her team travel to Five Keys, N.M., to investigate a man's claim of a haunting. Terror soon strikes when Rainier realizes that the house he lives in was her family's old home.",
    genre: [
      Genres.Horror
    ],
    duration: 118
  },
  {
    id: 539,
    title: "Psycho",
    rating: 8.3,
    releaseDate: "1960-06-16",
    imagePath: "https://image.tmdb.org/t/p/w500/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg",
    url: "https://image.tmdb.org/t/p/w500/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg",
    description: "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.",
    genre: [
      Genres.Horror
    ],
    duration: 109
  },
  {
    id: 75612,
    title: "Oblivion",
    rating: 6.5,
    releaseDate: "2013-04-10",
    imagePath: "https://image.tmdb.org/t/p/w500/hmOzkHlkGvi8x24fYpFSnXvjklv.jpg",
    url: "https://image.tmdb.org/t/p/w500/hmOzkHlkGvi8x24fYpFSnXvjklv.jpg",
    description: "Jack Harper is one of the last few drone repairmen stationed on Earth.  Part of a massive operation to extract vital resources after decades of war with a terrifying threat known as the Scavs, Jack’s mission is nearly complete.  His existence is brought crashing down when he rescues a beautiful  stranger from a downed spacecraft.  Her arrival triggers a chain of events that  forces him to question everything he knows and puts the fate of humanity in his hands.",
    genre: [
      Genres.Drama
    ],
    duration: 124
  },
  {
    id: 107846,
    title: "Escape Plan",
    rating: 6.7,
    releaseDate: "2013-10-09",
    imagePath: "https://image.tmdb.org/t/p/w500/j3XZwBeWgoAbVmkW3JyOme79I2e.jpg",
    url: "https://image.tmdb.org/t/p/w500/j3XZwBeWgoAbVmkW3JyOme79I2e.jpg",
    description: "Ray Breslin is the world's foremost authority on structural security. After analyzing every high security prison and learning a vast array of survival skills so he can design escape-proof prisons, his skills are put to the test. He's framed and incarcerated in a master prison he designed himself. He needs to escape and find the person who put him behind bars.",
    genre: [
      Genres.Horror
    ],
    duration: 115
  },
  {
    id: 953,
    title: "Madagascar",
    rating: 6.6,
    releaseDate: "2005-05-25",
    imagePath: "https://image.tmdb.org/t/p/w500/2YiESGB68BGQSAFvfJxBi774sc4.jpg",
    url: "https://image.tmdb.org/t/p/w500/2YiESGB68BGQSAFvfJxBi774sc4.jpg",
    description: "Alex the lion is the king of the urban jungle, the main attraction at New York's Central Park Zoo. He and his best friends -- Marty the zebra, Melman the giraffe and Gloria the hippo -- have spent their whole lives in blissful captivity before an admiring public and with regular meals provided for them. Not content to leave well enough alone, Marty lets his curiosity get the better of him and makes his escape -- with the help of some prodigious penguins -- to explore the world.",
    genre: [
      Genres.Action
    ],
    duration: 86
  },
  {
    id: 534,
    title: "Terminator Salvation",
    rating: 5.9,
    releaseDate: "2009-05-20",
    imagePath: "https://image.tmdb.org/t/p/w500/gw6JhlekZgtKUFlDTezq3j5JEPK.jpg",
    url: "https://image.tmdb.org/t/p/w500/gw6JhlekZgtKUFlDTezq3j5JEPK.jpg",
    description: "All grown up in post-apocalyptic 2018, John Connor must lead the resistance of humans against the increasingly dominating militaristic robots. But when Marcus Wright appears, his existence confuses the mission as Connor tries to determine whether Wright has come from the future or the past -- and whether he's friend or foe.",
    genre: [
      Genres.Horror
    ],
    duration: 115
  },
  {
    id: 809,
    title: "Shrek 2",
    rating: 6.8,
    releaseDate: "2004-05-19",
    imagePath: "https://image.tmdb.org/t/p/w500/akWDA0BMVYK4OTM92T5i91DYnsT.jpg",
    url: "https://image.tmdb.org/t/p/w500/akWDA0BMVYK4OTM92T5i91DYnsT.jpg",
    description: "Shrek, Fiona and Donkey set off to Far, Far Away to meet Fiona's mother and father. But not everyone is happy. Shrek and the King find it hard to get along, and there's tension in the marriage. The fairy godmother discovers that Shrek has married Fiona instead of her Son Prince Charming and sets about destroying their marriage.",
    genre: [
      Genres.Comedy,
    ],
    duration: 93
  },
  {
    id: 24021,
    title: "The Twilight Saga: Eclipse",
    rating: 5.9,
    releaseDate: "2010-06-23",
    imagePath: "https://image.tmdb.org/t/p/w500/4IIFFKd9vxrlicNbAPS8ONEgIFp.jpg",
    url: "https://image.tmdb.org/t/p/w500/4IIFFKd9vxrlicNbAPS8ONEgIFp.jpg",
    description: "Bella once again finds herself surrounded by danger as Seattle is ravaged by a string of mysterious killings and a malicious vampire continues her quest for revenge. In the midst of it all, she is forced to choose between her love for Edward and her friendship with Jacob, knowing that her decision has the potential to ignite the ageless struggle between vampire and werewolf. With her graduation quickly approaching, Bella is confronted with the most important decision of her life.",
    genre: [
      Genres.Drama
    ],
    duration: 124
  },
  {
    id: 9502,
    title: "Kung Fu Panda",
    rating: 7,
    releaseDate: "2008-06-04",
    imagePath: "https://image.tmdb.org/t/p/w500/2Paj1nufT0jeSY0G4u3RC31HIGT.jpg",
    url: "https://image.tmdb.org/t/p/w500/2Paj1nufT0jeSY0G4u3RC31HIGT.jpg",
    description: "When the Valley of Peace is threatened, lazy Po the panda discovers his destiny as the \"chosen one\" and trains to become a kung fu hero, but transforming the unsleek slacker into a brave warrior won't be easy. It's up to Master Shifu and the Furious Five -- Tigress, Crane, Mantis, Viper and Monkey -- to give it a try.",
    genre: [
      Genres.Comedy
    ],
    duration: 90
  },
  {
    id: 101,
    title: "Leon: The Professional",
    rating: 8.2,
    releaseDate: "1994-09-14",
    imagePath: "https://image.tmdb.org/t/p/w500/gE8S02QUOhVnAmYu4tcrBlMTujz.jpg",
    url: "https://image.tmdb.org/t/p/w500/gE8S02QUOhVnAmYu4tcrBlMTujz.jpg",
    description: "Leon, the top hit man in New York, has earned a rep as an effective \"cleaner\". But when his next-door neighbors are wiped out by a loose-cannon DEA agent, he becomes the unwilling custodian of 12-year-old Mathilda. Before long, Mathilda's thoughts turn to revenge, and she considers following in Leon's footsteps.",
    genre: [
      Genres.Horror,
    ],
    duration: 110
  },
  {
    id: 190859,
    title: "American Sniper",
    rating: 7.4,
    releaseDate: "2014-12-11",
    imagePath: "https://image.tmdb.org/t/p/w500/svPHnYE7N5NAGO49dBmRhq0vDQ3.jpg",
    url: "https://image.tmdb.org/t/p/w500/svPHnYE7N5NAGO49dBmRhq0vDQ3.jpg",
    description: "U.S. Navy SEAL Chris Kyle takes his sole mission—protect his comrades—to heart and becomes one of the most lethal snipers in American history. His pinpoint accuracy not only saves countless lives but also makes him a prime target of insurgents. Despite grave danger and his struggle to be a good husband and father to his family back in the States, Kyle serves four tours of duty in Iraq. However, when he finally returns home, he finds that he cannot leave the war behind.",
    genre: [
      Genres.Drama
    ],
    duration: 133
  },
  {
    id: 244786,
    title: "Whiplash",
    rating: 8.3,
    releaseDate: "2014-10-10",
    imagePath: "https://image.tmdb.org/t/p/w500/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
    url: "https://image.tmdb.org/t/p/w500/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
    description: "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
    genre: [
      Genres.Drama
    ],
    duration: 105
  },
  {
    id: 10144,
    title: "The Little Mermaid",
    rating: 7.2,
    releaseDate: "1989-11-17",
    imagePath: "https://image.tmdb.org/t/p/w500/ivdzLXCVgPUyjphKbbB40z8FQp8.jpg",
    url: "https://image.tmdb.org/t/p/w500/ivdzLXCVgPUyjphKbbB40z8FQp8.jpg",
    description: "This colorful adventure tells the story of an impetuous mermaid princess named Ariel who falls in love with the very human Prince Eric and puts everything on the line for the chance to be with him. Memorable songs and characters -- including the villainous sea witch Ursula.",
    genre: [
      Genres.Action
    ],
    duration: 83
  },
  {
    id: 312221,
    title: "Creed",
    rating: 7.3,
    releaseDate: "2015-11-25",
    imagePath: "https://image.tmdb.org/t/p/w500/hKzhV274pkZBSpXfCjUyzbyYKLl.jpg",
    url: "https://image.tmdb.org/t/p/w500/hKzhV274pkZBSpXfCjUyzbyYKLl.jpg",
    description: "The former World Heavyweight Champion Rocky Balboa serves as a trainer and mentor to Adonis Johnson, the son of his late friend and former rival Apollo Creed.",
    genre: [
      Genres.Drama
    ],
    duration: 133
  },
  {
    id: 408,
    title: "Snow White and the Seven Dwarfs",
    rating: 6.9,
    releaseDate: "1937-12-20",
    imagePath: "https://image.tmdb.org/t/p/w500/bOtgcOIFBCUFdY2a737Na6gWQ0X.jpg",
    url: "https://image.tmdb.org/t/p/w500/bOtgcOIFBCUFdY2a737Na6gWQ0X.jpg",
    description: "A beautiful girl, Snow White, takes refuge in the forest in the house of seven dwarfs to hide from her stepmother, the wicked Queen. The Queen is jealous because she wants to be known as \"the fairest in the land,\" and Snow White's beauty surpasses her own.",
    genre: [
      Genres.Drama
    ],
    duration: 83
  },
  {
    id: 203801,
    title: "The Man from U.N.C.L.E.",
    rating: 7.1,
    releaseDate: "2015-08-13",
    imagePath: "https://image.tmdb.org/t/p/w500/5ttOaThDVmTpV8iragbrhdfxEep.jpg",
    url: "https://image.tmdb.org/t/p/w500/5ttOaThDVmTpV8iragbrhdfxEep.jpg",
    description: "At the height of the Cold War, a mysterious criminal organization plans to use nuclear weapons and technology to upset the fragile balance of power between the United States and Soviet Union. CIA agent Napoleon Solo and KGB agent Illya Kuryakin are forced to put aside their hostilities and work together to stop the evildoers in their tracks. The duo's only lead is the daughter of a missing German scientist, whom they must find soon to prevent a global catastrophe.",
    genre: [
      Genres.Comedy,
    ],
    duration: 116
  },
  {
    id: 320288,
    title: "X-Men: Dark Phoenix",
    rating: 0,
    releaseDate: "2019-02-14",
    imagePath: "https://image.tmdb.org/t/p/w500/6qmsupE0opYPIaBGe7T5D2FBzLs.jpg",
    url: "https://image.tmdb.org/t/p/w500/6qmsupE0opYPIaBGe7T5D2FBzLs.jpg",
    description: "Gathered together by Professor Charles Xavier to protect a world that fears and hates them, the X-Men had fought many battles, been on adventures that spanned galaxies, grappled enemies of limitless might, but none of this could prepare them for the most shocking struggle they would ever face. One of their own members, Jean Grey, has gained power beyond all comprehension, and that power has corrupted her absolutely! Now, they must decide if the life of the woman they cherish is worth the existence of the entire universe!",
    genre: [
      Genres.Action
    ],
    duration: null
  },
  {
    id: 81188,
    title: "Rise of the Guardians",
    rating: 7.1,
    releaseDate: "2012-11-21",
    imagePath: "https://image.tmdb.org/t/p/w500/sIZr3pWcnLTjMkOaTkBrV967lTK.jpg",
    url: "https://image.tmdb.org/t/p/w500/sIZr3pWcnLTjMkOaTkBrV967lTK.jpg",
    description: "When an evil spirit known as Pitch lays down the gauntlet to take over the world, the immortal Guardians must join forces for the first time to protect the hopes, beliefs and imagination of children all over the world.",
    genre: [
      Genres.Drama
    ],
    duration: 97
  },
  {
    id: 414,
    title: "Batman Forever",
    rating: 5.2,
    releaseDate: "1995-06-16",
    imagePath: "https://image.tmdb.org/t/p/w500/eTMrHEhlFPHNxpqGwpGGTdAa0xV.jpg",
    url: "https://image.tmdb.org/t/p/w500/eTMrHEhlFPHNxpqGwpGGTdAa0xV.jpg",
    description: "The Dark Knight of Gotham City confronts a dastardly duo: Two-Face and the Riddler. Formerly District Attorney Harvey Dent, Two-Face believes Batman caused the courtroom accident which left him disfigured on one side. And Edward Nygma, computer-genius and former employee of millionaire Bruce Wayne, is out to get the philanthropist; as The Riddler. Former circus acrobat Dick Grayson, his family killed by Two-Face, becomes Wayne's ward and Batman's new partner Robin.",
    genre: [
      Genres.Drama
    ],
    duration: 121
  },
  {
    id: 102651,
    title: "Maleficent",
    rating: 7,
    releaseDate: "2014-05-28",
    imagePath: "https://image.tmdb.org/t/p/w500/4FYu1AAu14tuBU0lns0hbKiHUcH.jpg",
    url: "https://image.tmdb.org/t/p/w500/4FYu1AAu14tuBU0lns0hbKiHUcH.jpg",
    description: "The untold story of Disney's most iconic villain from the 1959 classic 'Sleeping Beauty'. A beautiful, pure-hearted young woman, Maleficent has an idyllic life growing up in a peaceable forest kingdom, until one day when an invading army threatens the harmony of the land.  Maleficent rises to be the land's fiercest protector, but she ultimately suffers a ruthless betrayal – an act that begins to turn her heart into stone. Bent on revenge, Maleficent faces an epic battle with the invading King's successor and, as a result, places a curse upon his newborn infant Aurora. As the child grows, Maleficent realizes that Aurora holds the key to peace in the kingdom - and to Maleficent's true happiness as well.",
    genre: [
      Genres.Drama
    ],
    duration: 97
  },
  {
    id: 140300,
    title: "Kung Fu Panda 3",
    rating: 6.6,
    releaseDate: "2016-01-23",
    imagePath: "https://image.tmdb.org/t/p/w500/MZFPacfKzgisnPoJIPEFZUXBBT.jpg",
    url: "https://image.tmdb.org/t/p/w500/MZFPacfKzgisnPoJIPEFZUXBBT.jpg",
    description: "Continuing his \"legendary adventures of awesomeness\", Po must face two hugely epic, but different threats: one supernatural and the other a little closer to his home.",
    genre: [
      Genres.Comedy,
    ],
    duration: 95
  },
  {
    id: 106,
    title: "Predator",
    rating: 7.3,
    releaseDate: "1987-06-11",
    imagePath: "https://image.tmdb.org/t/p/w500/p6fhq04t75yCfE0kSTNZGQvWuQ1.jpg",
    url: "https://image.tmdb.org/t/p/w500/p6fhq04t75yCfE0kSTNZGQvWuQ1.jpg",
    description: "Dutch and his group of commandos are hired by the CIA to rescue downed airmen from guerillas in a Central American jungle. The mission goes well but as they return they find that something is hunting them. Nearly invisible, it blends in with the forest, taking trophies from the bodies of its victims as it goes along. Occasionally seeing through its eyes, the audience sees it is an intelligent alien hunter, hunting them for sport, killing them off one at a time.",
    genre: [
      Genres.Horror
    ],
    duration: 107
  },
  {
    id: 674,
    title: "Harry Potter and the Goblet of Fire",
    rating: 7.6,
    releaseDate: "2005-11-16",
    imagePath: "https://image.tmdb.org/t/p/w500/6sASqcdrEHXxUhA3nFpjrRecPD2.jpg",
    url: "https://image.tmdb.org/t/p/w500/6sASqcdrEHXxUhA3nFpjrRecPD2.jpg",
    description: "Harry starts his fourth year at Hogwarts, competes in the treacherous Triwizard Tournament and faces the evil Lord Voldemort. Ron and Hermione help Harry manage the pressure – but Voldemort lurks, awaiting his chance to destroy Harry and all that he stands for.",
    genre: [
      Genres.Drama
    ],
    duration: 157
  },
  {
    id: 333484,
    title: "The Magnificent Seven",
    rating: 6,
    releaseDate: "2016-09-14",
    imagePath: "https://image.tmdb.org/t/p/w500/z6BP8yLwck8mN9dtdYKkZ4XGa3D.jpg",
    url: "https://image.tmdb.org/t/p/w500/z6BP8yLwck8mN9dtdYKkZ4XGa3D.jpg",
    description: "Seven gun men in the old west gradually come together to help a poor village against savage thieves.",
    genre: [
      Genres.Drama
    ],
    duration: 132
  },
  {
    id: 64682,
    title: "The Great Gatsby",
    rating: 7.3,
    releaseDate: "2013-05-10",
    imagePath: "https://image.tmdb.org/t/p/w500/oJpOYPpVWyPeunGbbDGH1KFvea0.jpg",
    url: "https://image.tmdb.org/t/p/w500/oJpOYPpVWyPeunGbbDGH1KFvea0.jpg",
    description: "An adaptation of F. Scott Fitzgerald's Long Island-set novel, where Midwesterner Nick Carraway is lured into the lavish world of his neighbor, Jay Gatsby. Soon enough, however, Carraway will see through the cracks of Gatsby's nouveau riche existence, where obsession, madness, and tragedy await.",
    genre: [
      Genres.Drama
    ],
    duration: 143
  },
  {
    id: 97020,
    title: "RoboCop",
    rating: 5.7,
    releaseDate: "2014-01-30",
    imagePath: "https://image.tmdb.org/t/p/w500/hFQcC5eSSHqJfk70RdgrMMxGuYt.jpg",
    url: "https://image.tmdb.org/t/p/w500/hFQcC5eSSHqJfk70RdgrMMxGuYt.jpg",
    description: "In RoboCop, the year is 2028 and multinational conglomerate OmniCorp is at the center of robot technology.  Overseas, their drones have been used by the military for years, but have been forbidden for law enforcement in America.  Now OmniCorp wants to bring their controversial technology to the home front, and they see a golden opportunity to do it.  When Alex Murphy – a loving husband, father and good cop doing his best to stem the tide of crime and corruption in Detroit – is critically injured, OmniCorp sees their chance to build a part-man, part-robot police officer.  OmniCorp envisions a RoboCop in every city and even more billions for their shareholders, but they never counted on one thing: there is still a man inside the machine.",
    genre: [
      Genres.Action
    ],
    duration: 102
  },
  {
    id: 411,
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    rating: 6.8,
    releaseDate: "2005-12-07",
    imagePath: "https://image.tmdb.org/t/p/w500/l8RKDgjl9co0IgFZblxhtIOi5Uj.jpg",
    url: "https://image.tmdb.org/t/p/w500/l8RKDgjl9co0IgFZblxhtIOi5Uj.jpg",
    description: "Siblings Lucy, Edmund, Susan and Peter step through a magical wardrobe and find the land of Narnia. There, the they discover a charming, once peaceful kingdom that has been plunged into eternal winter by the evil White Witch, Jadis. Aided by the wise and magnificent lion, Aslan, the children lead Narnia into a spectacular, climactic battle to be free of the Witch's glacial powers forever.",
    genre: [
      Genres.Drama
    ],
    duration: 143
  },
  {
    id: 177572,
    title: "Big Hero 6",
    rating: 7.7,
    releaseDate: "2014-10-24",
    imagePath: "https://image.tmdb.org/t/p/w500/9gLu47Zw5ertuFTZaxXOvNfy78T.jpg",
    url: "https://image.tmdb.org/t/p/w500/9gLu47Zw5ertuFTZaxXOvNfy78T.jpg",
    description: "The special bond that develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.",
    genre: [
      Genres.Comedy
    ],
    duration: 102
  },
  {
    id: 138832,
    title: "We're the Millers",
    rating: 6.8,
    releaseDate: "2013-08-07",
    imagePath: "https://image.tmdb.org/t/p/w500/digXuLXmk88Ar23LYUQTLcz5npA.jpg",
    url: "https://image.tmdb.org/t/p/w500/digXuLXmk88Ar23LYUQTLcz5npA.jpg",
    description: "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.",
    genre: [
      Genres.Comedy,
    ],
    duration: 110
  },
  {
    id: 10140,
    title: "The Chronicles of Narnia: The Voyage of the Dawn Treader",
    rating: 6.2,
    releaseDate: "2010-08-13",
    imagePath: "https://image.tmdb.org/t/p/w500/pRzEyrMSyvpHf92EhsVSg9Yr81t.jpg",
    url: "https://image.tmdb.org/t/p/w500/pRzEyrMSyvpHf92EhsVSg9Yr81t.jpg",
    description: "This time around Edmund and Lucy Pevensie, along with their pesky cousin Eustace Scrubb find themselves swallowed into a painting and on to a fantastic Narnian ship headed for the very edges of the world.",
    genre: [
      Genres.Drama
    ],
    duration: 113
  },
  {
    id: 75174,
    title: "The Grey",
    rating: 6.4,
    releaseDate: "2012-01-26",
    imagePath: "https://image.tmdb.org/t/p/w500/bwN4x9RTLtDUDvaOWg4yvOBU38I.jpg",
    url: "https://image.tmdb.org/t/p/w500/bwN4x9RTLtDUDvaOWg4yvOBU38I.jpg",
    description: "An oil drilling team struggles to survive after a plane crash strands them in the wilds of Alaska. Hunting them is a pack of wolves that sees them as intruders.",
    genre: [
      Genres.Horror
    ],
    duration: 117
  },
  {
    id: 14334555,
    title: "American Beauty",
    rating: 7.9,
    releaseDate: "1999-09-15",
    imagePath: "https://image.tmdb.org/t/p/w500/or1MP8BZIAjqWYxPdPX724ydKar.jpg",
    url: "https://image.tmdb.org/t/p/w500/or1MP8BZIAjqWYxPdPX724ydKar.jpg",
    description: "Lester Burnham, a depressed suburban father in a mid-life crisis, decides to turn his hectic life around after developing an infatuation with his daughter's attractive friend.",
    genre: [
      Genres.Drama
    ],
    duration: 122
  },
  {
    id: 419430,
    title: "Get Out",
    rating: 7.4,
    releaseDate: "2017-02-24",
    imagePath: "https://image.tmdb.org/t/p/w500/1SwAVYpuLj8KsHxllTF8Dt9dSSX.jpg",
    url: "https://image.tmdb.org/t/p/w500/1SwAVYpuLj8KsHxllTF8Dt9dSSX.jpg",
    description: "Chris and his girlfriend Rose go upstate to visit her parents for the weekend. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.",
    genre: [
      Genres.Horror,
    ],
    duration: 104
  },
  {
    id: 87502,
    title: "Flight",
    rating: 6.5,
    releaseDate: "2012-11-02",
    imagePath: "https://image.tmdb.org/t/p/w500/8XEbkjgorAm9xk15mF63jqJ4ByV.jpg",
    url: "https://image.tmdb.org/t/p/w500/8XEbkjgorAm9xk15mF63jqJ4ByV.jpg",
    description: "Commercial airline pilot Whip Whitaker has a problem with drugs and alcohol, though so far he's managed to complete his flights safely. His luck runs out when a disastrous mechanical malfunction sends his plane hurtling toward the ground. Whip pulls off a miraculous crash-landing that results in only six lives lost. Shaken to the core, Whip vows to get sober -- but when the crash investigation exposes his addiction, he finds himself in an even worse situation.",
    genre: [
      Genres.Drama
    ],
    duration: 138
  },
  {
    id: 155,
    title: "The Dark Knight",
    rating: 8.3,
    releaseDate: "2008-07-16",
    imagePath: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
    url: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
    description: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    genre: [
      Genres.Horror
    ],
    duration: 152
  },
  {
    id: 146216,
    title: "RED 2",
    rating: 6.4,
    releaseDate: "2013-07-18",
    imagePath: "https://image.tmdb.org/t/p/w500/dvWITvEzlq8IaUbxUuBVKvXqfo6.jpg",
    url: "https://image.tmdb.org/t/p/w500/dvWITvEzlq8IaUbxUuBVKvXqfo6.jpg",
    description: "Retired C.I.A. agent Frank Moses reunites his unlikely team of elite operatives for a global quest to track down a missing portable nuclear device.",
    genre: [
      Genres.Comedy,
      Genres.Horror
    ],
    duration: 116
  },
  {
    id: 161,
    title: "Ocean's Eleven",
    rating: 7.2,
    releaseDate: "2001-12-07",
    imagePath: "https://image.tmdb.org/t/p/w500/o0h76DVXvk5OKjmNez5YY0GODC2.jpg",
    url: "https://image.tmdb.org/t/p/w500/o0h76DVXvk5OKjmNez5YY0GODC2.jpg",
    description: "Less than 24 hours into his parole, charismatic thief Danny Ocean is already rolling out his next plan: In one night, Danny's hand-picked crew of specialists will attempt to steal more than $150 million from three Las Vegas casinos. But to score the cash, Danny risks his chances of reconciling with ex-wife, Tess.",
    genre: [
      Genres.Horror,
    ],
    duration: 116
  },
  {
    id: 1724,
    title: "The Incredible Hulk",
    rating: 6.1,
    releaseDate: "2008-06-12",
    imagePath: "https://image.tmdb.org/t/p/w500/qTghl3lO8PhmIxkf8eN5WQQefHI.jpg",
    url: "https://image.tmdb.org/t/p/w500/qTghl3lO8PhmIxkf8eN5WQQefHI.jpg",
    description: "Scientist Bruce Banner scours the planet for an antidote to the unbridled force of rage within him: the Hulk. But when the military masterminds who dream of exploiting his powers force him back to civilization, he finds himself coming face to face with a new, deadly foe.",
    genre: [
      Genres.Action
    ],
    duration: 114
  },
  {
    id: 4247,
    title: "Scary Movie",
    rating: 6,
    releaseDate: "2000-07-07",
    imagePath: "https://image.tmdb.org/t/p/w500/bvVmVFBVQLytK1H4TJTFdnhvf4T.jpg",
    url: "https://image.tmdb.org/t/p/w500/bvVmVFBVQLytK1H4TJTFdnhvf4T.jpg",
    description: "Following on the heels of popular teen-scream horror movies, with uproarious comedy and biting satire. Marlon and Shawn Wayans, Shannon Elizabeth and Carmen Electra pitch in to skewer some of Hollywood's biggest blockbusters, including Scream, I Know What You Did Last Summer, The Matrix, American Pie and The Blair Witch Project.",
    genre: [
      Genres.Comedy
    ],
    duration: 88
  },
  {
    id: 1124,
    title: "The Prestige",
    rating: 8,
    releaseDate: "2006-10-19",
    imagePath: "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg",
    url: "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg",
    description: "A mysterious story of two magicians whose intense rivalry leads them on a life-long battle for supremacy -- full of obsession, deceit and jealousy with dangerous and deadly consequences.",
    genre: [
      Genres.Horror
    ],
    duration: 130
  },
  {
    id: 103,
    title: "Taxi Driver",
    rating: 8.1,
    releaseDate: "1976-02-07",
    imagePath: "https://image.tmdb.org/t/p/w500/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
    url: "https://image.tmdb.org/t/p/w500/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
    description: "A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.",
    genre: [
      Genres.Drama
    ],
    duration: 114
  },
  {
    id: 114150,
    title: "Pitch Perfect",
    rating: 7.3,
    releaseDate: "2012-09-28",
    imagePath: "https://image.tmdb.org/t/p/w500/cLUMPdwCV0Dxd3P1ZkCXe7bVImI.jpg",
    url: "https://image.tmdb.org/t/p/w500/cLUMPdwCV0Dxd3P1ZkCXe7bVImI.jpg",
    description: "College student Beca knows she does not want to be part of a clique, but that's exactly where she finds herself after arriving at her new school. Thrust in among mean gals, nice gals and just plain weird gals, Beca finds that the only thing they have in common is how well they sing together. She takes the women of the group out of their comfort zone of traditional arrangements and into a world of amazing harmonic combinations in a fight to the top of college music competitions.",
    genre: [
      Genres.Comedy,
    ],
    duration: 112
  },
  {
    id: 7191,
    title: "Cloverfield",
    rating: 6.5,
    releaseDate: "2008-01-15",
    imagePath: "https://image.tmdb.org/t/p/w500/as01o40tJ2FhtheqeXf7bVZ0EQO.jpg",
    url: "https://image.tmdb.org/t/p/w500/as01o40tJ2FhtheqeXf7bVZ0EQO.jpg",
    description: "Five young New Yorkers throw their friend a going-away party the night that a monster the size of a skyscraper descends upon the city. Told from the point of view of their video camera, the film is a document of their attempt to survive the most surreal, horrifying event of their lives.",
    genre: [
      Genres.Horror,
    ],
    duration: 85
  },
  {
    id: 393,
    title: "Kill Bill: Vol. 2",
    rating: 7.7,
    releaseDate: "2004-04-16",
    imagePath: "https://image.tmdb.org/t/p/w500/au9lFA5a2ZnBKCzPbZQf00r7J64.jpg",
    url: "https://image.tmdb.org/t/p/w500/au9lFA5a2ZnBKCzPbZQf00r7J64.jpg",
    description: "The Bride unwaveringly continues on her roaring rampage of revenge against the band of assassins who had tried to kill her and her unborn child. She visits each of her former associates one-by-one, checking off the victims on her Death List Five until there's nothing left to do … but kill Bill.",
    genre: [
      Genres.Horror
    ],
    duration: 136
  },
  {
    id: 652,
    title: "Troy",
    rating: 6.9,
    releaseDate: "2004-05-13",
    imagePath: "https://image.tmdb.org/t/p/w500/edMlij7nw2NMla32xskDnzMCFBM.jpg",
    url: "https://image.tmdb.org/t/p/w500/edMlij7nw2NMla32xskDnzMCFBM.jpg",
    description: "In year 1250 B.C. during the late Bronze age, two emerging nations begin to clash. Paris, the Trojan prince, convinces Helen, Queen of Sparta, to leave her husband Menelaus, and sail with him back to Troy. After Menelaus finds out that his wife was taken by the Trojans, he asks his brother Agamemnom to help him get her back. Agamemnon sees this as an opportunity for power. So they set off with 1,000 ships holding 50,000 Greeks to Troy. With the help of Achilles, the Greeks are able to fight the never before defeated Trojans.",
    genre: [
      Genres.Drama
    ],
    duration: 163
  },
  {
    id: 258489,
    title: "The Legend of Tarzan",
    rating: 5.6,
    releaseDate: "2016-06-29",
    imagePath: "https://image.tmdb.org/t/p/w500/6FxOPJ9Ysilpq0IgkrMJ7PubFhq.jpg",
    url: "https://image.tmdb.org/t/p/w500/6FxOPJ9Ysilpq0IgkrMJ7PubFhq.jpg",
    description: "Tarzan, having acclimated to life in London, is called back to his former home in the jungle to investigate the activities at a mining encampment.",
    genre: [
      Genres.Action
    ],
    duration: 109
  },
  {
    id: 1927,
    title: "Hulk",
    rating: 5.3,
    releaseDate: "2003-06-19",
    imagePath: "https://image.tmdb.org/t/p/w500/ogCQV6mnLtCJuiiHtMB83jvSRfY.jpg",
    url: "https://image.tmdb.org/t/p/w500/ogCQV6mnLtCJuiiHtMB83jvSRfY.jpg",
    description: "Bruce Banner, a genetics researcher with a tragic past, suffers massive radiation exposure in his laboratory that causes him to transform into a raging green monster when he gets angry.",
    genre: [
      Genres.Drama
    ],
    duration: 138
  },
  {
    id: 2059,
    title: "National Treasure",
    rating: 6.4,
    releaseDate: "2004-11-19",
    imagePath: "https://image.tmdb.org/t/p/w500/luMoc56LLMWUt60vUNNpwxrbTNt.jpg",
    url: "https://image.tmdb.org/t/p/w500/luMoc56LLMWUt60vUNNpwxrbTNt.jpg",
    description: "Modern treasure hunters, led by archaeologist Ben Gates, search for a chest of riches rumored to have been stashed away by George Washington, Thomas Jefferson and Benjamin Franklin during the Revolutionary War. The chest's whereabouts may lie in secret clues embedded in the Constitution and the Declaration of Independence, and Gates is in a race to find the gold before his enemies do.",
    genre: [
      Genres.Horror,
    ],
    duration: 131
  },
  {
    id: 180,
    title: "Minority Report",
    rating: 7.1,
    releaseDate: "2002-06-20",
    imagePath: "https://image.tmdb.org/t/p/w500/h3lpltSn7Rj1eYTPQO1lYGdw4Bz.jpg",
    url: "https://image.tmdb.org/t/p/w500/h3lpltSn7Rj1eYTPQO1lYGdw4Bz.jpg",
    description: "John Anderton is a top 'Precrime' cop in the late-21st century, when technology can predict crimes before they're committed. But Anderton becomes the quarry when another investigator targets him for a murder charge.",
    genre: [
      Genres.Horror,
    ],
    duration: 145
  },
  {
    id: 97630,
    title: "Zero Dark Thirty",
    rating: 6.7,
    releaseDate: "2012-12-19",
    imagePath: "https://image.tmdb.org/t/p/w500/yg6IDNucLAEj7E5loTyTnUW2pgb.jpg",
    url: "https://image.tmdb.org/t/p/w500/yg6IDNucLAEj7E5loTyTnUW2pgb.jpg",
    description: "A chronicle of the decade-long hunt for al-Qaeda terrorist leader Osama bin Laden after the September 2001 attacks, and his death at the hands of the Navy S.E.A.L. Team 6 in May, 2011.",
    genre: [
      Genres.Horror,
    ],
    duration: 157
  },
  {
    id: 227159,
    title: "Horrible Bosses 2",
    rating: 6.1,
    releaseDate: "2014-11-26",
    imagePath: "https://image.tmdb.org/t/p/w500/zRkLCOx7o9tjPYb9s7u6mpw8VOs.jpg",
    url: "https://image.tmdb.org/t/p/w500/zRkLCOx7o9tjPYb9s7u6mpw8VOs.jpg",
    description: "Dale, Kurt and Nick decide to start their own business but things don't go as planned because of a slick investor, prompting the trio to pull off a harebrained and misguided kidnapping scheme.",
    genre: [
      Genres.Comedy
    ],
    duration: 108
  },
  {
    id: 76163,
    title: "The Expendables 2",
    rating: 6.1,
    releaseDate: "2012-08-08",
    imagePath: "https://image.tmdb.org/t/p/w500/dJPnTe1qOcO7XqsJvESFph83m6m.jpg",
    url: "https://image.tmdb.org/t/p/w500/dJPnTe1qOcO7XqsJvESFph83m6m.jpg",
    description: "Mr. Church reunites the Expendables for what should be an easy paycheck, but when one of their men is murdered on the job, their quest for revenge puts them deep in enemy territory and up against an unexpected threat.",
    genre: [
      Genres.Horror
    ],
    duration: 103
  },
  {
    id: 1635,
    title: "The Island",
    rating: 6.5,
    releaseDate: "2005-07-20",
    imagePath: "https://image.tmdb.org/t/p/w500/zE9OTe7JvcX1jyFXs0GEL2f3RkZ.jpg",
    url: "https://image.tmdb.org/t/p/w500/zE9OTe7JvcX1jyFXs0GEL2f3RkZ.jpg",
    description: "In 2019, Lincoln Six-Echo is a resident of a seemingly \"Utopian\" but contained facility. Like all of the inhabitants of this carefully-controlled environment, Lincoln hopes to be chosen to go to The Island — reportedly the last uncontaminated location on the planet. But Lincoln soon discovers that everything about his existence is a lie.",
    genre: [
      Genres.Horror,
    ],
    duration: 136
  },
  {
    id: 673,
    title: "Harry Potter and the Prisoner of Azkaban",
    rating: 7.8,
    releaseDate: "2004-05-31",
    imagePath: "https://image.tmdb.org/t/p/w500/jUFjMoLh8T2CWzHUSjKCojI5SHu.jpg",
    url: "https://image.tmdb.org/t/p/w500/jUFjMoLh8T2CWzHUSjKCojI5SHu.jpg",
    description: "Harry, Ron and Hermione return to Hogwarts for another magic-filled year. Harry comes face to face with danger yet again, this time in the form of escaped convict, Sirius Black – and turns to sympathetic Professor Lupin for help.",
    genre: [
      Genres.Drama
    ],
    duration: 141
  },
  {
    id: 120467,
    title: "The Grand Budapest Hotel",
    rating: 8,
    releaseDate: "2014-02-26",
    imagePath: "https://image.tmdb.org/t/p/w500/nX5XotM9yprCKarRH4fzOq1VM1J.jpg",
    url: "https://image.tmdb.org/t/p/w500/nX5XotM9yprCKarRH4fzOq1VM1J.jpg",
    description: "The Grand Budapest Hotel tells of a legendary concierge at a famous European hotel between the wars and his friendship with a young employee who becomes his trusted protégé. The story involves the theft and recovery of a priceless Renaissance painting, the battle for an enormous family fortune and the slow and then sudden upheavals that transformed Europe during the first half of the 20th century.",
    genre: [
      Genres.Comedy,
    ],
    duration: 99
  },
  {
    id: 16869,
    title: "Inglourious Basterds",
    rating: 8,
    releaseDate: "2009-08-18",
    imagePath: "https://image.tmdb.org/t/p/w500/ai0LXkzVM3hMjDhvFdKMUemoBe.jpg",
    url: "https://image.tmdb.org/t/p/w500/ai0LXkzVM3hMjDhvFdKMUemoBe.jpg",
    description: "In Nazi-occupied France during World War II, a group of Jewish-American soldiers known as \"The Basterds\" are chosen specifically to spread fear throughout the Third Reich by scalping and brutally killing Nazis. The Basterds, lead by Lt. Aldo Raine soon cross paths with a French-Jewish teenage girl who runs a movie theater in Paris which is targeted by the soldiers.",
    genre: [
      Genres.Horror,
    ],
    duration: 153
  },
  {
    id: 274855,
    title: "Geostorm",
    rating: 5.7,
    releaseDate: "2017-10-13",
    imagePath: "https://image.tmdb.org/t/p/w500/nrsx0jEaBgXq4PWo7SooSnYJTv.jpg",
    url: "https://image.tmdb.org/t/p/w500/nrsx0jEaBgXq4PWo7SooSnYJTv.jpg",
    description: "After an unprecedented series of natural disasters threatened the planet, the world's leaders came together to create an intricate network of satellites to control the global climate and keep everyone safe. But now, something has gone wrong: the system built to protect Earth is attacking it, and it becomes a race against the clock to uncover the real threat before a worldwide geostorm wipes out everything and everyone along with it.",
    genre: [
      Genres.Horror
    ],
    duration: 109
  },
  {
    id: 59859,
    title: "Kick-Ass 2",
    rating: 6.3,
    releaseDate: "2013-07-17",
    imagePath: "https://image.tmdb.org/t/p/w500/pmdvrKYRdw7QxkLDaJzr6xMEqEZ.jpg",
    url: "https://image.tmdb.org/t/p/w500/pmdvrKYRdw7QxkLDaJzr6xMEqEZ.jpg",
    description: "After Kick-Ass’ insane bravery inspires a new wave of self-made masked crusaders, he joins a patrol led by the Colonel Stars and Stripes. When these amateur superheroes are hunted down by Red Mist — reborn as The Mother Fucker — only the blade-wielding Hit-Girl can prevent their annihilation.",
    genre: [
      Genres.Drama
    ],
    duration: 103
  },
  {
    id: 58574,
    title: "Sherlock Holmes: A Game of Shadows",
    rating: 7,
    releaseDate: "2011-11-22",
    imagePath: "https://image.tmdb.org/t/p/w500/7OFqsVuS6DlVM10GUD72vCGpQm9.jpg",
    url: "https://image.tmdb.org/t/p/w500/7OFqsVuS6DlVM10GUD72vCGpQm9.jpg",
    description: "There is a new criminal mastermind at large (Professor Moriarty) and not only is he Holmes’ intellectual equal, but his capacity for evil and lack of conscience may give him an advantage over the  detective.",
    genre: [
      Genres.Drama
    ],
    duration: 129
  },
  {
    id: 118,
    title: "Charlie and the Chocolate Factory",
    rating: 6.8,
    releaseDate: "2005-07-13",
    imagePath: "https://image.tmdb.org/t/p/w500/dvHl1dYvaZRhj9Gk0ITcCHr4DIJ.jpg",
    url: "https://image.tmdb.org/t/p/w500/dvHl1dYvaZRhj9Gk0ITcCHr4DIJ.jpg",
    description: "A young boy wins a tour through the most magnificent chocolate factory in the world, led by the world's most unusual candy maker.",
    genre: [
      Genres.Comedy,
    ],
    duration: 115
  },
  {
    id: 1091,
    title: "The Thing",
    rating: 7.8,
    releaseDate: "1982-06-25",
    imagePath: "https://image.tmdb.org/t/p/w500/s5fH3GqFcHbi2F0NSBSh4KRNTc0.jpg",
    url: "https://image.tmdb.org/t/p/w500/s5fH3GqFcHbi2F0NSBSh4KRNTc0.jpg",
    description: "Scientists in the Antarctic are confronted by a shape-shifting alien that assumes the appearance of the people it kills.",
    genre: [
      Genres.Drama
    ],
    duration: 109
  },
  {
    id: 446354,
    title: "The Post",
    rating: 7,
    releaseDate: "2017-12-22",
    imagePath: "https://image.tmdb.org/t/p/w500/qyRwj5VvuTRdJ76o2grP93grNxt.jpg",
    url: "https://image.tmdb.org/t/p/w500/qyRwj5VvuTRdJ76o2grP93grNxt.jpg",
    description: "A cover-up that spanned four U.S. Presidents pushed the country's first female newspaper publisher and a hard-driving editor to join an unprecedented battle between journalist and government. Inspired by true events.",
    genre: [
      Genres.Drama
    ],
    duration: 116
  },
  {
    id: 135397,
    title: "Jurassic World",
    rating: 6.5,
    releaseDate: "2015-06-09",
    imagePath: "https://image.tmdb.org/t/p/w500/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg",
    url: "https://image.tmdb.org/t/p/w500/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg",
    description: "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.",
    genre: [
      Genres.Horror
    ],
    duration: 124
  },
  {
    id: 257211,
    title: "The Intern",
    rating: 7.1,
    releaseDate: "2015-09-24",
    imagePath: "https://image.tmdb.org/t/p/w500/vQ7oVX2j7BnMDYyzuFeG1epqvGb.jpg",
    url: "https://image.tmdb.org/t/p/w500/vQ7oVX2j7BnMDYyzuFeG1epqvGb.jpg",
    description: "70-year-old widower Ben Whittaker has discovered that retirement isn't all it's cracked up to be. Seizing an opportunity to get back in the game, he becomes a senior intern at an online fashion site, founded and run by Jules Ostin.",
    genre: [
      Genres.Comedy
    ],
    duration: 121
  },
  {
    id: 36669,
    title: "Die Another Day",
    rating: 5.8,
    releaseDate: "2002-11-17",
    imagePath: "https://image.tmdb.org/t/p/w500/1iUZqUXS7x5FcGM5J0u01xuObWC.jpg",
    url: "https://image.tmdb.org/t/p/w500/1iUZqUXS7x5FcGM5J0u01xuObWC.jpg",
    description: "Bond takes on a North Korean leader who undergoes DNA replacement procedures that allow him to assume different identities. American agent, Jinx Johnson assists Bond in his attempt to thwart the villain's plans to exploit a satellite that is powered by solar energy.",
    genre: [
      Genres.Horror
    ],
    duration: 133
  },
  {
    id: 146233,
    title: "Prisoners",
    rating: 7.9,
    releaseDate: "2013-09-18",
    imagePath: "https://image.tmdb.org/t/p/w500/yAhqW57pwMAsCgmZpM5zSIVQVTh.jpg",
    url: "https://image.tmdb.org/t/p/w500/yAhqW57pwMAsCgmZpM5zSIVQVTh.jpg",
    description: "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts. But just how far will this desperate father go to protect his family?",
    genre: [
      Genres.Horror,
    ],
    duration: 153
  },
  {
    id: 13186,
    title: "Wrong Turn 2: Dead End",
    rating: 5.5,
    releaseDate: "2007-08-25",
    imagePath: "https://image.tmdb.org/t/p/w500/ftmiyfrTrqTi5Qod62nGRP9BGPn.jpg",
    url: "https://image.tmdb.org/t/p/w500/ftmiyfrTrqTi5Qod62nGRP9BGPn.jpg",
    description: "Retired military commander Colonel Dale Murphy hosts the simulated post-apocalyptic reality show where participants are challenged to survive a remote West Virginia wasteland. But the show turns into a nightmarish showdown when each realizes they are being hunted by an inbred family of cannibals determined to make them all dinner!",
    genre: [
      Genres.Horror
    ],
    duration: 96
  },
  {
    id: 9487,
    title: "A Bug's Life",
    rating: 6.8,
    releaseDate: "1998-11-25",
    imagePath: "https://image.tmdb.org/t/p/w500/u9qGMRwcPwP0WETxulS5hKUsEum.jpg",
    url: "https://image.tmdb.org/t/p/w500/u9qGMRwcPwP0WETxulS5hKUsEum.jpg",
    description: "On behalf of \"oppressed bugs everywhere,\" an inventive ant named Flik hires a troupe of warrior bugs to defend his bustling colony from a horde of freeloading grasshoppers led by the evil-minded Hopper.",
    genre: [
      Genres.Comedy,
    ],
    duration: 95
  },
  {
    id: 286217,
    title: "The Martian",
    rating: 7.6,
    releaseDate: "2015-09-30",
    imagePath: "https://image.tmdb.org/t/p/w500/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg",
    url: "https://image.tmdb.org/t/p/w500/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg",
    description: "During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive.",
    genre: [
      Genres.Drama
    ],
    duration: 141
  },
  {
    id: 318846,
    title: "The Big Short",
    rating: 7.3,
    releaseDate: "2015-12-11",
    imagePath: "https://image.tmdb.org/t/p/w500/p11Ftd4VposrAzthkhF53ifYZRl.jpg",
    url: "https://image.tmdb.org/t/p/w500/p11Ftd4VposrAzthkhF53ifYZRl.jpg",
    description: "The men who made millions from a global economic meltdown.",
    genre: [
      Genres.Comedy,
    ],
    duration: 130
  },
  {
    id: 186542222,
    title: "The Fifth Element",
    rating: 7.3,
    releaseDate: "1997-05-07",
    imagePath: "https://image.tmdb.org/t/p/w500/zaFa1NRZEnFgRTv5OVXkNIZO78O.jpg",
    url: "https://image.tmdb.org/t/p/w500/zaFa1NRZEnFgRTv5OVXkNIZO78O.jpg",
    description: "In 2257, a taxi driver is unintentionally given the task of saving a young girl who is part of the key that will ensure the survival of humanity.",
    genre: [
      Genres.Horror,
    ],
    duration: 126
  },
  {
    id: 1355235,
    title: "Forrest Gump",
    rating: 8.3,
    releaseDate: "1994-07-06",
    imagePath: "https://image.tmdb.org/t/p/w500/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg",
    url: "https://image.tmdb.org/t/p/w500/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg",
    description: "A man with a low IQ has accomplished great things in his life and been present during significant historic events - in each case, far exceeding what anyone imagined he could do. Yet, despite all the things he has attained, his one true love eludes him. 'Forrest Gump' is the story of a man who rose above his challenges, and who proved that determination, courage, and love are more important than ability.",
    genre: [
      Genres.Comedy,
    ],
    duration: 142
  },
  {
    id: 9388,
    title: "Thank You for Smoking",
    rating: 7.2,
    releaseDate: "2005-09-05",
    imagePath: "https://image.tmdb.org/t/p/w500/v8PKsbAGIvAhKbbRUjdQ3jgFD2S.jpg",
    url: "https://image.tmdb.org/t/p/w500/v8PKsbAGIvAhKbbRUjdQ3jgFD2S.jpg",
    description: "Nick Naylor is a charismatic spin-doctor for Big Tobacco who'll fight to protect America's right to smoke -- even if it kills him -- while still remaining a role model for his 12-year old son. When he incurs the wrath of a senator bent on snuffing out cigarettes, Nick's powers of \"filtering the truth\" will be put to the test.",
    genre: [
      Genres.Comedy,
    ],
    duration: 92
  },
  {
    id: 281957,
    title: "The Revenant",
    rating: 7.4,
    releaseDate: "2015-12-25",
    imagePath: "https://image.tmdb.org/t/p/w500/oXUWEc5i3wYyFnL1Ycu8ppxxPvs.jpg",
    url: "https://image.tmdb.org/t/p/w500/oXUWEc5i3wYyFnL1Ycu8ppxxPvs.jpg",
    description: "In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after a bear mauling.",
    genre: [
      Genres.Horror
    ],
    duration: 156
  },
  {
    id: 11324,
    title: "Shutter Island",
    rating: 7.9,
    releaseDate: "2010-02-18",
    imagePath: "https://image.tmdb.org/t/p/w500/zumLrxQmbpqhGcjpYcmZ1YXCCvI.jpg",
    url: "https://image.tmdb.org/t/p/w500/zumLrxQmbpqhGcjpYcmZ1YXCCvI.jpg",
    description: "World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by his troubling visions and also by a mysterious doctor.",
    genre: [
      Genres.Horror,
    ],
    duration: 138
  },
  {
    id: 44214,
    title: "Black Swan",
    rating: 7.4,
    releaseDate: "2010-12-02",
    imagePath: "https://image.tmdb.org/t/p/w500/dQ7uxvsVTspVIsqjfgQj8usJpwX.jpg",
    url: "https://image.tmdb.org/t/p/w500/dQ7uxvsVTspVIsqjfgQj8usJpwX.jpg",
    description: "A ballet dancer wins the lead in \"Swan Lake\" and is perfect for the role of the delicate White Swan - Princess Odette - but slowly loses her mind as she becomes more and more like Odile, the Black Swan.",
    genre: [
      Genres.Horror
    ],
    duration: 108
  },
  {
    id: 6479,
    title: "I Am Legend",
    rating: 7,
    releaseDate: "2007-12-14",
    imagePath: "https://image.tmdb.org/t/p/w500/6OA0I8hhW9zftWoCYxJAzXW9UIN.jpg",
    url: "https://image.tmdb.org/t/p/w500/6OA0I8hhW9zftWoCYxJAzXW9UIN.jpg",
    description: "Robert Neville is a scientist who was unable to stop the spread of the terrible virus that was incurable and man-made. Immune, Neville is now the last human survivor in what is left of New York City and perhaps the world. For three years, Neville has faithfully sent out daily radio messages, desperate to find any other survivors who might be out there. But he is not alone.",
    genre: [
      Genres.Horror,
    ],
    duration: 101
  },
  {
    id: 137,
    title: "Groundhog Day",
    rating: 7.5,
    releaseDate: "1993-02-11",
    imagePath: "https://image.tmdb.org/t/p/w500/vXjVd0Vu0MXRZnga7wEnHIIhO5B.jpg",
    url: "https://image.tmdb.org/t/p/w500/vXjVd0Vu0MXRZnga7wEnHIIhO5B.jpg",
    description: "A narcissistic TV weatherman, along with his attractive-but-distant producer and mawkish cameraman, is sent to report on Groundhog Day in the small town of Punxsutawney, where he finds himself repeating the same day over and over.",
    genre: [
      Genres.Comedy
    ],
    duration: 101
  },
  {
    id: 5255,
    title: "The Polar Express",
    rating: 6.5,
    releaseDate: "2004-11-10",
    imagePath: "https://image.tmdb.org/t/p/w500/2NETsNUxcfBdKtq3W5YbT9O03Ak.jpg",
    url: "https://image.tmdb.org/t/p/w500/2NETsNUxcfBdKtq3W5YbT9O03Ak.jpg",
    description: "When a doubting young boy takes an extraordinary train ride to the North Pole, he embarks on a journey of self-discovery that shows him that the wonder of life never fades for those who believe.",
    genre: [
      Genres.Drama
    ],
    duration: 100
  },
  {
    id: 1571,
    title: "Live Free or Die Hard",
    rating: 6.4,
    releaseDate: "2007-06-20",
    imagePath: "https://image.tmdb.org/t/p/w500/pHWgbaXiQD2nmex7u8Xv6XmhaZS.jpg",
    url: "https://image.tmdb.org/t/p/w500/pHWgbaXiQD2nmex7u8Xv6XmhaZS.jpg",
    description: "John McClane is back and badder than ever, and this time he's working for Homeland Security. He calls on the services of a young hacker in his bid to stop a ring of Internet terrorists intent on taking control of America's computer infrastructure.",
    genre: [
      Genres.Horror
    ],
    duration: 128
  },
  {
    id: 568,
    title: "Apollo 13",
    rating: 7.3,
    releaseDate: "1995-06-30",
    imagePath: "https://image.tmdb.org/t/p/w500/6JQ9z3V9x4vlU2GSZx2yNO0PvuX.jpg",
    url: "https://image.tmdb.org/t/p/w500/6JQ9z3V9x4vlU2GSZx2yNO0PvuX.jpg",
    description: "The true story of technical troubles that scuttle the Apollo 13 lunar mission in 1971, risking the lives of astronaut Jim Lovell and his crew, with the failed journey turning into a thrilling saga of heroism. Drifting more than 200,000 miles from Earth, the astronauts work furiously with the ground crew to avert tragedy.",
    genre: [
      Genres.Drama
    ],
    duration: 140
  },
  {
    id: 217,
    title: "Indiana Jones and the Kingdom of the Crystal Skull",
    rating: 5.7,
    releaseDate: "2008-05-21",
    imagePath: "https://image.tmdb.org/t/p/w500/qY1x6v5daMDTr904G3y84WVgpfC.jpg",
    url: "https://image.tmdb.org/t/p/w500/qY1x6v5daMDTr904G3y84WVgpfC.jpg",
    description: "Set during the Cold War, the Soviets – led by sword-wielding Irina Spalko – are in search of a crystal skull which has supernatural powers related to a mystical Lost City of Gold. After being captured and then escaping from them, Indy is coerced to head to Peru at the behest of a young man whose friend – and Indy's colleague – Professor Oxley has been captured for his knowledge of the skull's whereabouts.",
    genre: [
      Genres.Action
    ],
    duration: 122
  },
  {
    id: 57201,
    title: "The Lone Ranger",
    rating: 5.9,
    releaseDate: "2013-07-03",
    imagePath: "https://image.tmdb.org/t/p/w500/b4vil5ueYJNBNypHmo1tpuevh4z.jpg",
    url: "https://image.tmdb.org/t/p/w500/b4vil5ueYJNBNypHmo1tpuevh4z.jpg",
    description: "The Texas Rangers chase down a gang of outlaws led by Butch Cavendish, but the gang ambushes the Rangers, seemingly killing them all. One survivor is found, however, by an American Indian named Tonto, who nurses him back to health. The Ranger, donning a mask and riding a white stallion named Silver, teams up with Tonto to bring the unscrupulous gang and others of that ilk to justice.",
    genre: [
      Genres.Drama
    ],
    duration: 149
  },
  {
    id: 20526,
    title: "TRON: Legacy",
    rating: 6.3,
    releaseDate: "2010-12-10",
    imagePath: "https://image.tmdb.org/t/p/w500/vllvystwQjmXzy5OvBKnGl1JREF.jpg",
    url: "https://image.tmdb.org/t/p/w500/vllvystwQjmXzy5OvBKnGl1JREF.jpg",
    description: "Sam Flynn, the tech-savvy and daring son of Kevin Flynn, investigates his father's disappearance and is pulled into The Grid. With the help of a mysterious program named Quorra, Sam quests to stop evil dictator Clu from crossing into the real world.",
    genre: [
      Genres.Action
    ],
    duration: 125
  },
  {
    id: 644,
    title: "A.I. Artificial Intelligence",
    rating: 6.9,
    releaseDate: "2001-06-29",
    imagePath: "https://image.tmdb.org/t/p/w500/wnUAcUrMRGPPZUDroLeZhSjLkuu.jpg",
    url: "https://image.tmdb.org/t/p/w500/wnUAcUrMRGPPZUDroLeZhSjLkuu.jpg",
    description: "A robotic boy, the first programmed to love, David is adopted as a test case by a Cybertronics employee and his wife. Though he gradually becomes their child, a series of unexpected circumstances make this life impossible for David. Without final acceptance by humans or machines, David embarks on a journey to discover where he truly belongs, uncovering a world in which the line between robot and machine is both vast and profoundly thin.",
    genre: [
      Genres.Drama
    ],
    duration: 146
  },
  {
    id: 1593,
    title: "Night at the Museum",
    rating: 6.4,
    releaseDate: "2006-10-20",
    imagePath: "https://image.tmdb.org/t/p/w500/NUbCSwy2EQ9Z6psUjPqr3WdVI2.jpg",
    url: "https://image.tmdb.org/t/p/w500/NUbCSwy2EQ9Z6psUjPqr3WdVI2.jpg",
    description: "Chaos reigns at the natural history museum when night watchman Larry Daley accidentally stirs up an ancient curse, awakening Attila the Hun, an army of gladiators, a Tyrannosaurus rex and other exhibits. Larry tries desperately to keep the museum under control, but he's fighting a losing battle until President Teddy Roosevelt comes to the rescue.",
    genre: [
      Genres.Comedy,
    ],
    duration: 108
  },
  {
    id: 38,
    title: "Eternal Sunshine of the Spotless Mind",
    rating: 8,
    releaseDate: "2004-03-19",
    imagePath: "https://image.tmdb.org/t/p/w500/7y3eYvTsGjxPYDtSnumCLIMDkrV.jpg",
    url: "https://image.tmdb.org/t/p/w500/7y3eYvTsGjxPYDtSnumCLIMDkrV.jpg",
    description: "Joel Barish, heartbroken that his girlfriend underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realises that he still loves her, and may be too late to correct his mistake.",
    genre: [
      Genres.Drama
    ],
    duration: 108
  },
  {
    id: 28,
    title: "Apocalypse Now",
    rating: 8.1,
    releaseDate: "1979-08-15",
    imagePath: "https://image.tmdb.org/t/p/w500/jcvJ2xcVWU9Wh0hZAxcs103s8nN.jpg",
    url: "https://image.tmdb.org/t/p/w500/jcvJ2xcVWU9Wh0hZAxcs103s8nN.jpg",
    description: "At the height of the Vietnam war, Captain Benjamin Willard is sent on a dangerous mission that, officially, \"does not exist, nor will it ever exist.\" His goal is to locate - and eliminate - a mysterious Green Beret Colonel named Walter Kurtz, who has been leading his personal army on illegal guerrilla missions into enemy territory.",
    genre: [
      Genres.Drama
    ],
    duration: 147
  },
  {
    id: 194,
    title: "Amélie",
    rating: 7.9,
    releaseDate: "2001-04-25",
    imagePath: "https://image.tmdb.org/t/p/w500/f0uorE7K7ggHfr8r7pUTOHWkOlE.jpg",
    url: "https://image.tmdb.org/t/p/w500/f0uorE7K7ggHfr8r7pUTOHWkOlE.jpg",
    description: "At a tiny Parisian café, the adorable yet painfully shy Amélie (Audrey Tautou) accidentally discovers a gift for helping others. Soon Amelie is spending her days as a matchmaker, guardian angel, and all-around do-gooder. But when she bumps into a handsome stranger, will she find the courage to become the star of her very own love story?",
    genre: [
      Genres.Comedy,
    ],
    duration: 122
  },
  {
    id: 22970,
    title: "The Cabin in the Woods",
    rating: 6.6,
    releaseDate: "2012-04-12",
    imagePath: "https://image.tmdb.org/t/p/w500/utfJuX6DfR28Mv2FMfnPFAYOmTU.jpg",
    url: "https://image.tmdb.org/t/p/w500/utfJuX6DfR28Mv2FMfnPFAYOmTU.jpg",
    description: "Five college friends spend the weekend at a remote cabin in the woods, where they get more than they bargained for. Together, they must discover the truth behind the cabin in the woods.",
    genre: [
      Genres.Comedy,
      Genres.Horror
    ],
    duration: 95
  },
  {
    id: 261023,
    title: "Black Mass",
    rating: 6.3,
    releaseDate: "2015-09-04",
    imagePath: "https://image.tmdb.org/t/p/w500/yIVnNriiyl522hk3LFLJrrMovhP.jpg",
    url: "https://image.tmdb.org/t/p/w500/yIVnNriiyl522hk3LFLJrrMovhP.jpg",
    description: "The true story of Whitey Bulger, the brother of a state senator and the most infamous violent criminal in the history of South Boston, who became an FBI informant to take down a Mafia family invading his turf.",
    genre: [
      Genres.Horror
    ],
    duration: 122
  },
  {
    id: 59967,
    title: "Looper",
    rating: 6.7,
    releaseDate: "2012-09-26",
    imagePath: "https://image.tmdb.org/t/p/w500/o4qXZMrZlfuTfwwNGMyTcx6p2uO.jpg",
    url: "https://image.tmdb.org/t/p/w500/o4qXZMrZlfuTfwwNGMyTcx6p2uO.jpg",
    description: "In the futuristic action thriller Looper, time travel will be invented but it will be illegal and only available on the black market. When the mob wants to get rid of someone, they will send their target 30 years into the past where a looper, a hired gun, like Joe is waiting to mop up. Joe is getting rich and life is good until the day the mob decides to close the loop, sending back Joe's future self for assassination.",
    genre: [
      Genres.Horror,
    ],
    duration: 118
  },
  {
    id: 429,
    title: "The Good, the Bad and the Ugly",
    rating: 8.2,
    releaseDate: "1966-12-23",
    imagePath: "https://image.tmdb.org/t/p/w500/wfPHdfofBD5PN96dV96a51B3Ja2.jpg",
    url: "https://image.tmdb.org/t/p/w500/wfPHdfofBD5PN96dV96a51B3Ja2.jpg",
    description: "While the Civil War rages between the Union and the Confederacy, three men – a quiet loner, a ruthless hit man and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
    genre: [
      Genres.Drama
    ],
    duration: 161
  },
  {
    id: 1954,
    title: "The Butterfly Effect",
    rating: 7.4,
    releaseDate: "2004-01-22",
    imagePath: "https://image.tmdb.org/t/p/w500/3PAQy3CyNNJPES772OFMx47lFEE.jpg",
    url: "https://image.tmdb.org/t/p/w500/3PAQy3CyNNJPES772OFMx47lFEE.jpg",
    description: "A young man struggles to access sublimated childhood memories. He finds a technique that allows him to travel back into the past, to occupy his childhood body and change history. However, he soon finds that every change he makes has unexpected consequences.",
    genre: [
      Genres.Horror
    ],
    duration: 113
  },
  {
    id: 36643,
    title: "The World Is Not Enough",
    rating: 6.1,
    releaseDate: "1999-11-08",
    imagePath: "https://image.tmdb.org/t/p/w500/aPfALBxfgx2tsbTwRMR1MbNHSvn.jpg",
    url: "https://image.tmdb.org/t/p/w500/aPfALBxfgx2tsbTwRMR1MbNHSvn.jpg",
    description: "Greed, revenge, world dominance and high-tech terrorism – it's all in a day's work for Bond, who's on a mission to a protect beautiful oil heiress from a notorious terrorist. In a race against time that culminates in a dramatic submarine showdown, Bond works to defuse the international power struggle that has the world's oil supply hanging in the balance.",
    genre: [
      Genres.Horror
    ],
    duration: 128
  },
  {
    id: 1495,
    title: "Kingdom of Heaven",
    rating: 6.6,
    releaseDate: "2005-05-03",
    imagePath: "https://image.tmdb.org/t/p/w500/aB4urkgTxBURJMUkd0kceDD7FUM.jpg",
    url: "https://image.tmdb.org/t/p/w500/aB4urkgTxBURJMUkd0kceDD7FUM.jpg",
    description: "After his wife dies, a blacksmith named Balian is thrust into royalty, political intrigue and bloody holy wars during the Crusades.",
    genre: [
      Genres.Drama
    ],
    duration: 144
  },
  {
    id: 1573,
    title: "Die Hard 2",
    rating: 6.7,
    releaseDate: "1990-07-02",
    imagePath: "https://image.tmdb.org/t/p/w500/zSgL998DXaljsCmwQuwDM8Ak4rV.jpg",
    url: "https://image.tmdb.org/t/p/w500/zSgL998DXaljsCmwQuwDM8Ak4rV.jpg",
    description: "John McClane is an off-duty cop gripped with a feeling of déjà vu when on a snowy Christmas Eve in the nation's capital, terrorists seize a major international airport, holding thousands of holiday travelers hostage. Renegade military commandos led by a murderous rogue officer plot to rescue a drug lord from justice and are prepared for every contingency except one: McClane's smart-mouthed heroics.",
    genre: [
      Genres.Horror
    ],
    duration: 124
  },
  {
    id: 500,
    title: "Reservoir Dogs",
    rating: 8.1,
    releaseDate: "1992-09-02",
    imagePath: "https://image.tmdb.org/t/p/w500/tB2ITHg556e7aTV6cqQqVAXkdxN.jpg",
    url: "https://image.tmdb.org/t/p/w500/tB2ITHg556e7aTV6cqQqVAXkdxN.jpg",
    description: "A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors -- veteran Mr. White, newcomer Mr. Orange, psychopathic parolee Mr. Blonde, bickering weasel Mr. Pink and Nice Guy Eddie -- unravel.",
    genre: [
      Genres.Horror
    ],
    duration: 99
  },
  {
    id: 11970,
    title: "Hercules",
    rating: 7.4,
    releaseDate: "1997-06-26",
    imagePath: "https://image.tmdb.org/t/p/w500/yds93kIrmH1aNN0YKAcHLyOkNEV.jpg",
    url: "https://image.tmdb.org/t/p/w500/yds93kIrmH1aNN0YKAcHLyOkNEV.jpg",
    description: "Bestowed with superhuman strength, a young mortal named Hercules sets out to prove himself a hero in the eyes of his father, the great god Zeus. Along with his friends Pegasus, a flying horse, and Phil, a personal trainer, Hercules is tricked by the hilarious, hotheaded villain Hades, who's plotting to take over Mount Olympus!",
    genre: [
      Genres.Comedy,
    ],
    duration: 93
  },
  {
    id: 164,
    title: "Breakfast at Tiffany's",
    rating: 7.6,
    releaseDate: "1961-10-05",
    imagePath: "https://image.tmdb.org/t/p/w500/c95lbDwL5WT8PV9DZsdSvRtXKNA.jpg",
    url: "https://image.tmdb.org/t/p/w500/c95lbDwL5WT8PV9DZsdSvRtXKNA.jpg",
    description: "Fortune hunter Holly Golightly finds herself captivated by aspiring writer Paul Varjak, who's moved into her building on a wealthy woman's dime. As romance blooms between Paul and Holly, Doc Golightly shows up on the scene, revealing Holly's past.",
    genre: [
      Genres.Comedy,
    ],
    duration: 110
  },
  {
    id: 425895,
    title: "Tisay",
    rating: 9,
    releaseDate: "2016-11-14",
    imagePath: "https://image.tmdb.org/t/p/w500/lt03HzS8tfDg5ipUQcLqIRNs0sC.jpg",
    url: "https://image.tmdb.org/t/p/w500/lt03HzS8tfDg5ipUQcLqIRNs0sC.jpg",
    description: "In the world of semi-pro basketball, a beautiful bookie recruits a naïve but promising player to the underworld of game-fixing.",
    genre: [
      Genres.Drama
    ],
    duration: 100
  },
  {
    id: 395,
    title: "AVP: Alien vs. Predator",
    rating: 5.6,
    releaseDate: "2004-08-12",
    imagePath: "https://image.tmdb.org/t/p/w500/9xzRKUBIqLwhhOYtcE7P1BbWXP9.jpg",
    url: "https://image.tmdb.org/t/p/w500/9xzRKUBIqLwhhOYtcE7P1BbWXP9.jpg",
    description: "When scientists discover something in the Arctic that appears to be a buried Pyramid, they send a research team out to investigate. Little do they know that they are about to step into a hunting ground where Aliens are grown as sport for the Predator race.",
    genre: [
      Genres.Action
    ],
    duration: 101
  },
  {
    id: 767,
    title: "Harry Potter and the Half-Blood Prince",
    rating: 7.5,
    releaseDate: "2009-07-07",
    imagePath: "https://image.tmdb.org/t/p/w500/bFXys2nhALwDvpkF3dP3Vvdfn8b.jpg",
    url: "https://image.tmdb.org/t/p/w500/bFXys2nhALwDvpkF3dP3Vvdfn8b.jpg",
    description: "As Harry begins his sixth year at Hogwarts, he discovers an old book marked as 'Property of the Half-Blood Prince', and begins to learn more about Lord Voldemort's dark past.",
    genre: [
      Genres.Drama
    ],
    duration: 153
  },
  {
    id: 254,
    title: "King Kong",
    rating: 6.6,
    releaseDate: "2005-12-12",
    imagePath: "https://image.tmdb.org/t/p/w500/iQYMVoI9QE2wQCOSrxhiBYd4v0w.jpg",
    url: "https://image.tmdb.org/t/p/w500/iQYMVoI9QE2wQCOSrxhiBYd4v0w.jpg",
    description: "In 1933 New York, an overly ambitious movie producer coerces his cast and hired ship crew to travel to mysterious Skull Island, where they encounter Kong, a giant ape who is immediately smitten with the leading lady.",
    genre: [
      Genres.Drama
    ],
    duration: 187
  },
  {
    id: 8392,
    title: "My Neighbor Totoro",
    rating: 8,
    releaseDate: "1988-04-16",
    imagePath: "https://image.tmdb.org/t/p/w500/2i0OOjvi7CqNQA6ZtYJtL65P9oZ.jpg",
    url: "https://image.tmdb.org/t/p/w500/2i0OOjvi7CqNQA6ZtYJtL65P9oZ.jpg",
    description: "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
    genre: [
      Genres.Drama
    ],
    duration: 86
  },
  {
    id: 1538,
    title: "Collateral",
    rating: 7.1,
    releaseDate: "2004-08-04",
    imagePath: "https://image.tmdb.org/t/p/w500/fmkv2eRuYCTq7A5jzMBNgoNe1vA.jpg",
    url: "https://image.tmdb.org/t/p/w500/fmkv2eRuYCTq7A5jzMBNgoNe1vA.jpg",
    description: "Cab driver Max picks up a man who offers him $600 to drive him around. But the promise of easy money sours when Max realizes his fare is an assassin.",
    genre: [
      Genres.Horror
    ],
    duration: 120
  },
  {
    id: 187,
    title: "Sin City",
    rating: 7.3,
    releaseDate: "2005-04-01",
    imagePath: "https://image.tmdb.org/t/p/w500/vKJVGOKPyWqp9d2EX5NH1liqRqR.jpg",
    url: "https://image.tmdb.org/t/p/w500/vKJVGOKPyWqp9d2EX5NH1liqRqR.jpg",
    description: "Welcome to Sin City. This town beckons to the tough, the corrupt, the brokenhearted. Some call it dark… Hard-boiled. Then there are those who call it home — Crooked cops, sexy dames, desperate vigilantes. Some are seeking revenge, others lust after redemption, and then there are those hoping for a little of both. A universe of unlikely and reluctant heroes still trying to do the right thing in a city that refuses to care.",
    genre: [
      Genres.Horror,
    ],
    duration: 124
  },
  {
    id: 587,
    title: "Big Fish",
    rating: 7.7,
    releaseDate: "2003-12-25",
    imagePath: "https://image.tmdb.org/t/p/w500/6DRFdlNZpAaEt7eejsbAlJGgaM7.jpg",
    url: "https://image.tmdb.org/t/p/w500/6DRFdlNZpAaEt7eejsbAlJGgaM7.jpg",
    description: "Throughout his life Edward Bloom has always been a man of big appetites, enormous passions and tall tales. In his later years, he remains a huge mystery to his son, William. Now, to get to know the real man, Will begins piecing together a true picture of his father from flashbacks of his amazing adventures.",
    genre: [
    ],
    duration: 125
  },
  {
    id: 107,
    title: "Snatch",
    rating: 7.7,
    releaseDate: "2000-09-01",
    imagePath: "https://image.tmdb.org/t/p/w500/on9JlbGEccLsYkjeEph2Whm1DIp.jpg",
    url: "https://image.tmdb.org/t/p/w500/on9JlbGEccLsYkjeEph2Whm1DIp.jpg",
    description: "The second film from British director Guy Ritchie. Snatch tells an obscure story similar to his first fast-paced crazy character-colliding filled film “Lock, Stock and Two Smoking Barrels.” There are two overlapping stories here – one is the search for a stolen diamond, and the other about a boxing promoter who’s having trouble with a psychotic gangster.",
    genre: [
      Genres.Horror,
    ],
    duration: 103
  },
  {
    id: 64635,
    title: "Total Recall",
    rating: 5.8,
    releaseDate: "2012-08-02",
    imagePath: "https://image.tmdb.org/t/p/w500/tWBo7aZk3I1dLxmMj7ZJcN8uke5.jpg",
    url: "https://image.tmdb.org/t/p/w500/tWBo7aZk3I1dLxmMj7ZJcN8uke5.jpg",
    description: "Welcome to Rekall, the company that can turn your dreams into real memories. For a factory worker named Douglas Quaid, even though he's got a beautiful wife who he loves, the mind-trip sounds like the perfect vacation from his frustrating life - real memories of life as a super-spy might be just what he needs. But when the procedure goes horribly wrong, Quaid becomes a hunted man. Finding himself on the run from the police - controlled by Chancellor Cohaagen, the leader of the free world - Quaid teams up with a rebel fighter to find the head of the underground resistance and stop Cohaagen. The line between fantasy and reality gets blurred and the fate of his world hangs in the balance as Quaid discovers his true identity, his true love, and his true fate.",
    genre: [
      Genres.Horror
    ],
    duration: 121
  },
  {
    id: 44833,
    title: "Battleship",
    rating: 5.5,
    releaseDate: "2012-04-11",
    imagePath: "https://image.tmdb.org/t/p/w500/7hN6WtMepoMZyeHZU2DM21cEj3z.jpg",
    url: "https://image.tmdb.org/t/p/w500/7hN6WtMepoMZyeHZU2DM21cEj3z.jpg",
    description: "When mankind beams a radio signal into space, a reply comes from ‘Planet G’, in the form of several alien crafts that splash down in the waters off Hawaii. Lieutenant Alex Hopper is a weapons officer assigned to the USS John Paul Jones, part of an international naval coalition which becomes the world's last hope for survival as they engage the hostile alien force of unimaginable strength. While taking on the invaders, Hopper must also try to live up to the potential his brother, and his fiancée's father, Admiral Shane, expect of him.",
    genre: [
      Genres.Horror,
    ],
    duration: 131
  },
  {
    id: 137106,
    title: "The Lego Movie",
    rating: 7.4,
    releaseDate: "2014-02-06",
    imagePath: "https://image.tmdb.org/t/p/w500/lMHbadNmznKs5vgBAkHxKGHulOa.jpg",
    url: "https://image.tmdb.org/t/p/w500/lMHbadNmznKs5vgBAkHxKGHulOa.jpg",
    description: "An ordinary Lego mini-figure, mistakenly thought to be the extraordinary MasterBuilder, is recruited to join a quest to stop an evil Lego tyrant from gluing the universe together.",
    genre: [
      Genres.Comedy,
    ],
    duration: 100
  },
  {
    id: 1366,
    title: "Rocky",
    rating: 7.6,
    releaseDate: "1976-11-21",
    imagePath: "https://image.tmdb.org/t/p/w500/9TUR3s1PMJHwDRbpm7PWQ0S7IRy.jpg",
    url: "https://image.tmdb.org/t/p/w500/9TUR3s1PMJHwDRbpm7PWQ0S7IRy.jpg",
    description: "When world heavyweight boxing champion, Apollo Creed wants to give an unknown fighter a shot at the title as a publicity stunt, his handlers choose palooka Rocky Balboa, an uneducated collector for a Philadelphia loan shark. Rocky teams up with trainer  Mickey Goldmill to make the most of this once in a lifetime break.",
    genre: [
      Genres.Drama
    ],
    duration: 119
  },
  {
    id: 291805,
    title: "Now You See Me 2",
    rating: 6.7,
    releaseDate: "2016-06-02",
    imagePath: "https://image.tmdb.org/t/p/w500/hU0E130tsGdsYa4K9lc3Xrn5Wyt.jpg",
    url: "https://image.tmdb.org/t/p/w500/hU0E130tsGdsYa4K9lc3Xrn5Wyt.jpg",
    description: "One year after outwitting the FBI and winning the public’s adulation with their mind-bending spectacles, the Four Horsemen resurface only to find themselves face to face with a new enemy who enlists them to pull off their most dangerous heist yet.",
    genre: [
      Genres.Comedy,
      Genres.Horror
    ],
    duration: 129
  },
  {
    id: 277,
    title: "Underworld",
    rating: 6.6,
    releaseDate: "2003-09-19",
    imagePath: "https://image.tmdb.org/t/p/w500/rdkxl5iXdpVU188cL1LLG3sy6z4.jpg",
    url: "https://image.tmdb.org/t/p/w500/rdkxl5iXdpVU188cL1LLG3sy6z4.jpg",
    description: "Vampires and werewolves have waged a nocturnal war against each other for centuries. But all bets are off when a female vampire warrior named Selene, who's famous for her strength and werewolf-hunting prowess, becomes smitten with a peace-loving male werewolf, Michael, who wants to end the war.",
    genre: [
      Genres.Horror
    ],
    duration: 121
  },
  {
    id: 268,
    title: "Batman",
    rating: 7,
    releaseDate: "1989-06-23",
    imagePath: "https://image.tmdb.org/t/p/w500/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg",
    url: "https://image.tmdb.org/t/p/w500/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg",
    description: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker, who has seized control of Gotham's underworld.",
    genre: [
      Genres.Drama
    ],
    duration: 126
  },
  {
    id: 50619,
    title: "The Twilight Saga: Breaking Dawn - Part 1",
    rating: 5.8,
    releaseDate: "2011-03-15",
    imagePath: "https://image.tmdb.org/t/p/w500/q23U9glt0RJIvM0f7g5BqJbqncx.jpg",
    url: "https://image.tmdb.org/t/p/w500/q23U9glt0RJIvM0f7g5BqJbqncx.jpg",
    description: "The new found married bliss of Bella Swan and vampire Edward Cullen is cut short when a series of betrayals and misfortunes threatens to destroy their world. Bella soon discovers she is pregnant, and during a nearly fatal childbirth, Edward finally fulfills her wish to become immortal. But the arrival of their remarkable daughter, Renesmee, sets in motion a perilous chain of events that pits the Cullens and their allies against the Volturi, the fearsome council of vampire leaders, setting the stage for an all-out battle.",
    genre: [
      Genres.Drama
    ],
    duration: 117
  },
  {
    id: 77,
    title: "Memento",
    rating: 8.1,
    releaseDate: "2000-10-11",
    imagePath: "https://image.tmdb.org/t/p/w500/fQMSaP88cf1nz4qwuNEEFtazuDM.jpg",
    url: "https://image.tmdb.org/t/p/w500/fQMSaP88cf1nz4qwuNEEFtazuDM.jpg",
    description: "Suffering short-term memory loss after a head injury, Leonard Shelby embarks on a grim quest to find the lowlife who murdered his wife in this gritty, complex thriller that packs more knots than a hangman's noose. To carry out his plan, Shelby snaps Polaroids of people and places, jotting down contextual notes on the backs of photos to aid in his search and jog his memory. He even tattoos his own body in a desperate bid to remember.",
    genre: [
      Genres.Horror
    ],
    duration: 113
  },
  {
    id: 341174,
    title: "Fifty Shades Darker",
    rating: 6,
    releaseDate: "2017-02-08",
    imagePath: "https://image.tmdb.org/t/p/w500/wnVHDbGz7RvDAHFAsVVT88FxhrP.jpg",
    url: "https://image.tmdb.org/t/p/w500/wnVHDbGz7RvDAHFAsVVT88FxhrP.jpg",
    description: "When a wounded Christian Grey tries to entice a cautious Ana Steele back into his life, she demands a new arrangement before she will give him another chance. As the two begin to build trust and find stability, shadowy figures from Christian’s past start to circle the couple, determined to destroy their hopes for a future together.",
    genre: [
      Genres.Drama
    ],
    duration: 118
  },
  {
    id: 447332,
    title: "A Quiet Place",
    rating: 6.5,
    releaseDate: "2018-04-05",
    imagePath: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    url: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    description: "A Quiet Place is a 2018 American horror film directed by John Krasinski, who also stars in the film with Emily Blunt, his wife in real life. The screenplay was written by Krasinski, Bryan Woods, and Scott Beck based on a story by Woods and Beck. The plot follows a family of four who must live life in silence while hiding from creatures that hunt by sound.",
    genre: [
      Genres.Horror
    ],
    duration: 95
  },
  {
    id: 1368,
    title: "First Blood",
    rating: 7.3,
    releaseDate: "1982-10-22",
    imagePath: "https://image.tmdb.org/t/p/w500/bbYNNEGLXrV3lJpHDg7CKaPscCb.jpg",
    url: "https://image.tmdb.org/t/p/w500/bbYNNEGLXrV3lJpHDg7CKaPscCb.jpg",
    description: "When former Green Beret John Rambo is harassed by local law enforcement and arrested for vagrancy, the Vietnam vet snaps, runs for the hills and rat-a-tat-tats his way into the action-movie hall of fame. Hounded by a relentless sheriff, Rambo employs heavy-handed guerilla tactics to shake the cops off his tail.",
    genre: [
      Genres.Horror,
    ],
    duration: 93
  },
  {
    id: 364,
    title: "Batman Returns",
    rating: 6.7,
    releaseDate: "1992-06-19",
    imagePath: "https://image.tmdb.org/t/p/w500/ifzddUhnsTf1h6guBUKBlDwuS1t.jpg",
    url: "https://image.tmdb.org/t/p/w500/ifzddUhnsTf1h6guBUKBlDwuS1t.jpg",
    description: "Having defeated the Joker, Batman now faces the Penguin - a warped and deformed individual who is intent on being accepted into Gotham society. Crooked businessman Max Schreck is coerced into helping him become Mayor of Gotham and they both attempt to expose Batman in a different light. Selina Kyle, Max's secretary, is thrown from the top of a building and is transformed into Catwoman - a mysterious figure who has the same personality disorder as Batman. Batman must attempt to clear his name, all the time deciding just what must be done with the Catwoman.",
    genre: [
      Genres.Drama
    ],
    duration: 126
  },
  {
    id: 152601,
    title: "Her",
    rating: 7.9,
    releaseDate: "2013-12-18",
    imagePath: "https://image.tmdb.org/t/p/w500/fsoTLnUXEUTNuVCBxAJMY0HPPd.jpg",
    url: "https://image.tmdb.org/t/p/w500/fsoTLnUXEUTNuVCBxAJMY0HPPd.jpg",
    description: "In the not so distant future, Theodore, a lonely writer purchases a newly developed operating system designed to meet the user's every needs. To Theodore's surprise, a romantic relationship develops between him and his operating system. This unconventional love story blends science fiction and romance in a sweet tale that explores the nature of love and the ways that technology isolates and connects us all.",
    genre: [
      Genres.Drama
    ],
    duration: 126
  },
  {
    id: 275,
    title: "Fargo",
    rating: 7.8,
    releaseDate: "1996-04-05",
    imagePath: "https://image.tmdb.org/t/p/w500/pyEkyYgtyjOX1R9EYyUcgbK1sTn.jpg",
    url: "https://image.tmdb.org/t/p/w500/pyEkyYgtyjOX1R9EYyUcgbK1sTn.jpg",
    description: "Jerry, a small-town Minnesota car salesman is bursting at the seams with debt... but he's got a plan. He's going to hire two thugs to kidnap his wife in a scheme to collect a hefty ransom from his wealthy father-in-law. It's going to be a snap and nobody's going to get hurt... until people start dying. Enter Police Chief Marge, a coffee-drinking, parka-wearing - and extremely pregnant - investigator who'll stop at nothing to get her man. And if you think her small-time investigative skills will give the crooks a run for their ransom... you betcha!",
    genre: [
      Genres.Horror
    ],
    duration: 98
  },
  {
    id: 72105,
    title: "Ted",
    rating: 6.3,
    releaseDate: "2012-06-29",
    imagePath: "https://image.tmdb.org/t/p/w500/yLdP2vDa1BqxLSbikGypGtAEOGe.jpg",
    url: "https://image.tmdb.org/t/p/w500/yLdP2vDa1BqxLSbikGypGtAEOGe.jpg",
    description: "John Bennett, a man whose childhood wish of bringing his teddy bear to life came true, now must decide between keeping the relationship with the bear or his girlfriend, Lori.",
    genre: [
      Genres.Comedy,
    ],
    duration: 106
  },
  {
    id: 256591,
    title: "Focus",
    rating: 6.7,
    releaseDate: "2015-02-25",
    imagePath: "https://image.tmdb.org/t/p/w500/9IElGiLkxPLUWZ3avy31bNSG3Tq.jpg",
    url: "https://image.tmdb.org/t/p/w500/9IElGiLkxPLUWZ3avy31bNSG3Tq.jpg",
    description: "Nicky, a veteran con artist, takes a novice named Jess under his wing. While Nicky teaches Jess the tricks of the trade, the pair become romantically involved; but, when Jess gets uncomfortably close, Nicky ends their relationship. Three years later, Nicky is in Buenos Aires working a very dangerous scheme when Jess -- now an accomplished femme fatale -- unexpectedly shows up. Her appearance throws Nicky for a loop at a time when he cannot afford to be off his game.",
    genre: [
      Genres.Comedy,
    ],
    duration: 105
  },
  {
    id: 787,
    title: "Mr. & Mrs. Smith",
    rating: 6.5,
    releaseDate: "2005-06-07",
    imagePath: "https://image.tmdb.org/t/p/w500/dqs5BmwSULtB28Kls3IB6khTQwp.jpg",
    url: "https://image.tmdb.org/t/p/w500/dqs5BmwSULtB28Kls3IB6khTQwp.jpg",
    description: "After five (or six) years of vanilla-wedded bliss, ordinary suburbanites John and Jane Smith are stuck in a huge rut. Unbeknownst to each other, they are both coolly lethal, highly-paid assassins working for rival organisations. When they discover they're each other's next target, their secret lives collide in a spicy, explosive mix of wicked comedy, pent-up passion, nonstop action and high-tech weaponry.",
    genre: [
      Genres.Comedy,
      Genres.Horror
    ],
    duration: 120
  },
  {
    id: 82693,
    title: "Silver Linings Playbook",
    rating: 7,
    releaseDate: "2012-09-08",
    imagePath: "https://image.tmdb.org/t/p/w500/ilrZAV2klTB0FLxLb01bOp5pzD9.jpg",
    url: "https://image.tmdb.org/t/p/w500/ilrZAV2klTB0FLxLb01bOp5pzD9.jpg",
    description: "After spending eight months in a mental institution, a former teacher moves back in with his parents and tries to reconcile with his ex-wife.",
    genre: [
      Genres.Comedy,
    ],
    duration: 122
  },
  {
    id: 266856,
    title: "The Theory of Everything",
    rating: 7.9,
    releaseDate: "2014-11-26",
    imagePath: "https://image.tmdb.org/t/p/w500/4jspr8hLLuju59bCnMiefzRW4p0.jpg",
    url: "https://image.tmdb.org/t/p/w500/4jspr8hLLuju59bCnMiefzRW4p0.jpg",
    description: "The Theory of Everything is the extraordinary story of one of the world’s greatest living minds, the renowned astrophysicist Stephen Hawking, who falls deeply in love with fellow Cambridge student Jane Wilde.",
    genre: [
      Genres.Drama
    ],
    duration: 123
  },
  {
    id: 163,
    title: "Ocean's Twelve",
    rating: 6.4,
    releaseDate: "2004-12-09",
    imagePath: "https://image.tmdb.org/t/p/w500/nS3iDLQuy13XY1JH58NNl1rCuNN.jpg",
    url: "https://image.tmdb.org/t/p/w500/nS3iDLQuy13XY1JH58NNl1rCuNN.jpg",
    description: "Danny Ocean reunites with his old flame and the rest of his merry band of thieves in carrying out three huge heists in Rome, Paris and Amsterdam – but a Europol agent is hot on their heels.",
    genre: [
      Genres.Horror,
    ],
    duration: 125
  },
  {
    id: 637,
    title: "Life Is Beautiful",
    rating: 8.3,
    releaseDate: "1997-12-20",
    imagePath: "https://image.tmdb.org/t/p/w500/f7DImXDebOs148U4uPjI61iDvaK.jpg",
    url: "https://image.tmdb.org/t/p/w500/f7DImXDebOs148U4uPjI61iDvaK.jpg",
    description: "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
    genre: [
      Genres.Comedy,
    ],
    duration: 116
  },
  {
    id: 329103,
    title: "Russian Lolita",
    rating: 3.8,
    releaseDate: "2007-01-03",
    imagePath: "https://image.tmdb.org/t/p/w500/tXQa4fpOj8ab79ByTd4sGAqz36o.jpg",
    url: "https://image.tmdb.org/t/p/w500/tXQa4fpOj8ab79ByTd4sGAqz36o.jpg",
    description: "The action of a controversial novel \"Lolita\", of the famous Russian writer Vladimir Nabokov, reset to present day Russia. A mother and her daughter are running short of money and are thankful that they could rent a room to a writer. The mother is lonely and the daughter is coming of age. The mother immediately gets in love with him, which causing to the daughter a terrible jealousy. And then the daughter chooses the most unfailing weapon - she tries to discourage him from her mother. She tries to get his attention by parading around without panties, asking his help with her shower, and rubbing up against him and flashing him whenever her mother is not looking. She is even trying to convince her mom, that since she is becoming a woman, that he should teach her some of the finer points of love. Could the grown man resist the charms of a 14 year-old nymphet?",
    genre: [
      Genres.Action
    ],
    duration: 93
  },
  {
    id: 128,
    title: "Princess Mononoke",
    rating: 8.2,
    releaseDate: "1997-07-12",
    imagePath: "https://image.tmdb.org/t/p/w500/gzlJkVfWV5VEG5xK25cvFGJgkDz.jpg",
    url: "https://image.tmdb.org/t/p/w500/gzlJkVfWV5VEG5xK25cvFGJgkDz.jpg",
    description: "Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
    genre: [
      Genres.Drama
    ],
    duration: 134
  },
  {
    id: 489,
    title: "Good Will Hunting",
    rating: 7.9,
    releaseDate: "1997-12-05",
    imagePath: "https://image.tmdb.org/t/p/w500/jq8LjngZ7XZEQge5JFTdOGMrHyZ.jpg",
    url: "https://image.tmdb.org/t/p/w500/jq8LjngZ7XZEQge5JFTdOGMrHyZ.jpg",
    description: "Will Hunting has a genius-level IQ but chooses to work as a janitor at MIT. When he solves a difficult graduate-level math problem, his talents are discovered by Professor Gerald Lambeau, who decides to help the misguided youth reach his potential. When Will is arrested for attacking a police officer, Professor Lambeau makes a deal to get leniency for him if he will get treatment from therapist Sean Maguire.",
    genre: [
      Genres.Drama
    ],
    duration: 126
  },
  {
    id: 401981,
    title: "Red Sparrow",
    rating: 6.3,
    releaseDate: "2018-03-01",
    imagePath: "https://image.tmdb.org/t/p/w500/fyufzd2S1lLxMxkTHTnmr6VJfe5.jpg",
    url: "https://image.tmdb.org/t/p/w500/fyufzd2S1lLxMxkTHTnmr6VJfe5.jpg",
    description: "Prima ballerina Dominika Egorova faces a bleak and uncertain future after she suffers an injury that ends her career. She soon turns to Sparrow School, a secret intelligence service that trains exceptional young people to use their minds and bodies as weapons. Egorova emerges as the most dangerous Sparrow after completing the sadistic training process. As she comes to terms with her new abilities, Dominika meets a CIA agent who tries to convince her that he is the only person she can trust.",
    genre: [
      Genres.Horror
    ],
    duration: 139
  },
  {
    id: 948,
    title: "Halloween",
    rating: 7.5,
    releaseDate: "1978-10-24",
    imagePath: "https://image.tmdb.org/t/p/w500/vjoOFOTBJcJvA1weJejlZ92LZD4.jpg",
    url: "https://image.tmdb.org/t/p/w500/vjoOFOTBJcJvA1weJejlZ92LZD4.jpg",
    description: "In John Carpenter's horror classic, a psychotic murderer, institutionalized since childhood for the murder of his sister, escapes and stalks a bookish teenage girl and her friends while his doctor chases him through the streets.",
    genre: [
      Genres.Horror
    ],
    duration: 91
  },
  {
    id: 401478,
    title: "Death Race 4: Beyond Anarchy",
    rating: 5.1,
    releaseDate: "2018-01-30",
    imagePath: "https://image.tmdb.org/t/p/w500/h4CrVSJO8G2xRFgkxjPX8LCLzCk.jpg",
    url: "https://image.tmdb.org/t/p/w500/h4CrVSJO8G2xRFgkxjPX8LCLzCk.jpg",
    description: "Danny Trejo returns as the ruthless bookie, Goldberg, in the wildest, bloodiest, Death Race ever. After a failed attack on inmate and legendary driver, Frankenstein, Black Ops specialist Connor Gibson (McGowan) infiltrates a super-maximum federal prison with one goal - enter the immoral and illegal Death Race and take Frankenstein down. Connor enlists the help of Baltimore Bob (Glover) and Lists (Koehler), and unexpectedly falls in love with bartending beauty, Jane (Marzano). Connor will have to fight for more than his life in this brutal world of no guards, no rules, no track, and no fear.",
    genre: [
      Genres.Action
    ],
    duration: 111
  },
  {
    id: 398818,
    title: "Call Me by Your Name",
    rating: 8.3,
    releaseDate: "2017-10-27",
    imagePath: "https://image.tmdb.org/t/p/w500/nPTjj6ZfBXXBwOhd7iUy6tyuKWt.jpg",
    url: "https://image.tmdb.org/t/p/w500/nPTjj6ZfBXXBwOhd7iUy6tyuKWt.jpg",
    description: "Elio Perlman is spending the summer with his family at their vacation home in Lombardy, Italy. When his father hires a handsome doctoral student, the curious 17-year-old finds himself developing a growing attraction to the young man.",
    genre: [
      Genres.Drama
    ],
    duration: 132
  },
  {
    id: 672,
    title: "Harry Potter and the Chamber of Secrets",
    rating: 7.5,
    releaseDate: "2002-11-13",
    imagePath: "https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
    url: "https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
    description: "Ignoring threats to his life, Harry returns to Hogwarts to investigate – aided by Ron and Hermione – a mysterious series of attacks.",
    genre: [
      Genres.Drama
    ],
    duration: 161
  },
  {
    id: 4935,
    title: "Howl's Moving Castle",
    rating: 8.2,
    releaseDate: "2004-11-19",
    imagePath: "https://image.tmdb.org/t/p/w500/iMarB2ior30OAXjPa7QIdeyUfM1.jpg",
    url: "https://image.tmdb.org/t/p/w500/iMarB2ior30OAXjPa7QIdeyUfM1.jpg",
    description: "When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home.",
    genre: [
      Genres.Drama
    ],
    duration: 119
  },
  {
    id: 74,
    title: "War of the Worlds",
    rating: 6.2,
    releaseDate: "2005-06-28",
    imagePath: "https://image.tmdb.org/t/p/w500/xXMM9KY2eq1SDOQif9zO91YOBA8.jpg",
    url: "https://image.tmdb.org/t/p/w500/xXMM9KY2eq1SDOQif9zO91YOBA8.jpg",
    description: "Ray Ferrier is a divorced dockworker and less-than-perfect father. Soon after his ex-wife and her new husband drop of his teenage son and young daughter for a rare weekend visit, a strange and powerful lightning storm touches down.",
    genre: [
      Genres.Horror,
    ],
    duration: 116
  },
  {
    id: 597,
    title: "Titanic",
    rating: 7.6,
    releaseDate: "1997-11-18",
    imagePath: "https://image.tmdb.org/t/p/w500/kHXEpyfl6zqn8a6YuozZUujufXf.jpg",
    url: "https://image.tmdb.org/t/p/w500/kHXEpyfl6zqn8a6YuozZUujufXf.jpg",
    description: "84 years later, a 101-year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.",
    genre: [
      Genres.Horror
    ],
    duration: 194
  },
  {
    id: 14836,
    title: "Coraline",
    rating: 7.4,
    releaseDate: "2009-02-05",
    imagePath: "https://image.tmdb.org/t/p/w500/ybOmHUVVXcwBQErjw7tmeE97fpO.jpg",
    url: "https://image.tmdb.org/t/p/w500/ybOmHUVVXcwBQErjw7tmeE97fpO.jpg",
    description: "When Coraline moves to an old house, she feels bored and neglected by her parents. She finds a hidden door with a bricked up passage. During the night, she crosses the passage and finds a parallel world where everybody has buttons instead of eyes, with caring parents and all her dreams coming true. When the Other Mother invites Coraline to stay in her world forever, the girl refuses and finds that the alternate reality where she is trapped is only a trick to lure her.",
    genre: [
      Genres.Action
    ],
    duration: 100
  },
  {
    id: 41154,
    title: "Men in Black 3",
    rating: 6.3,
    releaseDate: "2012-05-23",
    imagePath: "https://image.tmdb.org/t/p/w500/l9hrvXyGq19f6jPRZhSVRibTMwW.jpg",
    url: "https://image.tmdb.org/t/p/w500/l9hrvXyGq19f6jPRZhSVRibTMwW.jpg",
    description: "Agents J (Will Smith) and K (Tommy Lee Jones) are back...in time. J has seen some inexplicable things in his 15 years with the Men in Black, but nothing, not even aliens, perplexes him as much as his wry, reticent partner. But when K's life and the fate of the planet are put at stake, Agent J will have to travel back in time to put things right. J discovers that there are secrets to the universe that K never told him - secrets that will reveal themselves as he teams up with the young Agent K (Josh Brolin) to save his partner, the agency, and the future of humankind.",
    genre: [
      Genres.Comedy,
    ],
    duration: 106
  },
  {
    id: 1359,
    title: "American Psycho",
    rating: 7.3,
    releaseDate: "2000-04-13",
    imagePath: "https://image.tmdb.org/t/p/w500/qXsylPM4Lr5397R3eHrfqHhTUNc.jpg",
    url: "https://image.tmdb.org/t/p/w500/qXsylPM4Lr5397R3eHrfqHhTUNc.jpg",
    description: "A wealthy New York investment banking executive hides his alternate psychopathic ego from his co-workers and friends as he escalates deeper into his illogical, gratuitous fantasies.",
    genre: [
      Genres.Horror,
    ],
    duration: 102
  },
  {
    id: 22538,
    title: "Scott Pilgrim vs. the World",
    rating: 7.2,
    releaseDate: "2010-07-27",
    imagePath: "https://image.tmdb.org/t/p/w500/lafRuPbjEQrrHG9QEaoyV2znZC.jpg",
    url: "https://image.tmdb.org/t/p/w500/lafRuPbjEQrrHG9QEaoyV2znZC.jpg",
    description: "Scott Pilgrim is a 23 year old Canadian slacker and wannabe rockstar who falls in love with an American delivery girl, Ramona V. Flowers, and must defeat her seven \"evil exes\" to be able to date her.",
    genre: [
      Genres.Comedy
    ],
    duration: 112
  },
  {
    id: 165,
    title: "Back to the Future Part II",
    rating: 7.5,
    releaseDate: "1989-11-22",
    imagePath: "https://image.tmdb.org/t/p/w500/k5dzvCQkXU2CAhLtlj9BHE7xmyK.jpg",
    url: "https://image.tmdb.org/t/p/w500/k5dzvCQkXU2CAhLtlj9BHE7xmyK.jpg",
    description: "Marty and Doc are at it again in this wacky sequel to the 1985 blockbuster as the time-traveling duo head to 2015 to nip some McFly family woes in the bud. But things go awry thanks to bully Biff Tannen and a pesky sports almanac. In a last-ditch attempt to set things straight, Marty finds himself bound for 1955 and face to face with his teenage parents -- again.",
    genre: [
      Genres.Comedy,
    ],
    duration: 108
  },
  {
    id: 298250,
    title: "Jigsaw",
    rating: 6,
    releaseDate: "2017-10-25",
    imagePath: "https://image.tmdb.org/t/p/w500/gvBVIlcMaeWKhGjgGjlShiL4w4r.jpg",
    url: "https://image.tmdb.org/t/p/w500/gvBVIlcMaeWKhGjgGjlShiL4w4r.jpg",
    description: "Dead bodies begin to turn up all over the city, each meeting their demise in a variety of grisly ways. All investigations begin to point the finger at deceased killer John Kramer.",
    genre: [
      Genres.Horror
    ],
    duration: 92
  },
  {
    id: 1562,
    title: "28 Weeks Later",
    rating: 6.5,
    releaseDate: "2007-04-26",
    imagePath: "https://image.tmdb.org/t/p/w500/kcJ99AtUykDhpzfQOApsViQa3fj.jpg",
    url: "https://image.tmdb.org/t/p/w500/kcJ99AtUykDhpzfQOApsViQa3fj.jpg",
    description: "In this chilling sequel to 28 Days Later, the inhabitants of the British Isles appear to have lost their battle against the onslaught of disease, as the deadly rage virus has killed every citizen there. Six months later, a group of Americans dare to set foot on the isles, convinced the danger has come and gone. But it soon becomes all too clear that the scourge continues to live, waiting to pounce on its next victims.",
    genre: [
      Genres.Horror,
    ],
    duration: 100
  },
  {
    id: 58595,
    title: "Snow White and the Huntsman",
    rating: 5.8,
    releaseDate: "2012-05-30",
    imagePath: "https://image.tmdb.org/t/p/w500/40iabcM7KQLJzmO8yGm8AvUbxZR.jpg",
    url: "https://image.tmdb.org/t/p/w500/40iabcM7KQLJzmO8yGm8AvUbxZR.jpg",
    description: "After the Evil Queen marries the King, she performs a violent coup in which the King is murdered and his daughter, Snow White, is taken captive. Almost a decade later, a grown Snow White is still in the clutches of the Queen. In order to obtain immortality, The Evil Queen needs the heart of Snow White. After Snow escapes the castle, the Queen sends the Huntsman to find her in the Dark Forest.",
    genre: [
    ],
    duration: 127
  },
  {
    id: 253412,
    title: "Everest",
    rating: 6.7,
    releaseDate: "2015-09-10",
    imagePath: "https://image.tmdb.org/t/p/w500/t3ELL46AnqjS9djz1vEVh4MpKv0.jpg",
    url: "https://image.tmdb.org/t/p/w500/t3ELL46AnqjS9djz1vEVh4MpKv0.jpg",
    description: "Inspired by the incredible events surrounding a treacherous attempt to reach the summit of the world's highest mountain, \"Everest\" documents the awe-inspiring journey of two different expeditions challenged beyond their limits by one of the fiercest snowstorms ever encountered by mankind. Their mettle tested by the harshest of elements found on the planet, the climbers will face nearly impossible obstacles as a lifelong obsession becomes a breathtaking struggle for survival.",
    genre: [
      Genres.Drama
    ],
    duration: 121
  },
  {
    id: 122906,
    title: "About Time",
    rating: 7.8,
    releaseDate: "2013-08-16",
    imagePath: "https://image.tmdb.org/t/p/w500/zSuh8dGwqpsWR7ccvYbfxbSZ37o.jpg",
    url: "https://image.tmdb.org/t/p/w500/zSuh8dGwqpsWR7ccvYbfxbSZ37o.jpg",
    description: "The night after another unsatisfactory New Year party, Tim's father tells his son that the men in his family have always had the ability to travel through time. Tim can't change history, but he can change what happens and has happened in his own life – so he decides to make his world a better place... by getting a girlfriend. Sadly, that turns out not to be as easy as he thinks.",
    genre: [
      Genres.Comedy,
    ],
    duration: 123
  },
  {
    id: 330459,
    title: "Rogue One: A Star Wars Story",
    rating: 7.4,
    releaseDate: "2016-12-14",
    imagePath: "https://image.tmdb.org/t/p/w500/qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg",
    url: "https://image.tmdb.org/t/p/w500/qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg",
    description: "A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.",
    genre: [
      Genres.Action
    ],
    duration: 133
  },
  {
    id: 36586,
    title: "Blade II",
    rating: 6.3,
    releaseDate: "2002-03-22",
    imagePath: "https://image.tmdb.org/t/p/w500/jlURNpXCMK830CsGRd939PJLh8c.jpg",
    url: "https://image.tmdb.org/t/p/w500/jlURNpXCMK830CsGRd939PJLh8c.jpg",
    description: "A rare mutation has occurred within the vampire community - The Reaper. A vampire so consumed with an insatiable bloodlust that they prey on vampires as well as humans, transforming victims who are unlucky enough to survive into Reapers themselves. Blade is asked by the Vampire Nation for his help in preventing a nightmare plague that would wipe out both humans and vampires.",
    genre: [
      Genres.Horror
    ],
    duration: 117
  },
  {
    id: 109424,
    title: "Captain Phillips",
    rating: 7.6,
    releaseDate: "2013-10-10",
    imagePath: "https://image.tmdb.org/t/p/w500/AnMTMPTUzeWNbYxzp29WqYf1br1.jpg",
    url: "https://image.tmdb.org/t/p/w500/AnMTMPTUzeWNbYxzp29WqYf1br1.jpg",
    description: "The true story of Captain Richard Phillips and the 2009 hijacking by Somali pirates of the US-flagged MV Maersk Alabama, the first American cargo ship to be hijacked in two hundred years.",
    genre: [
      Genres.Horror
    ],
    duration: 134
  },
  {
    id: 72331,
    title: "Abraham Lincoln: Vampire Hunter",
    rating: 5.5,
    releaseDate: "2012-06-20",
    imagePath: "https://image.tmdb.org/t/p/w500/lHcaLiPDDrLmJAL2MTlMzgM2s2x.jpg",
    url: "https://image.tmdb.org/t/p/w500/lHcaLiPDDrLmJAL2MTlMzgM2s2x.jpg",
    description: "President Lincoln's mother is killed by a supernatural creature, which fuels his passion to crush vampires and their slave-owning helpers.",
    genre: [
      Genres.Drama
    ],
    duration: 94
  },
  {
    id: 277216,
    title: "Straight Outta Compton",
    rating: 7.7,
    releaseDate: "2015-08-13",
    imagePath: "https://image.tmdb.org/t/p/w500/X7S1RtotXOZNV7OlgCfh5VKZSB.jpg",
    url: "https://image.tmdb.org/t/p/w500/X7S1RtotXOZNV7OlgCfh5VKZSB.jpg",
    description: "In 1987, five young men, using brutally honest rhymes and hardcore beats, put their frustration and anger about life in the most dangerous place in America into the most powerful weapon they had: their music.  Taking us back to where it all began, Straight Outta Compton tells the true story of how these cultural rebels—armed only with their lyrics, swagger, bravado and raw talent—stood up to the authorities that meant to keep them down and formed the world’s most dangerous group, N.W.A.  And as they spoke the truth that no one had before and exposed life in the hood, their voice ignited a social revolution that is still reverberating today.",
    genre: [
      Genres.Drama
    ],
    duration: 147
  },
  {
    id: 37799,
    title: "The Social Network",
    rating: 7.2,
    releaseDate: "2010-09-30",
    imagePath: "https://image.tmdb.org/t/p/w500/ok5Wh8385Kgblq9MSU4VGvazeMH.jpg",
    url: "https://image.tmdb.org/t/p/w500/ok5Wh8385Kgblq9MSU4VGvazeMH.jpg",
    description: "On a fall night in 2003, Harvard undergrad and computer programming genius Mark Zuckerberg sits down at his computer and heatedly begins working on a new idea. In a fury of blogging and programming, what begins in his dorm room as a small site among friends soon becomes a global social network and a revolution in communication. A mere six years and 500 million friends later, Mark Zuckerberg is the youngest billionaire in history... but for this entrepreneur, success leads to both personal and legal complications.",
    genre: [
      Genres.Drama
    ],
    duration: 120
  },
  {
    id: 1734,
    title: "The Mummy Returns",
    rating: 6.1,
    releaseDate: "2001-04-28",
    imagePath: "https://image.tmdb.org/t/p/w500/hioiYUZVIuYIhagDGhIAjyNEUu0.jpg",
    url: "https://image.tmdb.org/t/p/w500/hioiYUZVIuYIhagDGhIAjyNEUu0.jpg",
    description: "Rick and Evelyn O'Connell, along with their 8 year old son Alex, discover the key to the legendary Scorpion King's might, the fabled Bracelet of Anubis. Unfortunately, a newly resurrected Imhotep has designs on the bracelet as well, and isn't above kidnapping its new bearer, Alex, to gain control of Anubis' otherworldly army.",
    genre: [
      Genres.Drama
    ],
    duration: 130
  },
  {
    id: 2454,
    title: "The Chronicles of Narnia: Prince Caspian",
    rating: 6.3,
    releaseDate: "2008-05-15",
    imagePath: "https://image.tmdb.org/t/p/w500/mEHd5n927ifJEODgbtC09Faqwcg.jpg",
    url: "https://image.tmdb.org/t/p/w500/mEHd5n927ifJEODgbtC09Faqwcg.jpg",
    description: "One year after their incredible adventures in the Lion, the Witch and the Wardrobe, Peter, Edmund, Lucy and Susan Pevensie return to Narnia to aid a young prince whose life has been threatened by the evil King Miraz. Now, with the help of a colorful cast of new characters, including Trufflehunter the badger and Nikabrik the dwarf, the Pevensie clan embarks on an incredible quest to ensure that Narnia is returned to its rightful heir.",
    genre: [
      Genres.Drama
    ],
    duration: 150
  },
  {
    id: 109439,
    title: "The Hangover Part III",
    rating: 6,
    releaseDate: "2013-05-23",
    imagePath: "https://image.tmdb.org/t/p/w500/vtxuPWkdllLNLVyGjKYa267ntuH.jpg",
    url: "https://image.tmdb.org/t/p/w500/vtxuPWkdllLNLVyGjKYa267ntuH.jpg",
    description: "This time, there's no wedding. No bachelor party. What could go wrong, right? But when the Wolfpack hits the road, all bets are off.",
    genre: [
      Genres.Comedy
    ],
    duration: 100
  },
  {
    id: 955,
    title: "Mission: Impossible II",
    rating: 5.9,
    releaseDate: "2000-05-24",
    imagePath: "https://image.tmdb.org/t/p/w500/eRaEC0vf5q5TSvaoJPwGTt2wa9T.jpg",
    url: "https://image.tmdb.org/t/p/w500/eRaEC0vf5q5TSvaoJPwGTt2wa9T.jpg",
    description: "With computer genius Luther Stickell at his side and a beautiful thief on his mind, agent Ethan Hunt races across Australia and Spain to stop a former IMF agent from unleashing a genetically engineered biological weapon called Chimera. This mission, should Hunt choose to accept it, plunges him into the center of an international crisis of terrifying magnitude.",
    genre: [
      Genres.Horror
    ],
    duration: 123
  },
  {
    id: 239,
    title: "Some Like It Hot",
    rating: 8.1,
    releaseDate: "1959-03-18",
    imagePath: "https://image.tmdb.org/t/p/w500/pxc9EFCMYkItESpqqrI783yl8Gh.jpg",
    url: "https://image.tmdb.org/t/p/w500/pxc9EFCMYkItESpqqrI783yl8Gh.jpg",
    description: "Two musicians witness a mob hit and struggle to find a way out of the city before they are found by the gangsters. Their only opportunity is to join an all-girl band as they leave on a tour. To make their getaway they must first disguise themselves as women, then keep their identities secret and deal with the problems this brings - such as an attractive bandmate and a very determined suitor.",
    genre: [
      Genres.Comedy,
    ],
    duration: 122
  },
  {
    id: 755,
    title: "From Dusk Till Dawn",
    rating: 6.9,
    releaseDate: "1996-01-19",
    imagePath: "https://image.tmdb.org/t/p/w500/ce0d4kM5KxT4x1Oq8JkSuNYevri.jpg",
    url: "https://image.tmdb.org/t/p/w500/ce0d4kM5KxT4x1Oq8JkSuNYevri.jpg",
    description: "Seth Gecko and his younger brother Richard are on the run after a bloody bank robbery in Texas. They escape across the border into Mexico and will be home-free the next morning, when they pay off the local kingpin. They just have to survive 'from dusk till dawn' at the rendezvous point, which turns out to be a Hell of a strip joint.",
    genre: [
      Genres.Horror,
    ],
    duration: 108
  },
  {
    id: 415,
    title: "Batman & Robin",
    rating: 4.1,
    releaseDate: "1997-06-20",
    imagePath: "https://image.tmdb.org/t/p/w500/79AYCcxw3kSKbhGpx1LiqaCAbwo.jpg",
    url: "https://image.tmdb.org/t/p/w500/79AYCcxw3kSKbhGpx1LiqaCAbwo.jpg",
    description: "Along with crime-fighting partner Robin and new recruit Batgirl, Batman battles the dual threat of frosty genius Mr. Freeze and homicidal horticulturalist Poison Ivy. Freeze plans to put Gotham City on ice, while Ivy tries to drive a wedge between the dynamic duo.",
    genre: [
      Genres.Comedy
    ],
    duration: 125
  },
  {
    id: 376867,
    title: "Moonlight",
    rating: 7.3,
    releaseDate: "2016-10-21",
    imagePath: "https://image.tmdb.org/t/p/w500/qAwFbszz0kRyTuXmMeKQZCX3Q2O.jpg",
    url: "https://image.tmdb.org/t/p/w500/qAwFbszz0kRyTuXmMeKQZCX3Q2O.jpg",
    description: "The tender, heartbreaking story of a young man’s struggle to find himself, told across three defining chapters in his life as he experiences the ecstasy, pain, and beauty of falling in love, while grappling with his own sexuality.",
    genre: [
      Genres.Drama
    ],
    duration: 111
  },
  {
    id: 770,
    title: "Gone with the Wind",
    rating: 7.7,
    releaseDate: "1939-12-15",
    imagePath: "https://image.tmdb.org/t/p/w500/4o1yeosjSFMaI9pe1rOkYcZ6hHO.jpg",
    url: "https://image.tmdb.org/t/p/w500/4o1yeosjSFMaI9pe1rOkYcZ6hHO.jpg",
    description: "An American classic in which a manipulative woman and a roguish man carry on a turbulent love affair in the American south during the Civil War and Reconstruction.",
    genre: [
      Genres.Drama
    ],
    duration: 238
  },
  {
    id: 9737,
    title: "Bad Boys",
    rating: 6.5,
    releaseDate: "1995-04-07",
    imagePath: "https://image.tmdb.org/t/p/w500/x1ygBecKHfXX4M2kRhmFKWfWbJc.jpg",
    url: "https://image.tmdb.org/t/p/w500/x1ygBecKHfXX4M2kRhmFKWfWbJc.jpg",
    description: "Marcus Burnett is a hen-pecked family man. Mike Lowry is a foot-loose and fancy free ladies' man. Both are Miami policemen, and both have 72 hours to reclaim a consignment of drugs stolen from under their station's nose. To complicate matters, in order to get the assistance of the sole witness to a murder, they have to pretend to be each other.",
    genre: [
      Genres.Comedy,
      Genres.Horror
    ],
    duration: 118
  },
  {
    id: 8078,
    title: "Alien: Resurrection",
    rating: 5.9,
    releaseDate: "1997-11-12",
    imagePath: "https://image.tmdb.org/t/p/w500/ve2P64a9kzd7M78kfeaEzBEIEOR.jpg",
    url: "https://image.tmdb.org/t/p/w500/ve2P64a9kzd7M78kfeaEzBEIEOR.jpg",
    description: "Two hundred years after Lt. Ripley died, a group of scientists clone her, hoping to breed the ultimate weapon. But the new Ripley is full of surprises … as are the new aliens. Ripley must team with a band of smugglers to keep the creatures from reaching Earth.",
    genre: [
      Genres.Drama
    ],
    duration: 109
  },
  {
    id: 260514,
    title: "Cars 3",
    rating: 6.8,
    releaseDate: "2017-06-15",
    imagePath: "https://image.tmdb.org/t/p/w500/fyy1nDC8wm553FCiBDojkJmKLCs.jpg",
    url: "https://image.tmdb.org/t/p/w500/fyy1nDC8wm553FCiBDojkJmKLCs.jpg",
    description: "Blindsided by a new generation of blazing-fast racers, the legendary Lightning McQueen is suddenly pushed out of the sport he loves. To get back in the game, he will need the help of an eager young race technician with her own plan to win, inspiration from the late Fabulous Hudson Hornet, and a few unexpected turns. Proving that #95 isn't through yet will test the heart of a champion on Piston Cup Racing’s biggest stage!",
    genre: [
      Genres.Comedy,
    ],
    duration: 109
  },
  {
    id: 8909,
    title: "Wanted",
    rating: 6.4,
    releaseDate: "2008-06-19",
    imagePath: "https://image.tmdb.org/t/p/w500/mUrkppyahzk6koYFekxeu0tmcPd.jpg",
    url: "https://image.tmdb.org/t/p/w500/mUrkppyahzk6koYFekxeu0tmcPd.jpg",
    description: "Doormat Wesley Gibson discovers that his recently murdered father – who Wesley never knew – belonged to a secret guild of assassins. After a leather-clad sexpot drafts Wesley into the society, he hones his innate killing skills and turns avenger.",
    genre: [
      Genres.Horror,
    ],
    duration: 110
  },
  {
    id: 136795,
    title: "The Heat",
    rating: 6.6,
    releaseDate: "2013-06-27",
    imagePath: "https://image.tmdb.org/t/p/w500/tM3hDt8JcU8Y8i6vzTcbnocM2bx.jpg",
    url: "https://image.tmdb.org/t/p/w500/tM3hDt8JcU8Y8i6vzTcbnocM2bx.jpg",
    description: "Uptight and straight-laced, FBI Special Agent Sarah Ashburn is a methodical investigator with a reputation for excellence--and hyper-arrogance. Shannon Mullins, one of Boston P.D.'s \"finest,\" is foul-mouthed and has a very short fuse, and uses her gut instinct and street smarts to catch the most elusive criminals. Neither has ever had a partner, or a friend for that matter. When these two wildly incompatible law officers join forces to bring down a ruthless drug lord, they become the last thing anyone expected: Buddies.",
    genre: [
      Genres.Comedy,
    ],
    duration: 117
  },
  {
    id: 46195,
    title: "Rio",
    rating: 6.5,
    releaseDate: "2011-04-03",
    imagePath: "https://image.tmdb.org/t/p/w500/isQ9BSjdF8IrSm2g4WPHSJYN5s9.jpg",
    url: "https://image.tmdb.org/t/p/w500/isQ9BSjdF8IrSm2g4WPHSJYN5s9.jpg",
    description: "Captured by smugglers when he was just a hatchling, a macaw named Blu never learned to fly and lives a happily domesticated life in Minnesota with his human friend, Linda. Blu is thought to be the last of his kind, but when word comes that Jewel, a lone female, lives in Rio de Janeiro, Blu and Linda go to meet her. Animal smugglers kidnap Blu and Jewel, but the pair soon escape and begin a perilous adventure back to freedom -- and Linda.",
    genre: [
      Genres.Comedy,
    ],
    duration: 96
  },
  {
    id: 138697,
    title: "Don Jon",
    rating: 5.9,
    releaseDate: "2013-07-26",
    imagePath: "https://image.tmdb.org/t/p/w500/xD93OhEhMPN0v5VXt21D6rx7HGg.jpg",
    url: "https://image.tmdb.org/t/p/w500/xD93OhEhMPN0v5VXt21D6rx7HGg.jpg",
    description: "A New Jersey guy dedicated to his family, friends, and church, develops unrealistic expectations from watching porn and works to find happiness and intimacy with his potential true love.",
    genre: [
      Genres.Comedy,
    ],
    duration: 90
  },
  {
    id: 810,
    title: "Shrek the Third",
    rating: 6,
    releaseDate: "2007-05-17",
    imagePath: "https://image.tmdb.org/t/p/w500/lA17Mlz8hXVZsW5Y3WuUa8KPilQ.jpg",
    url: "https://image.tmdb.org/t/p/w500/lA17Mlz8hXVZsW5Y3WuUa8KPilQ.jpg",
    description: "The King of Far Far Away has died and Shrek and Fiona are to become King &amp; Queen. However, Shrek wants to return to his cozy swamp and live in peace and quiet, so when he finds out there is another heir to the throne, they set off to bring him back to rule the kingdom.",
    genre: [
      Genres.Comedy,
    ],
    duration: 93
  },
  {
    id: 600,
    title: "Full Metal Jacket",
    rating: 8,
    releaseDate: "1987-06-26",
    imagePath: "https://image.tmdb.org/t/p/w500/29veIwD38rVL2qY74emXQw4y25H.jpg",
    url: "https://image.tmdb.org/t/p/w500/29veIwD38rVL2qY74emXQw4y25H.jpg",
    description: "A pragmatic U.S. Marine observes the dehumanizing effects the U.S.-Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.",
    genre: [
      Genres.Drama
    ],
    duration: 116
  },
  {
    id: 10527,
    title: "Madagascar: Escape 2 Africa",
    rating: 6.2,
    releaseDate: "2008-10-30",
    imagePath: "https://image.tmdb.org/t/p/w500/9mohxwknsHcwFBSAAhoQXwFV5zn.jpg",
    url: "https://image.tmdb.org/t/p/w500/9mohxwknsHcwFBSAAhoQXwFV5zn.jpg",
    description: "Alex, Marty, and other zoo animals find a way to escape from Madagascar when the penguins reassemble a wrecked airplane. The precariously repaired craft stays airborne just long enough to make it to the African continent. There the New Yorkers encounter members of their own species for the first time. Africa proves to be a wild place, but Alex and company wonder if it is better than their Central Park home.",
    genre: [
      Genres.Action
    ],
    duration: 89
  },
  {
    id: 38055,
    title: "Megamind",
    rating: 6.7,
    releaseDate: "2010-10-28",
    imagePath: "https://image.tmdb.org/t/p/w500/amXAUSAUrnGuLGEyc1ZNhBvgbnF.jpg",
    url: "https://image.tmdb.org/t/p/w500/amXAUSAUrnGuLGEyc1ZNhBvgbnF.jpg",
    description: "Bumbling supervillain Megamind finally defeats his nemesis, the superhero Metro Man. But without a hero, he loses all purpose and must find new meaning to his life.",
    genre: [
      Genres.Comedy,
    ],
    duration: 95
  },
  {
    id: 9693,
    title: "Children of Men",
    rating: 7.5,
    releaseDate: "2006-09-22",
    imagePath: "https://image.tmdb.org/t/p/w500/gZ6i32Da76EUxta06GL2BxpC4Cn.jpg",
    url: "https://image.tmdb.org/t/p/w500/gZ6i32Da76EUxta06GL2BxpC4Cn.jpg",
    description: "In 2027, in a chaotic world in which humans can no longer procreate, a former activist agrees to help transport a miraculously pregnant woman to a sanctuary at sea, where her child's birth may help scientists save the future of humankind.",
    genre: [
      Genres.Horror,
    ],
    duration: 109
  },
  {
    id: 1903,
    title: "Vanilla Sky",
    rating: 6.6,
    releaseDate: "2001-12-10",
    imagePath: "https://image.tmdb.org/t/p/w500/ujMy9P4VczTW9YSpAM31uqdOMpz.jpg",
    url: "https://image.tmdb.org/t/p/w500/ujMy9P4VczTW9YSpAM31uqdOMpz.jpg",
    description: "David Aames has it all: wealth, good looks and gorgeous women on his arm. But just as he begins falling for the warmhearted Sofia, his face is horribly disfigured in a car accident. That's just the beginning of his troubles as the lines between illusion and reality, between life and death, are blurred.",
    genre: [
      Genres.Horror
    ],
    duration: 136
  },
  {
    id: 310,
    title: "Bruce Almighty",
    rating: 6.5,
    releaseDate: "2003-05-23",
    imagePath: "https://image.tmdb.org/t/p/w500/lgYKHifMMLT8OxYObMKa8b4STsr.jpg",
    url: "https://image.tmdb.org/t/p/w500/lgYKHifMMLT8OxYObMKa8b4STsr.jpg",
    description: "Bruce Nolan toils as a \"human interest\" television reporter in Buffalo, N.Y. Despite his high ratings and the love of his beautiful girlfriend, Grace, Bruce remains unfulfilled. At the end of the worst day in his life, he angrily ridicules God -- and the Almighty responds, endowing Bruce with all of His divine powers.",
    genre: [
      Genres.Comedy
    ],
    duration: 101
  },
  {
    id: 8681,
    title: "Taken",
    rating: 7.3,
    releaseDate: "2008-02-18",
    imagePath: "https://image.tmdb.org/t/p/w500/3zlffXmo7QpVBc17QIJWrRfasVr.jpg",
    url: "https://image.tmdb.org/t/p/w500/3zlffXmo7QpVBc17QIJWrRfasVr.jpg",
    description: "While vacationing with a friend in Paris, an American girl is kidnapped by a gang of human traffickers intent on selling her into forced prostitution. Working against the clock, her ex-spy father must pull out all the stops to save her. But with his best years possibly behind him, the job may be more than he can handle.",
    genre: [
      Genres.Horror
    ],
    duration: 93
  },
  {
    id: 449176,
    title: "Love, Simon",
    rating: 8.4,
    releaseDate: "2018-03-16",
    imagePath: "https://image.tmdb.org/t/p/w500/5YUYg5q7QfC4IoNwNUtiwdiYKPr.jpg",
    url: "https://image.tmdb.org/t/p/w500/5YUYg5q7QfC4IoNwNUtiwdiYKPr.jpg",
    description: "Everyone deserves a great love story. But for seventeen-year old Simon Spier it’s a little more complicated: he’s yet to tell his family or friends he’s gay and he doesn’t actually know the identity of the anonymous classmate he’s fallen for online.",
    genre: [
      Genres.Comedy,
    ],
    duration: 110
  },
  {
    id: 73,
    title: "American History X",
    rating: 8.2,
    releaseDate: "1998-10-30",
    imagePath: "https://image.tmdb.org/t/p/w500/fXepRAYOx1qC3wju7XdDGx60775.jpg",
    url: "https://image.tmdb.org/t/p/w500/fXepRAYOx1qC3wju7XdDGx60775.jpg",
    description: "Derek Vineyard is paroled after serving 3 years in prison for killing two thugs who tried to break into/steal his truck. Through his brother, Danny Vineyard's narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white supremacist gang that committed acts of racial crime throughout L.A. and his actions greatly influenced Danny. Reformed and fresh out of prison, Derek severs contact with the gang and becomes determined to keep Danny from going down the same violent path as he did.",
    genre: [
      Genres.Drama
    ],
    duration: 119
  },
  {
    id: 676,
    title: "Pearl Harbor",
    rating: 6.6,
    releaseDate: "2001-05-21",
    imagePath: "https://image.tmdb.org/t/p/w500/gzjMpcyV1RksWonaA87DZ8wQTH0.jpg",
    url: "https://image.tmdb.org/t/p/w500/gzjMpcyV1RksWonaA87DZ8wQTH0.jpg",
    description: "The lifelong friendship between Rafe McCawley and Danny Walker is put to the ultimate test when the two ace fighter pilots become entangled in a love triangle with beautiful Naval nurse Evelyn Johnson. But the rivalry between the friends-turned-foes is immediately put on hold when they find themselves at the center of Japan's devastating attack on Pearl Harbor on Dec. 7, 1941.",
    genre: [
      Genres.Drama
    ],
    duration: 183
  },
  {
    id: 82695,
    title: "Les Misérables",
    rating: 7.2,
    releaseDate: "2012-12-18",
    imagePath: "https://image.tmdb.org/t/p/w500/qEsrAHoxj746FRb7OLGYjrx1AI3.jpg",
    url: "https://image.tmdb.org/t/p/w500/qEsrAHoxj746FRb7OLGYjrx1AI3.jpg",
    description: "An adaptation of the successful stage musical based on Victor Hugo's classic novel set in 19th-century France, in which a paroled prisoner named Jean Valjean seeks redemption.",
    genre: [
      Genres.Drama
    ],
    duration: 157
  },
  {
    id: 311,
    title: "Once Upon a Time in America",
    rating: 8.3,
    releaseDate: "1984-05-23",
    imagePath: "https://image.tmdb.org/t/p/w500/x733R4ISI0RbKeHhVkXdTMFmTFr.jpg",
    url: "https://image.tmdb.org/t/p/w500/x733R4ISI0RbKeHhVkXdTMFmTFr.jpg",
    description: "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
    genre: [
      Genres.Drama
    ],
    duration: 229
  },
  {
    id: 136400,
    title: "2 Guns",
    rating: 6.5,
    releaseDate: "2013-08-02",
    imagePath: "https://image.tmdb.org/t/p/w500/30lM3Uvzs6HOG5l4hzhwxYTWgd3.jpg",
    url: "https://image.tmdb.org/t/p/w500/30lM3Uvzs6HOG5l4hzhwxYTWgd3.jpg",
    description: "A DEA agent and an undercover Naval Intelligence officer who have been tasked with investigating one another find they have been set up by the mob -- the very organization the two men believe they have been stealing money from.",
    genre: [
      Genres.Comedy,
    ],
    duration: 109
  },
  {
    id: 284052,
    title: "Doctor Strange",
    rating: 7.2,
    releaseDate: "2016-10-25",
    imagePath: "https://image.tmdb.org/t/p/w500/4PiiNGXj1KENTmCBHeN6Mskj2Fq.jpg",
    url: "https://image.tmdb.org/t/p/w500/4PiiNGXj1KENTmCBHeN6Mskj2Fq.jpg",
    description: "After his career is destroyed, a brilliant but arrogant surgeon gets a new lease on life when a sorcerer takes him under his wing and trains him to defend the world against evil.",
    genre: [
      Genres.Drama
    ],
    duration: 115
  },
  {
    id: 10674,
    title: "Mulan",
    rating: 7.7,
    releaseDate: "1998-06-18",
    imagePath: "https://image.tmdb.org/t/p/w500/eruhq6kmjV7wopA7GjNDHrmAl89.jpg",
    url: "https://image.tmdb.org/t/p/w500/eruhq6kmjV7wopA7GjNDHrmAl89.jpg",
    description: "A tomboyish girl disguises herself as a young man so she can fight with the Imperial Chinese Army against the invading Huns. With help from wise-cracking dragon Mushu, Mulan just might save her country -- and win the heart of handsome Captain Li Shang.",
    genre: [
      Genres.Action
    ],
    duration: 88
  },
  {
    id: 621,
    title: "Grease",
    rating: 7.3,
    releaseDate: "1978-07-07",
    imagePath: "https://image.tmdb.org/t/p/w500/iMHdFTrCYhue74sBnXkdO39AJ3R.jpg",
    url: "https://image.tmdb.org/t/p/w500/iMHdFTrCYhue74sBnXkdO39AJ3R.jpg",
    description: "Australian good girl Sandy and greaser Danny fell in love over the summer. But when they unexpectedly discover they're now in the same high school, will they be able to rekindle their romance despite their eccentric friends?",
    genre: [
      Genres.Action
    ],
    duration: 110
  },
  {
    id: 23483,
    title: "Kick-Ass",
    rating: 7.1,
    releaseDate: "2010-03-22",
    imagePath: "https://image.tmdb.org/t/p/w500/yZFrniO6qSwjTCosStXweYtczGT.jpg",
    url: "https://image.tmdb.org/t/p/w500/yZFrniO6qSwjTCosStXweYtczGT.jpg",
    description: "Dave Lizewski is an unnoticed high school student and comic book fan who one day decides to become a super-hero, even though he has no powers, training or meaningful reason to do so.",
    genre: [
      Genres.Drama
    ],
    duration: 117
  },
  {
    id: 1895,
    title: "Star Wars: Episode III - Revenge of the Sith",
    rating: 7.2,
    releaseDate: "2005-05-17",
    imagePath: "https://image.tmdb.org/t/p/w500/tgr5Pdy7ehZYBqBkN2K7Q02xgOb.jpg",
    url: "https://image.tmdb.org/t/p/w500/tgr5Pdy7ehZYBqBkN2K7Q02xgOb.jpg",
    description: "Years after the onset of the Clone Wars, the noble Jedi Knights lead a massive clone army into a galaxy-wide battle against the Separatists. When the sinister Sith unveil a thousand-year-old plot to rule the galaxy, the Republic crumbles and from its ashes rises the evil Galactic Empire. Jedi hero Anakin Skywalker is seduced by the dark side of the Force to become the Emperor's new apprentice – Darth Vader. The Jedi are decimated, as Obi-Wan Kenobi and Jedi Master Yoda are forced into hiding. The only hope for the galaxy are Anakin's own offspring – the twin children born in secrecy who will grow up to become heroes.",
    genre: [
      Genres.Action
    ],
    duration: 140
  },
  {
    id: 855,
    title: "Black Hawk Down",
    rating: 7.2,
    releaseDate: "2001-12-28",
    imagePath: "https://image.tmdb.org/t/p/w500/yUzQ4r3q1Dy0bUAkMvUIwf0rPpR.jpg",
    url: "https://image.tmdb.org/t/p/w500/yUzQ4r3q1Dy0bUAkMvUIwf0rPpR.jpg",
    description: "When U.S. Rangers and an elite Delta Force team attempt to kidnap two underlings of a Somali warlord, their Black Hawk helicopters are shot down, and the Americans suffer heavy casualties, facing intense fighting from the militia on the ground.",
    genre: [
      Genres.Drama
    ],
    duration: 144
  },
  {
    id: 364689,
    title: "Ferdinand",
    rating: 6.9,
    releaseDate: "2017-12-09",
    imagePath: "https://image.tmdb.org/t/p/w500/rMm94JsRfcOPiPVsTRcBiiVBOhz.jpg",
    url: "https://image.tmdb.org/t/p/w500/rMm94JsRfcOPiPVsTRcBiiVBOhz.jpg",
    description: "Ferdinand, a little bull, prefers sitting quietly under a cork tree just smelling the flowers versus jumping around, snorting, and butting heads with other bulls. As Ferdinand grows big and strong, his temperament remains mellow, but one day five men come to choose the \"biggest, fastest, roughest bull\" for the bullfights in Madrid and Ferdinand is mistakenly chosen.  Based on the classic 1936 children's book by Munro Leaf.",
    genre: [
      Genres.Comedy,
    ],
    duration: 107
  },
  {
    id: 242,
    title: "The Godfather: Part III",
    rating: 7.2,
    releaseDate: "1990-12-24",
    imagePath: "https://image.tmdb.org/t/p/w500/1hdm3Axw9LjITbApvAXBbqO58zE.jpg",
    url: "https://image.tmdb.org/t/p/w500/1hdm3Axw9LjITbApvAXBbqO58zE.jpg",
    description: "In the midst of trying to legitimize his business dealings in 1979 New York and Italy, aging mafia don, Michael Corleone seeks forgiveness for his sins while taking a young protege under his wing.",
    genre: [
      Genres.Horror
    ],
    duration: 162
  },
  {
    id: 2770,
    title: "American Pie 2",
    rating: 6,
    releaseDate: "2001-08-10",
    imagePath: "https://image.tmdb.org/t/p/w500/q4LNgUnRfltxzp3gf1MAGiK5LhV.jpg",
    url: "https://image.tmdb.org/t/p/w500/q4LNgUnRfltxzp3gf1MAGiK5LhV.jpg",
    description: "The whole gang are back and as close as ever. They decide to get even closer by spending the summer together at a beach house. They decide to hold the biggest party ever to be seen, even if the preparation doesn't always go to plan. Especially when Stifler, Finch and Jim become more close to each other than they ever want to be and when Jim mistakes super glue for lubricant...",
    genre: [
      Genres.Comedy,
    ],
    duration: 108
  },
  {
    id: 289,
    title: "Casablanca",
    rating: 8,
    releaseDate: "1942-11-26",
    imagePath: "https://image.tmdb.org/t/p/w500/9UViITBCKeLYWg8Wblbmb9l25mS.jpg",
    url: "https://image.tmdb.org/t/p/w500/9UViITBCKeLYWg8Wblbmb9l25mS.jpg",
    description: "In Casablanca, Morocco in December 1941, a cynical American expatriate meets a former lover, with unforeseen complications.",
    genre: [
      Genres.Drama
    ],
    duration: 102
  },
  {
    id: 9552,
    title: "The Exorcist",
    rating: 7.5,
    releaseDate: "1973-12-26",
    imagePath: "https://image.tmdb.org/t/p/w500/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg",
    url: "https://image.tmdb.org/t/p/w500/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg",
    description: "12-year-old Regan MacNeil begins to adapt an explicit new personality as strange events befall the local area of Georgetown. Her mother becomes torn between science and superstition in a desperate bid to save her daughter, and ultimately turns to her last hope: Father Damien Karras, a troubled priest who is struggling with his own faith.",
    genre: [
      Genres.Horror
    ],
    duration: 122
  },
  {
    id: 39254,
    title: "Real Steel",
    rating: 6.7,
    releaseDate: "2011-09-28",
    imagePath: "https://image.tmdb.org/t/p/w500/drtXi58nN6P3zcoLh6wUlsZAYqh.jpg",
    url: "https://image.tmdb.org/t/p/w500/drtXi58nN6P3zcoLh6wUlsZAYqh.jpg",
    description: "In the near-future, Charlie Kenton is a washed-up fighter who retired from the ring when robots took over the sport. After Charlie's robot is trashed, he reluctantly teams up with his estranged son Max to rebuild and train an unlikely contender.",
    genre: [
      Genres.Drama
    ],
    duration: 127
  },
  {
    id: 4922,
    title: "The Curious Case of Benjamin Button",
    rating: 7.4,
    releaseDate: "2008-11-24",
    imagePath: "https://image.tmdb.org/t/p/w500/4O4INOPtWTfHq3dd5vYTPV0TCwa.jpg",
    url: "https://image.tmdb.org/t/p/w500/4O4INOPtWTfHq3dd5vYTPV0TCwa.jpg",
    description: "Tells the story of Benjamin Button, a man who starts aging backwards with bizarre consequences.",
    genre: [
      Genres.Horror,
    ],
    duration: 166
  },
  {
    id: 1487,
    title: "Hellboy",
    rating: 6.5,
    releaseDate: "2004-04-02",
    imagePath: "https://image.tmdb.org/t/p/w500/3fAWzI9MUosggdGMu7EaDhn44m6.jpg",
    url: "https://image.tmdb.org/t/p/w500/3fAWzI9MUosggdGMu7EaDhn44m6.jpg",
    description: "In the final days of World War II, the Nazis attempt to use black magic to aid their dying cause. The Allies raid the camp where the ceremony is taking place, but not before a demon - Hellboy - has already been conjured. Joining the Allied forces, Hellboy eventually grows to adulthood, serving the cause of good rather than evil.",
    genre: [
      Genres.Drama
    ],
    duration: 122
  },
  {
    id: 83542,
    title: "Cloud Atlas",
    rating: 6.7,
    releaseDate: "2012-10-26",
    imagePath: "https://image.tmdb.org/t/p/w500/8VNiyIp67ZxhpNgdrwACW0jgvP2.jpg",
    url: "https://image.tmdb.org/t/p/w500/8VNiyIp67ZxhpNgdrwACW0jgvP2.jpg",
    description: "A set of six nested stories spanning time between the 19th century and a distant post-apocalyptic future. Cloud Atlas explores how the actions and consequences of individual lives impact one another throughout the past, the present and the future. Action, mystery and romance weave through the story as one soul is shaped from a killer into a hero and a single act of kindness ripples across centuries to inspire a revolution in the distant future.  Based on the award winning novel by David Mitchell. Directed by Tom Tykwer and the Wachowskis.",
    genre: [
      Genres.Drama
    ],
    duration: 172
  },
  {
    id: 337339,
    title: "The Fate of the Furious",
    rating: 6.8,
    releaseDate: "2017-04-12",
    imagePath: "https://image.tmdb.org/t/p/w500/dImWM7GJqryWJO9LHa3XQ8DD5NH.jpg",
    url: "https://image.tmdb.org/t/p/w500/dImWM7GJqryWJO9LHa3XQ8DD5NH.jpg",
    description: "When a mysterious woman seduces Dom into the world of crime and a betrayal of those closest to him, the crew face trials that will test them as never before.",
    genre: [
      Genres.Horror
    ],
    duration: 136
  },
  {
    id: 45269,
    title: "The King's Speech",
    rating: 7.6,
    releaseDate: "2010-09-06",
    imagePath: "https://image.tmdb.org/t/p/w500/nkFTbA1XjKWo9LCTaV1hV2Lsgr1.jpg",
    url: "https://image.tmdb.org/t/p/w500/nkFTbA1XjKWo9LCTaV1hV2Lsgr1.jpg",
    description: "The King's Speech tells the story of the man who became King George VI, the father of Queen Elizabeth II. After his brother abdicates, George ('Bertie') reluctantly assumes the throne. Plagued by a dreaded stutter and considered unfit to be king, Bertie engages the help of an unorthodox speech therapist named Lionel Logue. Through a set of unexpected techniques, and as a result of an unlikely friendship, Bertie is able to find his voice and boldly lead the country into war.",
    genre: [
      Genres.Drama
    ],
    duration: 118
  },
  {
    id: 792,
    title: "Platoon",
    rating: 7.6,
    releaseDate: "1986-12-18",
    imagePath: "https://image.tmdb.org/t/p/w500/sYPOQI57JVNmjiLI3KeZ5KA8O9i.jpg",
    url: "https://image.tmdb.org/t/p/w500/sYPOQI57JVNmjiLI3KeZ5KA8O9i.jpg",
    description: "As a young and naive recruit in Vietnam, Chris Taylor faces a moral crisis when confronted with the horrors of war and the duality of man.",
    genre: [
      Genres.Drama
    ],
    duration: 120
  },
  {
    id: 3049,
    title: "Ace Ventura: Pet Detective",
    rating: 6.4,
    releaseDate: "1994-02-04",
    imagePath: "https://image.tmdb.org/t/p/w500/nZirljb8XYbKTWsRQTplDGhx39Q.jpg",
    url: "https://image.tmdb.org/t/p/w500/nZirljb8XYbKTWsRQTplDGhx39Q.jpg",
    description: "He's Ace Ventura: Pet Detective. Jim Carrey is on the case to find the Miami Dolphins' missing mascot and quarterback Dan Marino. He goes eyeball to eyeball with a man-eating shark, stakes out the Miami Dolphins and woos and wows the ladies. Whether he's undercover, under fire or underwater, he always gets his man . . . or beast!",
    genre: [
      Genres.Comedy,
    ],
    duration: 86
  },
  {
    id: 1572,
    title: "Die Hard: With a Vengeance",
    rating: 7,
    releaseDate: "1995-05-19",
    imagePath: "https://image.tmdb.org/t/p/w500/ivpXGcsPZglyYrN65THWSD7JM3q.jpg",
    url: "https://image.tmdb.org/t/p/w500/ivpXGcsPZglyYrN65THWSD7JM3q.jpg",
    description: "New York detective John McClane is back and kicking bad-guy butt in the third installment of this action-packed series, which finds him teaming with civilian Zeus Carver to prevent the loss of innocent lives. McClane thought he'd seen it all, until a genius named Simon engages McClane, his new \"partner\" -- and his beloved city -- in a deadly game that demands their concentration.",
    genre: [
      Genres.Horror
    ],
    duration: 128
  },
  {
    id: 34544,
    title: "The A-Team",
    rating: 6.2,
    releaseDate: "2010-06-10",
    imagePath: "https://image.tmdb.org/t/p/w500/eMwotYpkcE42lGlaoCpPFaolvst.jpg",
    url: "https://image.tmdb.org/t/p/w500/eMwotYpkcE42lGlaoCpPFaolvst.jpg",
    description: "A group of Iraq War veterans goes on the run from U.S. military forces while they try to clear their names after being framed for a crime they didn't commit. Along the way, Col. Hannibal Smith, Capt. H.M. ‘Howling Mad’ Murdock , Sgt. Bosco ‘B.A.’ Baracus, and Lt. Templeton ‘Faceman’ Peck help out various people they encounter.",
    genre: [
      Genres.Horror,
      Genres.Comedy,
    ],
    duration: 117
  },
  {
    id: 329865,
    title: "Arrival",
    rating: 7.3,
    releaseDate: "2016-11-10",
    imagePath: "https://image.tmdb.org/t/p/w500/hLudzvGfpi6JlwUnsNhXwKKg4j.jpg",
    url: "https://image.tmdb.org/t/p/w500/hLudzvGfpi6JlwUnsNhXwKKg4j.jpg",
    description: "Taking place after alien crafts land around the world, an expert linguist is recruited by the military to determine whether they come in peace or are a threat.",
    genre: [
      Genres.Horror,
    ],
    duration: 116
  },
  {
    id: 1966,
    title: "Alexander",
    rating: 5.7,
    releaseDate: "2004-11-21",
    imagePath: "https://image.tmdb.org/t/p/w500/cJrnmbsFm5cEt0pHZZ2a1ueH5aT.jpg",
    url: "https://image.tmdb.org/t/p/w500/cJrnmbsFm5cEt0pHZZ2a1ueH5aT.jpg",
    description: "Alexander, the King of Macedonia, leads his legions against the giant Persian Empire. After defeating the Persians, he leads his army across the then known world, venturing farther than any westerner had ever gone, all the way to India.",
    genre: [
      Genres.Drama
    ],
    duration: 175
  },
  {
    id: 95,
    title: "Armageddon",
    rating: 6.5,
    releaseDate: "1998-07-01",
    imagePath: "https://image.tmdb.org/t/p/w500/coINnuCzcw5FMHBty8hcudMOBnO.jpg",
    url: "https://image.tmdb.org/t/p/w500/coINnuCzcw5FMHBty8hcudMOBnO.jpg",
    description: "When an asteroid threatens to collide with Earth, NASA honcho Dan Truman determines the only way to stop it is to drill into its surface and detonate a nuclear bomb. This leads him to renowned driller Harry Stamper, who agrees to helm the dangerous space mission provided he can bring along his own hotshot crew. Among them is the cocksure A.J. who Harry thinks isn't good enough for his daughter, until the mission proves otherwise.",
    genre: [
      Genres.Horror,
    ],
    duration: 151
  },
  {
    id: 36647,
    title: "Blade",
    rating: 6.5,
    releaseDate: "1998-08-21",
    imagePath: "https://image.tmdb.org/t/p/w500/r0RQ9ZOEZglLOeYDNJTehVTRoR6.jpg",
    url: "https://image.tmdb.org/t/p/w500/r0RQ9ZOEZglLOeYDNJTehVTRoR6.jpg",
    description: "When Blade's mother was bitten by a vampire during pregnancy, she did not know that she gave her son a special gift while dying: All the good vampire attributes in combination with the best human skills. Blade and his mentor Whistler battle an evil vampire rebel (Deacon Frost) who plans to take over the outdated vampire council, capture Blade and resurrect voracious blood god La Magra.",
    genre: [
      Genres.Drama
    ],
    duration: 120
  },
  {
    id: 75656,
    title: "Now You See Me",
    rating: 7.3,
    releaseDate: "2013-05-29",
    imagePath: "https://image.tmdb.org/t/p/w500/A06e9YJ5ry3WXEIFIAD1mKBxcuZ.jpg",
    url: "https://image.tmdb.org/t/p/w500/A06e9YJ5ry3WXEIFIAD1mKBxcuZ.jpg",
    description: "An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances and reward their audiences with the money.",
    genre: [
      Genres.Horror,
    ],
    duration: 115
  },
  {
    id: 193756,
    title: "Lone Survivor",
    rating: 7.3,
    releaseDate: "2013-12-24",
    imagePath: "https://image.tmdb.org/t/p/w500/8ST6iVp3fkUSbUpXRAc2Q96YQRk.jpg",
    url: "https://image.tmdb.org/t/p/w500/8ST6iVp3fkUSbUpXRAc2Q96YQRk.jpg",
    description: "Based on the failed June 28, 2005 mission \"Operation Red Wing.\" Four members of SEAL Team 10, were tasked with the mission to capture or kill notorious Taliban leader, Ahmad Shah. Only one member of the team survived.",
    genre: [
      Genres.Horror,
    ],
    duration: 121
  },
  {
    id: 744,
    title: "Top Gun",
    rating: 6.7,
    releaseDate: "1986-05-16",
    imagePath: "https://image.tmdb.org/t/p/w500/orGXnBKfT41LxZhitLkXhqUfJJW.jpg",
    url: "https://image.tmdb.org/t/p/w500/orGXnBKfT41LxZhitLkXhqUfJJW.jpg",
    description: "For Lieutenant Pete 'Maverick' Mitchell and his friend and Co-Pilot Nick 'Goose' Bradshaw being accepted into an elite training school for fighter pilots is a dream come true.  A tragedy, as well as personal demons, threaten Pete's dreams of becoming an Ace pilot.",
    genre: [
      Genres.Drama
    ],
    duration: 110
  },
  {
    id: 141,
    title: "Donnie Darko",
    rating: 7.8,
    releaseDate: "2001-01-18",
    imagePath: "https://image.tmdb.org/t/p/w500/nmb4QhCRmdfNP6rgb81yUFgI83l.jpg",
    url: "https://image.tmdb.org/t/p/w500/nmb4QhCRmdfNP6rgb81yUFgI83l.jpg",
    description: "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a large bunny rabbit that manipulates him to commit a series of crimes.",
    genre: [
      Genres.Drama
    ],
    duration: 113
  },
  {
    id: 91586,
    title: "Insidious: Chapter 2",
    rating: 6.6,
    releaseDate: "2013-09-12",
    imagePath: "https://image.tmdb.org/t/p/w500/qjzk0pig5c7aTLlvKzcegD9PXA.jpg",
    url: "https://image.tmdb.org/t/p/w500/qjzk0pig5c7aTLlvKzcegD9PXA.jpg",
    description: "The haunted Lambert family seeks to uncover the mysterious childhood secret that has left them dangerously connected to the spirit world.",
    genre: [
      Genres.Horror
    ],
    duration: 106
  },
  {
    id: 49849,
    title: "Cowboys & Aliens",
    rating: 5.4,
    releaseDate: "2011-07-29",
    imagePath: "https://image.tmdb.org/t/p/w500/tXEHvxU315Yu7bEaMMRcpDpW6RI.jpg",
    url: "https://image.tmdb.org/t/p/w500/tXEHvxU315Yu7bEaMMRcpDpW6RI.jpg",
    description: "A stranger stumbles into the desert town of Absolution with no memory of his past and a futuristic shackle around his wrist. With the help of mysterious beauty Ella and the iron-fisted Colonel Dolarhyde, he finds himself leading an unlikely posse of cowboys, outlaws, and Apache warriors against a common enemy from beyond this world in an epic showdown for survival.",
    genre: [
      Genres.Horror,
    ],
    duration: 119
  },
  {
    id: 8077,
    title: "Alien³",
    rating: 6.2,
    releaseDate: "1992-05-22",
    imagePath: "https://image.tmdb.org/t/p/w500/p7mUd9GpmCYV5qhkKGmiEerFK3i.jpg",
    url: "https://image.tmdb.org/t/p/w500/p7mUd9GpmCYV5qhkKGmiEerFK3i.jpg",
    description: "After escaping with Newt and Hicks from the alien planet, Ripley crash lands on Fiorina 161, a prison planet and host to a correctional facility. Unfortunately, although Newt and Hicks do not survive the crash, a more unwelcome visitor does. The prison does not allow weapons of any kind, and with aid being a long time away, the prisoners must simply survive in any way they can.",
    genre: [
      Genres.Drama
    ],
    duration: 114
  },
  {
    id: 387,
    title: "Das Boot",
    rating: 8,
    releaseDate: "1981-09-16",
    imagePath: "https://image.tmdb.org/t/p/w500/xRhHL7AHEo1J1d70qwmwQMZlEtd.jpg",
    url: "https://image.tmdb.org/t/p/w500/xRhHL7AHEo1J1d70qwmwQMZlEtd.jpg",
    description: "A German submarine hunts allied ships during the Second World War, but it soon becomes the hunted. The crew tries to survive below the surface, while stretching both the boat and themselves to their limits.",
    genre: [
      Genres.Drama
    ],
    duration: 149
  },
  {
    id: 115,
    title: "The Big Lebowski",
    rating: 7.8,
    releaseDate: "1998-03-06",
    imagePath: "https://image.tmdb.org/t/p/w500/qiE3ovg9TPylHReZjizQ40LsKZV.jpg",
    url: "https://image.tmdb.org/t/p/w500/qiE3ovg9TPylHReZjizQ40LsKZV.jpg",
    description: "Jeffrey \"The Dude\" Lebowski, a Los Angeles slacker who only wants to bowl and drink white Russians, is mistaken for another Jeffrey Lebowski, a wheelchair-bound millionaire, and finds himself dragged into a strange series of events involving nihilists, adult film producers, ferrets, errant toes, and large sums of money.",
    genre: [
      Genres.Comedy,
    ],
    duration: 117
  },
  {
    id: 380,
    title: "Rain Man",
    rating: 7.6,
    releaseDate: "1988-12-11",
    imagePath: "https://image.tmdb.org/t/p/w500/A9XB6BmDlxqag4EFG4aM8R08B5t.jpg",
    url: "https://image.tmdb.org/t/p/w500/A9XB6BmDlxqag4EFG4aM8R08B5t.jpg",
    description: "Selfish yuppie Charlie Babbitt's father left a fortune to his savant brother Raymond and a pittance to Charlie; they travel cross-country.",
    genre: [
      Genres.Drama
    ],
    duration: 133
  },
  {
    id: 70,
    title: "Million Dollar Baby",
    rating: 7.8,
    releaseDate: "2004-12-15",
    imagePath: "https://image.tmdb.org/t/p/w500/h4VZKi2Jt4VoBYJmtC4c3bO8KqM.jpg",
    url: "https://image.tmdb.org/t/p/w500/h4VZKi2Jt4VoBYJmtC4c3bO8KqM.jpg",
    description: "Despondent over a painful estrangement from his daughter, trainer Frankie Dunn isn't prepared for boxer Maggie Fitzgerald to enter his life. But Maggie's determined to go pro and to convince Dunn and his cohort to help her.",
    genre: [
      Genres.Drama
    ],
    duration: 132
  },
  {
    id: 36648,
    title: "Blade: Trinity",
    rating: 5.7,
    releaseDate: "2004-12-08",
    imagePath: "https://image.tmdb.org/t/p/w500/4WinsdHQBdh5aTt7Bd7T7dbUXbb.jpg",
    url: "https://image.tmdb.org/t/p/w500/4WinsdHQBdh5aTt7Bd7T7dbUXbb.jpg",
    description: "For years, Blade has fought against the vampires in the cover of the night. But now, after falling into the crosshairs of the FBI, he is forced out into the daylight, where he is driven to join forces with a clan of human vampire hunters he never knew existed - The Nightstalkers. Together with Abigail and Hannibal, two deftly trained Nightstalkers, Blade follows a trail of blood to the ancient creature that is also hunting him, the original vampire, Dracula.",
    genre: [
      Genres.Horror,
    ],
    duration: 123
  },
  {
    id: 350,
    title: "The Devil Wears Prada",
    rating: 7.1,
    releaseDate: "2006-06-30",
    imagePath: "https://image.tmdb.org/t/p/w500/8unCRm0LeiO0fM6skWAZy3ZfXR1.jpg",
    url: "https://image.tmdb.org/t/p/w500/8unCRm0LeiO0fM6skWAZy3ZfXR1.jpg",
    description: "The Devil Wears Prada is about a young journalist who moves to New York to work in the fashion industry. Her boss however is extremely demanding and cruel and won’t let her succeed if she doesn’t fit into the high class elegant look of their magazine when all she really wants to be a good journalist.",
    genre: [
      Genres.Comedy,
    ],
    duration: 109
  },
  {
    id: 389015,
    title: "I, Tonya",
    rating: 7.5,
    releaseDate: "2017-12-08",
    imagePath: "https://image.tmdb.org/t/p/w500/6gNXwSHxaksR1PjVZRqNapmkgj3.jpg",
    url: "https://image.tmdb.org/t/p/w500/6gNXwSHxaksR1PjVZRqNapmkgj3.jpg",
    description: "Competitive ice skater Tonya Harding rises amongst the ranks at the U.S. Figure Skating Championships, but her future in the sport is thrown into doubt when her ex-husband intervenes.",
    genre: [
      Genres.Drama
    ],
    duration: 120
  },
  {
    id: 23629,
    title: "Sucker Punch",
    rating: 6,
    releaseDate: "2011-03-24",
    imagePath: "https://image.tmdb.org/t/p/w500/s5SjC5pXsBQG3wx9iVzaIzJzpFl.jpg",
    url: "https://image.tmdb.org/t/p/w500/s5SjC5pXsBQG3wx9iVzaIzJzpFl.jpg",
    description: "A young girl is institutionalized by her abusive stepfather. Retreating to an alternative reality as a coping strategy, she envisions a plan which will help her escape from the mental facility.",
    genre: [
      Genres.Horror
    ],
    duration: 110
  },
  {
    id: 238713,
    title: "Spy",
    rating: 6.8,
    releaseDate: "2015-05-06",
    imagePath: "https://image.tmdb.org/t/p/w500/xaOq0BnMHl445iZ4B7szBzaWgjS.jpg",
    url: "https://image.tmdb.org/t/p/w500/xaOq0BnMHl445iZ4B7szBzaWgjS.jpg",
    description: "A desk-bound CIA analyst volunteers to go undercover to infiltrate the world of a deadly arms dealer, and prevent diabolical global disaster.",
    genre: [
      Genres.Comedy,
    ],
    duration: 120
  },
  {
    id: 346,
    title: "Seven Samurai",
    rating: 8.2,
    releaseDate: "1954-04-26",
    imagePath: "https://image.tmdb.org/t/p/w500/v6xrz4fr92KY1oNC3HsEvrsvR1n.jpg",
    url: "https://image.tmdb.org/t/p/w500/v6xrz4fr92KY1oNC3HsEvrsvR1n.jpg",
    description: "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food. A giant battle occurs when 40 bandits attack the village.",
    genre: [
      Genres.Drama
    ],
    duration: 207
  },
  {
    id: 2024,
    title: "The Patriot",
    rating: 6.9,
    releaseDate: "2000-06-28",
    imagePath: "https://image.tmdb.org/t/p/w500/tgXOraQmKatqrVs2KMgnNn6QpO.jpg",
    url: "https://image.tmdb.org/t/p/w500/tgXOraQmKatqrVs2KMgnNn6QpO.jpg",
    description: "After proving himself on the field of battle in the French and Indian War, Benjamin Martin wants nothing more to do with such things, preferring the simple life of a farmer. But when his son Gabriel enlists in the army to defend their new nation, America, against the British, Benjamin reluctantly returns to his old life to protect his son.",
    genre: [
      Genres.Drama
    ],
    duration: 165
  },
  {
    id: 389,
    title: "12 Angry Men",
    rating: 8.3,
    releaseDate: "1957-03-25",
    imagePath: "https://image.tmdb.org/t/p/w500/3W0v956XxSG5xgm7LB6qu8ExYJ2.jpg",
    url: "https://image.tmdb.org/t/p/w500/3W0v956XxSG5xgm7LB6qu8ExYJ2.jpg",
    description: "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
    genre: [
      Genres.Drama
    ],
    duration: 96
  },
  {
    id: 72559,
    title: "G.I. Joe: Retaliation",
    rating: 5.4,
    releaseDate: "2013-03-26",
    imagePath: "https://image.tmdb.org/t/p/w500/swk1AHwPvIJv8NUFM1qpFuaT642.jpg",
    url: "https://image.tmdb.org/t/p/w500/swk1AHwPvIJv8NUFM1qpFuaT642.jpg",
    description: "Framed for crimes against the country, the G.I. Joe team is terminated by Presidential order. This forces the G.I. Joes into not only fighting their mortal enemy Cobra; they are forced to contend with threats from within the government that jeopardize their very existence.",
    genre: [
      Genres.Horror
    ],
    duration: 110
  },
  {
    id: 1894,
    title: "Star Wars: Episode II - Attack of the Clones",
    rating: 6.4,
    releaseDate: "2002-05-15",
    imagePath: "https://image.tmdb.org/t/p/w500/2vcNFtrZXNwIcBgH5e2xXCmVR8t.jpg",
    url: "https://image.tmdb.org/t/p/w500/2vcNFtrZXNwIcBgH5e2xXCmVR8t.jpg",
    description: "Ten years after the invasion of Naboo, the galaxy is on the brink of civil war. Under the leadership of a renegade Jedi named Count Dooku, thousands of solar systems threaten to break away from the Galactic Republic. When an assassination attempt is made on Senator Padmé Amidala, the former Queen of Naboo, twenty-year-old Jedi apprentice Anakin Skywalker is assigned to protect her. In the course of his mission, Anakin discovers his love for Padmé as well as his own darker side. Soon, Anakin, Padmé, and Obi-Wan Kenobi are drawn into the heart of the Separatist movement and the beginning of the Clone Wars.",
    genre: [
      Genres.Action
    ],
    duration: 142
  },
  {
    id: 581,
    title: "Dances with Wolves",
    rating: 7.7,
    releaseDate: "1990-11-09",
    imagePath: "https://image.tmdb.org/t/p/w500/hpmclspug1I8EwKSWhL7pWWltA.jpg",
    url: "https://image.tmdb.org/t/p/w500/hpmclspug1I8EwKSWhL7pWWltA.jpg",
    description: "Wounded Civil War soldier, John Dunbar tries to commit suicide – and becomes a hero instead. As a reward, he's assigned to his dream post, a remote junction on the Western frontier, and soon makes unlikely friends with the local Sioux tribe.",
    genre: [
      Genres.Drama
    ],
    duration: 181
  },
  {
    id: 65754,
    title: "The Girl with the Dragon Tattoo",
    rating: 7.2,
    releaseDate: "2011-12-14",
    imagePath: "https://image.tmdb.org/t/p/w500/voxRWFTtagLiqnJQs9tWQLB0MN.jpg",
    url: "https://image.tmdb.org/t/p/w500/voxRWFTtagLiqnJQs9tWQLB0MN.jpg",
    description: "This English-language adaptation of the Swedish novel by Stieg Larsson follows a disgraced journalist, Mikael Blomkvist, as he investigates the disappearance of a weary patriarch's niece from 40 years ago. He is aided by the pierced, tattooed, punk computer hacker named Lisbeth Salander. As they work together in the investigation, Blomkvist and Salander uncover immense corruption beyond anything they have ever imagined.",
    genre: [
      Genres.Horror,
    ],
    duration: 158
  },
  {
    id: 126889,
    title: "Alien: Covenant",
    rating: 5.8,
    releaseDate: "2017-05-09",
    imagePath: "https://image.tmdb.org/t/p/w500/zecMELPbU5YMQpC81Z8ImaaXuf9.jpg",
    url: "https://image.tmdb.org/t/p/w500/zecMELPbU5YMQpC81Z8ImaaXuf9.jpg",
    description: "Bound for a remote planet on the far side of the galaxy, the crew of the colony ship 'Covenant' discovers what is thought to be an uncharted paradise, but is actually a dark, dangerous world – which has its sole inhabitant the 'synthetic', David, survivor of the doomed Prometheus expedition.",
    genre: [
      Genres.Horror
    ],
    duration: 122
  },
  {
    id: 2493,
    title: "The Princess Bride",
    rating: 7.6,
    releaseDate: "1987-09-18",
    imagePath: "https://image.tmdb.org/t/p/w500/gpxjoE0yvRwIhFEJgNArtKtaN7S.jpg",
    url: "https://image.tmdb.org/t/p/w500/gpxjoE0yvRwIhFEJgNArtKtaN7S.jpg",
    description: "In this enchantingly cracked fairy tale, the beautiful Princess Buttercup and the dashing Westley must overcome staggering odds to find happiness amid six-fingered swordsmen, murderous princes, Sicilians and rodents of unusual size. But even death can't stop these true lovebirds from triumphing.",
    genre: [
      Genres.Comedy,
    ],
    duration: 98
  },
  {
    id: 9802,
    title: "The Rock",
    rating: 6.9,
    releaseDate: "1996-06-06",
    imagePath: "https://image.tmdb.org/t/p/w500/pAVaLJQBRM4JlZEGXvezwbxOd15.jpg",
    url: "https://image.tmdb.org/t/p/w500/pAVaLJQBRM4JlZEGXvezwbxOd15.jpg",
    description: "FBI chemical warfare expert Stanley Goodspeed is sent on an urgent mission with a former British spy, John Patrick Mason, to stop Gen. Francis X. Hummel from launching chemical weapons on Alcatraz Island into San Francisco. Gen. Hummel demands $100 million in war reparations to be paid to the families of slain servicemen who died on covert operations. After their SEAL team is wiped out, Stanley and John deal with the soldiers on their own.",
    genre: [
      Genres.Horror
    ],
    duration: 136
  },
  {
    id: 35,
    title: "The Simpsons Movie",
    rating: 6.9,
    releaseDate: "2007-07-25",
    imagePath: "https://image.tmdb.org/t/p/w500/eCytnEriVur3rT47NWfkgPXD9qs.jpg",
    url: "https://image.tmdb.org/t/p/w500/eCytnEriVur3rT47NWfkgPXD9qs.jpg",
    description: "After Homer accidentally pollutes the town's water supply, Springfield is encased in a gigantic dome by the EPA and the Simpsons are declared fugitives.",
    genre: [
      Genres.Comedy,
    ],
    duration: 87
  },
  {
    id: 11778,
    title: "The Deer Hunter",
    rating: 7.9,
    releaseDate: "1978-12-08",
    imagePath: "https://image.tmdb.org/t/p/w500/slNJESItHPqp1CENEJQUPw8d7WE.jpg",
    url: "https://image.tmdb.org/t/p/w500/slNJESItHPqp1CENEJQUPw8d7WE.jpg",
    description: "A group of working-class friends decides to enlist in the Army during the Vietnam War and finds it to be hellish chaos -- not the noble venture they imagined. Before they left, Steven married his pregnant girlfriend -- and Michael and Nick were in love with the same woman. But all three are different men upon their return.",
    genre: [
      Genres.Drama
    ],
    duration: 183
  },
  {
    id: 3933,
    title: "Corpse Bride",
    rating: 7.3,
    releaseDate: "2005-09-12",
    imagePath: "https://image.tmdb.org/t/p/w500/o9GbcdP7rOg2m1NyUnUR3ZwNcTE.jpg",
    url: "https://image.tmdb.org/t/p/w500/o9GbcdP7rOg2m1NyUnUR3ZwNcTE.jpg",
    description: "Set in a 19th-century european village, this stop-motion animation feature follows the story of Victor, a young man whisked away to the underworld and wed to a mysterious corpse bride, while his real bride Victoria waits bereft in the land of the living.",
    genre: [
      Genres.Drama
    ],
    duration: 77
  },
  {
    id: 8467,
    title: "Dumb and Dumber",
    rating: 6.5,
    releaseDate: "1994-12-16",
    imagePath: "https://image.tmdb.org/t/p/w500/3PEAkZHa8ehfUkuKbzmQNRTTAAs.jpg",
    url: "https://image.tmdb.org/t/p/w500/3PEAkZHa8ehfUkuKbzmQNRTTAAs.jpg",
    description: "Lloyd and Harry are two men whose stupidity is really indescribable. When Mary, a beautiful woman, loses an important suitcase with money before she leaves for Aspen, the two friends (who have found the suitcase) decide to return it to her. After some \"adventures\" they finally get to Aspen where, using the lost money they live it up and fight for Mary's heart.",
    genre: [
      Genres.Comedy
    ],
    duration: 107
  },
  {
    id: 11688,
    title: "The Emperor's New Groove",
    rating: 7.3,
    releaseDate: "2000-12-09",
    imagePath: "https://image.tmdb.org/t/p/w500/rbgOxT446Wb0c4dJC4iLKgxtW1U.jpg",
    url: "https://image.tmdb.org/t/p/w500/rbgOxT446Wb0c4dJC4iLKgxtW1U.jpg",
    description: "Kuzco is a self-centered emperor who summons Pacha from a village and to tell him that his home will be destroyed to make room for Kuzco's new summer home. Kuzco's advisor, Yzma, tries to poison Kuzco and accidentally turns him into a llama, who accidentally ends up in Pacha's village. Pacha offers to help Kuzco if he doesn't destroy his house, and so they form an unlikely partnership.",
    genre: [
      Genres.Comedy,
    ],
    duration: 78
  },
  {
    id: 1878,
    title: "Fear and Loathing in Las Vegas",
    rating: 7.1,
    releaseDate: "1998-05-22",
    imagePath: "https://image.tmdb.org/t/p/w500/u9ffgobMADj6GCafeImbov566j9.jpg",
    url: "https://image.tmdb.org/t/p/w500/u9ffgobMADj6GCafeImbov566j9.jpg",
    description: "Raoul Duke and his attorney Dr. Gonzo drive a red convertible across the Mojave desert to Las Vegas with a suitcase full of drugs to cover a motorcycle race. As their consumption of drugs increases at an alarming rate, the stoned duo trash their hotel room and fear legal repercussions. Duke begins to drive back to L.A., but after an odd run-in with a cop, he returns to Sin City and continues his wild drug binge.",
    genre: [
      Genres.Comedy
    ],
    duration: 118
  },
  {
    id: 2118,
    title: "L.A. Confidential",
    rating: 7.7,
    releaseDate: "1997-09-19",
    imagePath: "https://image.tmdb.org/t/p/w500/rIXzJCAvyd3Ci8ipylDQ5wUKqwh.jpg",
    url: "https://image.tmdb.org/t/p/w500/rIXzJCAvyd3Ci8ipylDQ5wUKqwh.jpg",
    description: "Three detectives in the corrupt and brutal L.A. police force of the 1950s use differing methods to uncover a conspiracy behind the shotgun slayings of the patrons at an all-night diner.",
    genre: [
      Genres.Horror
    ],
    duration: 138
  },
  {
    id: 23048,
    title: "Hot Tub Time Machine",
    rating: 5.9,
    releaseDate: "2010-03-26",
    imagePath: "https://image.tmdb.org/t/p/w500/zERxFAXiQdPAfsumIIcBFH8fOVt.jpg",
    url: "https://image.tmdb.org/t/p/w500/zERxFAXiQdPAfsumIIcBFH8fOVt.jpg",
    description: "A malfunctioning time machine at a ski resort takes a man back to 1986 with his two friends and nephew, where they must relive a fateful night and not change anything to make sure the nephew is born.",
    genre: [
      Genres.Comedy,
    ],
    duration: 101
  },
  {
    id: 808,
    title: "Shrek",
    rating: 7.4,
    releaseDate: "2001-05-16",
    imagePath: "https://image.tmdb.org/t/p/w500/140ewbWv8qHStD3mlBDvvGd0Zvu.jpg",
    url: "https://image.tmdb.org/t/p/w500/140ewbWv8qHStD3mlBDvvGd0Zvu.jpg",
    description: "It ain't easy bein' green -- especially if you're a likable (albeit smelly) ogre named Shrek. On a mission to retrieve a gorgeous princess from the clutches of a fire-breathing dragon, Shrek teams up with an unlikely compatriot -- a wisecracking donkey.",
    genre: [
      Genres.Comedy,
    ],
    duration: 90
  },
  {
    id: 591,
    title: "The Da Vinci Code",
    rating: 6.5,
    releaseDate: "2006-05-17",
    imagePath: "https://image.tmdb.org/t/p/w500/5IqaT3fza0Y9vKazjGwDGsNuuS8.jpg",
    url: "https://image.tmdb.org/t/p/w500/5IqaT3fza0Y9vKazjGwDGsNuuS8.jpg",
    description: "When the curator of the Louvre is found murdered in the famed museum's hallowed halls, Harvard professor, Robert Langdon and cryptographer, Sophie Neve must untangle a deadly web of deceit involving the works of Leonardo da Vinci.",
    genre: [
      Genres.Horror,
    ],
    duration: 149
  },
  {
    id: 7443,
    title: "Chicken Run",
    rating: 6.5,
    releaseDate: "2000-06-21",
    imagePath: "https://image.tmdb.org/t/p/w500/z0MafJgUnVyVbczicYMkPKKHkBi.jpg",
    url: "https://image.tmdb.org/t/p/w500/z0MafJgUnVyVbczicYMkPKKHkBi.jpg",
    description: "Having been hopelessly repressed and facing eventual certain death at the British chicken farm where they are held, Rocky the american rooster and Ginger the chicken decide to rebel against the evil Mr. and Mrs. Tweedy, the farm's owners. Rocky and Ginger lead their fellow chickens in a great escape from the murderous farmers and their farm of doom.",
    genre: [
      Genres.Comedy,
    ],
    duration: 84
  },
  {
    id: 956,
    title: "Mission: Impossible III",
    rating: 6.5,
    releaseDate: "2006-05-03",
    imagePath: "https://image.tmdb.org/t/p/w500/qjy8ABAbWooV4jLG6UjzDHlv4RB.jpg",
    url: "https://image.tmdb.org/t/p/w500/qjy8ABAbWooV4jLG6UjzDHlv4RB.jpg",
    description: "Retired from active duty to train new IMF agents, Ethan Hunt is called back into action to confront sadistic arms dealer, Owen Davian. Hunt must try to protect his girlfriend while working with his new team to complete the mission.",
    genre: [
      Genres.Horror
    ],
    duration: 126
  },
  {
    id: 41439,
    title: "Saw: The Final Chapter",
    rating: 5.8,
    releaseDate: "2010-10-21",
    imagePath: "https://image.tmdb.org/t/p/w500/mBQX4TCfDEk2a5mvu0Z0PFeFoUp.jpg",
    url: "https://image.tmdb.org/t/p/w500/mBQX4TCfDEk2a5mvu0Z0PFeFoUp.jpg",
    description: "As a deadly battle rages over Jigsaw's brutal legacy, a group of Jigsaw survivors gathers to seek the support of self-help guru and fellow survivor Bobby Dagen, a man whose own dark secrets unleash a new wave of terror.",
    genre: [
      Genres.Drama
    ],
    duration: 90
  },
  {
    id: 109428,
    title: "Evil Dead",
    rating: 6.4,
    releaseDate: "2013-04-05",
    imagePath: "https://image.tmdb.org/t/p/w500/z56CMoFXOhq4zieKMsokLaiB4qE.jpg",
    url: "https://image.tmdb.org/t/p/w500/z56CMoFXOhq4zieKMsokLaiB4qE.jpg",
    description: "Evil Dead, the fourth installment of the Evil Dead franchise, serving as both a reboot and as a loose continuation of the series, features Mia, a young woman struggling with sobriety, heads to a remote cabin with a group of friends where the discovery of a Book of the Dead unwittingly summon up dormant demons which possess the youngsters one by one.",
    genre: [
      Genres.Drama
    ],
    duration: 91
  },
  {
    id: 2567,
    title: "The Aviator",
    rating: 7,
    releaseDate: "2004-12-17",
    imagePath: "https://image.tmdb.org/t/p/w500/3MKBQgIHI5DPVNvryiTesskS5mf.jpg",
    url: "https://image.tmdb.org/t/p/w500/3MKBQgIHI5DPVNvryiTesskS5mf.jpg",
    description: "A biopic depicting the life of filmmaker and aviation pioneer Howard Hughes from 1927 to 1947, during which time he became a successful film producer and an aviation magnate, while simultaneously growing more unstable due to severe obsessive-compulsive disorder.",
    genre: [
      Genres.Drama
    ],
    duration: 170
  },
  {
    id: 36955,
    title: "True Lies",
    rating: 6.8,
    releaseDate: "1994-07-15",
    imagePath: "https://image.tmdb.org/t/p/w500/mTAHr5h5i64hTLqo0cW2X2083Cx.jpg",
    url: "https://image.tmdb.org/t/p/w500/mTAHr5h5i64hTLqo0cW2X2083Cx.jpg",
    description: "Harry Tasker is a secret agent for the United States Government. For years, he has kept his job from his wife, but is forced to reveal his identity and try to stop nuclear terrorists when he and his wife are kidnapped by them.",
    genre: [
      Genres.Horror
    ],
    duration: 141
  },
  {
    id: 207,
    title: "Dead Poets Society",
    rating: 8.2,
    releaseDate: "1989-06-02",
    imagePath: "https://image.tmdb.org/t/p/w500/3Ri2GReavqSHqWemlP6HYn8i2P9.jpg",
    url: "https://image.tmdb.org/t/p/w500/3Ri2GReavqSHqWemlP6HYn8i2P9.jpg",
    description: "At an elite, old-fashioned boarding school in New England, a passionate English teacher inspires his students to rebel against convention and seize the potential of every day, courting the disdain of the stern headmaster.",
    genre: [
      Genres.Drama
    ],
    duration: 128
  },
  {
    id: 181533,
    title: "Night at the Museum: Secret of the Tomb",
    rating: 6.1,
    releaseDate: "2014-12-17",
    imagePath: "https://image.tmdb.org/t/p/w500/tWwASv4CU1Au1IukacdSUewDCV3.jpg",
    url: "https://image.tmdb.org/t/p/w500/tWwASv4CU1Au1IukacdSUewDCV3.jpg",
    description: "When the magic powers of The Tablet of Ahkmenrah begin to die out, Larry Daley (Ben Stiller) spans the globe, uniting favorite and new characters while embarking on an epic quest to save the magic before it is gone forever.",
    genre: [
      Genres.Comedy,
    ],
    duration: 97
  },
  {
    id: 49018,
    title: "Insidious",
    rating: 6.8,
    releaseDate: "2010-09-13",
    imagePath: "https://image.tmdb.org/t/p/w500/6Tjg6DWVo2cpqDLxrOQNw1UvIMB.jpg",
    url: "https://image.tmdb.org/t/p/w500/6Tjg6DWVo2cpqDLxrOQNw1UvIMB.jpg",
    description: "A family discovers that dark spirits have invaded their home after their son inexplicably falls into an endless sleep. When they reach out to a professional for help, they learn things are a lot more personal than they thought.",
    genre: [
      Genres.Horror
    ],
    duration: 103
  },
  {
    id: 49529,
    title: "John Carter",
    rating: 6.1,
    releaseDate: "2012-03-07",
    imagePath: "https://image.tmdb.org/t/p/w500/4QDBNt9PmxqUH4Ab2R5xKWqzXiQ.jpg",
    url: "https://image.tmdb.org/t/p/w500/4QDBNt9PmxqUH4Ab2R5xKWqzXiQ.jpg",
    description: "John Carter is a war-weary, former military captain who's inexplicably transported to the mysterious and exotic planet of Barsoom (Mars) and reluctantly becomes embroiled in an epic conflict. It's a world on the brink of collapse, and Carter rediscovers his humanity when he realizes the survival of Barsoom and its people rests in his hands.",
    genre: [
      Genres.Action
    ],
    duration: 132
  },
  {
    id: 18823,
    title: "Clash of the Titans",
    rating: 5.6,
    releaseDate: "2010-04-01",
    imagePath: "https://image.tmdb.org/t/p/w500/n8W2Y72VzSi8Yz6IvYWwfoiMTS6.jpg",
    url: "https://image.tmdb.org/t/p/w500/n8W2Y72VzSi8Yz6IvYWwfoiMTS6.jpg",
    description: "Born of a god but raised as a man, Perseus is helpless to save his family from Hades, vengeful god of the underworld. With nothing to lose, Perseus volunteers to lead a dangerous mission to defeat Hades before he can seize power from Zeus and unleash hell on earth. Battling unholy demons and fearsome beasts, Perseus and his warriors will only survive if Perseus accepts his power as a god, defies fate and creates his own destiny.",
    genre: [
      Genres.Drama
    ],
    duration: 106
  },
  {
    id: 293863,
    title: "The Age of Adaline",
    rating: 7.4,
    releaseDate: "2015-04-16",
    imagePath: "https://image.tmdb.org/t/p/w500/gEDGROZ4NQDlRjUPPSSyIf0hKvD.jpg",
    url: "https://image.tmdb.org/t/p/w500/gEDGROZ4NQDlRjUPPSSyIf0hKvD.jpg",
    description: "After 29-year-old Adaline recovers from a nearly lethal accident, she inexplicably stops growing older. As the years stretch on and on, Adaline keeps her secret to herself  until she meets a man who changes her life.",
    genre: [
      Genres.Drama
    ],
    duration: 112
  },
  {
    id: 1979,
    title: "Fantastic 4: Rise of the Silver Surfer",
    rating: 5.4,
    releaseDate: "2007-06-13",
    imagePath: "https://image.tmdb.org/t/p/w500/fXpziQgnBnB4bLgjKhjTbLQumE5.jpg",
    url: "https://image.tmdb.org/t/p/w500/fXpziQgnBnB4bLgjKhjTbLQumE5.jpg",
    description: "The Fantastic Four return to the big screen as a new and all powerful enemy threatens the Earth. The seemingly unstoppable 'Silver Surfer', but all is not what it seems and there are old and new enemies that pose a greater threat than the intrepid superheroes realize.",
    genre: [
      Genres.Horror
    ],
    duration: 92
  },
  {
    id: 196,
    title: "Back to the Future Part III",
    rating: 7.2,
    releaseDate: "1990-05-25",
    imagePath: "https://image.tmdb.org/t/p/w500/6DmgPTZYaug7QNDjOhUDWyjOQDl.jpg",
    url: "https://image.tmdb.org/t/p/w500/6DmgPTZYaug7QNDjOhUDWyjOQDl.jpg",
    description: "The final installment of the Back to the Future trilogy finds Marty digging the trusty DeLorean out of a mineshaft and looking for Doc in the Wild West of 1885. But when their time machine breaks down, the travelers are stranded in a land of spurs. More problems arise when Doc falls for pretty schoolteacher Clara Clayton, and Marty tangles with Buford Tannen.",
    genre: [
      Genres.Comedy,
    ],
    duration: 118
  },
  {
    id: 80752,
    title: "The Dark Side of Love",
    rating: 6,
    releaseDate: "1984-12-01",
    imagePath: "https://image.tmdb.org/t/p/w500/eYO04ARWm4gT7yhakM7C6I7vT2n.jpg",
    url: "https://image.tmdb.org/t/p/w500/eYO04ARWm4gT7yhakM7C6I7vT2n.jpg",
    description: "The sexual relationship between a successful woman and her brother, an introvert, hypochondriacal youth, who is also a pornophile.",
    genre: [
      Genres.Drama
    ],
    duration: 91
  },
  {
    id: 437543,
    title: "The Monkey King 3: Kingdom of Women",
    rating: 4.8,
    releaseDate: "2018-02-16",
    imagePath: "https://image.tmdb.org/t/p/w500/zMYnxPIkUVaRIuTpS77B8hLGkBB.jpg",
    url: "https://image.tmdb.org/t/p/w500/zMYnxPIkUVaRIuTpS77B8hLGkBB.jpg",
    description: "The third installment of the blockbuster fantasy series sees the return of the Monkey King (Aaron Kwok) in his most action-packed adventure yet! While continuing their epic journey to the West, the Monkey King and his companions are taken captive by the Queen of an all-female land, who believes them to be part of an ancient prophecy heralding the fall of her kingdom. With a lot of sorcery and a little bit of charm, the travelers devise a plan to escape. But when their trickery angers the mighty River God, they realize they might just bring about the foretold destruction - unless they can find a way to quell her wrath.",
    genre: [
      Genres.Drama
    ],
    duration: 114
  },
  {
    id: 2668,
    title: "Sleepy Hollow",
    rating: 7,
    releaseDate: "1999-11-18",
    imagePath: "https://image.tmdb.org/t/p/w500/2UDsmTvWSxVvuGoRQyV3zVaIRyu.jpg",
    url: "https://image.tmdb.org/t/p/w500/2UDsmTvWSxVvuGoRQyV3zVaIRyu.jpg",
    description: "New York detective Ichabod Crane is sent to Sleepy Hollow to investigate a series of mysterious deaths in which the victims are found beheaded. But the locals believe the culprit to be none other than the ghost of the legendary Headless Horseman.",
    genre: [
      Genres.Horror,
    ],
    duration: 105
  },
  {
    id: 290250,
    title: "The Nice Guys",
    rating: 7,
    releaseDate: "2016-05-15",
    imagePath: "https://image.tmdb.org/t/p/w500/vNCeqxbKyDHL9LUza03V2Im16wB.jpg",
    url: "https://image.tmdb.org/t/p/w500/vNCeqxbKyDHL9LUza03V2Im16wB.jpg",
    description: "A private eye investigates the apparent suicide of a fading porn star in 1970s Los Angeles and uncovers a conspiracy.",
    genre: [
      Genres.Comedy,
      Genres.Horror
    ],
    duration: 116
  },
  {
    id: 1452,
    title: "Superman Returns",
    rating: 5.4,
    releaseDate: "2006-06-28",
    imagePath: "https://image.tmdb.org/t/p/w500/e3aLTaD5ppxo3en0GAGceekEPAe.jpg",
    url: "https://image.tmdb.org/t/p/w500/e3aLTaD5ppxo3en0GAGceekEPAe.jpg",
    description: "Superman returns to discover his 5-year absence has allowed Lex Luthor to walk free, and that those he was closest to felt abandoned and have moved on. Luthor plots his ultimate revenge that could see millions killed and change the face of the planet forever, as well as ridding himself of the Man of Steel.",
    genre: [
      Genres.Drama
    ],
    duration: 154
  },
  {
    id: 273248,
    title: "The Hateful Eight",
    rating: 7.6,
    releaseDate: "2015-12-25",
    imagePath: "https://image.tmdb.org/t/p/w500/fqe8JxDNO8B8QfOGTdjh6sPCdSC.jpg",
    url: "https://image.tmdb.org/t/p/w500/fqe8JxDNO8B8QfOGTdjh6sPCdSC.jpg",
    description: "Bounty hunters seek shelter from a raging blizzard and get caught up in a plot of betrayal and deception.",
    genre: [
      Genres.Drama
    ],
    duration: 167
  },
  {
    id: 37710,
    title: "The Tourist",
    rating: 6,
    releaseDate: "2010-12-08",
    imagePath: "https://image.tmdb.org/t/p/w500/jfLFF0Qa9jAoTYQIKaSWmMWcKZd.jpg",
    url: "https://image.tmdb.org/t/p/w500/jfLFF0Qa9jAoTYQIKaSWmMWcKZd.jpg",
    description: "American tourist Frank (Johnny Depp) meets mysterious British woman Elsie (Angelina Jolie) on the train to Venice. Romance seems to bud, but there's more to her than meets the eye. Remake of the 2005 French film \"Anthony Zimmer\", written and directed by Jérôme Salle.",
    genre: [
      Genres.Horror,
    ],
    duration: 103
  },
  {
    id: 9477,
    title: "King Arthur",
    rating: 6.1,
    releaseDate: "2004-07-07",
    imagePath: "https://image.tmdb.org/t/p/w500/kKHayVkXaF3EZDx0ybkaWypJECJ.jpg",
    url: "https://image.tmdb.org/t/p/w500/kKHayVkXaF3EZDx0ybkaWypJECJ.jpg",
    description: "The story of the Arthurian legend, based on the 'Sarmatian hypothesis' which contends that the legend has a historical nucleus in the Sarmatian heavy cavalry troops stationed in Britain, and that the Roman-British military commander, Lucius Artorius Castus is the historical person behind the legend.",
    genre: [
      Genres.Drama
    ],
    duration: 126
  },
  {
    id: 9444,
    title: "Anastasia",
    rating: 7.5,
    releaseDate: "1997-11-20",
    imagePath: "https://image.tmdb.org/t/p/w500/dKJ6OOYlHGPARKidvP1kYJjXW29.jpg",
    url: "https://image.tmdb.org/t/p/w500/dKJ6OOYlHGPARKidvP1kYJjXW29.jpg",
    description: "This animated adventure retells the story of the lost daughter of Russia's last czar. The evil Rasputin places a curse on the Romanov family, and Anastasia and her grandmother, Empress Maria, get separated. After growing up in an orphanage, Anastasia encounters two Russian men seeking a reward offered by Empress Maria for the return of her granddaughter. The trio travels to Paris, where they find that the empress has grown skeptical of imposters.",
    genre: [
      Genres.Action
    ],
    duration: 94
  },
  {
    id: 264644,
    title: "Room",
    rating: 8.1,
    releaseDate: "2015-10-16",
    imagePath: "https://image.tmdb.org/t/p/w500/eqFckcHuFCT1FrzLOAvXBb4jHwq.jpg",
    url: "https://image.tmdb.org/t/p/w500/eqFckcHuFCT1FrzLOAvXBb4jHwq.jpg",
    description: "Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it are the only real things in the world. But what will happen when his Ma suddenly tells him that there are other things outside of Room?",
    genre: [
      Genres.Horror
    ],
    duration: 117
  },
  {
    id: 4638,
    title: "Hot Fuzz",
    rating: 7.4,
    releaseDate: "2007-02-14",
    imagePath: "https://image.tmdb.org/t/p/w500/5Jx6s6VXnunh8wCLgR0YgjwSgjh.jpg",
    url: "https://image.tmdb.org/t/p/w500/5Jx6s6VXnunh8wCLgR0YgjwSgjh.jpg",
    description: "Top London cop, PC Nicholas Angel is good. Too good.  To stop the rest of his team from looking bad, he is reassigned to the quiet town of Sandford, paired with simple country cop, and everything seems quiet until two actors are found decapitated. It is addressed as an accident, but Angel isn't going to accept that, especially when more and more people turn up dead.",
    genre: [
      Genres.Comedy
    ],
    duration: 121
  },
  {
    id: 205775,
    title: "In the Heart of the Sea",
    rating: 6.5,
    releaseDate: "2015-11-20",
    imagePath: "https://image.tmdb.org/t/p/w500/zVmWh0Zfg4UhbvdGI8LQrn1lQZJ.jpg",
    url: "https://image.tmdb.org/t/p/w500/zVmWh0Zfg4UhbvdGI8LQrn1lQZJ.jpg",
    description: "In the winter of 1820, the New England whaling ship Essex was assaulted by something no one could believe: a whale of mammoth size and will, and an almost human sense of vengeance.  The real-life maritime disaster would inspire Herman Melville’s Moby Dick.  But that told only half the story.  “Heart of the Sea” reveals the encounter’s harrowing aftermath, as the ship’s surviving crew is pushed to their limits and forced to do the unthinkable to stay alive.  Braving storms, starvation, panic and despair, the men will call into question their deepest beliefs, from the value of their lives to the morality of their trade, as their captain searches for direction on the open sea and his first mate still seeks to bring the great whale down.",
    genre: [
      Genres.Horror,
    ],
    duration: 122
  },
  {
    id: 8273,
    title: "American Wedding",
    rating: 6,
    releaseDate: "2003-08-01",
    imagePath: "https://image.tmdb.org/t/p/w500/lcLuBjI3Hr12mGFKJvdMeZdf3AN.jpg",
    url: "https://image.tmdb.org/t/p/w500/lcLuBjI3Hr12mGFKJvdMeZdf3AN.jpg",
    description: "With high school a distant memory, Jim and Michelle are getting married -- and in a hurry, since Jim's grandmother is sick and wants to see him walk down the aisle -- prompting Stifler to throw the ultimate bachelor party. And Jim's dad is reliable as ever, doling out advice no one wants to hear.",
    genre: [
      Genres.Comedy,
    ],
    duration: 103
  },
  {
    id: 64690,
    title: "Drive",
    rating: 7.5,
    releaseDate: "2011-08-06",
    imagePath: "https://image.tmdb.org/t/p/w500/nu7XIa67cXc2t7frXCE5voXUJcN.jpg",
    url: "https://image.tmdb.org/t/p/w500/nu7XIa67cXc2t7frXCE5voXUJcN.jpg",
    description: "A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.",
    genre: [
      Genres.Horror,
    ],
    duration: 100
  },
  {
    id: 339846,
    title: "Baywatch",
    rating: 6,
    releaseDate: "2017-05-12",
    imagePath: "https://image.tmdb.org/t/p/w500/6HE4xd8zloDqmjMZuhUCCw2UcY1.jpg",
    url: "https://image.tmdb.org/t/p/w500/6HE4xd8zloDqmjMZuhUCCw2UcY1.jpg",
    description: "Devoted lifeguard Mitch Buchannon butts heads with a brash new recruit. Together, they uncover a local criminal plot that threatens the future of the Bay.",
    genre: [
      Genres.Comedy
    ],
    duration: 116
  },
  {
    id: 634,
    title: "Bridget Jones's Diary",
    rating: 6.6,
    releaseDate: "2001-04-13",
    imagePath: "https://image.tmdb.org/t/p/w500/ym6kjFFZg6boC0QHBVw6hqJLbxv.jpg",
    url: "https://image.tmdb.org/t/p/w500/ym6kjFFZg6boC0QHBVw6hqJLbxv.jpg",
    description: "A chaotic Bridget Jones meets a snobbish lawyer, and he soon enters her world of imperfections.",
    genre: [
      Genres.Comedy,
    ],
    duration: 97
  },
  {
    id: 406997,
    title: "Wonder",
    rating: 8.2,
    releaseDate: "2017-11-13",
    imagePath: "https://image.tmdb.org/t/p/w500/ouYgAatYH4JzIThj6FI3UYf31RI.jpg",
    url: "https://image.tmdb.org/t/p/w500/ouYgAatYH4JzIThj6FI3UYf31RI.jpg",
    description: "The story of August Pullman – a boy with facial differences – who enters fifth grade, attending a mainstream elementary school for the first time.",
    genre: [
      Genres.Drama
    ],
    duration: 113
  },
  {
    id: 185,
    title: "A Clockwork Orange",
    rating: 8.1,
    releaseDate: "1971-12-18",
    imagePath: "https://image.tmdb.org/t/p/w500/kgAi87gyx6b4oGJYSC36tVkJyJu.jpg",
    url: "https://image.tmdb.org/t/p/w500/kgAi87gyx6b4oGJYSC36tVkJyJu.jpg",
    description: "Demonic gang-leader Alex goes on the spree of rape, mugging and murder with his pack of \"droogs\". But he's a boy who also likes Beethoven's Ninth and a bit of \"the old in-out, in-out\". He later finds himself at the mercy of the state and its brainwashing experiment designed to take violence off the streets.",
    genre: [
      Genres.Drama
    ],
    duration: 136
  },
  {
    id: 72976,
    title: "Lincoln",
    rating: 6.7,
    releaseDate: "2012-11-09",
    imagePath: "https://image.tmdb.org/t/p/w500/gkkiDu9srCCbCMxGKwNwKCxK7KF.jpg",
    url: "https://image.tmdb.org/t/p/w500/gkkiDu9srCCbCMxGKwNwKCxK7KF.jpg",
    description: "A revealing drama that focuses on the 16th President's tumultuous final months in office. In a nation divided by war and the strong winds of change, Lincoln pursues a course of action designed to end the war, unite the country and abolish slavery. With the moral courage and fierce determination to succeed, his choices during this critical moment will change the fate of generations to come.",
    genre: [
      Genres.Drama
    ],
    duration: 149
  },
  {
    id: 423,
    title: "The Pianist",
    rating: 8.1,
    releaseDate: "2002-09-24",
    imagePath: "https://image.tmdb.org/t/p/w500/iunmxWkOi7Vk17Ob3G2HwwjgHsr.jpg",
    url: "https://image.tmdb.org/t/p/w500/iunmxWkOi7Vk17Ob3G2HwwjgHsr.jpg",
    description: "The true story of pianist Wladyslaw Szpilman's experiences in Warsaw during the Nazi occupation. When the Jews of the city find themselves forced into a ghetto, Szpilman finds work playing in a café; and when his family is deported in 1942, he stays behind, works for a while as a laborer, and eventually goes into hiding in the ruins of the war-torn city.",
    genre: [
      Genres.Drama
    ],
    duration: 150
  },
  {
    id: 12444,
    title: "Harry Potter and the Deathly Hallows: Part 1",
    rating: 7.6,
    releaseDate: "2010-10-17",
    imagePath: "https://image.tmdb.org/t/p/w500/maP4MTfPCeVD2FZbKTLUgriOW4R.jpg",
    url: "https://image.tmdb.org/t/p/w500/maP4MTfPCeVD2FZbKTLUgriOW4R.jpg",
    description: "Harry, Ron and Hermione walk away from their last year at Hogwarts to find and destroy the remaining Horcruxes, putting an end to Voldemort's bid for immortality. But with Harry's beloved Dumbledore dead and Voldemort's unscrupulous Death Eaters on the loose, the world is more dangerous than ever.",
    genre: [
      Genres.Drama
    ],
    duration: 146
  },
  {
    id: 77016,
    title: "End of Watch",
    rating: 7.2,
    releaseDate: "2012-09-20",
    imagePath: "https://image.tmdb.org/t/p/w500/suqikqv0DjOsW8e0hst4YWDTmAX.jpg",
    url: "https://image.tmdb.org/t/p/w500/suqikqv0DjOsW8e0hst4YWDTmAX.jpg",
    description: "Two young officers are marked for death after confiscating a small cache of money and firearms from the members of a notorious cartel during a routine traffic stop.",
    genre: [
      Genres.Horror
    ],
    duration: 109
  },
  {
    id: 87818,
    title: "Movie 43",
    rating: 4.4,
    releaseDate: "2013-01-01",
    imagePath: "https://image.tmdb.org/t/p/w500/cJvaW8eZCFS7JncM6HRKyykVTYC.jpg",
    url: "https://image.tmdb.org/t/p/w500/cJvaW8eZCFS7JncM6HRKyykVTYC.jpg",
    description: "The film is composed of multiple comedy shorts presented through an overarching segment titled \"The Pitch\", in which Charlie Wessler, a mad screenwriter, is attempting to pitch a script to film executive Griffin Schraeder. After revealing several of the stories in his script, Wessler becomes agitated when Schraeder dismisses his outrageous ideas, and he pulls a gun on him and forces him to listen to multiple other stories before making Schraeder consult his manager, Bob Mone, to purchase the film.",
    genre: [
      Genres.Comedy
    ],
    duration: 90
  },
  {
    id: 8960,
    title: "Hancock",
    rating: 6.2,
    releaseDate: "2008-07-01",
    imagePath: "https://image.tmdb.org/t/p/w500/dsCxSr4w3g2ylhlZg3v5CB5Pid7.jpg",
    url: "https://image.tmdb.org/t/p/w500/dsCxSr4w3g2ylhlZg3v5CB5Pid7.jpg",
    description: "Hancock is a down-and-out superhero who's forced to employ a PR expert to help repair his image when the public grows weary of all the damage he's inflicted during his lifesaving heroics. The agent's idea of imprisoning the antihero to make the world miss him proves successful, but will Hancock stick to his new sense of purpose or slip back into old habits?",
    genre: [
      Genres.Drama
    ],
    duration: 92
  },
  {
    id: 345,
    title: "Eyes Wide Shut",
    rating: 7.2,
    releaseDate: "1999-07-14",
    imagePath: "https://image.tmdb.org/t/p/w500/zTuqPq1PBsIoG2DV9NgKPgdaoSX.jpg",
    url: "https://image.tmdb.org/t/p/w500/zTuqPq1PBsIoG2DV9NgKPgdaoSX.jpg",
    description: "After Dr. Bill Hartford's wife, Alice, admits to having sexual fantasies about a man she met, Bill becomes obsessed with having a sexual encounter. He discovers an underground sexual group and attends one of their meetings -- and quickly discovers that he is in over his head.",
    genre: [
      Genres.Drama
    ],
    duration: 159
  },
  {
    id: 9476,
    title: "A Knight's Tale",
    rating: 6.6,
    releaseDate: "2001-05-11",
    imagePath: "https://image.tmdb.org/t/p/w500/1ZUpkMivvlF0ZoyXQzHF4El3izv.jpg",
    url: "https://image.tmdb.org/t/p/w500/1ZUpkMivvlF0ZoyXQzHF4El3izv.jpg",
    description: "William Thatcher, a peasant, is sent to apprentice with a Knight named Hector as a young boy. Urged by his father to \"change his Stars\", he assumes Sir Hector's place in a tournament when Hector dies in the middle of it. He wins. With the other apprentices, he trains and assumes the title of Sir Ulrich von Lichtenstein.",
    genre: [
      Genres.Drama
    ],
    duration: 132
  },
  {
    id: 107985,
    title: "The World's End",
    rating: 6.7,
    releaseDate: "2013-07-18",
    imagePath: "https://image.tmdb.org/t/p/w500/7xZUJMqGBLvhPJqn23UM3yUC5k5.jpg",
    url: "https://image.tmdb.org/t/p/w500/7xZUJMqGBLvhPJqn23UM3yUC5k5.jpg",
    description: "Five friends who reunite in an attempt to top their epic pub crawl from 20 years earlier unwittingly become humankind's only hope for survival.",
    genre: [
      Genres.Comedy,
    ],
    duration: 109
  },
  {
    id: 322,
    title: "Mystic River",
    rating: 7.7,
    releaseDate: "2003-10-07",
    imagePath: "https://image.tmdb.org/t/p/w500/qeHasONCKH5sR9HcTWquXI5ZN5y.jpg",
    url: "https://image.tmdb.org/t/p/w500/qeHasONCKH5sR9HcTWquXI5ZN5y.jpg",
    description: "A story about friendship and loyalty, guilt and vengeance, and the fateful affect the past has on the present.",
    genre: [
      Genres.Horror,
    ],
    duration: 138
  },
  {
    id: 615,
    title: "The Passion of the Christ",
    rating: 6.9,
    releaseDate: "2004-02-25",
    imagePath: "https://image.tmdb.org/t/p/w500/oFuLM1EaKhi1WNWiTjQ1HKIZ1Eg.jpg",
    url: "https://image.tmdb.org/t/p/w500/oFuLM1EaKhi1WNWiTjQ1HKIZ1Eg.jpg",
    description: "\"The Passion of the Christ\" is a film about the last 12 hours in the life of Jesus. Director Mel Gibson received much criticism from critics and audiences for his explicit depiction of and focus on violence and on christs suffering, especially on the part of the jewish community. The films languages are Arabic, Latin and Hebrew and its actors are laymen which was controversially received as well.",
    genre: [
      Genres.Drama
    ],
    duration: 127
  },
  {
    id: 20504,
    title: "The Book of Eli",
    rating: 6.6,
    releaseDate: "2010-01-11",
    imagePath: "https://image.tmdb.org/t/p/w500/qL3FnEug9DyBcaBXVb0oT3DJMJu.jpg",
    url: "https://image.tmdb.org/t/p/w500/qL3FnEug9DyBcaBXVb0oT3DJMJu.jpg",
    description: "A post-apocalyptic tale, in which a lone man fights his way across America in order to protect a sacred book that holds the secrets to saving humankind.",
    genre: [
      Genres.Horror,
    ],
    duration: 118
  },
  {
    id: 207703,
    title: "Kingsman: The Secret Service",
    rating: 7.6,
    releaseDate: "2015-01-24",
    imagePath: "https://image.tmdb.org/t/p/w500/8x7ej0LnHdKUqilNNJXYOeyB6L9.jpg",
    url: "https://image.tmdb.org/t/p/w500/8x7ej0LnHdKUqilNNJXYOeyB6L9.jpg",
    description: "The story of a super-secret spy organization that recruits an unrefined but promising street kid into the agency's ultra-competitive training program just as a global threat emerges from a twisted tech genius.",
    genre: [
      Genres.Comedy,
    ],
    duration: 130
  },
  {
    id: 96721,
    title: "Rush",
    rating: 7.7,
    releaseDate: "2013-09-02",
    imagePath: "https://image.tmdb.org/t/p/w500/cjEepHZOZAwmK6nAj5jis6HV75E.jpg",
    url: "https://image.tmdb.org/t/p/w500/cjEepHZOZAwmK6nAj5jis6HV75E.jpg",
    description: "A biographical drama centered on the rivalry between Formula 1 drivers James Hunt and Niki Lauda during the 1976 Formula One motor-racing season.",
    genre: [
      Genres.Drama
    ],
    duration: 123
  },
  {
    id: 10184,
    title: "He's Just Not That Into You",
    rating: 6.2,
    releaseDate: "2009-02-06",
    imagePath: "https://image.tmdb.org/t/p/w500/ruc33YnCrmCL8PHdPQVzfa4shWX.jpg",
    url: "https://image.tmdb.org/t/p/w500/ruc33YnCrmCL8PHdPQVzfa4shWX.jpg",
    description: "Remember that really cute guy who said he'd call – and didn't? Maybe he lost your number. Maybe he's in the hospital. Maybe he's awed by your beauty, brains or success. Or maybe... he's just not that into you.",
    genre: [
      Genres.Comedy,
    ],
    duration: 129
  },
  {
    id: 639,
    title: "When Harry Met Sally...",
    rating: 7.3,
    releaseDate: "1989-07-21",
    imagePath: "https://image.tmdb.org/t/p/w500/anYI1fzx90PgjO9PY3JStJZJmQT.jpg",
    url: "https://image.tmdb.org/t/p/w500/anYI1fzx90PgjO9PY3JStJZJmQT.jpg",
    description: "During their travels from Chicago to New York, Harry and Sally Will debate whether or not sex ruins a perfect relationship between a man and a woman. Eleven years later, and they're still no closer to finding the answer.",
    genre: [
      Genres.Comedy,
    ],
    duration: 96
  },
  {
    id: 254470,
    title: "Pitch Perfect 2",
    rating: 6.8,
    releaseDate: "2015-05-07",
    imagePath: "https://image.tmdb.org/t/p/w500/yIjCMpDBX41odDcMUWIEHibzdv5.jpg",
    url: "https://image.tmdb.org/t/p/w500/yIjCMpDBX41odDcMUWIEHibzdv5.jpg",
    description: "The Bellas are back, and they are better than ever. After being humiliated in front of none other than the President of the United States of America, the Bellas are taken out of the Aca-Circuit. In order to clear their name, and regain their status, the Bellas take on a seemingly impossible task: winning an international competition no American team has ever won. In order to accomplish this monumental task, they need to strengthen the bonds of friendship and sisterhood and blow away the competition with their amazing aca-magic! With all new friends and old rivals tagging along for the trip, the Bellas can hopefully accomplish their dreams.",
    genre: [
      Genres.Comedy,
    ],
    duration: 115
  },
  {
    id: 812,
    title: "Aladdin",
    rating: 7.5,
    releaseDate: "1992-11-25",
    imagePath: "https://image.tmdb.org/t/p/w500/7f53XAE4nPiGe9XprpGAeWHuKPw.jpg",
    url: "https://image.tmdb.org/t/p/w500/7f53XAE4nPiGe9XprpGAeWHuKPw.jpg",
    description: "Princess Jasmine grows tired of being forced to remain in the palace, so she sneaks out into the marketplace, in disguise, where she meets street-urchin Aladdin.  The couple falls in love, although Jasmine may only marry a prince.  After being thrown in jail, Aladdin becomes embroiled in a plot to find a mysterious lamp, with which the evil Jafar hopes to rule the land.",
    genre: [
      Genres.Comedy,
    ],
    duration: 90
  },
  {
    id: 816,
    title: "Austin Powers: International Man of Mystery",
    rating: 6.5,
    releaseDate: "1997-05-02",
    imagePath: "https://image.tmdb.org/t/p/w500/1Ly0MRK2Na0aRpy2bD6GBRP3Rzx.jpg",
    url: "https://image.tmdb.org/t/p/w500/1Ly0MRK2Na0aRpy2bD6GBRP3Rzx.jpg",
    description: "As a swingin' fashion photographer by day and a groovy British superagent by night, Austin Powers is the '60s' most shagadelic spy, baby! But can he stop megalomaniac Dr. Evil after the bald villain freezes himself and unthaws in the '90s? With the help of sexy sidekick Vanessa Kensington, he just might.",
    genre: [
      Genres.Comedy,
    ],
    duration: 94
  },
  {
    id: 9654,
    title: "The Italian Job",
    rating: 6.6,
    releaseDate: "2003-05-30",
    imagePath: "https://image.tmdb.org/t/p/w500/jNRCNX1uDiUf6mteFxOBn30wL8Q.jpg",
    url: "https://image.tmdb.org/t/p/w500/jNRCNX1uDiUf6mteFxOBn30wL8Q.jpg",
    description: "Charlie Croker pulled off the crime of a lifetime. The one thing that he didn't plan on was being double-crossed. Along with a drop-dead gorgeous safecracker, Croker and his team take off to re-steal the loot and end up in a pulse-pounding, pedal-to-the-metal chase that careens up, down, above and below the streets of Los Angeles.",
    genre: [
      Genres.Drama
    ],
    duration: 110
  },
  {
    id: 8619,
    title: "Master and Commander: The Far Side of the World",
    rating: 6.9,
    releaseDate: "2003-11-14",
    imagePath: "https://image.tmdb.org/t/p/w500/s1cVTQEZYn4nSjZLnFbzLP0j8y2.jpg",
    url: "https://image.tmdb.org/t/p/w500/s1cVTQEZYn4nSjZLnFbzLP0j8y2.jpg",
    description: "After an abrupt and violent encounter with a French warship inflicts severe damage upon his ship, a captain of the British Royal Navy begins a chase over two oceans to capture or destroy the enemy, though he must weigh his commitment to duty and ferocious pursuit of glory against the safety of his devoted crew, including the ship's thoughtful surgeon, his best friend.",
    genre: [
      Genres.Action
    ],
    duration: 138
  },
  {
    id: 1735,
    title: "The Mummy: Tomb of the Dragon Emperor",
    rating: 5.2,
    releaseDate: "2008-07-01",
    imagePath: "https://image.tmdb.org/t/p/w500/53hrZvxiV3HgG6pdhuMeErIc7Hg.jpg",
    url: "https://image.tmdb.org/t/p/w500/53hrZvxiV3HgG6pdhuMeErIc7Hg.jpg",
    description: "Archaeologist Rick O'Connell travels to China, pitting him against an emperor from the 2,000-year-old Han dynasty who's returned from the dead to pursue a quest for world domination. This time, O'Connell enlists the help of his wife and son to quash the so-called 'Dragon Emperor' and his abuse of supernatural power.",
    genre: [
      Genres.Drama
    ],
    duration: 112
  },
  {
    id: 782,
    title: "Gattaca",
    rating: 7.5,
    releaseDate: "1997-09-07",
    imagePath: "https://image.tmdb.org/t/p/w500/gPYtuvhQvP7v5F1Tqt2iQWR3Y7i.jpg",
    url: "https://image.tmdb.org/t/p/w500/gPYtuvhQvP7v5F1Tqt2iQWR3Y7i.jpg",
    description: "Science fiction drama about a future society in the era of indefinite eugenics where humans are set on a life course depending on their DNA. The young Vincent Freeman is born with a condition that would prevent him from space travel, yet he is determined to infiltrate the GATTACA space program.",
    genre: [
      Genres.Horror,
    ],
    duration: 106
  },
  {
    id: 44896,
    title: "Rango",
    rating: 6.6,
    releaseDate: "2011-03-02",
    imagePath: "https://image.tmdb.org/t/p/w500/afxRbCwwKjrWgGJtsVNs1BW1Dk5.jpg",
    url: "https://image.tmdb.org/t/p/w500/afxRbCwwKjrWgGJtsVNs1BW1Dk5.jpg",
    description: "When Rango, a lost family pet, accidentally winds up in the gritty, gun-slinging town of Dirt, the less-than-courageous lizard suddenly finds he stands out. Welcomed as the last hope the town has been waiting for, new Sheriff Rango is forced to play his new role to the hilt.",
    genre: [
      Genres.Comedy,
    ],
    duration: 107
  },
  {
    id: 824,
    title: "Moulin Rouge!",
    rating: 7.5,
    releaseDate: "2001-03-09",
    imagePath: "https://image.tmdb.org/t/p/w500/xhuQz2yKPlWvMvvnf2u9RVkAQx6.jpg",
    url: "https://image.tmdb.org/t/p/w500/xhuQz2yKPlWvMvvnf2u9RVkAQx6.jpg",
    description: "A celebration of love and creative inspiration takes place in the infamous, gaudy and glamorous Parisian nightclub, at the cusp of the 20th century. A young poet, who is plunged into the heady world of Moulin Rouge, begins a passionate affair with the club's most notorious and beautiful star.",
    genre: [
      Genres.Drama
    ],
    duration: 127
  },
  {
    id: 9479,
    title: "The Nightmare Before Christmas",
    rating: 7.7,
    releaseDate: "1993-10-09",
    imagePath: "https://image.tmdb.org/t/p/w500/6oxkO1VgKCq74fNILKAg6t2dVEt.jpg",
    url: "https://image.tmdb.org/t/p/w500/6oxkO1VgKCq74fNILKAg6t2dVEt.jpg",
    description: "Tired of scaring humans every October 31 with the same old bag of tricks, Jack Skellington, the spindly king of Halloween Town, kidnaps Santa Claus and plans to deliver shrunken heads and other ghoulish gifts to children on Christmas morning. But as Christmas approaches, Jack's rag-doll girlfriend, Sally, tries to foil his misguided plans.",
    genre: [
      Genres.Drama
    ],
    duration: 76
  },
  {
    id: 47971,
    title: "xXx: Return of Xander Cage",
    rating: 5.5,
    releaseDate: "2017-01-13",
    imagePath: "https://image.tmdb.org/t/p/w500/yNsdyNbQqaKN0TQxkHMws2KLTJ6.jpg",
    url: "https://image.tmdb.org/t/p/w500/yNsdyNbQqaKN0TQxkHMws2KLTJ6.jpg",
    description: "Extreme athlete turned government operative Xander Cage comes out of self-imposed exile, thought to be long dead, and is set on a collision course with deadly alpha warrior Xiang and his team in a race to recover a sinister and seemingly unstoppable weapon known as Pandora's Box. Recruiting an all-new group of thrill-seeking cohorts, Xander finds himself enmeshed in a deadly conspiracy that points to collusion at the highest levels of world governments.",
    genre: [
      Genres.Drama
    ],
    duration: 107
  },
  {
    id: 670,
    title: "Oldboy",
    rating: 8.1,
    releaseDate: "2003-09-28",
    imagePath: "https://image.tmdb.org/t/p/w500/rIZX6X0MIHYEebk6W4LABT9VP2c.jpg",
    url: "https://image.tmdb.org/t/p/w500/rIZX6X0MIHYEebk6W4LABT9VP2c.jpg",
    description: "With no clue how he came to be imprisoned, drugged and tortured for 15 years, a desperate businessman seeks revenge on his captors.",
    genre: [
      Genres.Horror,
    ],
    duration: 120
  },
  {
    id: 714,
    title: "Tomorrow Never Dies",
    rating: 6.1,
    releaseDate: "1997-12-11",
    imagePath: "https://image.tmdb.org/t/p/w500/k3eI9q7ISgpDEu2CMwR2s6inJVp.jpg",
    url: "https://image.tmdb.org/t/p/w500/k3eI9q7ISgpDEu2CMwR2s6inJVp.jpg",
    description: "A deranged media mogul is staging international incidents to pit the world's superpowers against each other. Now 007 must take on this evil mastermind in an adrenaline-charged battle to end his reign of terror and prevent global pandemonium.",
    genre: [
      Genres.Horror
    ],
    duration: 119
  },
  {
    id: 9480,
    title: "Daredevil",
    rating: 5,
    releaseDate: "2003-02-14",
    imagePath: "https://image.tmdb.org/t/p/w500/dNVEqwgIdrwWQL3zXI5mQG60oM5.jpg",
    url: "https://image.tmdb.org/t/p/w500/dNVEqwgIdrwWQL3zXI5mQG60oM5.jpg",
    description: "He dwells in a world of eternal night, but the blackness is filled with sounds and scents, tastes and textures that most cannot perceive. Although attorney Matt Murdock is blind, his other four senses function with superhuman sharpness. By day, Murdock represents the downtrodden. At night he is Daredevil, a masked vigilante stalking the dark streets of the city, a relentless avenger of justice.",
    genre: [
      Genres.Horror
    ],
    duration: 103
  },
  {
    id: 564,
    title: "The Mummy",
    rating: 6.6,
    releaseDate: "1999-04-16",
    imagePath: "https://image.tmdb.org/t/p/w500/yhIsVvcUm7QxzLfT6HW2wLf5ajY.jpg",
    url: "https://image.tmdb.org/t/p/w500/yhIsVvcUm7QxzLfT6HW2wLf5ajY.jpg",
    description: "Dashing legionnaire Rick O'Connell and his companion, Beni stumble upon the hidden ruins of Hamunaptra while in the midst of a battle in 1923, 3,000 years after Imhotep has suffered a fate worse than death – his body will remain undead for all eternity as a punishment for a forbidden love.",
    genre: [
      Genres.Drama
    ],
    duration: 124
  },
  {
    id: 5548,
    title: "RoboCop",
    rating: 7.1,
    releaseDate: "1987-07-17",
    imagePath: "https://image.tmdb.org/t/p/w500/gtGreTdzYBuQsEwTliEFdTzPleV.jpg",
    url: "https://image.tmdb.org/t/p/w500/gtGreTdzYBuQsEwTliEFdTzPleV.jpg",
    description: "In a violent, near-apocalyptic Detroit, evil corporation Omni Consumer Products wins a contract from the city government to privatize the police force. To test their crime-eradicating cyborgs, the company leads street cop Alex Murphy into an armed confrontation with crime lord Boddicker so they can use his body to support their untested RoboCop prototype. But when RoboCop learns of the company's nefarious plans, he turns on his masters.",
    genre: [
      Genres.Horror,
    ],
    duration: 102
  },
  {
    id: 817,
    title: "Austin Powers: The Spy Who Shagged Me",
    rating: 6.2,
    releaseDate: "1999-06-08",
    imagePath: "https://image.tmdb.org/t/p/w500/yhg0l1Ddd2thQOSUUQx9jBrGI12.jpg",
    url: "https://image.tmdb.org/t/p/w500/yhg0l1Ddd2thQOSUUQx9jBrGI12.jpg",
    description: "When diabolical genius, Dr. Evil travels back in time to steal superspy Austin Powers's ‘mojo’, Austin must return to the swingin' '60s himself – with the help of American agent, Felicity Shagwell – to stop the dastardly plan. Once there, Austin faces off against Dr. Evil's army of minions and saves the world in his own unbelievably groovy way.",
    genre: [
      Genres.Comedy,
    ],
    duration: 95
  },
  {
    id: 424,
    title: "Schindler's List",
    rating: 8.4,
    releaseDate: "1993-11-29",
    imagePath: "https://image.tmdb.org/t/p/w500/yPisjyLweCl1tbgwgtzBCNCBle.jpg",
    url: "https://image.tmdb.org/t/p/w500/yPisjyLweCl1tbgwgtzBCNCBle.jpg",
    description: "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
    genre: [
      Genres.Drama
    ],
    duration: 195
  },
  {
    id: 10530,
    title: "Pocahontas",
    rating: 6.8,
    releaseDate: "1995-06-14",
    imagePath: "https://image.tmdb.org/t/p/w500/qk95miOV8wDABbO5gyCpCrvbVFu.jpg",
    url: "https://image.tmdb.org/t/p/w500/qk95miOV8wDABbO5gyCpCrvbVFu.jpg",
    description: "History comes gloriously to life in Disney's epic animated tale about love and adventure in the New World. Pocahontas is a Native American woman whose father has arranged for her to marry her village's best warrior. But a vision tells her change is coming, and soon she comes face to face with it in the form of Capt. John Smith.",
    genre: [
      Genres.Drama
    ],
    duration: 81
  },
  {
    id: 37247,
    title: "The Graduate",
    rating: 7.6,
    releaseDate: "1967-12-21",
    imagePath: "https://image.tmdb.org/t/p/w500/AuFvrbtWSPiBPIv9ewH2DV4nhCD.jpg",
    url: "https://image.tmdb.org/t/p/w500/AuFvrbtWSPiBPIv9ewH2DV4nhCD.jpg",
    description: "Benjamin, a recent college graduate is very worried about his future, he then finds himself in a love triangle with an older woman and her daughter.",
    genre: [
      Genres.Comedy,
    ],
    duration: 106
  },
  {
    id: 686,
    title: "Contact",
    rating: 7.2,
    releaseDate: "1997-07-11",
    imagePath: "https://image.tmdb.org/t/p/w500/yRF1qpaQPZJjiORDsR7eUHzSHbf.jpg",
    url: "https://image.tmdb.org/t/p/w500/yRF1qpaQPZJjiORDsR7eUHzSHbf.jpg",
    description: "Contact is a science fiction film about an encounter with alien intelligence. Based on the novel by Carl Sagan the film starred Jodie Foster as the one chosen scientist who must make some difficult decisions between her beliefs, the truth, and reality.",
    genre: [
      Genres.Drama
    ],
    duration: 150
  },
  {
    id: 1402,
    title: "The Pursuit of Happyness",
    rating: 7.8,
    releaseDate: "2006-12-14",
    imagePath: "https://image.tmdb.org/t/p/w500/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg",
    url: "https://image.tmdb.org/t/p/w500/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg",
    description: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
    genre: [
      Genres.Drama
    ],
    duration: 117
  },
  {
    id: 27022,
    title: "The Sorcerer's Apprentice",
    rating: 5.9,
    releaseDate: "2010-07-13",
    imagePath: "https://image.tmdb.org/t/p/w500/ZNSrRpdJ6FjMy4Iu6JpRTJ5Q87.jpg",
    url: "https://image.tmdb.org/t/p/w500/ZNSrRpdJ6FjMy4Iu6JpRTJ5Q87.jpg",
    description: "Balthazar Blake is a master sorcerer in modern-day Manhattan trying to defend the city from his arch-nemesis, Maxim Horvath. Balthazar can't do it alone, so he recruits Dave Stutler, a seemingly average guy who demonstrates hidden potential, as his reluctant protégé. The sorcerer gives his unwilling accomplice a crash course in the art and science of magic, and together, these unlikely partners work to stop the forces of darkness.",
    genre: [
      Genres.Comedy,
    ],
    duration: 109
  },
  {
    id: 15092,
    title: "Crank: High Voltage",
    rating: 5.9,
    releaseDate: "2009-04-16",
    imagePath: "https://image.tmdb.org/t/p/w500/6WLcJkIwyycyUDDfZ5VWU1TcLwF.jpg",
    url: "https://image.tmdb.org/t/p/w500/6WLcJkIwyycyUDDfZ5VWU1TcLwF.jpg",
    description: "Chelios faces a Chinese mobster who has stolen his nearly indestructible heart and replaced it with a battery-powered ticker that requires regular jolts of electricity to keep working.",
    genre: [
      Genres.Horror,
    ],
    duration: 96
  },
  {
    id: 627,
    title: "Trainspotting",
    rating: 7.9,
    releaseDate: "1996-02-23",
    imagePath: "https://image.tmdb.org/t/p/w500/p1O3eFsdb0GEIYu87xlwV7P4jM1.jpg",
    url: "https://image.tmdb.org/t/p/w500/p1O3eFsdb0GEIYu87xlwV7P4jM1.jpg",
    description: "Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends.",
    genre: [
      Genres.Drama
    ],
    duration: 93
  },
  {
    id: 1164,
    title: "Babel",
    rating: 7,
    releaseDate: "2006-09-08",
    imagePath: "https://image.tmdb.org/t/p/w500/fxneN0EQZwTfAfhTGUvUuIn6PLi.jpg",
    url: "https://image.tmdb.org/t/p/w500/fxneN0EQZwTfAfhTGUvUuIn6PLi.jpg",
    description: "Tragedy strikes a married couple on vacation in the Moroccan desert, touching off an interlocking story involving four different families.",
    genre: [
      Genres.Drama
    ],
    duration: 143
  },
  {
    id: 665,
    title: "Ben-Hur",
    rating: 7.6,
    releaseDate: "1959-12-26",
    imagePath: "https://image.tmdb.org/t/p/w500/syPMBvvZsADTTRu3UKuxO1Wflq.jpg",
    url: "https://image.tmdb.org/t/p/w500/syPMBvvZsADTTRu3UKuxO1Wflq.jpg",
    description: "Judah Ben-Hur, a Palestinian Jew, is battling the Roman empire at the time of Christ. His actions send him and his family into slavery, but an inspirational encounter with Jesus changes everything. He finally meets his rival in a justly famous chariot race and rescues his suffering family.",
    genre: [
      Genres.Drama
    ],
    duration: 212
  },
  {
    id: 629,
    title: "The Usual Suspects",
    rating: 8.1,
    releaseDate: "1995-07-19",
    imagePath: "https://image.tmdb.org/t/p/w500/jgJoRWltoS17nD5MAQ1yK2Ztefw.jpg",
    url: "https://image.tmdb.org/t/p/w500/jgJoRWltoS17nD5MAQ1yK2Ztefw.jpg",
    description: "Held in an L.A. interrogation room, Verbal Kint attempts to convince the feds that a mythic crime lord, Keyser Soze, not only exists, but was also responsible for drawing him and his four partners into a multi-million dollar heist that ended with an explosion in San Pedro harbor – leaving few survivors. Verbal lures his interrogators with an incredible story of the crime lord's almost supernatural prowess.",
    genre: [
      Genres.Horror
    ],
    duration: 106
  },
  {
    id: 9836,
    title: "Happy Feet",
    rating: 5.9,
    releaseDate: "2006-11-16",
    imagePath: "https://image.tmdb.org/t/p/w500/8RLEzftZK87S2usLsQoYtyNYzoV.jpg",
    url: "https://image.tmdb.org/t/p/w500/8RLEzftZK87S2usLsQoYtyNYzoV.jpg",
    description: "Into the world of the Emperor Penguins, who find their soul mates through song, a penguin is born who cannot sing. But he can tap dance something fierce!",
    genre: [
      Genres.Comedy
    ],
    duration: 108
  },
  {
    id: 251,
    title: "Ghost",
    rating: 6.9,
    releaseDate: "1990-07-12",
    imagePath: "https://image.tmdb.org/t/p/w500/rtxy3cplRFPUvruZajpcoxOQ7bi.jpg",
    url: "https://image.tmdb.org/t/p/w500/rtxy3cplRFPUvruZajpcoxOQ7bi.jpg",
    description: "Sam Wheat is a banker, Molly Jensen is an artist, and the two are madly in love. However, when Sam is murdered by his friend and corrupt business partner Carl Bruner over a shady business deal, he is left to roam the earth as a powerless spirit. When he learns of Carl's betrayal, Sam must seek the help of psychic Oda Mae Brown to set things right and protect Molly from Carl and his goons.",
    genre: [
      Genres.Horror,
    ],
    duration: 127
  },
  {
    id: 212778,
    title: "Chef",
    rating: 7.1,
    releaseDate: "2014-05-08",
    imagePath: "https://image.tmdb.org/t/p/w500/dwweMX2MqYOYGg2Z2lZ8f6uopcg.jpg",
    url: "https://image.tmdb.org/t/p/w500/dwweMX2MqYOYGg2Z2lZ8f6uopcg.jpg",
    description: "When Chef Carl Casper suddenly quits his job at a prominent Los Angeles restaurant after refusing to compromise his creative integrity for its controlling owner, he is left to figure out what's next. Finding himself in Miami, he teams up with his ex-wife, his friend and his son to launch a food truck. Taking to the road, Chef Carl goes back to his roots to reignite his passion for the kitchen -- and zest for life and love.",
    genre: [
      Genres.Comedy
    ],
    duration: 114
  },
];

/*
  {
    title: '',
    genre: [],
    releaseDate: ''',-09-17'
    imagePath: '../assets/images/.jpg',
    url: '.com',
    id: ,
    duration: ,
    rating: ,
    description: '',
  },
*/

export default movies;
