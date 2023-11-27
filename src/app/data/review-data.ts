import { Review } from '../models/Review';

export class ReviewData {
  static reviews: Review[] = [
    {
      id: 0,
      productId: 3,
      userName: 'sweet16',
      title: "Didn't work as I expected",
      text: 'The saw broke in half after 15 minutes of use',
    },
    {
      id: 1,
      productId: 4,
      userName: 'jackharkness',
      title: 'Works great',
      text: "I've beat every level faster with this controller",
    },
    {
      id: 2,
      productId: 2,
      userName: 'thor364',
      title: "Didn't work as I expected",
      text: 'I summon this hammer, and it does not heed my call',
    },

    {
      id: 3,
      productId: 2,
      userName: 'allthumbs',
      title: 'Dangerous!',
      text: 'I almost injured myself with this product',
    },
    {
      id: 4,
      productId: 1,
      userName: 'mom42',
      title: 'Great for the kiddos',
      text: 'My kids love to play with this cart',
    },
    {
      id: 5,
      productId: 2,
      userName: 'theoden',
      title: 'Now for wrath. Now for ruin',
      text: 'This hammer (and a dinner bell) worked even better than a horn for drawing attention',
    },
    {
      id: 6,
      productId: 2,
      userName: 'glamdring',
      title: 'This was no foe-hammer',
      text: 'Product was much smaller than expected',
    },
    {
      id: 7,
      productId: 4,
      userName: 'grima',
      title: 'Nothing but a herald of woe',
      text: 'I played no better with this controller than my old one',
    },
    {
      id: 8,
      productId: 0,
      userName: 'hama',
      title: 'Has no evil purpose',
      text: 'This rake is worthy of honor',
    },
    {
      id: 9,
      productId: 0,
      userName: 'hama',
      title: 'More than a tool',
      text: 'The rake in the hand of a wizard may be more than a tool for the garden',
    },
    {
      id: 10,
      productId: 0,
      userName: 'eowyn',
      title: 'A necessity!',
      text: 'Those without rakes can still die upon them',
    },
  ];
}
