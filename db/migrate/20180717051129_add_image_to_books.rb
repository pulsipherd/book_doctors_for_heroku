class AddImageToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :book_image, :string
  end
end
