module Api
  module V1
    class RentedBooksController < ApplicationController
      def create
        book = Book.find(params[:id])
        current_user = set_current_user
        rented_book = RentedBook.new(book: book, user: current_user)
        if rented_book.valid?
          rented_book.save
          render json: rented_book, status: 200
        else
          render json: rented_book.errors.full_messages, status: 400
        end
      end

      def destroy
        rented_book = RentedBook.find_by(book_id: params[:id])
        rented_book.destroy
        head :no_content
      end

      def user
        user = RentedBook.find_by(book_id: params[:id]).user
        if user
          render json: user, status: 200
        else
          render json: user.errors.full_messages, status: 400
        end
      end

      def index
        rented_books = RentedBook.all
        if rented_books
          render json: rented_books, status: 200
        else
          render json: rented_books.errors.full_messages, status: 400
        end
      end
    end
  end
end