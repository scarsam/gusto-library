module Api
  module V1
    class SessionsController < ApplicationController

      def create
        @user = User.find_or_create_by(googleId: user_params[:googleId]) do |u|
          u.name = user_params[:name]
          u.email = user_params[:email]
          u.imageUrl = user_params[:imageUrl]
        end
        token = Auth.issue({googleId: @user.googleId})
        render status: 200,
               json: {token: token, user: @user}
      end

      private

      def user_params
        params.require(:session).permit(:name, :email, :imageUrl, :googleId)
      end
    end
  end
end