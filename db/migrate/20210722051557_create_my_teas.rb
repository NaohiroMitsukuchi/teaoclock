class CreateMyTeas < ActiveRecord::Migration[6.0]
  def change
    create_table :my_teas do |t|
      t.strings :product_name, null: false 
      t.strings :campany 
      t.references :tea_type, null: false, foreign_key: true 
      t.strings :origin
      t.strings :flavor
      t.references :user, null: false, foreign_key: true 
      t.timestamps
    end
  end
end
