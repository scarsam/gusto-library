class User < ApplicationRecord
  validates :name, presence: true
  validates :uid, presence: true
  validates :email, presence: true

  has_many :books
end
