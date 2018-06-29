class CreateRentedBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :rented_books do |t|
      t.integer :user_id
      t.integer :book_id

      t.timestamps
    end
  end
end
