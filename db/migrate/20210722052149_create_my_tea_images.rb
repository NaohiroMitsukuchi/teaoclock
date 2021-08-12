class CreateMyTeaImages < ActiveRecord::Migration[6.0]
  def change
    create_table :my_tea_images do |t|
      t.text :url
      t.references :my_tea, foreign_key: true
      t.timestamps
    end
  end
end
