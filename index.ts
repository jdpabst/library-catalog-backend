import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import express, { Request, Response } from 'express';

const prisma = new PrismaClient();
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/catalog', async (req: Request, res: Response) => {
 try {
  const books = await prisma.book.findMany();
  res.status(200).json(books);
 } catch (error) {
  console.error(error);
  res.status(500).send('Internal Server Error');
 }
});

app.get('/catalog/search', async (req, res) => {
 const query = typeof req.query.query === 'string' ? req.query.query : '';

 try {
  const books = await prisma.book.findMany({
   where: {
    OR: [
     {
      title: {
       contains: query,
       mode: 'insensitive'
      }
     },
     {
      author: {
       contains: query,
       mode: 'insensitive'
      }
     }
    ]
   }
  });

  res.json(books);
 } catch (err) {
  console.error(err);
  res.status(500).send('Internal Server Error');
 }
});

app.put('/catalog/:id', async (req, res) => {
 const { id } = req.params;
 const { title, author, available, summary, cover } = req.body;

 try {
  const updateBook = await prisma.book.update({
   where: {
    id: Number(id),
   },
   data: {
    title,
    author,
    available,
    summary,
    cover
   },
  });
  console.log('Update successful:', updateBook); // Log the response
  res.json(updateBook);
 } catch (error) {
  console.error('Error updating book:', error); // Log the error
  res.status(500).send('Internal Server Error');
 }
});

app.post('/catalog', async (req, res) => {
 const { title, author, available, summary, cover } = req.body;

 if (!title || !author || !summary) {
  return res.status(400).json({ error: 'Title, author, and summary are required.' });
 }

 try {
  const addNewBook = await prisma.book.create({
   data: {
    title,
    author,
    available,
    summary,
    cover
   }
  });
  console.log('Added Successfully:', addNewBook)
  res.json(addNewBook)
 } catch (err) {
  console.error('Error updating book:', err); // Log the error
  res.status(500).send('Internal Server Error');
 }

});

app.delete('/catalog/:id', async (req, res) => {
 const { id } = req.params

 try {
  const deleteBook = await prisma.book.delete({
   where: {
    id: Number(id),
   },
  });

  res.json(deleteBook)
 } catch (err) {

  console.log(err)
  res.status(500).send('Internal server error')
 };

});


app.listen(port, () => {
 console.log(`Example app listening on port ${port}`);
});
