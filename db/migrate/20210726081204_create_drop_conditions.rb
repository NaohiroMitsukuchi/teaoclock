class CreateDropConditions < ActiveRecord::Migration[6.0]
  def change
    create_table :drop_conditions do |t|
      t.integer :time, null: false
      t.integer :quantity, null: false
      t.integer :temperature, null: false
      t.string :note, null: false
      t.integer :evalution
      t.references :my_tea, null: false, foreign_key: true
      t.timestamps
    end
  end
end
