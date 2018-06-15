class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # before_action :authenticate
  # attr_accessor :current_user
  #
  # def logged_in?
  #   set_current_user
  #   !!@current_user
  # end
  #
  # def current_user
  #   @current_user
  # end
  #
  # def set_current_user
  #   if has_valid_auth_type?
  #     user = User.find_by(googleId: auth_secret[:googleId])
  #     if user
  #       @current_user = user
  #     end
  #   end
  # end
  #
  # def authenticate
  #   unless logged_in?
  #     render json: {
  #       success: false,
  #       error: 'Invalid credentials'
  #     }, status: :unauthorized
  #   end
  # end
  #
  # private
  #
  # def has_valid_auth_type?
  #   !!request.headers['Authorization'].to_s.scan(/jwt/).flatten.first
  # end
  #
  # def auth_header
  #   request.headers['Authorization']
  # end
  #
  # def auth_secret
  #   Auth.decode(auth_header) || {}
  # end

end
