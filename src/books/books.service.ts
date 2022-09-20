import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateBookInput } from './dto/create-book.input';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  createBook(createBookData: CreateBookInput) {
    return this.prisma.books.create({
      data: createBookData,
    });
  }
  getBooks() {
    return this.prisma.books.findMany({});
  }

  getBookById(id: string) {
    return this.prisma.books.findFirst({
      where: {
        id,
      },
    });
  }
}
