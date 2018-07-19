require 'jwt'

class Auth
  def self.issue(payload)
    JWT.encode(payload, auth_secret, auth_algorithm)
  end

  def self.decode(token)
    JWT.decode(token, auth_secret, true, {alogrithm: auth_algorithm}).first
  end

  private
  def self.auth_secret
    ENV['AUTH_SECRET']
  end

  def self.auth_algorithm
    ENV['AUTH_ALGORITHM']
  end
end