module Api
  module V1
    class UsersController < ApplicationController
      def index
        users = User.all
        if users
          render json: users, include: ['rented_books'], status: 200
        else
          render json: users.errors.full_messages, status: 400
        end
      end

      def rented_books
        user = User.find(params[:id])
        rented_books = user.rented_books
        if rented_books
          render json: rented_books, status: 200
        else
          render json: rented_books.errors.full_messages, status: 400
        end
      end

      def show
        user = User.find(params[:id])
        if user
          render json: user, status: 200
        else
          render json: user.errors.full_messages, status: 400
        end
      end
    end
  end
end