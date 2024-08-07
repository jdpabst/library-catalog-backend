import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
 await prisma.book.createMany({
  data: [
   {
    title: "Harry Potter and the Sorcerer's Stone: MinaLima Edition (Harry Potter Series #1)",
    author: "J. K. Rowling, MinaLima Design (Illustrator)",
    available: 1,
    cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781338596700_p0_v4_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
    summary: "In this stunning new edition of Harry Potter and the Sorcerer's Stone, experience the story as never before. J.K. Rowling's complete and unabridged text is accompanied by full-color illustrations on nearly every page and eight exclusive, interactive paper craft elements: Readers will open Harry's Hogwarts letter, reveal the magical entryway to Diagon Alley, make a sumptuous feast appear in the Great Hall, and more. Designed and illustrated by award-winning design studio MinaLima — best known for establishing the visual graphic style of the Harry Potter and Fantastic Beasts films — this edition is sure to be a keepsake for Harry Potter fans, a beautiful addition to any collector's bookshelf, and an enchanting way to introduce the first book in this beloved series to a new generation of readers."
   },
   {
    title: "Quidditch through the Ages (Harry Potter Series)",
    author: "J. K. Rowling, Kennilworthy Whisp",
    available: 3,
    cover: "https://prodimage.images-bn.com/pimages/9781338125740_p0_v1_s600x595.jpg",
    summary: "The most checked-out book in the Hogwarts Library, and a volume no Quidditch player or Harry Potter fan should be without! If you have ever asked yourself where the Golden Snitch came from, how the Bludgers came into existence, or why the Wigtown Wanderers have pictures of meat cleavers on their robes, you need Quidditch Through the Ages. This invaluable volume is consulted by young Quidditch fans on an almost daily basis. Proceeds from the sale of this book will go to Comic Relief, who will use your money to continue improving and changing lives — work that is even more important and astonishing than the three-and-a-half-second capture of the Golden Snitch by Roderick Plumpton in 1921. — Albus Dumbledore"
   },
   {
    title: "Fantastic Beasts and Where to Find Them",
    author: "J. K. Rowling, Newt Scamander",
    available: 2,
    cover: "https://prodimage.images-bn.com/pimages/9781338132311_p0_v2_s600x595.jpg",
    summary: "A copy of Fantastic Beasts and Where to Find Them resides in almost every wizarding household in the country. Now Muggles too have the chance to discover where the Quintaped lives, what the Puffskein eats, and why it is best not to leave milk out for a Knarl. Proceeds from the sale of this book will go to Comic Relief, which means that the dollars and Galleons you exchange for it will do magic beyond the powers of any wizard. If you feel that this is insufficient reason to part with your money, I can only hope that passing wizards feel more charitable if they see you being attacked by a Manticore. -- Albus Dumbledore"
   },
   {
    title: "The Tales of Beedle the Bard (Harry Potter Series)",
    author: "J. K. Rowling",
    available: 4,
    cover: "https://prodimage.images-bn.com/pimages/9781338125689_p0_v1_s600x595.jpg",
    summary: "The Tales of Beedle the Bard, a wizarding classic, first came to Muggle readers' attention in the book known as Harry Potter and the Deathly Hallows. Now, thanks to Hermione Granger's new translation from the ancient runes, we present this stunning edition with an introduction, notes, and illustrations by J.K. Rowling, and extensive commentary by Albus Dumbledore. Never before have Muggles been privy to these richly imaginative tales: 'The Wizard and the Hopping Pot,' 'The Fountain of Fair Fortune,' 'The Warlock's Hairy Heart,' 'Babbitty Rabbitty and Her Cackling Stump,' and of course 'The Tale of the Three Brothers.' But not only are they the equal of fairy tales we know and love, reading them gives new insight into the wizarding world."
   }
  ]
 });
}

main()
 .catch(e => {
  console.error(e);
  process.exit(1);
 })
 .finally(async () => {
  await prisma.$disconnect();
 });
