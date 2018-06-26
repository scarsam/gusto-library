class RemoveLocationFromBooks < ActiveRecord::Migration[5.1]
  def change
    remove_column :books, :location
  end
end
