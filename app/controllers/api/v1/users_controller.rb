module Api
  module V1
    class UsersController < ApplicationController
      before_action :authenticate

      def current_user
        user = set_current_user
        render json: user
      end
    end
  end
end