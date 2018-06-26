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
          render json: book
        else
          render status: 409, json: book.errors.full_messages
        end
      end

      def index
        books = Book.all
        render json: books
      end
    end
  end
end