module Api
  module V1
    class BooksController < ApplicationController
      def create
        book = params[:volumeInfo]
        current_user = set_current_user
        book = current_user.books.new(
          title: book[:title],
          author: book[:authors].join(', '),
          description: book[:description],
          thumbnail: book[:imageLinks][:smallThumbnail],
        )
        if book.valid?
          book.save
          render json: book, status: 200
        else
          render status: 400, json: book.errors.full_messages
        end
      end

      def index
        books = Book.all
        render json: books, include: ['user', 'rented_book.user'], status: 200
      end

      def destroy
        book = Book.find(params[:id])
        book.destroy
        head :no_content
      end

    end
  end
end