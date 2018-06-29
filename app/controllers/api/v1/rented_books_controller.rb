module Api
  module V1
    class RentedBooksController < ApplicationController
      def create
        book = Book.find(params[:id])
        current_user = set_current_user
        rented_book = RentedBook.new(book: book, user: current_user)
        if rented_book.valid?
          rented_book.save
          render json: rented_book
        else
          render status: 409, json: rented_book.errors.full_messages
        end
      end
    end
  end
end