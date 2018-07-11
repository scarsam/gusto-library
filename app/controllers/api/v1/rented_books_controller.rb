module Api
  module V1
    class RentedBooksController < ApplicationController
      def create
        book = Book.find(params[:id])
        current_user = set_current_user
        rented_book = RentedBook.new(book: book, user: current_user)
        if rented_book.valid?
          rented_book.save
          render json: book, include: ['user', 'rented_book.user'], status: 200
        else
          render json: rented_book.errors.full_messages, status: 400
        end
      end

      def destroy
        rented_book = RentedBook.find_by(book_id: params[:id])
        rented_book.destroy
        head :no_content
      end

    end
  end
end