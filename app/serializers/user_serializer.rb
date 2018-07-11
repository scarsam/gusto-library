class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :googleId, :imageUrl
  has_many :books
  has_many :rented_books
end
