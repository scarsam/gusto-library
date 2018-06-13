module Api
  module V1
    class SessionsController < ApplicationController
      def create
        binding.pry
        user = User.find_by(email: user_params[:email])
        if user.valid? && user.password.authenticate
          jwt_token = Auth.issue(user_id: user.id)
          render json: jwt_token
        else
          render json: user.errors.full_messages, status: 400
        end
      end

      private
      def user_params
        params.require(:session).permit(:email, :password)
      end
    end
  end
end