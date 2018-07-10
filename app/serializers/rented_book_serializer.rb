class RentedBookSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user, :book
end
