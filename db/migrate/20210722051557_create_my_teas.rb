class CreateMyTeas < ActiveRecord::Migration[6.0]
  def change
    create_table :my_teas do |t|
      t.string :product_name, null: false 
      t.string :campany 
      t.integer :leaf_type_id, null: false
      t.string :origin
      t.string :flavor
      t.references :user, null: false, foreign_key: true 
      t.timestamps
    end
  end
end
