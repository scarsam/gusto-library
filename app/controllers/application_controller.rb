class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :set_current_user

  def set_current_user
    begin
      user = User.find_by(googleId: auth_secret["googleId"])
    rescue JWT::DecodeError
      false
    end
  end

  private

  def auth_header
    request.headers['Authorization']
  end

  def auth_secret
    Auth.decode(auth_header) || {}
  end

end
