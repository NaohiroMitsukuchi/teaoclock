class DropCondition < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :tea_type
  belongs_to :tea_type
  belongs_to :my_tea

  with_options presence: true do
    validates :time
    validates :water_quantity
    validates :leaf_quantity
    validates :tea_type_id
    validates :number_of_people
    validates :temperature
    validates :my_tea_id
  end

  validates :evaluation, numericality: {greater_than_or_equal_to: 0,less_than_or_equal_to: 5}

  with_options numericality: {greater_than: 0} do
    validates :time
    validates :water_quantity
    validates :leaf_quantity
    validates :number_of_people
    validates :temperature
  end
end

