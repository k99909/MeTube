class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.integer :view_count, null: false
      t.string :title, null: false
      t.string :description
      t.string :category
      t.integer :uploader_id

      t.timestamps
    end
    add_index :videos, :uploader_id
  end
end
