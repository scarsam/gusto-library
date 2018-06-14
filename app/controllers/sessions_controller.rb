class SessionsController < ApplicationController

  def create
    @user = User.find_or_create_by(uid: auth['uid']) do |u|
      u.name = auth[:info][:name]
      u.email = auth[:info][:email]
      u.image = auth[:info][:image]
    end
    jwt_token = Auth.issue(user_id: @user.id)
    render json: jwt_token
  end

  private

  def auth
    request.env['omniauth.auth']
  end

  def user_params
    params.require(:session).permit(:email, :password)
  end
end