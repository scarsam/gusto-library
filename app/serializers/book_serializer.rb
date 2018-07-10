class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :thumbnail
  belongs_to :user
  has_one :rented_book
end
