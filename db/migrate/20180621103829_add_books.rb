class AddBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :description
      t.string :thumbnail
      t.string :location
      t.integer :user_id
    end
  end
end
