class CreateDropConditions < ActiveRecord::Migration[6.0]
  def change
    create_table :drop_conditions do |t|
      t.integer :time, null: false
      t.integer :water_quantity, null: false
      t.float :leaf_quantity, null: false
      t.integer :tea_type_id, null: false
      t.integer :number_of_people, null: false
      t.integer :temperature, null: false
      t.string :note
      t.integer :evalution
      t.references :my_tea, null: false, foreign_key: true
      t.timestamps
    end
  end
end
