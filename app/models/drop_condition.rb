class DropCondition < ApplicationRecord
  belongs_to_active_hash :tea_type
  belongs_to :tea_type
  belongs_to :my_tea
  belongs_to :user

  with_options presence: true do
    validates :product_name
    validates :leaf_type_id
    validates :user_id
  end
end
