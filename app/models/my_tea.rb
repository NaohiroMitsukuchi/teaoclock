class MyTea < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :tea_type
  # accepts_nested_attributes_for :my_tea_images, allow_destroy: true
  # has_many :my_tea_images
  belongs_to :tea_type
  belongs_to :user
  # has_many :drop_condition_logs, dependant :destroy

  with_options presence: true do
    validates :product_name
    validates :tea_type_id
    validates :user_id
  end
end
