class User < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true

  has_many :books
  has_many :rented_books
end
