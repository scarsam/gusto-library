class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :googleId, :imageUrl
end
