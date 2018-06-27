module Api
  module V1
    class UsersController < ApplicationController
      def index
        users = User.all
        if users
          render json: users
        else
          render status: 404, json: users.errors.full_messages
        end
      end
    end
  end
end