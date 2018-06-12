class ChangeColumnsForUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :uid, :photo
  end
end
