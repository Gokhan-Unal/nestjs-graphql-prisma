import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { User } from '../users/models/user.model';
import { Books } from './models/book.model';
import { UserEntity } from '../common/decorators/user.decorator';
import { CreateBookInput } from './dto/create-book.input';

@Resolver()
export class BooksResolver {
  constructor(private booksService: BooksService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Books)
  async createBook(
    @UserEntity() user: User,
    @Args('data') createBookInput: CreateBookInput
  ) {
    return this.booksService.createBook(createBookInput);
  }

  @Query(() => [Books])
  async getBooks() {
    return this.booksService.getBooks();
  }

  @Query(() => Books)
  async getBookById(@Args('id', { type: () => String }) id: string) {
    return this.booksService.getBookById(id);
  }
}
