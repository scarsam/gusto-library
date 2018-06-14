class AddUserColumns < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :uid, :googleId
    rename_column :users, :image, :imageUrl
  end
end
