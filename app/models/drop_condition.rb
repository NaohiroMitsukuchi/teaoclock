class DropCondition < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :tea_type
  belongs_to :tea_type
  belongs_to :my_tea

  with_options presence: true do
    validates :time
    validates :tea_type_id
    validates :number_of_people
    validates :temperature
    validates :note
    validates :evalution
    validates :my_tea_id
  end
end

