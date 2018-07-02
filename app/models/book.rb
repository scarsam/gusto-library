class Book < ApplicationRecord
  belongs_to :user
  has_one :rented_book
end
