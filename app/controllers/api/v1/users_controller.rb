module Api
  module V1
    class UsersController < ApplicationController
      def create
        user = User.new(user_params)
        if user.save
          jwt_token = Auth.issue(user_id: user.id)
          render json: jwt_token
        else
          render json: user.errors.full_messages, status: 400
        end
      end

      private
      def user_params
        params.require(:user).permit(:email, :name, :password)
      end
    end
  end
end