class DropCondition < ApplicationRecord
  belongs_to_active_hash :tea_type
  belongs_to :tea_type
  belongs_to :my_tea
  belongs_to :user
end
