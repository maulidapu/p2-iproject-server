'use strict';
// let baseUrl = 'http://localhost:3000/images/'
let baseUrl = 'https://redflag-maul.herokuapp.com/images'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Items', 
    [
      {
        name: 'kris wu',
        description: 'not sure if i should post him here as he is very famous and also thats why im hiding behind anonymity. i attend his fan meeting and he gave me his number and then he text me to meet him the next day. we go to the nearest bar from his hotel and that is the last thing i remember as i woke up naked next to him in the morning. im very traumatized by this and by posting this i hope to gather more girls who victimized by kris wu so we can bring justice to our selves and let him rot in jail' ,
        imageUrl: baseUrl + '1.png',
        comment: '',
        location: 'China',
        userId: 2

      },
      {
        name: 'louis bloom',
        description: 'Louis bloom also known as, hugo Du Pont, Blair fonblanque, Felix foix and god knows many more names he use. he is an infamous but hot con actor. last i heard he is in las vegas. he will find a lonely seemingly upper class woman, he will try to seduce you. then give you wine sedatted with sleeping pills and he will stole your jewelry, designer bag and max out your credit card. i was one of his tenth victims alone in paris. god knows how many women he fool as he is travelling world wide',
        imageUrl: baseUrl + '2.png',
        comment: '',
        location: 'france',
        userId: 2

      },
      {
        name: 'thomas sharpe',
        description: 'If you live in south east Asia please HEAR ME OUT!!! His birth name is Thomas Sharpe, from crumbia, north west of England (bordering Scotland) he married and then killed 3 rich women and caught when he attempt to kill his 4th rich wife. She manage to flee to England but so was Thomas. Last I heard he’s hiding somewhere in south east Asia. If you single and rich watch out! You could be his next victim. He’s armed, manipulative and very very dangerous',
        imageUrl: baseUrl + '3.png',
        comment: '',
        location: 'england',
        userId: 2

      },
      {
        name: 'norman bates',
        description: 'He’s a TOTAL lunatic psycho.. I met him when I was staying in a motel, outskirts of town. He seemed kind at first but *omg I’m getting a goose bumps just to think about it* but I kid you not he have an alarming multiple personalities. If its not for his terrible attempt dressing up as an old lady and introduced him self as “his mom” to me, I wouldn’t have run and post him here. Be careful ladies!',
        imageUrl: baseUrl + '4.png',
        comment: '',
        location: 'USA',
        userId: 2

      },
      {
        name: 'rambi andores',
        description: 'Buat warga sumsel, teru tama di daerah Empat lawang dań sekitarnya hati2 yaa kalo ketemu orang ini. tahun lalu dia bersama ke 4 orang temannya merampok tetanggaku dan memperkosa istrinya. Dia sudah keluar dari penjara beberapa dari bulan yang lalu, buat yang main aplikasi TIMBER dan BUBBLE harap berhati2 jaka menemukan orang ini. Saya sempat menemukan profilenya yang bercentang biru di aplikasi TIMBER. Harap berhati hati ya ladies',
        imageUrl: baseUrl + '5.png',
        comment: '',
        location: 'indonesia',
        userId: 2

      },
      {
        name: 'fardo baggins',
        description: 'So i dated this guy awhile ago. Overall he’s a charming, well mannered and really have his way with his lady. He’s a lovely person really. Until this strange ring I know nothing about become his possession all of the sudden he change.. and he’s simply not my Fordo anymore:( now he’s lunatic and willing to kill anyone who get too near to his precious ring. So I’m warning you. STAY AWAY FROM HIS RING AT ALL COST',
        imageUrl: baseUrl + '6.png',
        comment: '',
        location: 'england',
        userId: 2

      }
    ], {});
     
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Items', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
